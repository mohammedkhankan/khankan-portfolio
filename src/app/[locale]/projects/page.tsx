import Link from "next/link";
import type { Metadata } from "next";
import type { CategoryKey, Locale } from "@/content/types";
import { ui } from "@/content/site";
import { projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { ProjectHeroImage } from "@/components/Media";
import { Filter } from "@/components/Filter";
import { StatusDot } from "@/components/Section";
import { ArrowRight } from "@/components/Icons";

type Props = { params: Promise<{ locale: string }> };

const copy = {
  title: { ar: "المشاريع", en: "Projects" },
  lead: {
    ar: "منتجات SaaS، وأنظمة أعمال، ومنصة تعليمية، وأداة داخلية، وموقع شركة — لكل منها دراسة حالة مستقلة.",
    en: "SaaS products, business systems, a learning platform, an internal tool and a corporate site — each with its own case study.",
  },
  description: {
    ar: "دراسات حالة لمشاريع محمد خانكان: ركن، أفق لإدارة المطاعم، معازيم، رفد، النظام المالي لرفد، والطيف المعمارية.",
    en: "Case studies of Mohammed Khankan's projects: RUKN, OFOQ Restaurant OS, MAAZEEM, RAFD, RAFD Financial System and AL TAYF.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/projects", title: copy.title[l], description: copy.description[l] });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const cats = (Object.keys(ui.categories) as CategoryKey[])
    .map((k) => ({ key: k, label: ui.categories[k][locale], count: projects.filter((p) => p.category === k).length }))
    .filter((c) => c.count > 0);

  return (
    <div className="container-page pb-24 pt-12 md:pt-20">
      <header className="grid gap-6 border-b border-line pb-12 md:grid-cols-12" data-reveal>
        <div className="md:col-span-3">
          <span className="font-mono text-xs text-muted" dir="ltr">{String(projects.length).padStart(2, "0")} / INDEX</span>
        </div>
        <div className="md:col-span-9">
          <h1 className="text-h1">{copy.title[locale]}</h1>
          <p className="mt-5 max-w-2xl text-lead text-muted">{copy.lead[locale]}</p>
        </div>
      </header>

      <div className="pt-10">
        <Filter options={cats} allLabel={ui.labels.all[locale]} label={ui.labels.filter[locale]}>
          <ol className="border-t border-line">
            {projects.map((p, i) => (
              <li key={p.slug} data-cat={p.category} className="border-b border-line" style={{ ["--p" as string]: `var(--p-${p.slug})` }}>
                <Link href={href(locale, `/projects/${p.slug}`)} className="group grid gap-5 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10">
                  <span className="font-mono text-xs text-muted md:col-span-1" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <StatusDot />{ui.status[p.status][locale]}
                      <span aria-hidden>·</span>
                      {ui.categories[p.category][locale]}
                    </div>
                    <h2 className="mt-2 text-h3 transition-colors group-hover:text-project">{p.name[locale]}</h2>
                    <p className="mt-2 max-w-md text-sm text-muted">{p.summary[locale]}</p>
                    {p.stack.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={ui.labels.stack[locale]}>
                        {p.stack.slice(0, 4).map((s) => <li key={s.name} className="chip">{s.name}</li>)}
                      </ul>
                    )}
                  </div>
                  <div className="md:col-span-5 md:col-start-8">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-line">
                      <ProjectHeroImage project={p} locale={locale} sizes="(min-width: 768px) 40vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.015]" />
                    </div>
                  </div>
                  <span className="hidden justify-self-end text-muted transition-colors group-hover:text-ink md:col-span-1 md:block">
                    <ArrowRight className="flip-rtl" />
                    <span className="sr-only">{ui.cta.readCase[locale]}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Filter>
      </div>
    </div>
  );
}
