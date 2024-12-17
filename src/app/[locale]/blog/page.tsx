import { getPayload } from "payload";
//import { RichText } from "@payloadcms/richtext-lexical/react";

import config from "@payload-config";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default async function Blog() {
  const payload = await getPayload({ config });

  const blog = await payload.find({
    collection: "blog-posts",
    depth: 1,
  });
  console.log(blog.docs);

  if (!blog || blog.docs.length === 0) return <div>No blog posts</div>;
  return (
    <Link href={`/blog/${blog.docs[0].slug}`}>
      <div className="container mx-auto grid grid-cols-2 gap-12 py-24">
        {blog.docs.map((post) => (
          <div key={post.id} className="flex max-w-3xl gap-2 bg-primary-foreground p-2 shadow-xl">
            {post.featuredImage &&
              typeof post.featuredImage !== "number" &&
              post.featuredImage.url && (
                <Image
                  className="object-contain p-2"
                  src={post.featuredImage.url}
                  alt={post.title || "Blog post image"}
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
        ))}
      </div>
    </Link>
  );
}
