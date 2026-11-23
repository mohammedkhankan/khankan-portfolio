import type { MetadataRoute } from "next";
import { locales } from "@/content/types";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/seo";
import { href } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects", "/about", "/experience", "/contact", "/privacy", ...projects.map((p) => `/projects/${p.slug}`)];
  return paths.flatMap((p) =>
    locales.map((l) => ({
      url: SITE_URL + href(l, p),
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, SITE_URL + href(x, p)])) },
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : p.startsWith("/projects/") ? 0.8 : 0.6,
    })),
  );
}
