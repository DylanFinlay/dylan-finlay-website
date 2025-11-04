export default function Loading() {
  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
        <p className="text-slate-600">Loading...</p>
      </div>
    </div>
  );
}
