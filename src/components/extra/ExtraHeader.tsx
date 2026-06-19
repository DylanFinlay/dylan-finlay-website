/**
 * Page header for /extra. Matches the Photography and Blog header convention:
 * a plain h1 + subtitle, no tile wrapper.
 *
 * Sits in a hero grid cell beside the Spotify widget on laptop, so it owns
 * no bottom margin — the grid gap handles spacing.
 */
export default function ExtraHeader() {
  return (
    <div>
      <h1 className="mb-3 text-4xl md:text-5xl font-semibold">Extra</h1>
      <p className="text-lg text-slate-600">
        The grab-bag page — interactive widgets, favourite media, and little
        experiments. Whatever I feel like building lives here.
      </p>
    </div>
  );
}
