import Link from "next/link";
import type { Metadata } from "next";
import type { CategoryKey, Locale } from "@/content/types";
import { ui } from "@/content/site";
import { projects } from "@/content/projects";
import { href, isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { ProjectHeroImage } from "@/components/Media";
import { Filter } from "@/components/Filter";

type Props = { params: Promise<{ locale: string }> };

const copy = {
  title: { ar: "المشاريع", en: "Projects" },
  lead: {
    ar: "منتجات SaaS، وأنظمة أعمال، ومنصة تعليمية، وأداة داخلية، وموقع شركة. لكل منها دراسة حالة مستقلة.",
    en: "SaaS products, business systems, a learning platform, an internal tool and a company website, each with its own case study.",
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
  const locale = (await params).locale as Locale;
  const cats = (Object.keys(ui.categories) as CategoryKey[])
    .map((k) => ({ key: k, label: ui.categories[k][locale], count: projects.filter((p) => p.category === k).length }))
    .filter((c) => c.count > 0);

  return (
    <div className="container-page pb-24 pt-14 md:pt-20">
      <header className="grid gap-6 pb-12 lg:grid-cols-12">
        <h1 className="text-h1 lg:col-span-6">{copy.title[locale]}</h1>
        <p className="text-lead text-muted lg:col-span-5 lg:col-start-8 lg:self-end">{copy.lead[locale]}</p>
      </header>

      <Filter options={cats} allLabel={ui.labels.all[locale]} label={ui.labels.filter[locale]}>
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const c = p.chapter;
            return (
              <li key={p.slug} data-cat={p.category} className={i === 0 ? "md:col-span-2" : ""}>
                <Link
                  href={href(locale, `/projects/${p.slug}`)}
                  data-theme={c.dark ? "dark" : "light"}
                  style={{ background: c.bg, color: c.ink }}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] p-6 md:p-10"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h2 className="text-h2">{p.name[locale]}</h2>
                    <span className="text-sm" style={{ color: c.sub }}>{ui.status[p.status][locale]}</span>
                  </div>
                  <p className="mt-3 max-w-xl" style={{ color: c.sub }}>{p.summary[locale]}</p>
                  <div className="mt-8 overflow-hidden rounded-[var(--radius-md)] shadow-float transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:-translate-y-1">
                    <ProjectHeroImage project={p} locale={locale} sizes={i === 0 ? "(min-width: 1440px) 1300px, 100vw" : "(min-width: 768px) 46vw, 100vw"} />
                  </div>
                  <span className="mt-6 text-sm font-medium underline decoration-current/30 underline-offset-4">{ui.cta.readCase[locale]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Filter>
    </div>
  );
}
