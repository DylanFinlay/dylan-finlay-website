import PhotoGrid from "@/components/photography/PhotoGrid";
import { getAlbumPhotos, getAlbums, humanizeSlug } from "@/lib/photography";
import Link from "next/link";
import { notFound } from "next/navigation";

// Force dynamic rendering so new folders added during dev are immediately available
export const dynamic = "force-dynamic";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const albums = await getAlbums();
  return albums.map((a) => ({ slug: a.slug }));
}

export default async function AlbumPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const photos = await getAlbumPhotos(slug);
  if (!photos || photos.length === 0) {
    notFound();
  }

  const title = humanizeSlug(slug);

  return (
    <section className="container-custom">
      <div className="mb-6">
        <div className="mb-4">
          <Link
            href="/photography"
            className="inline-flex items-center text-slate-700 hover:text-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0L3.586 10l4.707-4.707a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </div>

        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>

      <PhotoGrid photos={photos} />
    </section>
  );
}
