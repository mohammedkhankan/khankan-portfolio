import type { NextConfig } from "next";

// Static export: the whole site is generated at build time into /out and can be
// served from any static host / CDN with zero server cost.
const nextConfig: NextConfig = {
  output: "export",
  // Set NEXT_PUBLIC_BASE_PATH when hosting under a sub-path (e.g. GitHub Pages project sites).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  trailingSlash: true,
  images: { unoptimized: true }, // images are pre-optimized by scripts/optimize-images.mjs
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
