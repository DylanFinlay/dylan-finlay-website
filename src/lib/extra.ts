import type { ComponentType } from "react";

/**
 * A game or interactive experiment surfaced on the Extra page.
 *
 * - `component` is optional: when present, `/extra/{slug}` dynamically
 *   imports and renders it. When absent, the route shows a tasteful
 *   "coming soon" placeholder. This lets you register a game card before
 *   the game itself is built.
 *
 * To add a real game:
 *   1. Create the component under src/components/extra/games/<Name>.tsx
 *   2. Add an entry below with `component: () => import(...)` as its default.
 * The dynamic route is already wired — no routing changes needed.
 */
export interface ExtraGame {
  slug: string;
  title: string;
  description: string;
  /** Optional dynamic import of the game component. */
  component?: () => Promise<{ default: ComponentType }>;
}

export const GAMES: ExtraGame[] = [
  {
    slug: "color-quiz",
    title: "Color Quiz",
    description:
      "A playful color-matching game that tests how well you know your hues.",
  },
  {
    slug: "pixel-painter",
    title: "Pixel Painter",
    description: "Doodle tiny pixel-art masterpieces right in the browser.",
  },
];

export function getExtraGames(): ExtraGame[] {
  return GAMES;
}

export function getExtraGame(slug: string): ExtraGame | undefined {
  return GAMES.find((g) => g.slug === slug);
}
