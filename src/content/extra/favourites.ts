/**
 * Favourite albums and videos surfaced on the Extra page. These are link
 * tiles (external) today, but the shape leaves room for an optional
 * `embedUrl` later if you want inline Spotify/YouTube embeds.
 *
 * Album covers live under /assets/extra/ — add the image files there and
 * reference them via the leading-slash `cover` paths below.
 *
 * YouTube thumbnails are served directly from Google's CDN, so no local
 * assets are needed for videos.
 */

export interface AlbumFav {
  title: string;
  artist: string;
  /** Absolute web path under /public, e.g. "/assets/extra/album.jpg". */
  cover: string;
  /** External link (Spotify, etc.). */
  url: string;
  note?: string;
}

export interface VideoFav {
  title: string;
  channel: string;
  /**
   * Either an absolute web path under /public, or a remote URL (e.g. the
   * YouTube thumbnail CDN, which needs no local asset).
   */
  thumb: string;
  /** External link (YouTube, etc.). */
  url: string;
  note?: string;
}

// Spotify search links — open the album directly on Spotify.
export const ALBUMS: AlbumFav[] = [
  {
    title: "Graduation",
    artist: "Kanye West",
    cover: "/assets/extra/graduation.jpg",
    url: "https://open.spotify.com/search/Graduation%20Kanye%20West",
  },
  {
    title: "K.I.D.S. (Deluxe)",
    artist: "Mac Miller",
    cover: "/assets/extra/kids.jpg",
    url: "https://open.spotify.com/search/K.I.D.S.%20Mac%20Miller",
  },
  {
    title: "Surf's Up (Music From the Motion Picture)",
    artist: "Various Artists",
    cover: "/assets/extra/surfs-up.jpg",
    url: "https://open.spotify.com/search/Surf%27s%20Up%20soundtrack",
  },
];

// YouTube thumbnails served from Google's CDN. We use hqdefault (always
// available for every video); maxresdefault does not exist for age-gated or
// older videos and 404s.
export const VIDEOS: VideoFav[] = [
  {
    title: "Flying to Peru with absolutely no plan",
    channel: "A Testament to Spontaneity",
    thumb: "https://img.youtube.com/vi/Tx95iN4ElpA/hqdefault.jpg",
    url: "https://youtu.be/Tx95iN4ElpA",
    note: "A cinematic nudge to travel on instinct.",
  },
  {
    title: "Got any hobbies?",
    channel: "Luda",
    thumb: "https://img.youtube.com/vi/NFm2Xjx61Q8/hqdefault.jpg",
    url: " https://youtu.be/NFm2Xjx61Q8",
    note: "Beautifully shot reminder to do things just for the joy of them.",
  },
  {
    title: "history of the entire world, i guess",
    channel: "bill wurtz",
    thumb: "https://img.youtube.com/vi/xuCn8ux2gbs/hqdefault.jpg",
    url: "https://youtu.be/xuCn8ux2gbs",
    note: "The entire history of the world, in 20 chaotic minutes.",
  },
];
