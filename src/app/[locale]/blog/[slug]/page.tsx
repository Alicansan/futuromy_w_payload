import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
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

    return (
      <div>
        {blog.title} <RichText data={blog.content} />
        {blog.featuredImage && typeof blog.featuredImage !== "number" && blog.featuredImage.url && (
          <Image
            className="h-48 w-full object-cover"
            src={blog.featuredImage.url}
            alt={blog.featuredImage.alt || "Blog blog image"}
            width={400}
            height={192}
          />
        )}
      </div>
    );
  } catch (error) {
    console.error("Blog page rendering error:", error);
    notFound();
  }
};

export default SingleBlogPage;
