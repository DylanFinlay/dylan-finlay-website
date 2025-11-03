import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="mb-2 text-6xl font-bold text-slate-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-slate-700">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white! no-underline transition-colors hover:bg-blue-700 hover:text-white!"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
