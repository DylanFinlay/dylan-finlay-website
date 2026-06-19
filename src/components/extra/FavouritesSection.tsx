"use client";

import AnimatedTile from "@/components/AnimatedTile";
import { ALBUMS, VIDEOS } from "@/content/extra/favourites";
import { Music, Video } from "lucide-react";
import { useState } from "react";

/**
 * Favourite albums and videos. Built as image-cover tiles with a hover
 * overlay panel — the same layered pattern used by the Portfolio Projects
 * grid — so the two pages feel cohesive. Each tile links out externally.
 *
 * Images render as real <img> elements with an onError fallback rather than
 * CSS background-image: broken/async-loading backgrounds can shift the grid
 * layout and visibly misalign adjacent tiles, whereas a real <img> with a
 * stable fallback never does.
 *
 * No container/section wrapper — the Extra orchestrator owns layout/spacing.
 */
export default function FavouritesSection() {
  return (
    <AnimatedTile className="tile-light-orange">
      <h2 className="mb-6 border-b-4 border-ob-4 inline-block">
        Favourites
      </h2>

      {/* Albums */}
      <div className="mb-8">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-ob-2">
          <Music size={18} /> Albums
        </h3>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {ALBUMS.map((album, index) => (
            <AnimatedTile
              key={album.title}
              className="tile-sand group overflow-hidden cursor-pointer relative p-0"
              delay={index * 50}
              animation="fade-up"
            >
              <a
                href={album.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FavImage
                  src={album.cover}
                  alt={`${album.title} by ${album.artist}`}
                  aspect="aspect-square"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-sm">{album.title}</h4>
                  <p className="text-xs text-slate-600">{album.artist}</p>
                  {album.note && (
                    <p className="text-xs text-slate-500 mt-1.5 italic">
                      {album.note}
                    </p>
                  )}
                </div>
              </a>
            </AnimatedTile>
          ))}
        </div>
      </div>

      {/* Videos */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4 text-ob-2">
          <Video size={18} /> Videos
        </h3>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video, index) => (
            <AnimatedTile
              key={video.title}
              className="tile-sand group overflow-hidden cursor-pointer relative p-0"
              delay={index * 50}
              animation="fade-up"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FavImage
                  src={video.thumb}
                  alt={`${video.title} by ${video.channel}`}
                  aspect="aspect-video"
                />
                <div className="p-3">
                  <h4 className="font-semibold text-sm">{video.title}</h4>
                  <p className="text-xs text-slate-600">{video.channel}</p>
                  {video.note && (
                    <p className="text-xs text-slate-500 mt-1.5 italic">
                      {video.note}
                    </p>
                  )}
                </div>
              </a>
            </AnimatedTile>
          ))}
        </div>
      </div>
    </AnimatedTile>
  );
}

/**
 * Image tile that never breaks layout: renders an <img> inside a fixed
 * aspect-ratio box and swaps to a neutral placeholder if the source 404s
 * (e.g. a YouTube maxres thumbnail that doesn't exist). Using a real <img>
 * (not background-image) means failed loads are caught deterministically
 * rather than shifting the grid around.
 */
function FavImage({
  src,
  alt,
  aspect,
}: {
  src: string;
  alt: string;
  aspect: "aspect-square" | "aspect-video";
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`w-full ${aspect} bg-slate-200 overflow-hidden`}>
      {failed ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
          <Video size={28} />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
    </div>
  );
}
