import { getAllPosts } from '@/lib/mdx';
import Card from '@/components/Card';

export default function BlogPage() {
  const posts = getAllPosts('blog');

  return (
    <section className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
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
