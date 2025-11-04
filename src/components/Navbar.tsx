import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900 transition-colors hover:text-primary-600"
          >
            Dylan Finlay
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            <Link
              href="/portfolio"
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Portfolio
            </Link>
            <Link
              href="/projects"
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Blog
            </Link>
            <Link
              href="/gear"
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              Gear
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
