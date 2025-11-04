export default function Loading() {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 border-t-primary-600"></div>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
  );
}
