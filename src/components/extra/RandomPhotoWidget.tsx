"use client";

import AnimatedTile from "@/components/AnimatedTile";
import type { GalleryPhoto } from "@/lib/photography";
import { AnimatePresence, motion } from "framer-motion";
import { Dices, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

type Props = {
  photos: GalleryPhoto[];
};

/**
 * Random-photo selector. Pulls a random photo from the photography gallery
 * on every click (with no immediate repeat) and crossfades to it via
 * framer-motion. The caption links back to the source album.
 *
 * No container/section wrapper here — the Extra orchestrator owns the page
 * layout and spacing so this can drop into a grid cell beside its sibling
 * generators.
 */
export default function RandomPhotoWidget({ photos }: Props) {
  const empty = photos.length === 0;

  // Lazily initialise with a random photo so every page load feels fresh.
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * photos.length),
  );

  const pick = useCallback(() => {
    if (photos.length <= 1) return;
    setIndex((prev) => {
      let next = prev;
      while (next === prev) {
        next = Math.floor(Math.random() * photos.length);
      }
      return next;
    });
  }, [photos.length]);

  const photo = useMemo(() => photos[index], [photos, index]);

  return (
    <AnimatedTile className="tile-light-blue" animation="fade-left">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold border-b-4 border-rsf-orange inline-block pb-1">
          Random Photo
        </h2>
        <button
          onClick={pick}
          disabled={empty}
          className="extra-action-btn text-sm py-2 px-3 inline-flex items-center gap-2"
        >
          <Dices size={16} />
          <span className="hidden sm:inline">Surprise me</span>
        </button>
      </div>

      {empty ? (
        <div className="w-full h-48 flex items-center justify-center text-slate-500 bg-white/40 rounded-lg">
          No photos available yet.
        </div>
      ) : (
        <figure className="relative w-full aspect-[3/2] overflow-hidden rounded-lg bg-slate-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={photo.url}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={photo.displayUrl}
                alt={`Photo from ${photo.albumTitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>

          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <Link
              href={`/photography/${photo.albumSlug}`}
              className="inline-flex items-center gap-1.5 text-white text-sm font-medium hover:underline"
            >
              {photo.albumTitle}
              <ExternalLink size={14} />
            </Link>
          </figcaption>
        </figure>
      )}
    </AnimatedTile>
  );
}
