import configPromise from "@payload-config";
import { getPayload } from "payload";

interface SingleBlogPageProps {
  params: {
    slug: string;
  };
}

const SingleBlogPage = async ({ params }: SingleBlogPageProps) => {
  const payload = await getPayload({ config: configPromise });

  const pageSlug = params.slug;
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
};

export default SingleBlogPage;
