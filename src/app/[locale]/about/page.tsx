import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { person, ui } from "@/content/site";
import { about } from "@/content/pages";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { CutoutPortrait } from "@/components/Media";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/about", title: about.meta.title[l], description: about.meta.description[l] });
}

export default async function AboutPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return (
    <div className="pb-24">
      <header className="container-page grid gap-10 pt-14 md:pt-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7 lg:pb-10">
          <p className="text-sm text-muted">{ui.nav.about[locale]}</p>
          <h1 className="mt-4 text-h1">{about.title[locale]}</h1>
          <ul className="mt-8 grid gap-1 text-muted">
            {person.roles[locale].map((r) => <li key={r}>{r}</li>)}
            <li>{person.education[locale]}</li>
            <li>{person.location[locale]}</li>
          </ul>
        </div>
        {/* Framed portrait: dusk panel with the horizon behind */}
        <div data-theme="dark" className="sky relative mx-auto w-full max-w-sm overflow-hidden rounded-[var(--radius-xl)] lg:col-span-4 lg:col-start-9 lg:max-w-none">
          <div className="pointer-events-none absolute inset-x-0 bottom-[14%] horizon-line" aria-hidden />
          <CutoutPortrait locale={locale} sizes="(min-width: 1024px) 30vw, 80vw" className="portrait-fade relative mx-auto block h-auto w-full pt-8" />
        </div>
      </header>

      <ol className="container-page mt-16">
        {about.chapters.map((c, i) => (
          <li key={i} className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
            <p className="text-sm text-muted md:col-span-3">{c.k[locale]}</p>
            <div className="md:col-span-8 lg:col-span-7">
              <h2 className="text-h2">{c.t[locale]}</h2>
              <p className="mt-5 text-lead text-ink/90">{c.p[locale][0]}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="container-page mt-6 flex flex-wrap gap-3">
        <Link href={href(locale, "/projects")} className="btn btn-solid">{ui.cta.viewWork[locale]}</Link>
        <Link href={href(locale, "/experience")} className="btn btn-line">{ui.nav.experience[locale]}</Link>
      </div>
    </div>
  );
}
