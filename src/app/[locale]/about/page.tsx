import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { person, ui } from "@/content/site";
import { about } from "@/content/pages";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { Portrait } from "@/components/Media";
import { ArrowRight } from "@/components/Icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/about", title: about.meta.title[l], description: about.meta.description[l] });
}

export default async function AboutPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return (
    <div className="container-page pb-24 pt-12 md:pt-20">
      <header className="grid gap-10 border-b border-line pb-16 lg:grid-cols-12 lg:items-end" data-reveal>
        <div className="lg:col-span-8">
          <p className="annot annot-ar">{ui.nav.about[locale]}</p>
          <h1 className="mt-6 text-h1">{about.title[locale]}</h1>
          <ul className="mt-8 grid gap-1 text-muted">
            {person.roles[locale].map((r) => <li key={r}>{r}</li>)}
            <li>{person.education[locale]}</li>
            <li>{person.location[locale]}</li>
          </ul>
        </div>
        <div className="max-w-xs lg:col-span-3 lg:col-start-10 lg:max-w-none">
          <div className="overflow-hidden rounded-md border border-line-strong">
            <Portrait locale={locale} sizes="(min-width: 1024px) 22vw, 60vw" />
          </div>
        </div>
      </header>

      <ol className="relative">
        {about.chapters.map((c, i) => (
          <li key={i} className="grid gap-6 border-b border-line py-14 md:grid-cols-12 md:gap-8 md:py-20" data-reveal>
            <div className="md:col-span-3">
              <span className="font-mono text-xs text-accent" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
              <p className="annot annot-ar mt-2">{c.k[locale]}</p>
            </div>
            <div className="md:col-span-8 lg:col-span-7">
              <h2 className="text-h2">{c.t[locale]}</h2>
              <div className="prose-case mt-6 text-lead text-ink/85">
                {c.p[locale].map((t, j) => <p key={j}>{t}</p>)}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href={href(locale, "/projects")} className="btn btn-primary">{ui.cta.viewWork[locale]} <ArrowRight className="flip-rtl" /></Link>
        <Link href={href(locale, "/experience")} className="btn btn-ghost">{ui.nav.experience[locale]}</Link>
      </div>
    </div>
  );
}
