"use client";

import AnimatedTile from "@/components/AnimatedTile";
import { VERSES } from "@/content/extra/verses";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useCallback, useState } from "react";

/**
 * Random Bible verse generator. Picks a verse from the curated local pool
 * (content/extra/verses.ts) on each click, with no immediate repeat. Mirrors
 * the RandomPhotoWidget styling (tile-dark-yellow, fade-right) so the two
 * generators read as a symmetric pair.
 *
 * On first mount a random verse is chosen so every page load feels fresh.
 *
 * No container/section wrapper — the Extra orchestrator owns layout/spacing.
 */
export default function BibleVerseWidget() {
  // Lazily initialise with a random verse so every page load feels fresh.
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * VERSES.length),
  );

  const pick = useCallback(() => {
    if (VERSES.length <= 1) return;
    setIndex((prev) => {
      let next = prev;
      while (next === prev) {
        next = Math.floor(Math.random() * VERSES.length);
      }
      return next;
    });
  }, []);

  const verse = VERSES[index];

  return (
    <AnimatedTile className="tile-light-blue h-full" animation="fade-right">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold border-b-4 border-rsf-orange inline-block pb-1">
          Random Verse
        </h2>
        <button
          onClick={pick}
          className="extra-action-btn text-sm py-2 px-3 inline-flex items-center gap-2"
        >
          <RefreshCw size={16} />
          <span className="hidden sm:inline">Another</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.blockquote
          key={verse.reference}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <p className="text-base md:text-lg italic text-ob-1 leading-relaxed">
            &ldquo;{verse.text}&rdquo;
          </p>
          <footer className="mt-3 text-sm font-semibold text-ob-2">
            {verse.reference}{" "}
            <span className="font-normal text-slate-600">
              ({verse.translation})
            </span>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
    </AnimatedTile>
  );
}
