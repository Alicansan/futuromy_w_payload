import { getPayload } from "payload";
import { cache } from "react";
//import { RichText } from "@payloadcms/richtext-lexical/react";

import config from "@payload-config";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const fetchBlogPosts = cache(async () => {
  try {
    const payload = await getPayload({ config });

    const blogPosts = await payload.find({
      collection: "blog-posts",
      depth: 1,
    });

    if (!blogPosts || !blogPosts.docs) {
      console.error("No blog posts found or invalid response");
      return { docs: [] };
    }

    return blogPosts;
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
});

export default async function Blog() {
  try {
    const blog = await fetchBlogPosts();

    if (!blog || blog.docs.length === 0) {
      return (
        <div className="container mx-auto p-4">
          <p>No blog posts available at the moment.</p>
          <p>Error details have been logged for investigation.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto grid grid-cols-1 gap-12 py-24 md:grid-cols-2">
        {blog.docs.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="flex max-w-3xl gap-2 bg-primary-foreground p-2 shadow-xl">
              {post.featuredImage &&
                typeof post.featuredImage !== "number" &&
                post.featuredImage.url && (
                  <Image
                    className="object-contain p-2"
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || "Blog post image"}
                    width={100}
                    height={100}
                  />
                )}
              <div className="flex w-full flex-col justify-between">
                <div className="flex flex-col">
                  <h2 className="py-2 text-2xl font-semibold text-destructive">{post.title}</h2>
                  <p>{post.context}</p>
                </div>
                {/* <RichText data={post.content} /> */}
                <div className="flex w-full flex-col">
                  <div className="flex w-full justify-between py-2">
                    <div className="flex w-full justify-start gap-3">
                      {post.tags?.map((item, index) => (
                        <span
                          key={index}
                          className="inline bg-muted-foreground p-[1px] text-background"
                        >
                          {item.tag}
                        </span>
                      ))}
                    </div>

                    {post.author && typeof post.author !== "number" && post.author.displayName && (
                      <p>{post.author.displayName}</p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <p>
                      {new Date(post.publishDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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

export const revalidate = 3600; // Revalidate every hour
