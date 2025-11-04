import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center border-b border-ob-3 justify-between">
          {/* Logo/Name */}
          <Link href="/" className="nav-home-link">
            Dylan Finlay
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/gear" className="nav-link">
              Gear
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
