import localFont from "next/font/local";

// Self-hosted, subset fonts (no runtime requests to third parties).
// Latin and Arabic faces are separate families; the CSS stack lists Latin first,
// so each script automatically picks the right face. Latin faces disable the
// auto-generated metric fallback (local Arial), which contains Arabic glyphs and
// would otherwise capture Arabic text before the Arabic faces are reached.
export const displayLatin = localFont({
  src: "../fonts/readex-pro-latin-wght-normal.woff2",
  weight: "200 700",
  variable: "--font-display-latin",
  display: "swap",
  adjustFontFallback: false,
});
export const displayAr = localFont({
  src: "../fonts/readex-pro-arabic-wght-normal.woff2",
  weight: "200 700",
  variable: "--font-display-ar",
  display: "swap",
});
export const bodyLatin = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-arabic-latin-500-normal.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-sans-arabic-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body-latin",
  display: "swap",
  adjustFontFallback: false,
});
export const bodyAr = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2", weight: "500" },
    { path: "../fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body-ar",
  display: "swap",
});
export const mono = localFont({
  src: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--font-mono-latin",
  display: "swap",
  adjustFontFallback: false,
  preload: false,
});

export const fontVars = [displayLatin, displayAr, bodyLatin, bodyAr, mono].map((f) => f.variable).join(" ");
