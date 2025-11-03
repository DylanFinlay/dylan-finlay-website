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
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          Something went wrong
        </h1>
        <p className="mb-8 text-lg text-slate-600">
          An error occurred while loading this page.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-lg bg-slate-100 px-6 py-3 font-medium text-slate-900! no-underline transition-colors hover:bg-slate-200 hover:text-slate-900!"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
