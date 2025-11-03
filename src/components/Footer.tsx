export default function Footer() {
  return (
    <footer className="w-full border-t mt-12">
      <div className="max-w-6xl mx-auto p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Dylan Finlay — Built with Next.js
      </div>
    </footer>
  );
}
