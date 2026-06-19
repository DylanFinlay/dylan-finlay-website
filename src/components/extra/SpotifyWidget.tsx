"use client";

import AnimatedTile from "@/components/AnimatedTile";
import { Music2 } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * "Now playing" widget. Fetches the (currently stubbed) Spotify API route
 * and renders a now-playing / last-played card.
 *
 * The route at /api/spotify/now-playing returns a fixed contract today; wire
 * up real Spotify auth there and this component needs no changes. See the
 * route file for the integration steps.
 *
 * No container/section wrapper — the Extra orchestrator owns layout/spacing.
 */
type NowPlaying = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  trackUrl: string;
};

export default function SpotifyWidget() {
  const [data, setData] = useState<NowPlaying | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchData = () => {
      fetch("/api/spotify/now-playing")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to load");
          return res.json();
        })
        .then((d: NowPlaying) => {
          if (!cancelled) setData(d);
        })
        .catch(() => {
          if (!cancelled) setError(true);
        });
    };

    fetchData();
    const interval = setInterval(fetchData, 30_000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatedTile className="tile-sand h-full">
      <h2 className="mb-4 border-b-4 border-ob-3 inline-block">
        Currently Listening
      </h2>

      {error ? (
        <p className="text-slate-600">
          Couldn&rsquo;t load what I&rsquo;m listening to right now.
        </p>
      ) : !data ? (
        <div className="flex items-center gap-4 animate-pulse">
          <div className="w-20 h-20 rounded-md bg-slate-200" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-200 rounded w-2/3" />
            <div className="h-3 bg-slate-200 rounded w-1/3" />
          </div>
        </div>
      ) : (
        <a
          href={data.trackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group"
        >
          <img
            src={data.albumArt}
            alt={data.album}
            className={`w-20 h-20 rounded-md shadow-md object-cover ${
              data.isPlaying ? "animate-pulse-slow" : ""
            }`}
          />
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
              <Music2 size={16} className="text-ob-2" />
              <span className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
                {data.isPlaying ? "Now playing" : "Last played"}
              </span>
            </div>
            <p className="text-base font-semibold group-hover:text-blue-600 transition-colors">
              {data.title}
            </p>
            <p className="text-slate-700">{data.artist}</p>
            {data.album !== "—" && (
              <p className="text-sm text-slate-500">{data.album}</p>
            )}
          </div>
        </a>
      )}
    </AnimatedTile>
  );
}
