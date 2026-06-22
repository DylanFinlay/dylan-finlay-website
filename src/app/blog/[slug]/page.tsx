import { getAllPosts, getContentPath } from "@/lib/mdx";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  cover?: string;
}

export async function generateStaticParams() {
  const posts = getAllPosts("blog") as Post[];
  return posts.map((post) => ({
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
      <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <h1 className="mb-4">{data.title}</h1>
          {data.date && (
            <p className="text-base font-medium text-slate-500">{data.date}</p>
          )}
        </div>
        {data.cover && (
          <div className="shrink-0 sm:w-48 lg:w-56">
            <Image
              src={data.cover}
              alt={`Cover for ${data.title}`}
              width={400}
              height={300}
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>
        )}
      </header>
      <div className="prose prose-lg mx-auto">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
