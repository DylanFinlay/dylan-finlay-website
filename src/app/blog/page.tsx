import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/mdx";

interface Post {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  cover?: string;
}

export default function BlogPage() {
  const posts = getAllPosts("blog") as Post[];

  return (
    <section className="container-custom">
      <div className="mb-12">
        <h1 className="mb-3">Blogs... I guess</h1>
        <p className="text-lg">
          Thoughts on just about anything that I choose.
        </p>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            summary={post.summary}
            href={`/blog/${post.slug}`}
            date={post.date}
            cover={post.cover}
          />
        ))}
      </div>
    </section>
  );
}
