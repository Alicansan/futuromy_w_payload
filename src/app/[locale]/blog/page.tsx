import { getPayload } from "payload";

import config from "@payload-config";
import Image from "next/image";
import Link from "next/link";

const fetchBlogPosts = async (locale: string) => {
  try {
    const payload = await getPayload({ config });

    const blogPosts = await payload.find({
      collection: "blog-posts",
    });

    if (!blogPosts || !blogPosts.docs) {
      console.error("No blog posts found or invalid response");
      return { docs: [] };
    }

    const localizedBlogPosts = blogPosts.docs.map((post) => {
      if (!post.i18n || post.i18n.length === 0) {
        return {
          ...post,
          localizedTitle: post.title || "Untitled",
          localizedContext: "No context available",
        };
      }
      const localizedPost = post.i18n.find((item) => item.language === locale) || post.i18n[0];

      return {
        ...post,
        localizedTitle: localizedPost?.langtitle || post.title || "Untitled",
        localizedContext: localizedPost?.context || "No context available",
      };
    });

    return { ...blogPosts, docs: localizedBlogPosts };
  } catch (error) {
    console.error("Critical error in fetchBlogPosts:", error);

    // Log more detailed error information
    if (error instanceof Error) {
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }

    return { docs: [] };
  }
};

export default async function Blog({ params }: { params: { locale: string } }) {
  try {
    const { locale } = await params;
    const blog = await fetchBlogPosts(locale);

    if (!blog || blog.docs.length === 0) {
      return (
        <div className="container mx-auto p-4">
          <p>No blog posts available at the moment.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto grid grid-cols-1 items-center gap-6 py-24 md:grid-cols-2 lg:grid-cols-3">
        {blog.docs.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-lg bg-white shadow-md">
            <Link href={`/${locale}/blog/${post.slug}`} className="flex flex-col justify-between">
              <div className="flex h-[500px] flex-col justify-between p-2">
                <div className="">
                  {post.featuredImage &&
                    typeof post.featuredImage !== "number" &&
                    post.featuredImage.url && (
                      <Image
                        className="h-48 w-full object-cover"
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || "Blog post image"}
                        width={400}
                        height={192}
                      />
                    )}

                  <h2 className="px-px pt-2 text-xl font-bold text-foreground">
                    {post.localizedTitle}
                  </h2>
                  <p className="pt- text-muted-foreground">{post.localizedContext}</p>

                  {/*  */}
                </div>
                <div className="">
                  <div className="flex flex-wrap gap-2 py-2">
                    {post.tags?.map((item, index) => (
                      <span
                        key={index}
                        className="inline-block rounded bg-muted-foreground px-2 py-1 text-sm text-background"
                      >
                        {item.tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400">
                    {new Date(post.publishDate).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Unhandled error in Blog component:", error);
    return (
      <div className="container mx-auto p-4 text-red-500">
        <p>An unexpected error occurred while loading blog posts.</p>
        <p>Our team has been notified. Please try again later.</p>
      </div>
    );
  }
}
