import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type L, type LL, type Locale, type Project } from "@/content/types";
import { person, ui } from "@/content/site";
import { getProject, nextProject, projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { ExtraGallery, heroOf, ProjectGallery, ProjectHeroImage } from "@/components/Media";
import { Diagram } from "@/components/Diagrams";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/Footer";
import { ArrowUpRight } from "@/components/Icons";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getProject(slug);
  if (!p || !isLocale(locale)) return {};
  return pageMeta({ locale, path: `/projects/${slug}`, title: `${p.name[locale]} — ${p.tagline[locale]}`, description: p.summary[locale], ogImage: `/og/${slug}.png` });
}

function Block({ id, label, children, locale, wide = false }: { id: string; label: L; children: React.ReactNode; locale: Locale; wide?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-line py-14 md:py-20">
      <div className="grid gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4 lg:col-span-3">
          <h2 id={`${id}-h`} className="font-display text-h4 md:sticky md:top-28">{label[locale]}</h2>
        </div>
        <div className={wide ? "md:col-span-8 lg:col-span-9" : "md:col-span-8 lg:col-span-7"}>{children}</div>
      </div>
    </section>
  );
}

function Paras({ v, locale, lead = false }: { v: LL; locale: Locale; lead?: boolean }) {
  return (
    <div className={`prose-case ${lead ? "text-lead" : ""}`}>
      {v[locale].map((t, i) => <p key={i} className="text-ink/90">{t}</p>)}
    </div>
  );
}

