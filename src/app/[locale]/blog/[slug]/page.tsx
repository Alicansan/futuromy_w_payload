import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import styles from "./style.module.css";

interface SingleBlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  try {
    const resolvedParams = await params;
    const payload = await getPayload({ config: configPromise });

    const pageSlug = resolvedParams.slug;
    const blogPosts = await payload.find({
      collection: "blog-posts",
      depth: 1,
      where: {
        slug: {
          equals: pageSlug,
        },
      },
    });

    const blog = blogPosts?.docs.length > 0 ? blogPosts.docs[0] : null;

    if (!blog) {
      return <div>Blog post not found</div>;
    }

    // Ensure content is in the correct format
    const lexicalContent: SerializedEditorState =
      typeof blog.content === "string" ? JSON.parse(blog.content) : blog.content;
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
