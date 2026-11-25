import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { ui } from "@/content/site";
import { experience, fieldExperience, home, leadership } from "@/content/pages";
import { getProject, projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/experience", title: experience.meta.title[l], description: experience.meta.description[l] });
}

export default async function ExperiencePage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const tech = new Map<string, string[]>();
  for (const p of projects) for (const s of p.stack) tech.set(s.name, [...(tech.get(s.name) ?? []), p.slug]);

  return (
    <div className="container-page pb-24 pt-14 md:pt-20">
      <header className="grid gap-6 pb-14 lg:grid-cols-12">
        <h1 className="text-h1 lg:col-span-7">{experience.title[locale]}</h1>
        <p className="text-lead text-muted lg:col-span-4 lg:col-start-9 lg:self-end">{experience.lead[locale]}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {leadership.map((o) => (
          <section key={o.org.en} className="flex flex-col rounded-[var(--radius-xl)] bg-surface p-7 ring-1 ring-line md:p-10">
            <p className="text-sm text-muted">{o.role[locale]}</p>
            <h2 className="mt-2 text-h2">{o.org[locale]}</h2>
            <p className="mt-5 text-lead text-ink/90">{o.body[locale]}</p>
            <ul className="prose-case mt-6" style={{ ["--p" as string]: "#f4c98b" }}>
              {o.points[locale].map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              {o.projects.map((s) => {
                const p = getProject(s)!;
                return (
                  <Link key={s} href={href(locale, `/projects/${s}`)} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line-strong px-4 text-sm hover:border-ink">
                    <span className="size-2 rounded-full" style={{ background: p.accent.dark }} aria-hidden />{p.name[locale]}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-12" aria-labelledby="field">
        <div className="lg:col-span-4">
          <h2 id="field" className="text-h2">{fieldExperience.title[locale]}</h2>
          <p className="mt-4 text-muted">{fieldExperience.lead[locale]}</p>
        </div>
        <ol className="grid gap-10 lg:col-span-7 lg:col-start-6">
          {fieldExperience.jobs.map((j) => (
            <li key={j.org.en} className="border-t border-line pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-h3">{j.org[locale]}</h3>
                <span className="text-sm tabular-nums text-muted">{j.period[locale]}</span>
              </div>
              <p className="mt-1 text-muted">{j.role[locale]}</p>
              <ul className="prose-case mt-4" style={{ ["--p" as string]: "#f4c98b" }}>
                {j.points[locale].map((pt) => <li key={pt} className="text-ink/90">{pt}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-12">
        <h2 className="text-h2 lg:col-span-4">{experience.practiceTitle[locale]}</h2>
        <div className="lg:col-span-7 lg:col-start-6">
          <ul className="prose-case text-lead" style={{ ["--p" as string]: "#f4c98b" }}>
            {experience.practice[locale].map((t) => <li key={t} className="text-ink/90">{t}</li>)}
          </ul>
          <h3 className="mt-14 font-display text-h4">{home.expertiseTitle[locale]}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {home.expertise.map((e) => <li key={e.en} className="rounded-full bg-raise px-4 py-2 text-sm">{e[locale]}</li>)}
          </ul>
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-h2">{experience.stackTitle[locale]}</h2>
          <p className="mt-3 text-sm text-muted">{experience.stackNote[locale]}</p>
        </div>
        <table className="w-full text-sm lg:col-span-7 lg:col-start-6">
          <thead className="sr-only"><tr><th scope="col">{ui.labels.stack[locale]}</th><th scope="col">{ui.nav.work[locale]}</th></tr></thead>
          <tbody>
            {[...tech.entries()].map(([name, slugs]) => (
              <tr key={name} className="border-b border-line">
                <th scope="row" className="py-3 pe-4 text-start font-medium" dir="ltr">{name}</th>
                <td className="py-3 text-end text-muted">{slugs.map((s) => getProject(s)!.name[locale]).join(locale === "ar" ? "، " : ", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
