import { locales, type Locale } from "@/content/types";

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}
export const dirOf = (l: Locale) => (l === "ar" ? "rtl" : "ltr");
export const otherLocale = (l: Locale): Locale => (l === "ar" ? "en" : "ar");

/** Build a locale-prefixed path. `href("ar", "/projects/rukn")` → "/ar/projects/rukn/" */
export function href(locale: Locale, p = "/") {
  const clean = p === "/" ? "" : p.replace(/\/$/, "");
  return `/${locale}${clean}/`;
}

/** Locale-aware number formatting (Arabic uses Arabic-Indic digits only where natural; we keep Latin digits for consistency with product names and tech versions). */
export function num(n: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-SA-u-nu-latn" : "en-US").format(n);
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}
