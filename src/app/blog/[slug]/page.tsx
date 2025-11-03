import { getPostBySlug, getAllPosts, getContentPath } from "@/lib/mdx";
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
    <article className="max-w-4xl mx-auto px-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
        {data.date && <p className="text-gray-600">{data.date}</p>}
      </header>
      <div className="prose">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
