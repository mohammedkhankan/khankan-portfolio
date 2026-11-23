import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { ui } from "@/content/site";
import { experience, home, leadership } from "@/content/pages";
import { getProject, projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { StatusDot } from "@/components/Section";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/experience", title: experience.meta.title[l], description: experience.meta.description[l] });
}

export default async function ExperiencePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  // Unique technologies across documented project stacks, with the projects using each.
  const tech = new Map<string, string[]>();
  for (const p of projects) for (const s of p.stack) tech.set(s.name, [...(tech.get(s.name) ?? []), p.slug]);

  return (
    <div className="container-page pb-24 pt-12 md:pt-20">
      <header className="grid gap-6 border-b border-line pb-14 md:grid-cols-12" data-reveal>
        <div className="md:col-span-3"><p className="annot annot-ar">{ui.nav.experience[locale]}</p></div>
        <div className="md:col-span-9">
          <h1 className="text-h1">{experience.title[locale]}</h1>
          <p className="mt-5 max-w-2xl text-lead text-muted">{experience.lead[locale]}</p>
        </div>
      </header>

      {leadership.map((o, i) => (
        <section key={o.org.en} className="grid gap-6 border-b border-line py-14 md:grid-cols-12 md:gap-8 md:py-20" data-reveal>
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-accent" dir="ltr">R{i + 1}</span>
            <p className="mt-2 text-sm text-muted">{o.role[locale]}</p>
          </div>
          <div className="md:col-span-9 lg:col-span-8">
            <h2 className="text-h2">{o.org[locale]}</h2>
            <p className="mt-5 max-w-2xl text-lead text-ink/85">{o.body[locale]}</p>
            <ul className="mt-8 grid ruled sm:grid-cols-2">
              {o.points[locale].map((pt) => <li key={pt} className="bg-bg px-4 py-4 text-sm">{pt}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {o.projects.map((s) => {
                const p = getProject(s)!;
                return (
                  <Link key={s} href={href(locale, `/projects/${s}`)} style={{ ["--p" as string]: `var(--p-${s})` }} className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-line px-3 text-sm hover:border-project">
                    <StatusDot />{p.name[locale]}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="grid gap-6 border-b border-line py-14 md:grid-cols-12 md:gap-8 md:py-20" data-reveal>
        <div className="md:col-span-3"><span className="font-mono text-xs text-accent" dir="ltr">E</span></div>
        <div className="md:col-span-9 lg:col-span-8">
          <h2 className="text-h2">{experience.practiceTitle[locale]}</h2>
          <ul className="prose-case mt-8" style={{ ["--p" as string]: "var(--c-accent)" }}>
            {experience.practice[locale].map((t) => <li key={t} className="text-ink/85">{t}</li>)}
          </ul>
          <h3 className="mt-14 font-display text-h4">{home.expertiseTitle[locale]}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {home.expertise.map((e) => <li key={e.en} className="rounded-sm border border-line px-3 py-1.5 text-sm">{e[locale]}</li>)}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 py-14 md:grid-cols-12 md:gap-8 md:py-20" data-reveal>
        <div className="md:col-span-3"><span className="font-mono text-xs text-accent" dir="ltr">T</span></div>
        <div className="md:col-span-9">
          <h2 className="text-h2">{experience.stackTitle[locale]}</h2>
          <p className="mt-3 text-sm text-muted">{experience.stackNote[locale]}</p>
          <table className="mt-8 w-full border-t border-line text-sm">
            <thead className="sr-only">
              <tr><th scope="col">{ui.labels.stack[locale]}</th><th scope="col">{ui.nav.work[locale]}</th></tr>
            </thead>
            <tbody>
              {[...tech.entries()].map(([name, slugs]) => (
                <tr key={name} className="border-b border-line">
                  <th scope="row" className="py-3 pe-4 text-start font-mono text-xs font-normal" dir="ltr">{name}</th>
                  <td className="py-3 text-end text-muted">{slugs.map((s) => getProject(s)!.name[locale]).join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
