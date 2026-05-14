"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type PhotoLike =
  | string
  | {
      filename?: string;
      url: string;
      variants?: { [width: string]: { jpg?: string; webp?: string } };
      blurDataURL?: string;
    };

type Props = {
  photos: PhotoLike[];
};

export default function PhotoGrid({ photos }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

  const prev = useCallback(() => {
    setOpenIndex((idx) =>
      idx === null ? null : (idx - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const next = useCallback(() => {
    setOpenIndex((idx) => (idx === null ? null : (idx + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (openIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, prev, next]);

  // track viewport + DPR to choose an appropriate variant for lightbox
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const [dpr, setDpr] = useState<number>(1);

  useEffect(() => {
    function update() {
      setViewportWidth(window.innerWidth || 0);
      setDpr(window.devicePixelRatio || 1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getThumb = (p: PhotoLike) => {
    if (typeof p === "string") return p;
    if (p.variants) {
      if (p.variants["320"]?.webp) return p.variants["320"].webp;
      if (p.variants["320"]?.jpg) return p.variants["320"].jpg;
      // fallback to smallest variant
      const widths = Object.keys(p.variants)
        .map((w) => Number(w))
        .sort((a, b) => a - b);
      if (widths.length > 0) {
        const w = String(widths[0]);
        return p.variants[w].webp || p.variants[w].jpg || p.url;
      }
    }
    return p.url;
  };

  const chooseVariantForTarget = (
    p: Exclude<PhotoLike, string>,
    target: number,
  ) => {
    if (!p.variants) return null;
    const widths = Object.keys(p.variants)
      .map((w) => Number(w))
      .filter(Boolean)
      .sort((a, b) => a - b);
    if (widths.length === 0) return null;
    // find first width >= target, otherwise use largest available
    const chosenWidth =
      widths.find((w) => w >= target) ?? widths[widths.length - 1];
    const chosen = p.variants[String(chosenWidth)];
    // prefer webp when available
    return chosen?.webp || chosen?.jpg || null;
  };

  const getLightboxSrc = (p: PhotoLike) => {
    if (typeof p === "string") return p;
    const target = Math.min(
      2048,
      Math.ceil(
        (viewportWidth || window.innerWidth) *
          (dpr || window.devicePixelRatio || 1),
      ),
    );
    const v = chooseVariantForTarget(p, target);
    if (v) return v;
    // fallback: prefer largest variant if present
    if (p.variants) {
      const widths = Object.keys(p.variants)
        .map((w) => Number(w))
        .filter(Boolean)
        .sort((a, b) => a - b);
      if (widths.length > 0) {
        const chosen = p.variants[String(widths[widths.length - 1])];
        return chosen?.webp || chosen?.jpg || p.url;
      }
    }
    return p.url;
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {photos.map((p, i) => {
          const key = typeof p === "string" ? p : p.filename || p.url;
          const thumb = getThumb(p);
          return (
            <button
              key={key}
              onClick={() => open(i)}
              className="block w-full h-40 overflow-hidden rounded-md"
              aria-label={`Open photo ${i + 1}`}
            >
              <div className="relative w-full h-40">
                {typeof p === "string" ? (
                  // fallback
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumb}
                    alt={`Photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={thumb}
                    alt={`Photo ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                    placeholder={p.blurDataURL ? "blur" : undefined}
                    blurDataURL={p.blurDataURL}
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white bg-slate-800/70 rounded-full p-3 text-2xl shadow-lg z-[60] transition-colors active:bg-slate-700/90 active:scale-95"
            aria-label="Close"
          >
            ×
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white bg-slate-800/70 rounded-full p-3 text-3xl shadow-lg z-[60] transition-colors active:bg-slate-700/90 active:scale-95"
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="relative w-[90vw] h-[90vh] z-40">
            {typeof photos[openIndex] === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getLightboxSrc(photos[openIndex])}
                alt={`Photo ${openIndex + 1}`}
                className="w-auto max-w-full h-auto max-h-[90vh] object-contain rounded-md"
              />
            ) : (
              <Image
                src={getLightboxSrc(photos[openIndex])}
                alt={`Photo ${openIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
                placeholder={
                  typeof photos[openIndex] === "object" &&
                  photos[openIndex].blurDataURL
                    ? "blur"
                    : undefined
                }
                blurDataURL={
                  typeof photos[openIndex] === "object"
                    ? photos[openIndex].blurDataURL
                    : undefined
                }
              />
            )}
          </div>

          <button
            onClick={next}
            className="absolute right-6 text-white bg-slate-800/70 rounded-full p-3 text-3xl shadow-lg z-[60] transition-colors active:bg-slate-700/90 active:scale-95"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
