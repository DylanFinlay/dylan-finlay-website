import { getAllPosts, getContentPath } from "@/lib/mdx";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = getContentPath("blog", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  return (
    <article className="container-custom">
      <header className="mb-12 max-w-3xl">
        <h1 className="mb-4">{data.title}</h1>
        {data.date && (
          <p className="text-base font-medium text-slate-500">{data.date}</p>
        )}
      </header>
      <div className="prose prose-lg mx-auto">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
