import { NextResponse } from "next/server";

// ---- Types ----

export interface NowPlaying {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  trackUrl: string;
}

// ---- Token cache (module-level, survives across requests in same serverless instance) ----

let cachedAccessToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  if (cachedAccessToken && Date.now() < tokenExpiresAt) {
    return cachedAccessToken;
  }

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Spotify token refresh failed:", res.status, text);
    throw new Error("Failed to refresh Spotify token");
  }

  const json = await res.json();
  cachedAccessToken = json.access_token;
  // Set expiry slightly before actual expiry to be safe (expires_in is seconds)
  tokenExpiresAt = Date.now() + (json.expires_in - 60) * 1000;

  return cachedAccessToken!;
}

// ---- Spotify API helpers ----

interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    name: string;
    images: { url: string; width: number }[];
  };
  external_urls: {
    spotify: string;
  };
}

interface SpotifyRecentlyPlayedItem {
  track: SpotifyTrack;
  played_at: string;
}

async function fetchCurrentlyPlaying(
  token: string,
): Promise<NowPlaying | null> {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: { Authorization: `Bearer ${token}` },
      // Spotify's API caches for ~30s; skip local cache to get fresh data
      cache: "no-store",
    },
  );

  // 204 No Content = nothing currently playing
  if (res.status === 204) return null;

  // 401 Unauthorized – token expired
  if (res.status === 401) {
    cachedAccessToken = null; // force refresh next time
    throw new Error("Token expired");
  }

  if (!res.ok) {
    console.error("Spotify currently-playing error:", res.status);
    return null;
  }

  const json = await res.json();

  // The endpoint returns an empty-ish body when nothing is playing even without a 204
  if (!json || !json.item) return null;

  const item: SpotifyTrack = json.item;
  const albumArt =
    item.album.images?.[0]?.url ?? "/assets/extra/placeholder-album.svg";

  return {
    isPlaying: json.is_playing ?? false,
    title: item.name,
    artist: item.artists.map((a) => a.name).join(", "),
    album: item.album.name,
    albumArt,
    trackUrl: item.external_urls.spotify,
  };
}

async function fetchRecentlyPlayed(token: string): Promise<NowPlaying | null> {
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    console.error("Spotify recently-played error:", res.status);
    return null;
  }

  const json = await res.json();
  const items: SpotifyRecentlyPlayedItem[] = json.items;
  if (!items || items.length === 0) return null;

  const item = items[0].track;
  const albumArt =
    item.album.images?.[0]?.url ?? "/assets/extra/placeholder-album.svg";

  return {
    isPlaying: false,
    title: item.name,
    artist: item.artists.map((a) => a.name).join(", "),
    album: item.album.name,
    albumArt,
    trackUrl: item.external_urls.spotify,
  };
}

// ---- Route handler ----

export async function GET() {
  try {
    const token = await getAccessToken();

    // Try currently playing first
    let data = await fetchCurrentlyPlaying(token);

    // If nothing is playing, fall back to recently played
    if (!data) {
      data = await fetchRecentlyPlayed(token);
    }

    if (!data) {
      // Genuinely nothing — return a sensible fallback
      return NextResponse.json({
        isPlaying: false,
        title: "Nothing played recently",
        artist: "—",
        album: "—",
        albumArt: "/assets/extra/placeholder-album.svg",
        trackUrl: "https://www.spotify.com/",
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Spotify widget error:", error);

    // Return a graceful fallback so the widget doesn't show an error state
    return NextResponse.json(
      {
        isPlaying: false,
        title: "Couldn't load",
        artist: "Try again later",
        album: "—",
        albumArt: "/assets/extra/placeholder-album.svg",
        trackUrl: "https://www.spotify.com/",
      },
      { status: 200 },
    );
  }
}
