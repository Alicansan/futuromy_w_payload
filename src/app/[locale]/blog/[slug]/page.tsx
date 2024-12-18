import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

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

    return <div>{blog.title}</div>;
  } catch (error) {
    console.error("Blog page rendering error:", error);
    notFound();
  }
};

export default SingleBlogPage;
