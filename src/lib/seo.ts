import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { person } from "@/content/site";
import { href } from "./i18n";

/** Final domain is configurable — never hard-coded. Set NEXT_PUBLIC_SITE_URL at build time. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export function pageMeta(opts: {
  locale: Locale;
  path: string; // locale-less path, e.g. "/projects/rukn"
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const { locale, path, title, description } = opts;
  const url = SITE_URL + href(locale, path);
  const og = SITE_URL + (opts.ogImage ?? "/og/default.png");
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        ar: SITE_URL + href("ar", path),
        en: SITE_URL + href("en", path),
        "x-default": SITE_URL + href("ar", path),
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: person.name[locale],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [og] },
  };
}
