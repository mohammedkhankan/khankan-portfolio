import Link from "next/link";
import type { Metadata } from "next";
import type { Locale, Project } from "@/content/types";
import { links, person, ui } from "@/content/site";
import { home, leadership, services, testimonials } from "@/content/pages";
import { getProject, projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { CutoutPortrait, ProjectHeroImage } from "@/components/Media";
import { ExternalLink } from "@/components/Footer";
import { ArrowUpRight } from "@/components/Icons";
import { CountUp } from "@/components/CountUp";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return { ...pageMeta({ locale: l, path: "/", title: home.meta.title[l], description: home.meta.description[l] }), title: { absolute: home.meta.title[l] } };
}

/** One project as a full-bleed chapter in its own brand colours. */
function Chapter({ p, locale, flip }: { p: Project; locale: Locale; flip: boolean }) {
  const c = p.chapter;
  return (
    <section
      aria-labelledby={`ch-${p.slug}`}
      data-theme={c.dark ? "dark" : "light"}
      style={{ background: c.bg, color: c.ink, ["--p" as string]: c.ink }}
      className="relative overflow-hidden"
    >
      <div className="container-page grid items-center gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-12">
        <div className={`lg:col-span-4 ${flip ? "lg:order-2" : ""}`}>
          <p className="text-sm" style={{ color: c.sub }}>{p.kind[locale]}</p>
          <h2 id={`ch-${p.slug}`} className="mt-3 text-h2 [overflow-wrap:anywhere]">{p.name[locale]}</h2>
          <p className="mt-5 text-lead" style={{ color: c.sub }}>{p.summary[locale]}</p>
          {p.proof && (
            <dl className="mt-10 grid gap-6">
              {p.proof.map((f) => (
                <div key={f.label.en} className="border-t pt-4" style={{ borderColor: `color-mix(in srgb, ${c.ink} 18%, transparent)` }}>
                  <dt className="sr-only">{f.label[locale]}</dt>
                  <dd>
                    <span className="block font-display text-h3 font-semibold tabular-nums"><bdi><CountUp value={f.value[locale]} /></bdi></span>
                    <span className="mt-1 block text-sm" style={{ color: c.sub }}>{f.label[locale]}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <Link href={href(locale, `/projects/${p.slug}`)} className="btn mt-10 border" style={{ borderColor: `color-mix(in srgb, ${c.ink} 35%, transparent)` }}>
            {ui.cta.readCase[locale]}
          </Link>
        </div>
        <div className={`lg:col-span-8 ${flip ? "lg:order-1" : ""}`}>
          <Link href={href(locale, `/projects/${p.slug}`)} className="group block" tabIndex={-1} aria-hidden>
            <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-float transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:-translate-y-1">
              <ProjectHeroImage project={p} locale={locale} sizes="(min-width: 1024px) 62vw, 100vw" />
            </div>
          </Link>
          {p.mediaNote && <p className="mt-4 text-xs" style={{ color: c.sub }}>{p.mediaNote[locale]}</p>}
        </div>
      </div>
    </section>
  );
}

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const P = (s: string) => getProject(s)!;
  const rtl = locale === "ar";
  const chapters = ["rukn", "ofoq", "maazeem", "altayf"].map(P);
  const rafd = P("rafd");

  return (
    <>
      {/* ───────── HERO: dusk over the horizon ───────── */}
      <section data-theme="dark" className="sky relative isolate flex min-h-[100svh] flex-col overflow-hidden text-ink">
        <div
          className="pointer-events-none absolute bottom-[6rem] -z-10 h-[70vh] w-[70vh] max-w-[110vw] rounded-full opacity-70 blur-3xl max-lg:start-1/2 max-lg:-translate-x-1/2 max-lg:rtl:translate-x-1/2 lg:end-[6%]"
          style={{ background: "radial-gradient(circle, rgb(120 150 230 / 0.35), rgb(244 201 139 / 0.12) 45%, transparent 70%)" }}
          aria-hidden
        />
        <div className="container-page grid flex-1 grid-cols-1 items-end gap-6 pt-28 lg:grid-cols-12 lg:gap-10 lg:pt-24">
          <div className="hero-in self-center pb-4 lg:col-span-6 lg:pb-24">
            <p className="text-sm text-steel md:text-base">{home.eyebrow[locale]}</p>
            <h1 className="mt-5 text-mega font-semibold leading-[0.95] tracking-[-0.035em] [:lang(ar)_&]:leading-[1.15] [:lang(ar)_&]:tracking-normal">
              {person.name[locale]}
            </h1>
            <p className="mt-7 max-w-[30ch] font-display text-h3 font-normal leading-snug text-chalk/90">{home.headline[locale]}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={href(locale, "/projects")} className="btn btn-solid">{ui.cta.viewWork[locale]}</Link>
              <Link href={href(locale, "/contact")} className="btn btn-line">{ui.cta.contact[locale]}</Link>
            </div>
          </div>
          <div className="hero-portrait relative mx-auto w-full max-w-[26rem] self-end sm:max-w-[30rem] lg:col-span-6 lg:max-w-none">
            <CutoutPortrait
              locale={locale}
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="relative mx-auto block h-auto max-h-[78svh] w-auto max-w-full object-contain object-bottom portrait-fade"
            />
          </div>
        </div>

        <div className="hero-horizon horizon-line relative z-10" aria-hidden />
        <div className="relative z-10 bg-night">
          <nav aria-label={home.indexTitle[locale]} className="container-page py-5">
            <ul className="flex snap-x gap-x-8 gap-y-2 overflow-x-auto [scrollbar-width:none] md:flex-wrap md:justify-between md:overflow-visible">
              {projects.map((p) => (
                <li key={p.slug} className="shrink-0 snap-start">
                  <Link href={href(locale, `/projects/${p.slug}`)} className="group flex min-h-12 flex-col justify-center">
                    <span className="font-display text-base font-medium text-chalk transition-colors group-hover:text-glow">{p.name[locale]}</span>
                    <span className="text-xs text-steel">{p.kind[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ───────── INTRO ───────── */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <h2 className="text-h2 lg:col-span-5">{home.selectedTitle[locale]}</h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lead text-ink/90">{home.intro[locale]}</p>
          </div>
        </div>
      </section>

      {/* ───────── CHAPTERS ───────── */}
      {chapters.map((p, i) => <Chapter key={p.slug} p={p} locale={locale} flip={i % 2 === 1} />)}

      {/* RAFD — leadership chapter (screens pending, so text-led) */}
      <section data-theme="dark" style={{ background: rafd.chapter.bg, color: rafd.chapter.ink }} aria-labelledby="ch-rafd">
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm" style={{ color: rafd.chapter.sub }}>{rafd.kind[locale]}</p>
            <h2 id="ch-rafd" className="mt-3 text-h1">{rafd.name[locale]}</h2>
            <p className="mt-3 text-sm" style={{ color: rafd.chapter.sub }}>{rafd.role[locale]}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-display text-h3 font-normal leading-snug">{rafd.tagline[locale]}</p>
            {rafd.proof && (
              <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
                {rafd.proof.map((f) => (
                  <div key={f.label.en} className="border-t border-white/15 pt-4">
                    <dt className="sr-only">{f.label[locale]}</dt>
                    <dd>
                      <span className="block font-display text-h2 font-semibold tabular-nums"><bdi><CountUp value={f.value[locale]} /></bdi></span>
                      <span className="mt-1 block text-sm" style={{ color: rafd.chapter.sub }}>{f.label[locale]}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
              <Link href={href(locale, "/projects/rafd")} className="link">{ui.cta.readCase[locale]}</Link>
              <Link href={href(locale, "/projects/rafd-finance")} className="link">{P("rafd-finance").name[locale]}</Link>
              {rafd.url && (
                <ExternalLink locale={locale} href={rafd.url} className="link">{ui.cta.visitSite[locale]}</ExternalLink>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHAT I BUILD FOR YOU ───────── */}
      <section className="section-y" aria-labelledby="services">
        <div className="container-page">
          <h2 id="services" className="text-h2">{services.title[locale]}</h2>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {services.items.map((s) => (
              <li key={s.t.en} className="flex flex-col rounded-[var(--radius-xl)] bg-surface p-7 ring-1 ring-line md:p-9">
                <h3 className="font-display text-h3">{s.t[locale]}</h3>
                <p className="mt-3 text-muted">{s.d[locale]}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-12">
            <h3 className="font-display text-h4 lg:col-span-2">{services.stepsTitle[locale]}</h3>
            <ol className="grid gap-6 sm:grid-cols-3 lg:col-span-7">
              {services.steps.map((st, i) => (
                <li key={st.en} className="flex items-baseline gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-glow text-sm font-semibold text-night">{i + 1}</span>
                  <span>{st[locale]}</span>
                </li>
              ))}
            </ol>
            <div className="lg:col-span-3 lg:text-end">
              <ExternalLink locale={locale} href={links.whatsapp} className="btn btn-solid">{ui.cta.whatsapp[locale]}</ExternalLink>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CLIENTS (only when real quotes exist) ───────── */}
      {testimonials.length > 0 && (
        <section className="section-y bg-surface" aria-labelledby="clients">
          <div className="container-page">
            <h2 id="clients" className="text-h2">{locale === "ar" ? "ماذا يقول العملاء" : "What clients say"}</h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((q, i) => (
                <li key={i} className="flex flex-col rounded-[var(--radius-xl)] bg-bg p-7 ring-1 ring-line">
                  <blockquote className="text-lead">“{q.quote[locale]}”</blockquote>
                  <p className="mt-6 font-medium">{q.name[locale]}</p>
                  <p className="text-sm text-muted">{q.role[locale]}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────── HOW I WORK ───────── */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <h2 className="text-h2">{home.philosophyTitle[locale]}</h2>
          <ul className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {home.principles.filter((_, i) => [0, 1, 2, 3, 7, 8].includes(i)).map((p, i) => (
              <li key={i} className="border-t border-line pt-5">
                <h3 className="font-display text-h4">{p.t[locale]}</h3>
                <p className="mt-2 text-muted">{p.d[locale]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── LEADERSHIP ───────── */}
      <section className="section-y">
        <div className="container-page">
          <h2 className="text-h2">{home.leadershipTitle[locale]}</h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {leadership.map((o) => (
              <article key={o.org.en} className="flex flex-col">
                <p className="text-sm text-muted">{o.role[locale]}</p>
                <h3 className="mt-2 text-h3">{o.org[locale]}</h3>
                <p className="mt-4 text-lead text-ink/85">{o.body[locale]}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {o.projects.map((s) => {
                    const p = getProject(s)!;
                    return (
                      <Link key={s} href={href(locale, `/projects/${s}`)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-sm transition-colors hover:border-ink">
                        <span className="size-2 rounded-full" style={{ background: p.accent.dark }} aria-hidden />
                        {p.name[locale]}
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 border-t border-line pt-8">
            <p className="text-sm text-muted">{home.expertiseTitle[locale]}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {home.expertise.map((e) => <li key={e.en} className="rounded-full bg-raise px-4 py-2 text-sm">{e[locale]}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────── CONTACT — back to the horizon ───────── */}
      <section data-theme="dark" className="sky relative overflow-hidden text-ink" aria-labelledby="cta">
        <div className="container-page grid gap-10 pb-16 pt-24 md:pt-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="cta" className="text-h1">{home.ctaTitle[locale]}</h2>
            <p className="mt-6 max-w-xl text-lead text-steel">{home.ctaBody[locale]}</p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-4 lg:col-start-9">
            <ExternalLink locale={locale} href={links.whatsapp} className="btn btn-solid justify-between">
              {ui.cta.whatsapp[locale]} <ArrowUpRight className={rtl ? "-scale-x-100" : ""} />
            </ExternalLink>
            <ExternalLink locale={locale} href={links.linkedin} className="btn btn-line justify-between">
              LinkedIn <ArrowUpRight className={rtl ? "-scale-x-100" : ""} />
            </ExternalLink>
            <ExternalLink locale={locale} href={links.github} className="btn btn-line justify-between">
              GitHub <ArrowUpRight className={rtl ? "-scale-x-100" : ""} />
            </ExternalLink>
          </div>
        </div>
        <div className="horizon-line" aria-hidden />
        <div className="h-10 bg-night" />
      </section>
    </>
  );
}
