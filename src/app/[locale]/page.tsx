import Link from "next/link";
import type { Metadata } from "next";
import type { Locale, Project } from "@/content/types";
import { links, person, ui } from "@/content/site";
import { home, leadership } from "@/content/pages";
import { getProject, projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { Plate, Portrait, ProjectHeroImage, heroOf } from "@/components/Media";
import { SectionHead, StatusDot } from "@/components/Section";
import { ExternalLink } from "@/components/Footer";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return { ...pageMeta({ locale: l, path: "/", title: home.meta.title[l], description: home.meta.description[l] }), title: { absolute: home.meta.title[l] } };
}

const pv = (p: Project) => ({ ["--p" as string]: `var(--p-${p.slug})` });

function Meta({ p, locale }: { p: Project; locale: Locale }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
      <span className="inline-flex items-center gap-2"><StatusDot />{ui.status[p.status][locale]}</span>
      <span>{ui.categories[p.category][locale]}</span>
    </div>
  );
}

export default async function Home({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const P = (s: string) => getProject(s)!;
  const rukn = P("rukn"), ofoq = P("ofoq"), maazeem = P("maazeem"), rafd = P("rafd"), altayf = P("altayf");

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
        <div className="container-page relative grid gap-12 pb-16 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="lg:col-span-7 lg:pt-6">
            <p className="annot annot-ar mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden />
              {home.eyebrow[locale]}
            </p>
            <h1 className="sr-only">{person.name[locale]}</h1>
            <p className="font-display text-display leading-[1.02] tracking-tight" aria-hidden>
              {person.name[locale]}
            </p>
            <p className="mt-8 max-w-[34ch] font-display text-h3 font-normal leading-snug text-ink/90">
              {home.headline[locale]}
            </p>
            <p className="mt-6 max-w-xl text-lead text-muted">{home.intro[locale]}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={href(locale, "/projects")} className="btn btn-primary">
                {ui.cta.viewWork[locale]} <ArrowRight className="flip-rtl" />
              </Link>
              <Link href={href(locale, "/contact")} className="btn btn-ghost">
                {ui.cta.contact[locale]}
              </Link>
            </div>
          </div>

          {/* Portrait sheet with drafting annotations + product index */}
          <div className="lg:col-span-5">
            <div className="mx-auto grid max-w-md grid-cols-[1fr_auto] gap-4 lg:max-w-none">
              <div className="relative">
                <div className="overflow-hidden rounded-md border border-line-strong bg-surface-2">
                  <Portrait locale={locale} priority sizes="(min-width: 1024px) 36vw, 80vw" />
                </div>
                <div className="pointer-events-none absolute -bottom-3 inset-x-0 flex items-center gap-2 text-muted" aria-hidden>
                  <span className="h-2 w-px bg-line-strong" />
                  <span className="h-px flex-1 bg-line-strong" />
                  <span className="font-mono text-[0.65rem]" dir="ltr">MK · {person.location.en.toUpperCase()}</span>
                  <span className="h-px flex-1 bg-line-strong" />
                  <span className="h-2 w-px bg-line-strong" />
                </div>
              </div>
              <div className="flex w-px flex-col items-center text-muted" aria-hidden>
                <span className="h-px w-2 bg-line-strong" />
                <span className="w-px flex-1 bg-line-strong" />
                <span className="h-px w-2 bg-line-strong" />
              </div>
            </div>

            <nav aria-label={home.indexTitle[locale]} className="mx-auto mt-12 max-w-md lg:max-w-none">
              <p className="annot annot-ar mb-3">{home.indexTitle[locale]}</p>
              <ol className="divide-y divide-line border-y border-line">
                {projects.map((p, i) => (
                  <li key={p.slug} style={pv(p)}>
                    <Link href={href(locale, `/projects/${p.slug}`)} className="group flex min-h-12 items-center gap-4 py-2 text-sm">
                      <span className="font-mono text-[0.7rem] text-muted" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-medium transition-colors group-hover:text-project">{p.name[locale]}</span>
                      <span className="hidden text-xs text-muted sm:inline">{p.kind[locale]}</span>
                      <StatusDot />
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ───────────── SELECTED WORK ───────────── */}
      <section className="section-y">
        <div className="container-page">
          <SectionHead index="01" title={home.selectedTitle} lead={home.selectedLead} locale={locale} />

          {/* RUKN — full-width feature */}
          <article className="mt-16 md:mt-24" style={pv(rukn)} data-reveal>
            <Link href={href(locale, "/projects/rukn")} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line md:aspect-[21/9]">
                <ProjectHeroImage project={rukn} locale={locale} sizes="(min-width: 1440px) 1400px, 100vw" className="transition-transform duration-700 group-hover:scale-[1.01]" />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-12">
                <div className="md:col-span-5">
                  <Meta p={rukn} locale={locale} />
                  <h3 className="mt-3 text-h2">{rukn.name[locale]}</h3>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-lead text-muted">{rukn.summary[locale]}</p>
                  <span className="btn-link mt-4">{ui.cta.readCase[locale]} <ArrowRight className="flip-rtl" /></span>
                </div>
              </div>
            </Link>
          </article>

          {/* OFOQ + MAAZEEM — asymmetric pair */}
          <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-8">
            {[ofoq, maazeem].map((p, i) => (
              <article key={p.slug} style={pv(p)} className={i === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-40"} data-reveal>
                <Link href={href(locale, `/projects/${p.slug}`)} className="group block">
                  <div className={`relative overflow-hidden rounded-md border border-line ${i === 0 ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                    <ProjectHeroImage project={p} locale={locale} sizes="(min-width: 768px) 55vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.01]" />
                  </div>
                  <div className="mt-6">
                    <Meta p={p} locale={locale} />
                    <h3 className="mt-3 text-h3">{p.name[locale]}</h3>
                    <p className="mt-3 max-w-lg text-muted">{p.summary[locale]}</p>
                    <span className="btn-link mt-3">{ui.cta.readCase[locale]} <ArrowRight className="flip-rtl" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* RAFD — text-led, no imagery (screens pending) */}
          <article className="mt-24 border-y border-line py-14 md:mt-32 md:py-20" style={pv(rafd)} data-reveal>
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <Meta p={rafd} locale={locale} />
                <h3 className="mt-3 text-h2">{rafd.name[locale]}</h3>
                <p className="mt-2 text-sm text-muted">{rafd.role[locale]}</p>
              </div>
              <div className="md:col-span-8">
                <p className="font-display text-h3 font-normal leading-snug">{rafd.tagline[locale]}</p>
                <p className="mt-5 max-w-2xl text-muted">{rafd.summary[locale]}</p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
                  <Link href={href(locale, "/projects/rafd")} className="btn-link">{ui.cta.readCase[locale]} <ArrowRight className="flip-rtl" /></Link>
                  <Link href={href(locale, "/projects/rafd-finance")} className="btn-link text-muted">{getProject("rafd-finance")!.name[locale]} <ArrowRight className="flip-rtl" /></Link>
                </div>
              </div>
            </div>
          </article>

          {/* AL TAYF — client work, image on the side */}
          <article className="mt-24 grid gap-8 md:mt-32 md:grid-cols-12 md:items-end" style={pv(altayf)} data-reveal>
            <div className="md:col-span-7 md:order-2">
              <Link href={href(locale, "/projects/altayf")} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-md border border-line">
                  {heroOf(altayf) ? (
                    <ProjectHeroImage project={altayf} locale={locale} sizes="(min-width: 768px) 55vw, 100vw" />
                  ) : (
                    <Plate project={altayf} locale={locale} />
                  )}
                </div>
              </Link>
            </div>
            <div className="md:col-span-5 md:order-1">
              <Meta p={altayf} locale={locale} />
              <h3 className="mt-3 text-h3">{altayf.name[locale]}</h3>
              <p className="mt-3 text-muted">{altayf.summary[locale]}</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                <Link href={href(locale, "/projects/altayf")} className="btn-link">{ui.cta.readCase[locale]} <ArrowRight className="flip-rtl" /></Link>
                {altayf.url && (
                  <ExternalLink locale={locale} href={altayf.url} className="btn-link text-muted">
                    altayf-sa.com <ArrowUpRight className="flip-rtl" />
                  </ExternalLink>
                )}
              </div>
            </div>
          </article>

          <div className="mt-20 flex justify-center">
            <Link href={href(locale, "/projects")} className="btn btn-ghost">{ui.cta.allProjects[locale]} <ArrowRight className="flip-rtl" /></Link>
          </div>
        </div>
      </section>

      {/* ───────────── PHILOSOPHY ───────────── */}
      <section className="section-y border-t border-line bg-surface" aria-labelledby="philosophy">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28" data-reveal>
              <span className="font-mono text-xs text-muted" dir="ltr">§ 02</span>
              <h2 id="philosophy" className="mt-6 text-h2">{home.philosophyTitle[locale]}</h2>
              <p className="mt-5 text-lead text-muted">{home.philosophyLead[locale]}</p>
            </div>
          </div>
          <ol className="grid ruled sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {home.principles.map((p, i) => (
              <li key={i} className="flex flex-col gap-3 bg-surface p-6 md:p-7" data-reveal>
                <span className="font-mono text-xs text-accent" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-h4">{p.t[locale]}</h3>
                <p className="text-sm text-muted">{p.d[locale]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────── LEADERSHIP ───────────── */}
      <section className="section-y border-t border-line">
        <div className="container-page">
          <SectionHead index="03" title={home.leadershipTitle} locale={locale} />
          <div className="mt-14 grid ruled md:grid-cols-2">
            {leadership.map((o) => (
              <article key={o.org.en} className="flex flex-col bg-bg p-7 md:p-10" data-reveal>
                <p className="annot annot-ar">{o.role[locale]}</p>
                <h3 className="mt-3 text-h3">{o.org[locale]}</h3>
                <p className="mt-4 text-muted">{o.body[locale]}</p>
                <ul className="mt-6 grid gap-2 text-sm">
                  {o.points[locale].map((pt) => (
                    <li key={pt} className="flex gap-3"><span className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" aria-hidden />{pt}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {o.projects.map((s) => {
                    const p = getProject(s)!;
                    return (
                      <Link key={s} href={href(locale, `/projects/${s}`)} style={pv(p)} className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-line px-3 text-sm hover:border-project">
                        <StatusDot />{p.name[locale]}
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href={href(locale, "/about")} className="btn-link">{ui.cta.moreAbout[locale]} <ArrowRight className="flip-rtl" /></Link>
          </div>
        </div>
      </section>

      {/* ───────────── EXPERTISE ───────────── */}
      <section className="section-y border-t border-line" aria-labelledby="expertise">
        <div className="container-page grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3" data-reveal>
            <span className="font-mono text-xs text-muted" dir="ltr">§ 04</span>
          </div>
          <div className="md:col-span-9">
            <h2 id="expertise" className="text-h2" data-reveal>{home.expertiseTitle[locale]}</h2>
            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3" data-reveal>
              {home.expertise.map((e, i) => (
                <li key={i} className="font-display text-h4 text-ink/90">
                  {e[locale]}
                  {i < home.expertise.length - 1 && <span className="ms-3 text-line-strong" aria-hidden>/</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT CTA ───────────── */}
      <section className="border-t border-line bg-ink text-bg" aria-labelledby="cta">
        <div className="container-page grid gap-10 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7" data-reveal>
            <h2 id="cta" className="text-h1">{home.ctaTitle[locale]}</h2>
            <p className="mt-6 max-w-xl text-lead opacity-75">{home.ctaBody[locale]}</p>
          </div>
          <div className="flex flex-col justify-end gap-3 md:col-span-4 md:col-start-9" data-reveal>
            <ExternalLink locale={locale} href={links.whatsapp} className="btn justify-between bg-bg text-ink hover:bg-accent hover:text-accent-ink">
              {ui.cta.whatsapp[locale]} <ArrowUpRight className="flip-rtl" />
            </ExternalLink>
            <ExternalLink locale={locale} href={links.linkedin} className="btn justify-between border border-bg/25 hover:border-bg">
              LinkedIn <ArrowUpRight className="flip-rtl" />
            </ExternalLink>
            <ExternalLink locale={locale} href={links.github} className="btn justify-between border border-bg/25 hover:border-bg">
              GitHub <ArrowUpRight className="flip-rtl" />
            </ExternalLink>
          </div>
        </div>
      </section>
    </>
  );
}
