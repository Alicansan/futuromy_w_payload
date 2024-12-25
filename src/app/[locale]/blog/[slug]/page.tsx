import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import styles from "./style.module.css";

interface SingleBlogPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  try {
    const payload = await getPayload({ config: configPromise });

    const blogPosts = await payload.find({
      collection: "blog-posts",
      depth: 1,
      where: {
        slug: {
          equals: params.slug,
        },
      },
    });

    const blog = blogPosts?.docs.length > 0 ? blogPosts.docs[0] : null;

    if (!blog) {
      return <div>Blog post not found</div>;
    }

    const localizedContent =
      blog.i18n?.find((content) => content.language === params.locale) || blog.i18n?.[0];

    // Ensure content is in the correct format
    const lexicalContent: SerializedEditorState =
      typeof localizedContent?.content === "string"
        ? JSON.parse(localizedContent?.content)
        : localizedContent?.content;

    return (
      <div className={styles.lexicalEditor}>
        <RichText data={lexicalContent} />
      </div>
    );
  } catch (error) {
    console.error("Blog page rendering error:", error);
    notFound();
  }
};

export default SingleBlogPage;
