#!/usr/bin/env node
const chokidar = require("chokidar");
const path = require("path");
const { spawn, exec } = require("child_process");
const fs = require("fs");

const galleryRoot = path.join(process.cwd(), "public", "assets", "gallery");

if (!fs.existsSync(galleryRoot)) {
  console.error("Gallery root not found:", galleryRoot);
  process.exit(1);
}

console.log("Starting gallery watcher on", galleryRoot);

// Run a full optimize once at start to ensure derivatives exist
console.log("Running initial optimize for all albums...");
const initial = exec("node scripts/optimize-photos.js all");
initial.stdout.pipe(process.stdout);
initial.stderr.pipe(process.stderr);

const pending = new Map();
function scheduleOptimize(dir) {
  const abs = path.resolve(dir);
  if (pending.has(abs)) {
    clearTimeout(pending.get(abs));
  }
  const t = setTimeout(() => {
    console.log("Optimizing album:", abs);
    const p = spawn("node", ["scripts/optimize-photos.js", abs], {
      stdio: "inherit",
    });
    p.on("exit", (code) => {
      console.log(`optimize exited for ${abs} with ${code}`);
    });
    pending.delete(abs);
  }, 500);
  pending.set(abs, t);
}

const watcher = chokidar.watch(galleryRoot, { ignoreInitial: true, depth: 2 });

watcher.on("addDir", (dir) => {
  // new album folder
  if (dir === galleryRoot) return;
  // ignore derivatives folders to avoid re-processing generated files
  if (
    path.basename(dir).toLowerCase() === "derivatives" ||
    dir.includes(path.join("derivatives"))
  )
    return;
  console.log("Detected new album folder:", dir);
  scheduleOptimize(dir);
});

watcher.on("add", (file) => {
  // new file in an album
  if (!file.match(/\.(jpe?g|png)$/i)) return;
  // ignore files created under derivatives to avoid recursive processing
  if (file.includes(path.join("derivatives"))) return;
  const dir = path.dirname(file);
  console.log("Detected new image:", file);
  scheduleOptimize(dir);
});

process.on("SIGINT", () => {
  console.log("Stopping watcher");
  watcher.close();
  process.exit(0);
});
