import type { Project } from "../types";
import { rukn } from "./rukn";
import { ofoq } from "./ofoq";
import { maazeem } from "./maazeem";
import { rafd } from "./rafd";
import { rafdFinance } from "./rafd-finance";
import { altayf } from "./altayf";

/**
 * To add a project: create a file next to these exporting a `Project`,
 * import it here, and (optionally) drop images in assets-src/<slug>/ then run `npm run images`.
 * Its page, card, sitemap entry and navigation are generated automatically.
 */
export const projects: Project[] = [rukn, ofoq, maazeem, rafd, rafdFinance, altayf].sort((a, b) => a.order - b.order);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
