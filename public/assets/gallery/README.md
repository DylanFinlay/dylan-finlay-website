Photography gallery — local workflow

Quick summary

- Add albums by creating a new folder under `public/assets/gallery/<your-album-slug>` and copying your image files (jpg, png, webp, avif) into it.
- The project generates optimized derivatives (320/768/1280/2048) and a `manifest.json` per album. The site prefers thumbnails for grids and medium images for lightbox.

Commands

- One-off optimize for all albums: `npm run optimize-photos`
- Optimize a single album: `node scripts/optimize-photos.js public/assets/gallery/<your-album-folder>`
- Watch and auto-optimize new albums/files: `npm run watch-optimize`
- Remove stale derivatives after deleting originals: `npm run cleanup-derivatives`
- Preview the cleanup without deleting anything: `npm run cleanup-derivatives:dry-run`

Notes

- The optimizer uses `sharp` (dev dependency) and writes `derivatives/` and `manifest.json` inside the album folder.
- Raw source photos in album folders are ignored by Git, so you can keep them locally without committing them.
- `manifest.json` contains per-image `variants` (jpg/webp URLs) and `blurDataURL` (base64 LQIP) used by the gallery UI.
- For best results, add full-resolution originals and let the optimizer generate web-ready derivatives; originals are left untouched.
- If you add albums while the dev server is running, start `npm run watch-optimize` (or restart the dev server) so newly added folders are processed and the pages render correctly.

Recommended naming

- Use a readable slug like `Vienna_Bratislava_2026` or `2026-02-28-Vienna`.

Troubleshooting

- If thumbnails do not appear after adding files: ensure `watch-optimize` is running, or run `npm run optimize-photos` manually.
- If you delete originals and want to reclaim space, run `npm run cleanup-derivatives` to remove matching derivatives and nested derivative folders.
- If `sharp` installation fails, run `npm install` and follow the platform-specific sharp docs.

Questions or changes? Open an issue in the repo or ask me to adjust the workflow.
