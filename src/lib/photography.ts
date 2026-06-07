import fs from "fs";
import path from "path";

export interface PhotoVariants {
  [width: string]: {
    jpg?: string;
    webp?: string;
  };
}

export interface Photo {
  filename: string;
  url: string; // original
  variants?: PhotoVariants; // optional generated variants keyed by width
  blurDataURL?: string;
}

export interface Album {
  slug: string;
  title: string;
  cover?: string;
  coverUrl?: string;
  count: number;
}

const GALLERY_PATH = path.join(process.cwd(), "public", "assets", "gallery");

export function humanizeSlug(slug: string) {
  // Remove leading date-like prefix e.g. 2026_02_28_
  const withoutDate = slug.replace(/^\d{4}[\-_]?\d{2}[\-_]?\d{2}[\-_]?/g, "");
  return withoutDate.replace(/[_\-]+/g, " ").trim() || slug;
}

function readAlbumManifest(albumDir: string) {
  const manifestPath = path.join(albumDir, "manifest.json");
  if (!fs.existsSync(manifestPath)) return null;

  try {
    const raw = fs.readFileSync(manifestPath, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : null;
  } catch (e) {
    console.error("Invalid manifest for album", albumDir, e);
    return null;
  }
}

function pickCoverUrl(slug: string, entry: any) {
  if (!entry?.variants) return undefined;

  const widths = Object.keys(entry.variants)
    .map((w) => Number(w))
    .filter(Boolean)
    .sort((a, b) => a - b);

  const preferredWidth =
    widths.find((w) => w >= 768) ?? widths[widths.length - 1];
  if (!preferredWidth) return undefined;

  const variant = entry.variants[String(preferredWidth)];
  return variant?.webp || variant?.jpg
    ? variant.webp || variant.jpg
    : entry.filename
      ? `/assets/gallery/${slug}/derivatives/${path.parse(entry.filename).name}-${preferredWidth}.jpg`
      : undefined;
}

export async function getAlbums(): Promise<Album[]> {
  if (!fs.existsSync(GALLERY_PATH)) return [];

  const entries = fs.readdirSync(GALLERY_PATH, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((d) => d.name);

  const albums: Album[] = dirs.map((slug) => {
    const dir = path.join(GALLERY_PATH, slug);
    const manifest = readAlbumManifest(dir);
    const rootFiles = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
    rootFiles.sort();
    const coverEntry = manifest?.[0];
    const cover = coverEntry?.filename || rootFiles[0];
    return {
      slug,
      title: humanizeSlug(slug),
      cover,
      coverUrl: coverEntry
        ? pickCoverUrl(slug, coverEntry)
        : cover
          ? `/assets/gallery/${slug}/${cover}`
          : undefined,
      count: manifest?.length ?? rootFiles.length,
    };
  });

  // sort albums by count desc, then slug
  albums.sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));
  return albums;
}

export async function getAlbumPhotos(slug: string): Promise<Photo[]> {
  if (!slug) return [];
  const dir = path.join(GALLERY_PATH, String(slug));
  if (!fs.existsSync(dir)) return [];

  const manifest = readAlbumManifest(dir);
  if (manifest) {
    return manifest.map((item: any) => ({
      filename: item.filename,
      url: `/assets/gallery/${slug}/${item.filename}`,
      variants: item.variants || undefined,
      blurDataURL: item.blurDataURL || undefined,
    }));
  }

  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
  files.sort();
  return files.map((filename) => ({
    filename,
    url: `/assets/gallery/${slug}/${filename}`,
  }));
}