function Hero({ p, locale }: { p: Project; locale: Locale }) {
  const c = p.chapter;
  const hasImage = !!heroOf(p);
  const rtl = locale === "ar";
  return (
    <header data-theme={c.dark ? "dark" : "light"} style={{ background: c.bg, color: c.ink }} className={hasImage ? "pb-0" : "pb-16"}>
      <div className="container-page pt-10 md:pt-14">
        <nav aria-label={ui.a11y.breadcrumb[locale]} className="text-sm" style={{ color: c.sub }}>
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={href(locale)} className="inline-flex min-h-6 items-center hover:underline">{ui.nav.home[locale]}</Link></li>
            <li aria-hidden>/</li>
            <li><Link href={href(locale, "/projects")} className="inline-flex min-h-6 items-center hover:underline">{ui.nav.work[locale]}</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page">{p.name[locale]}</li>
          </ol>
        </nav>
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm" style={{ color: c.sub }}>{ui.categories[p.category][locale]}</p>
            <h1 className="mt-3 text-mega font-semibold leading-[0.95] [:lang(ar)_&]:leading-[1.15]">{p.name[locale]}</h1>
            <p className="mt-6 max-w-2xl font-display text-h3 font-normal leading-snug">{p.tagline[locale]}</p>
            {p.url && (
              <ExternalLink locale={locale} href={p.url} className="btn mt-8 border" >
                {ui.cta.visitSite[locale]} <ArrowUpRight className={rtl ? "-scale-x-100" : ""} />
              </ExternalLink>
            )}
          </div>
          <dl className="grid gap-4 text-sm lg:col-span-4 lg:col-start-9">
            {[
              { k: ui.labels.type, v: p.kind[locale] },
              { k: ui.labels.role, v: p.role[locale] },
              { k: ui.labels.status, v: ui.status[p.status][locale] },
              ...(p.facts ?? []).map((f) => ({ k: f.label, v: f.value[locale] })),
            ].map((r) => (
              <div key={r.k.en} className="grid grid-cols-[8rem_1fr] gap-4 border-t pt-3" style={{ borderColor: `color-mix(in srgb, ${c.ink} 18%, transparent)` }}>
                <dt style={{ color: c.sub }}>{r.k[locale]}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        {hasImage && (
          <div className="relative z-10 mt-14 -mb-24 md:-mb-40">
            <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-float">
              <ProjectHeroImage project={p} locale={locale} priority sizes="(min-width: 1440px) 1360px, 100vw" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default async function CaseStudy({ params }: Props) {
  const { locale: raw, slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const locale = raw as Locale;
  const next = nextProject(slug);
  const S = ui.sections;
  const hasImage = !!heroOf(p);
  let fig = 0;

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: p.name[locale],
      headline: p.tagline[locale],
      description: p.summary[locale],
      inLanguage: locale,
      url: `${SITE_URL}${href(locale, `/projects/${slug}`)}`,
      creator: { "@type": "Person", name: person.name[locale] },
      ...(p.url ? { sameAs: p.url } : {}),
      keywords: p.stack.map((s) => s.name).join(", ") || undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.nav.home[locale], item: `${SITE_URL}${href(locale)}` },
        { "@type": "ListItem", position: 2, name: ui.nav.work[locale], item: `${SITE_URL}${href(locale, "/projects")}` },
        { "@type": "ListItem", position: 3, name: p.name[locale], item: `${SITE_URL}${href(locale, `/projects/${slug}`)}` },
      ],
    },
  ];

  return (
    <article style={{ ["--p" as string]: p.accent.dark }}>
      <JsonLd data={ld} />
      <Hero p={p} locale={locale} />

      <div className={`container-page ${hasImage ? "pt-36 md:pt-56" : "pt-6"}`}>
        {p.proof && (
          <dl className={`grid gap-8 pb-14 sm:grid-cols-2 ${p.proof.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {p.proof.map((f) => (
              <div key={f.label.en}>
                <dt className="sr-only">{f.label[locale]}</dt>
                <dd>
                  <span className="block font-display text-h2 font-semibold tabular-nums"><bdi>{f.value[locale]}</bdi></span>
                  <span className="mt-2 block text-muted">{f.label[locale]}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}

        <Block id="context" label={S.context} locale={locale}><Paras v={p.context} locale={locale} lead /></Block>
        <Block id="challenge" label={S.challenge} locale={locale}><Paras v={p.challenge} locale={locale} /></Block>
        <Block id="strategy" label={S.strategy} locale={locale}>
          <ul className="prose-case">{p.strategy[locale].map((t, i) => <li key={i} className="text-ink/90">{t}</li>)}</ul>
        </Block>
        <Block id="solution" label={S.solution} locale={locale} wide>
          <Paras v={p.solution} locale={locale} lead />
          <ul className="mt-10 flex flex-wrap gap-2">
            {p.features.map((f, i) => <li key={i} className="rounded-full bg-raise px-4 py-2 text-sm">{f.title[locale]}</li>)}
          </ul>
        </Block>
      </div>

      <section aria-labelledby="experience-h" className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 id="experience-h" className="text-h2">{S.experience[locale]}</h2>
            {p.mediaNote && <p className="text-sm text-muted">{p.mediaNote[locale]}</p>}
          </div>
          <ProjectGallery project={p} locale={locale} />
        </div>
      </section>

      <div className="container-page">
        <Block id="engineering" label={S.engineering} locale={locale} wide>
          <Paras v={p.engineering} locale={locale} />
          {p.stack.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2" aria-label={ui.labels.stack[locale]}>
              {p.stack.map((s) => (
                <li key={s.name} className="tag">
                  {s.name}
                  {s.note && <span className="opacity-80" dir={locale === "ar" ? "rtl" : "ltr"}>({s.note[locale]})</span>}
                </li>
              ))}
            </ul>
          )}
          {p.engineeringTopics && (
            <dl className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {p.engineeringTopics.map((t, i) => (
                <div key={i} className="border-t border-line pt-4">
                  <dt className="font-display text-h4">{t.title[locale]}</dt>
                  {t.body && <dd className="mt-2 text-muted">{t.body[locale]}</dd>}
                </div>
              ))}
            </dl>
          )}
          {p.diagrams.length > 0 && (
            <div className="mt-12 grid gap-6">
              {p.diagrams.map((d) => <Diagram key={d} id={d} n={++fig} locale={locale} />)}
            </div>
          )}
          {slug === "maazeem" && <div className="mt-12"><ExtraGallery slug="maazeem-diagrams" locale={locale} /></div>}
        </Block>

        <Block id="decisions" label={S.decisions} locale={locale} wide>
          <ol className="grid gap-10 md:grid-cols-2">
            {p.decisions.map((d, i) => (
              <li key={i}>
                <h3 className="font-display text-h4">{d.title[locale]}</h3>
                <p className="mt-2 text-muted">{d.body[locale]}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block id="results" label={S.results} locale={locale}><Paras v={p.results} locale={locale} /></Block>
        <Block id="status" label={S.status} locale={locale}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-raise px-4 py-2 text-sm">
            <span className="size-2 rounded-full" style={{ background: p.accent.dark }} aria-hidden />
            {ui.status[p.status][locale]}
          </p>
          <Paras v={p.currentStatus} locale={locale} />
        </Block>
        <Block id="next" label={S.next} locale={locale}><Paras v={p.next} locale={locale} /></Block>
      </div>

      <nav aria-label={ui.cta.nextProject[locale]} data-theme={next.chapter.dark ? "dark" : "light"} style={{ background: next.chapter.bg, color: next.chapter.ink }}>
        <Link href={href(locale, `/projects/${next.slug}`)} className="group container-page grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-24">
          <div className="md:col-span-6">
            <p className="text-sm" style={{ color: next.chapter.sub }}>{ui.cta.nextProject[locale]}</p>
            <p className="mt-3 font-display text-h1 font-semibold">{next.name[locale]}</p>
            <p className="mt-3 text-lead" style={{ color: next.chapter.sub }}>{next.tagline[locale]}</p>
          </div>
          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-float transition-transform duration-700 group-hover:-translate-y-1">
              <ProjectHeroImage project={next} locale={locale} sizes="(min-width: 768px) 45vw, 100vw" />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
}
