import { getExtraGame, getExtraGames } from "@/lib/extra";
import Link from "next/link";
import { notFound } from "next/navigation";

// Pre-render game pages at build time; unknown slugs 404 (mirrors the
// /photography/[slug] pattern).
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getExtraGames().map((g) => ({ slug: g.slug }));
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getExtraGame(slug);

  if (!game) {
    notFound();
  }

  // Dynamically import and render the game component.
  const { default: GameComponent } = await game.component!();

  return (
    <section className="container-custom">
      <div className="mb-6">
        <Link
          href="/extra"
          className="inline-flex items-center text-slate-700 hover:text-slate-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 mr-1"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Extra
        </Link>
        <h1 className="text-3xl md:text-4xl font-semibold mt-4">
          {game.title}
        </h1>
      </div>

      <GameComponent />
    </section>
  );
}
