"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          Something went wrong
        </h1>
        <p className="mb-8 text-lg text-neutral-600">
          An error occurred while loading this page.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary no-underline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
