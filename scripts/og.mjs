// Generates 1200×630 social images into public/og/ (Latin text only, so it renders with any system font).
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "public", "og");
await fs.mkdir(OUT, { recursive: true });

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const card = (title, sub, accent, withPortrait) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0f100e"/>
  <g stroke="#eeeae0" stroke-opacity="0.05">${Array.from({ length: 26 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="630"/>`).join("")}${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1200" y2="${i * 48}"/>`).join("")}</g>
  <rect x="72" y="88" width="48" height="2" fill="${accent}"/>
  <text x="72" y="130" font-family="Inter, sans-serif" font-size="22" fill="#a6a296" letter-spacing="3">MOHAMMED KHANKAN</text>
  <text x="72" y="330" font-family="Inter Display, Inter, sans-serif" font-weight="600" font-size="${withPortrait ? 60 : title.length > 14 ? 78 : 104}" fill="#eeeae0">${esc(title)}</text>
  <text x="72" y="400" font-family="Inter, sans-serif" font-size="${withPortrait ? 24 : 30}" fill="#a6a296">${esc(sub)}</text>
  <text x="72" y="560" font-family="Inter, sans-serif" font-size="20" fill="#a6a296" letter-spacing="2">FOUNDER · SOFTWARE ENGINEER · SAAS PRODUCTS</text>
  ${withPortrait ? `<rect x="796" y="72" width="333" height="416" rx="10" fill="none" stroke="#eeeae0" stroke-opacity="0.25"/>` : ""}
</svg>`;

const projects = [
  ["rukn", "RUKN", "SaaS platform for online stores", "#86b98f"],
  ["ofoq", "OFOQ Restaurant OS", "Restaurant operations SaaS", "#e3a944"],
  ["maazeem", "MAAZEEM", "Digital invitations & guest management", "#d394b9"],
  ["rafd", "RAFD", "Supplementary learning platform", "#86ade0"],
  ["rafd-finance", "RAFD Finance", "Internal finance & operations system", "#a5bd86"],
  ["altayf", "AL TAYF", "Architectural contractor website", "#cdb98e"],
];

for (const [slug, title, sub, accent] of projects) {
  await sharp(Buffer.from(card(title, sub, accent, false))).png().toFile(path.join(OUT, `${slug}.png`));
}

// Default card with portrait (if available)
const base = sharp(Buffer.from(card("Mohammed Khankan", "Digital products for real business problems", "#e08455", true)));
const portrait = path.join(ROOT, "public", "portrait", "portrait-480.webp");
let composite = [];
try {
  const p = await sharp(portrait).resize(331, 414, { fit: "cover" }).toBuffer();
  composite = [{ input: p, left: 797, top: 73 }];
} catch {}
await base.composite(composite).png().toFile(path.join(OUT, "default.png"));
console.log("og images →", projects.length + 1);
