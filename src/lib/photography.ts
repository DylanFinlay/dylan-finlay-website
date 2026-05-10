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

export async function getAlbums(): Promise<Album[]> {
  if (!fs.existsSync(GALLERY_PATH)) return [];

  const entries = fs.readdirSync(GALLERY_PATH, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory()).map((d) => d.name);

  const albums: Album[] = dirs.map((slug) => {
    const dir = path.join(GALLERY_PATH, slug);
    const files = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
    files.sort();
    const cover = files.length ? files[0] : undefined;
    return {
      slug,
      title: humanizeSlug(slug),
      cover,
      coverUrl: cover ? `/assets/gallery/${slug}/${cover}` : undefined,
      count: files.length,
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
  const manifestPath = path.join(dir, "manifest.json");

  if (fs.existsSync(manifestPath)) {
    try {
      const raw = fs.readFileSync(manifestPath, "utf8");
      const parsed = JSON.parse(raw);
      // parsed expected: [{ filename, variants: { width: { jpg, webp } } }, ...]
      return parsed.map((item: any) => ({
        filename: item.filename,
        url: `/assets/gallery/${slug}/${item.filename}`,
        variants: item.variants || undefined,
        blurDataURL: item.blurDataURL || undefined,
      }));
    } catch (e) {
      // fall through to reading files directly
      console.error("Invalid manifest for album", slug, e);
    }
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
