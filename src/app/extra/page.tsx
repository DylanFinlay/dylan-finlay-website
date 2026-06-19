import BibleVerseWidget from "@/components/extra/BibleVerseWidget";
import ExtraHeader from "@/components/extra/ExtraHeader";
import FavouritesSection from "@/components/extra/FavouritesSection";
import GamesSection from "@/components/extra/GamesSection";
import RandomPhotoWidget from "@/components/extra/RandomPhotoWidget";
import SpotifyWidget from "@/components/extra/SpotifyWidget";
import { getAllPhotos } from "@/lib/photography";

/**
 * The Extra hub page.
 *
 * Owns the page layout and vertical rhythm so the section components stay
 * pure (just their tile + content).
 *
 * Colour flow is intentional, mirroring the Portfolio page's temperature
 * contrast (cool tile ↔ warm underline, and vice versa) so the sections
 * feel distinct as you scroll:
 *
 *   blue → sand → sand → orange → blue
 *   water  beach   beach    sun    water
 *
 * Spotify leads in a hero row beside the header (mirroring the homepage's
 * text + visual composition) so "now playing" is the first thing seen.
 */
export default async function ExtraPage() {
  const photos = await getAllPhotos();

  return (
    <section className="container-custom">
      {/* Hero row — header + now-playing, side by side on laptop */}
      <div className="grid gap-5 md:grid-cols-[1fr_minmax(0,24rem)] items-start mb-5">
        <ExtraHeader />
        <SpotifyWidget />
      </div>

      {/* Two interactive generators, paired symmetrically (warm sand) */}
      <div className="grid gap-5 md:grid-cols-2 mb-5">
        <RandomPhotoWidget photos={photos} />
        <BibleVerseWidget />
      </div>

      {/* Favourites — the warm peak (sun) */}
      <div className="mb-5">
        <FavouritesSection />
      </div>

      {/* Games — cool water bookend */}
      <GamesSection />
    </section>
  );
}
