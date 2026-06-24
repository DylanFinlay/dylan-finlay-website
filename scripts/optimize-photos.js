#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Simple local optimizer: generates jpg + webp at multiple widths and writes manifest.json
// Usage: node scripts/optimize-photos.js <album-dir>

const sizes = [320, 768, 1280, 2048];

async function processAlbum(dir) {
  const abs = path.resolve(dir);
  // Avoid running the optimizer on a derivatives folder itself — this causes nested derivatives.
  if (path.basename(abs).toLowerCase() === "derivatives") {
    console.log("Skipping optimize for derivatives folder:", abs);
    return;
  }
  if (!fs.existsSync(abs)) {
    console.error("Album dir not found:", abs);
    process.exit(1);
  }

  const files = fs.readdirSync(abs).filter((f) => /\.(jpe?g|png)$/i.test(f));
  if (files.length === 0) {
    console.log("No image files found in", abs);
    return;
  }

  const outDir = path.join(abs, "derivatives");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  const manifest = [];
  for (const f of files) {
    const src = path.join(abs, f);
    const name = path.parse(f).name;
    const entry = { filename: f, variants: {} };
    for (const w of sizes) {
      const outJ = path.join(outDir, `${name}-${w}.jpg`);
      const outW = path.join(outDir, `${name}-${w}.webp`);
      try {
        await sharp(src)
          .rotate()
          .resize({ width: w })
          .jpeg({ quality: 80 })
          .toFile(outJ);
        await sharp(src)
          .rotate()
          .resize({ width: w })
          .webp({ quality: 70 })
          .toFile(outW);
      } catch (e) {
        console.error("sharp error for", src, e);
      }
      entry.variants[w] = {
        jpg: `/assets/photography/${path.basename(abs)}/derivatives/${name}-${w}.jpg`,
        webp: `/assets/photography/${path.basename(abs)}/derivatives/${name}-${w}.webp`,
      };
    }
    // generate tiny blur placeholder
    try {
      const buf = await sharp(src)
        .rotate()
        .resize({ width: 20 })
        .blur()
        .jpeg({ quality: 40 })
        .toBuffer();
      entry.blurDataURL = `data:image/jpeg;base64,${buf.toString("base64")}`;
    } catch (e) {
      console.error("blur generation error for", src, e);
    }
    manifest.push(entry);
  }

  fs.writeFileSync(
    path.join(abs, "manifest.json"),
    JSON.stringify(manifest, null, 2),
  );
  console.log("Done:", abs);
}

const albumArg = process.argv[2];
if (!albumArg) {
  console.error("Usage: node scripts/optimize-photos.js <album-dir|all>");
  process.exit(1);
}

async function run() {
  if (albumArg === "all") {
    const galleryRoot = path.join(process.cwd(), "public", "assets", "photography");
    if (!fs.existsSync(galleryRoot)) {
      console.error("gallery root not found:", galleryRoot);
      process.exit(1);
    }
    const entries = fs.readdirSync(galleryRoot, { withFileTypes: true });
    const dirs = entries
      .filter((e) => e.isDirectory())
      .map((d) => path.join(galleryRoot, d.name));
    for (const d of dirs) {
      await processAlbum(d);
    }
    return;
  }

  await processAlbum(albumArg);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
