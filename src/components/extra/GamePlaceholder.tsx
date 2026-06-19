import { Construction } from "lucide-react";

/**
 * Shown for registered games that don't yet have a `component` wired up.
 * Renders something intentional rather than a 404.
 */
export default function GamePlaceholder({ title }: { title: string }) {
  return (
    <div className="tile-light-blue text-center py-16">
      <Construction size={48} className="mx-auto mb-4 text-ob-2" />
      <h1 className="mb-3">{title}</h1>
      <p className="text-xl text-slate-600">
        This one&rsquo;s still in the workshop — check back soon!
      </p>
    </div>
  );
}
