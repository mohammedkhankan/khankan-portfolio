import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type L, type LL, type Locale, type Project } from "@/content/types";
import { person, ui } from "@/content/site";
import { getProject, nextProject, projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta, SITE_URL } from "@/lib/seo";
import { heroOf, Plate, ProjectGallery, ProjectHeroImage } from "@/components/Media";
import { Diagram } from "@/components/Diagrams";
import { JsonLd } from "@/components/JsonLd";
import { ExternalLink } from "@/components/Footer";
import { StatusDot } from "@/components/Section";
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
  return pageMeta({
    locale,
    path: `/projects/${slug}`,
    title: `${p.name[locale]} — ${p.tagline[locale]}`,
    description: p.summary[locale],
    ogImage: `/og/${slug}.png`,
  });
}

/* ---------- building blocks ---------- */

function Block({ id, label, n, children, locale, wide = false }: { id: string; label: L; n: number; children: React.ReactNode; locale: Locale; wide?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-line py-14 md:py-20">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-28" data-reveal>
            <span className="font-mono text-xs text-muted" dir="ltr">{String(n).padStart(2, "0")}</span>
            <h2 id={`${id}-h`} className="mt-2 font-display text-h4">{label[locale]}</h2>
          </div>
        </div>
        <div className={wide ? "md:col-span-9" : "md:col-span-8 lg:col-span-7"} data-reveal>
          {children}
        </div>
      </div>
    </section>
  );
}

function Paras({ v, locale, lead = false }: { v: LL; locale: Locale; lead?: boolean }) {
  return (
    <div className={`prose-case ${lead ? "text-lead" : ""}`}>
      {v[locale].map((t, i) => <p key={i} className={i === 0 && lead ? "text-ink" : "text-ink/85"}>{t}</p>)}
    </div>
  );
}

function List({ v, locale }: { v: LL; locale: Locale }) {
  return (
    <ul className="prose-case">
      {v[locale].map((t, i) => <li key={i} className="text-ink/85">{t}</li>)}
    </ul>
  );
}

