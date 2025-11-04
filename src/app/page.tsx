import Link from "next/link";

export default function Home() {
  return (
    <section className="container-custom">
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-6">Hey—I&apos;m Dylan.</h1>
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to my personal website. I&apos;m a Mechatronics Engineering
          student at the University of Waterloo, passionate about software
          development, robotics, photography, and travel.
        </p>
        <p className="text-lg leading-relaxed">
          Explore my blog, projects, gear, and more using the navigation above.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/blog" className="tile-light group block">
          <h2 className="mb-2 text-2xl group-hover:text-primary-600">Blog</h2>
          <p>Thoughts on photography, development, and travel.</p>
        </Link>

        <Link href="/projects" className="tile-light group block">
          <h2 className="mb-2 text-2xl group-hover:text-primary-600">
            Projects
          </h2>
          <p>Showcase of my technical work and experiments.</p>
        </Link>

        <Link href="/gear" className="tile-light group block">
          <h2 className="mb-2 text-2xl group-hover:text-primary-600">Gear</h2>
          <p>Photography and videography equipment I use.</p>
        </Link>
      </div>
    </section>
  );
}
