import AnimatedTile from "@/components/AnimatedTile";
import { getExtraGames } from "@/lib/extra";
import { ArrowRight, Gamepad2 } from "lucide-react";
import Link from "next/link";

/**
 * Grid of game/experiment tiles that link to /extra/{slug}. Built on the
 * same clickable-card treatment as the homepage nav cards. New games are
 * surfaced just by adding an entry to the GAMES registry in lib/extra.ts.
 *
 * No container/section wrapper — the Extra orchestrator owns layout/spacing.
 */
export default function GamesSection() {
  const games = getExtraGames();

  if (games.length === 0) return null;

  return (
    <AnimatedTile className="tile-light-blue">
      <h2 className="mb-6 border-b-4 border-rsf-orange inline-block">
        Games &amp; Experiments (NON-FUNCTIONAL PLACEHOLDERS RN)
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game, index) => (
          <AnimatedTile
            key={game.slug}
            className="tile-light-blue-clickable group"
            delay={index * 50}
            animation="fade-up"
          >
            <Link href={`/extra/${game.slug}`} className="block">
              <div className="flex items-start gap-3 mb-2">
                <Gamepad2 size={22} className="text-ob-2 mt-0.5 shrink-0" />
                <h3 className="text-base font-semibold group-hover:text-blue-600 transition-colors">
                  {game.title}
                </h3>
              </div>
              <p className="text-slate-700 text-sm mb-3">{game.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-ob-2 group-hover:gap-2 transition-all">
                Open
                <ArrowRight size={14} />
              </span>
            </Link>
          </AnimatedTile>
        ))}
      </div>
    </AnimatedTile>
  );
}
