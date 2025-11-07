import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center border-b border-ob-3 justify-between">
          {/* Logo/Name with Sun Icon */}
          <div className="flex items-center gap-3">
            {/* Pulsing Sun - only on md+ screens */}
            <div className="hidden md:block pulsing-sun-icon"></div>
            <Link href="/" className="nav-home-link">
              Dylan Finlay
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/photography" className="nav-link">
              Photography
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/extra" className="nav-link">
              Extra
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
