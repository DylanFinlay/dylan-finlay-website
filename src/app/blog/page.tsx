import Card from "@/components/Card";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts("blog");

  return (
    <section className="container-custom">
      <div className="mb-12">
        <h1 className="mb-3">Blog</h1>
        <p className="text-lg text-slate-600">
          Thoughts on photography, development, and travel.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post: any) => (
          <Card
            key={post.slug}
            title={post.title}
            summary={post.summary}
            href={`/blog/${post.slug}`}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
}
