import { CollectionConfig } from "payload";
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import slugify from "slugify";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true, // Public read access
  },
  hooks: {
    beforeValidate: [
      (args) => {
        const { data } = args;
        if (data && data.title) {
          // Generate slug from title if not already provided
          data.slug =
            data.slug ||
            slugify(data.title, {
              lower: true, // convert to lowercase
              strict: true, // strip special characters except replacement
              trim: true, // trim leading and trailing replacement chars
            });
        }
        return data;
      },
    ],
  },
  fields: [
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      admin: {
        position: "sidebar",
        description: "Automatically generated from title, but can be customized",
      },
    },

    {
      name: "title",
      unique: true,
      type: "text",
      required: true,
    },
    {
      name: "context",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ];
        },
      }),
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "publishDate",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "default",
          displayFormat: "DD/MM/YYYY",
        },
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
        },
      ],
    },
  ],
};
