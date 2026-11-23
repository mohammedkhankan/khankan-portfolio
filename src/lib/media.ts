import "server-only";
import fs from "node:fs";
import path from "node:path";
import type { MediaItem } from "@/content/types";
import { asset } from "./base";

const PUBLIC = path.join(process.cwd(), "public");

/** Reads the build-time image manifest for a project. Returns [] when no images exist yet. */
export function getMedia(slug: string): MediaItem[] {
  const file = path.join(PUBLIC, "projects", slug, "manifest.json");
  if (!fs.existsSync(file)) return [];
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as MediaItem[];
  } catch {
    return [];
  }
}

export interface Portrait {
  width: number;
  height: number;
  sizes: number[];
  blur: string;
  cutout: { width: number; height: number; sizes: number[] } | null;
}

export function getPortrait(): Portrait | null {
  const file = path.join(PUBLIC, "portrait", "manifest.json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as Portrait;
}

export function srcFor(slug: string, item: MediaItem, width: number) {
  return asset(`/projects/${slug}/${item.file}-${width}.webp`);
}

export function srcSetFor(slug: string, item: MediaItem) {
  return item.sizes.map((w) => `${srcFor(slug, item, w)} ${w}w`).join(", ");
}
