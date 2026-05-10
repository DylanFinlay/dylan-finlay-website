#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const galleryRoot = path.join(process.cwd(), "public", "assets", "gallery");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

function isImageFile(filename) {
  return /\.(jpe?g|png|webp|avif)$/i.test(filename);
}

function getOriginalStemFromDerivative(filename) {
  return path.parse(filename).name.replace(/-\d+$/, "");
}

function processAlbum(albumDir) {
  const rootFiles = fs
    .readdirSync(albumDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && isImageFile(entry.name))
    .map((entry) => entry.name);

  const rootStems = new Set(rootFiles.map((file) => path.parse(file).name));
  const derivativesDir = path.join(albumDir, "derivatives");
  const removed = [];

  if (!fs.existsSync(derivativesDir)) {
    return { albumDir, removed, manifestUpdated: false };
  }

  for (const entry of fs.readdirSync(derivativesDir, { withFileTypes: true })) {
    const full = path.join(derivativesDir, entry.name);

    if (entry.isDirectory()) {
      // Nested derivatives folders are always generated noise.
      removed.push(full);
      if (!dryRun) {
        fs.rmSync(full, { recursive: true, force: true });
      }
      continue;
    }

    if (entry.name === "manifest.json" || !isImageFile(entry.name)) {
      continue;
    }

    const originalStem = getOriginalStemFromDerivative(entry.name);
    if (!rootStems.has(originalStem)) {
      removed.push(full);
      if (!dryRun) {
        fs.unlinkSync(full);
      }
    }
  }

  const manifestPath = path.join(albumDir, "manifest.json");
  let manifestUpdated = false;
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const filtered = Array.isArray(manifest)
        ? manifest.filter(
            (item) =>
              item &&
              item.filename &&
              rootStems.has(path.parse(item.filename).name),
          )
        : manifest;
      if (Array.isArray(manifest) && filtered.length !== manifest.length) {
        manifestUpdated = true;
        if (!dryRun) {
          fs.writeFileSync(manifestPath, JSON.stringify(filtered, null, 2));
        }
      }
    } catch (e) {
      console.error("Could not parse manifest for", albumDir, e);
    }
  }

  if (
    fs.existsSync(derivativesDir) &&
    fs.readdirSync(derivativesDir).length === 0
  ) {
    removed.push(derivativesDir);
    if (!dryRun) {
      fs.rmdirSync(derivativesDir);
    }
  }
  return { albumDir, removed, manifestUpdated };
}

function main() {
  if (!fs.existsSync(galleryRoot)) {
    console.error("Gallery root not found:", galleryRoot);
    process.exit(1);
  }

  const albumDirs = fs
    .readdirSync(galleryRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "README.md")
    .map((entry) => path.join(galleryRoot, entry.name));

  let totalRemoved = 0;
  let totalAlbumsTouched = 0;

  for (const albumDir of albumDirs) {
    const result = processAlbum(albumDir);
    if (result.removed.length > 0 || result.manifestUpdated) {
      totalAlbumsTouched += 1;
      totalRemoved += result.removed.length;
      console.log(`${dryRun ? "[dry-run] " : ""}${albumDir}`);
      if (result.removed.length > 0) {
        for (const file of result.removed) {
          console.log(`  ${dryRun ? "would remove" : "removed"}: ${file}`);
        }
      }
      if (result.manifestUpdated) {
        console.log(`  ${dryRun ? "would update" : "updated"}: manifest.json`);
      }
    }
  }

  console.log(
    `${dryRun ? "Dry run complete" : "Cleanup complete"}. Albums touched: ${totalAlbumsTouched}, derivative files removed: ${totalRemoved}`,
  );
}

main();
