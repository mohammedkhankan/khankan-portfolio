// Image pipeline: assets-src/<slug>/*.{png,jpg,jpeg,webp}  →  public/projects/<slug>/
//   - responsive WebP variants (640 / 1280 / 1920 wide, never upscaled)
//   - a tiny blurred placeholder (data URI) to prevent blank boxes
//   - manifest.json consumed by the site at build time
// Optional assets-src/<slug>/meta.json:
//   { "dashboard.png": { "alt": { "ar": "...", "en": "..." }, "role": "hero", "order": 1 } }
// Files without meta get an alt text derived from the file name — edit meta.json to improve it.
//
// Portrait: assets-src/portrait/original.(png|jpg) → public/portrait/portrait-{w}.webp
//
// Usage: npm run images            (all)
//        npm run images -- rukn    (one project)
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const SRC = path.join(ROOT, "assets-src");
const OUT = path.join(ROOT, "public", "projects");
const WIDTHS = [640, 1280, 1920];
const IMG = /\.(png|jpe?g|webp)$/i;

const only = process.argv[2];

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

function humanize(name) {
  return name.replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "").replace(/[-_]+/g, " ").trim();
}
function slugify(name) {
  return name.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "image";
}

async function blurOf(input) {
  const buf = await sharp(input).resize(16).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

async function processPortrait() {
  const dir = path.join(SRC, "portrait");
  if (!(await exists(dir))) return;
  const files = (await fs.readdir(dir)).filter((f) => IMG.test(f));
  const src = files.find((f) => f.startsWith("original")) ?? files.find((f) => f !== "cutout.png");
  if (!src) return;
  const out = path.join(ROOT, "public", "portrait");
  await fs.mkdir(out, { recursive: true });
  // Gentle, appearance-preserving finish: crop to exact 4:5, a touch of contrast
  // and micro-sharpening. No retouching of facial features.
  const base = sharp(path.join(dir, src)).rotate();
  const meta = await base.metadata();
  const w = meta.width, h = meta.height;
  const targetH = Math.min(h, Math.round(w * 1.25));
  const targetW = Math.round(targetH / 1.25);
  const graded = await sharp(path.join(dir, src))
    .rotate()
    .extract({ left: Math.round((w - targetW) / 2), top: 0, width: targetW, height: targetH })
    .linear(1.04, -4)
    .modulate({ saturation: 0.98 })
    .sharpen({ sigma: 0.6 })
    .toBuffer();
  const sizes = [];
  for (const width of [480, 800, 1200]) {
    const real = Math.min(width, targetW);
    if (sizes.includes(real)) continue;
    await sharp(graded).resize({ width: real }).webp({ quality: 84 }).toFile(path.join(out, `portrait-${real}.webp`));
    sizes.push(real);
  }
  // Optional transparent cut-out (background removed, nothing else changed) for the hero.
  let cutout = null;
  if (files.includes("cutout.png")) {
    const cut = await sharp(path.join(dir, "cutout.png")).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
    const cs = [];
    for (const width of [520, 700, 900, cut.info.width]) {
      const real = Math.min(width, cut.info.width);
      if (cs.includes(real)) continue;
      await sharp(cut.data).resize({ width: real }).webp({ quality: 78, alphaQuality: 85, effort: 6 }).toFile(path.join(out, `cutout-${real}.webp`));
      cs.push(real);
    }
    cutout = { width: cut.info.width, height: cut.info.height, sizes: cs };
  }
  const manifest = { width: targetW, height: targetH, sizes, blur: await blurOf(graded), cutout };
  await fs.writeFile(path.join(out, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`portrait → ${sizes.join(", ")}`);
}

async function processProject(slug) {
  const dir = path.join(SRC, slug);
  const files = (await fs.readdir(dir)).filter((f) => IMG.test(f)).sort();
  if (!files.length) return;
  const metaPath = path.join(dir, "meta.json");
  const meta = (await exists(metaPath)) ? JSON.parse(await fs.readFile(metaPath, "utf8")) : {};
  const out = path.join(OUT, slug);
  await fs.rm(out, { recursive: true, force: true });
  await fs.mkdir(out, { recursive: true });

  const items = [];
  let i = 0;
  for (const f of files) {
    i++;
    const input = path.join(dir, f);
    const m = await sharp(input).metadata();
    const name = slugify(f);
    const sizes = [];
    // Every standard width below the source, plus the source width itself (capped at 1920).
    const widths = [...WIDTHS.filter((w) => w < m.width), Math.min(m.width, 1920)].filter((w, i, a) => a.indexOf(w) === i);
    for (const real of widths) {
      await sharp(input).resize({ width: real, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(out, `${name}-${real}.webp`));
      sizes.push(real);
    }
    const ratio = m.width / m.height;
    const info = meta[f] ?? {};
    items.push({
      file: name,
      width: m.width,
      height: m.height,
      sizes,
      orientation: ratio > 1.1 ? "landscape" : ratio < 0.9 ? "portrait" : "square",
      alt: info.alt ?? { ar: humanize(f), en: humanize(f) },
      role: info.role ?? (ratio < 0.9 ? "mobile" : "gallery"),
      order: info.order ?? i,
      blur: await blurOf(input),
    });
  }
  items.sort((a, b) => a.order - b.order);
  await fs.writeFile(path.join(out, "manifest.json"), JSON.stringify(items, null, 2));
  console.log(`${slug} → ${items.length} images`);
}

await processPortrait();
if (await exists(SRC)) {
  for (const d of await fs.readdir(SRC, { withFileTypes: true })) {
    if (!d.isDirectory() || d.name === "portrait") continue;
    if (only && d.name !== only) continue;
    await processProject(d.name);
  }
}
