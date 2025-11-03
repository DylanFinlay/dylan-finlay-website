import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold">Dylan Finlay</Link>
        <div className="space-x-4">
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