function FactsBar({ p, locale }: { p: Project; locale: Locale }) {
  const rows: { k: L; v: React.ReactNode }[] = [
    { k: ui.labels.type, v: p.kind[locale] },
    { k: ui.labels.role, v: p.role[locale] },
    { k: ui.labels.status, v: <span className="inline-flex items-center gap-2"><StatusDot />{ui.status[p.status][locale]}</span> },
  ];
  return (
    <dl className="grid ruled sm:grid-cols-3">
      {rows.map((r) => (
        <div key={r.k.en} className="bg-bg px-5 py-4">
          <dt className="annot annot-ar">{r.k[locale]}</dt>
          <dd className="mt-1.5 text-sm">{r.v}</dd>
        </div>
      ))}
      {p.stack.length > 0 && (
        <div className="bg-bg px-5 py-4 sm:col-span-3">
          <dt className="annot annot-ar">{ui.labels.stack[locale]}</dt>
          <dd className="mt-2.5">
            <ul className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li key={s.name} className="chip">
                  {s.name}
                  {s.note && <span className={`opacity-80 ${locale === "ar" ? "font-sans" : ""}`} dir={locale === "ar" ? "rtl" : "ltr"}>· {s.note[locale]}</span>}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </dl>
  );
}

function Hero({ p, locale }: { p: Project; locale: Locale }) {
  const hasImage = !!heroOf(p);
  const crumbs = (
    <nav aria-label={ui.a11y.breadcrumb[locale]} className="mb-10 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href={href(locale)} className="inline-flex min-h-6 items-center hover:text-ink">{ui.nav.home[locale]}</Link></li>
        <li aria-hidden>/</li>
        <li><Link href={href(locale, "/projects")} className="inline-flex min-h-6 items-center hover:text-ink">{ui.nav.work[locale]}</Link></li>
        <li aria-hidden>/</li>
        <li aria-current="page" className="text-ink">{p.name[locale]}</li>
      </ol>
    </nav>
  );
  const titleBlock = (
    <>
      <p className="annot annot-ar flex items-center gap-3"><span className="h-px w-8 bg-project" aria-hidden />{ui.categories[p.category][locale]}</p>
      <h1 className="mt-6 text-display leading-none">{p.name[locale]}</h1>
      <p className="mt-6 max-w-2xl font-display text-h3 font-normal leading-snug text-ink/85">{p.tagline[locale]}</p>
      {p.url && (
        <ExternalLink locale={locale} href={p.url} className="btn btn-ghost mt-8">
          {ui.cta.visitSite[locale]} <ArrowUpRight className="flip-rtl" />
        </ExternalLink>
      )}
    </>
  );

  // Text-led heroes: leadership / internal (no real screens to show)
  if (p.variant === "leadership" || p.variant === "internal") {
    return (
      <header className="container-page pb-14 pt-10 md:pt-14">
        {crumbs}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">{titleBlock}</div>
          {p.facts && (
            <dl className="grid content-end gap-6 lg:col-span-4">
              {p.facts.map((f) => (
                <div key={f.label.en} className="border-t border-line pt-3">
                  <dt className="annot annot-ar">{f.label[locale]}</dt>
                  <dd className="mt-1 font-display text-h4">{f.value[locale]}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        {p.variant === "internal" && p.statusNote && (
          <p className="mt-12 flex items-start gap-3 rounded-md border border-dashed border-line-strong p-4 text-sm text-muted">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-project" aria-hidden />{p.statusNote[locale]}
          </p>
        )}
        <div className="mt-12"><FactsBar p={p} locale={locale} /></div>
      </header>
    );
  }

  // Split hero: operations / workflow
  if (p.variant === "operations" || p.variant === "workflow") {
    return (
      <header className="container-page pb-14 pt-10 md:pt-14">
        {crumbs}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">{titleBlock}</div>
          <div className="lg:col-span-6">
            <div className={`relative overflow-hidden rounded-md border border-line ${p.variant === "workflow" ? "aspect-[4/5] sm:aspect-[4/3]" : "aspect-[4/3]"} ${heroOf(p) ? "" : "!aspect-auto"}`}>
              <ProjectHeroImage project={p} locale={locale} priority index sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </div>
        </div>
        <div className="mt-12"><FactsBar p={p} locale={locale} /></div>
      </header>
    );
  }

  // Wide hero: product / client
  return (
    <header className="pb-14 pt-10 md:pt-14">
      <div className="container-page">
        {crumbs}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">{titleBlock}</div>
          {p.facts && (
            <dl className="grid gap-4 lg:col-span-4">
              {p.facts.map((f) => (
                <div key={f.label.en} className="flex items-baseline justify-between gap-4 border-b border-line pb-2 text-sm">
                  <dt className="text-muted">{f.label[locale]}</dt>
                  <dd className="text-end">{f.value[locale]}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
      <div className={p.variant === "client" ? "mt-12" : "container-page mt-12"}>
        <div className={`relative overflow-hidden border-line ${p.variant === "client" ? "aspect-[4/3] border-y md:aspect-[21/9]" : "aspect-[16/10] rounded-md border md:aspect-[2/1]"}`}>
          {hasImage ? <ProjectHeroImage project={p} locale={locale} priority sizes="100vw" /> : <Plate project={p} locale={locale} />}
        </div>
      </div>
      <div className="container-page mt-12"><FactsBar p={p} locale={locale} /></div>
    </header>
  );
}

/* ---------- page ---------- */

export default async function CaseStudy({ params }: Props) {
  const { locale: raw, slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const locale = raw as Locale;
  const next = nextProject(slug);
  let n = 0;
  let fig = 0;
  const S = ui.sections;

  const diagramsEarly = p.variant === "operations" || p.variant === "workflow" ? p.diagrams.slice(0, 1) : [];
  const diagramsEng = p.diagrams.filter((d) => !diagramsEarly.includes(d));

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
    <article style={{ ["--p" as string]: `var(--p-${p.slug})` }}>
      <JsonLd data={ld} />
      <Hero p={p} locale={locale} />

      <div className="container-page">
        <Block id="context" label={S.context} n={++n} locale={locale}><Paras v={p.context} locale={locale} lead /></Block>
        <Block id="challenge" label={S.challenge} n={++n} locale={locale}><Paras v={p.challenge} locale={locale} /></Block>

        {diagramsEarly.length > 0 && (
          <div className="grid gap-6 pb-14 md:pb-20">
            {diagramsEarly.map((d) => <Diagram key={d} id={d} n={++fig} locale={locale} />)}
          </div>
        )}

        <Block id="strategy" label={S.strategy} n={++n} locale={locale}><List v={p.strategy} locale={locale} /></Block>

        <Block id="solution" label={S.solution} n={++n} locale={locale} wide>
          <Paras v={p.solution} locale={locale} lead />
          <ul className="mt-10 grid ruled sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f, i) => (
              <li key={i} className="flex items-baseline gap-3 bg-bg px-4 py-4 text-sm">
                <span className="font-mono text-[0.7rem] text-project" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                <span>{f.title[locale]}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>

      {/* Product experience — gallery gets more room */}
      <section aria-labelledby="experience-h" className="border-t border-line bg-surface py-14 md:py-20">
        <div className="container-page">
          <div className="mb-10 flex items-baseline gap-4" data-reveal>
            <span className="font-mono text-xs text-muted" dir="ltr">{String(++n).padStart(2, "0")}</span>
            <h2 id="experience-h" className="font-display text-h4">{S.experience[locale]}</h2>
          </div>
          <ProjectGallery project={p} locale={locale} layout={p.variant === "workflow" ? "strip" : "editorial"} />
        </div>
      </section>

      <div className="container-page">
        <Block id="engineering" label={S.engineering} n={++n} locale={locale} wide>
          <Paras v={p.engineering} locale={locale} />
          {p.engineeringTopics && (
            <dl className="mt-10 grid ruled md:grid-cols-2">
              {p.engineeringTopics.map((t, i) => (
                <div key={i} className="bg-bg p-5 md:p-6">
                  <dt className="flex items-baseline gap-3 font-medium">
                    <span className="font-mono text-[0.7rem] text-project" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                    {t.title[locale]}
                  </dt>
                  {t.body && <dd className="mt-2 text-sm text-muted">{t.body[locale]}</dd>}
                </div>
              ))}
            </dl>
          )}
          {diagramsEng.length > 0 && (
            <div className="mt-10 grid gap-6">
              {diagramsEng.map((d) => <Diagram key={d} id={d} n={++fig} locale={locale} />)}
            </div>
          )}
        </Block>

        <Block id="decisions" label={S.decisions} n={++n} locale={locale} wide>
          <ol className="grid gap-10">
            {p.decisions.map((d, i) => (
              <li key={i} className="grid gap-2 md:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs text-project" dir="ltr">D{i + 1}</span>
                <div>
                  <h3 className="font-display text-h4">{d.title[locale]}</h3>
                  <p className="mt-2 max-w-2xl text-muted">{d.body[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block id="results" label={S.results} n={++n} locale={locale}><Paras v={p.results} locale={locale} /></Block>
        <Block id="status" label={S.status} n={++n} locale={locale}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-sm border border-line px-3 py-1.5 text-sm"><StatusDot />{ui.status[p.status][locale]}</p>
          <Paras v={p.currentStatus} locale={locale} />
        </Block>
        <Block id="next" label={S.next} n={++n} locale={locale}><Paras v={p.next} locale={locale} /></Block>
      </div>

      {/* Next project */}
      <nav aria-label={ui.cta.nextProject[locale]} className="border-t border-line" style={{ ["--p" as string]: `var(--p-${next.slug})` }}>
        <Link href={href(locale, `/projects/${next.slug}`)} className="group container-page grid gap-6 py-16 md:grid-cols-12 md:items-center md:py-24">
          <div className="md:col-span-7">
            <p className="annot annot-ar">{ui.cta.nextProject[locale]}</p>
            <p className="mt-4 font-display text-h1 transition-colors group-hover:text-project">{next.name[locale]}</p>
            <p className="mt-3 text-muted">{next.tagline[locale]}</p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line">
              <ProjectHeroImage project={next} locale={locale} sizes="(min-width: 768px) 33vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
          </div>
        </Link>
      </nav>
    </article>
  );
}
