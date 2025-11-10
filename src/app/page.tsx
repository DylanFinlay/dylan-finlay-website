import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container-custom">
      {/* Under Construction Notice */}
      <div className="mb-8 p-4 bg-rsf-yellow/20 border-l-4 border-rsf-orange rounded-lg">
        <p className="text-sm font-medium text-slate-700">
          🚧 <strong>Note:</strong> This website is a new project that is
          currently still under construction. My trustee pal, CoPilot, and I are
          working hard on this new development. I felt that my old site was a
          little bit too boring for me. Stay tuned for updates!
        </p>
        <p className="text-sm font-medium text-slate-700 mt-2">
          My old portfolio can still be accessed at{" "}
          <Link
            href="/legacyportfolio"
            className="text-rsf-orange hover:text-ob-1 underline"
          >
            dylanfinlay.com/legacyportfolio
          </Link>
          .
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        {/* Spinning Logo */}
        <div className="flex-shrink-0">
          <div className="animate-spin-slow">
            <Image
              src="/Blue_DF_Trans.png"
              alt="Dylan Finlay Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="flex-1">
          <h1 className="mb-6">Hey—I&apos;m Dylan.</h1>
          <p className="mb-4 text-lg leading-relaxed">
            Welcome to my personal website. I&apos;m a Mechatronics Engineering
            student at the University of Waterloo, passionate about software
            development, robotics, photography, and travel.
          </p>
          <p className="text-lg leading-relaxed">
            Explore my work, thoughts, and creative projects below.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/portfolio"
          className="tile-light-blue-clickable group block"
        >
          <h2 className="mb-2 text-2xl group-hover:text-blue-600">Portfolio</h2>
          <p>My professional experience, projects, and skills.</p>
        </Link>

        <Link
          href="/photography"
          className="tile-light-blue-clickable group block"
        >
          <h2 className="mb-2 text-2xl group-hover:text-blue-600">
            Photography
          </h2>
          <p>Photo gallery, gear reviews, and visual stories.</p>
        </Link>

        <Link href="/blog" className="tile-light-blue-clickable group block">
          <h2 className="mb-2 text-2xl group-hover:text-blue-600">Blog</h2>
          <p>Thoughts on photography, development, and travel.</p>
        </Link>

        <Link href="/extra" className="tile-light-blue-clickable group block">
          <h2 className="mb-2 text-2xl group-hover:text-blue-600">Extra</h2>
          <p>Interactive projects, notes, and random explorations.</p>
        </Link>
      </div>
    </section>
  );
}
