import { getAlbums } from "@/lib/photography";
import Link from "next/link";

export default async function PhotographyPage() {
  const albums = await getAlbums();

  return (
    <section className="container-custom">
      <div className="mb-12">
        <h1 className="mb-3 text-4xl md:text-5xl font-semibold">Photography</h1>
        <p className="text-lg text-slate-600">
          Collections from my travels! These are unfiltered and unedited
          collections of photos from my journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((a) => (
          <Link
            key={a.slug}
            href={`/photography/${a.slug}`}
            className="tile-sand block rounded-xl overflow-hidden"
          >
            <div className="w-full h-48 bg-slate-100 overflow-hidden">
              {a.coverUrl ? (
                <img
                  src={a.coverUrl}
                  alt={`${a.title} cover`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  No cover
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{a.count} photos</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
