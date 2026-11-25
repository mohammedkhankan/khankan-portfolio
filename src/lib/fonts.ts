import localFont from "next/font/local";

// Self-hosted subsets, no third-party requests. Latin and Arabic are separate
// families (Latin listed first). Latin faces disable the auto metric fallback
// (local Arial contains Arabic glyphs and would capture Arabic text).
export const displayLatin = localFont({
  src: "../fonts/alexandria-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-display-latin",
  display: "swap",
  adjustFontFallback: false,
});
export const displayAr = localFont({
  src: "../fonts/alexandria-arabic-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-display-ar",
  display: "swap",
});
export const bodyLatin = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-arabic-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body-latin",
  display: "swap",
  adjustFontFallback: false,
  preload: false,
});
export const bodyAr = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-body-ar",
  display: "swap",
  preload: false,
});

export const fontVars = [displayLatin, displayAr, bodyLatin, bodyAr].map((f) => f.variable).join(" ");
