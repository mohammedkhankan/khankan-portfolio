import Link from "next/link";
import type { Locale } from "@/content/types";
import { links, person, ui } from "@/content/site";
import { href } from "@/lib/i18n";
import { projects } from "@/content/projects";

export function ExternalLink({ href: url, children, className, locale, style }: { href: string; children: React.ReactNode; className?: string; locale: Locale; style?: React.CSSProperties }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {children}
      <span className="sr-only"> {ui.a11y.newTab[locale]}</span>
    </a>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer data-theme="dark" className="bg-night text-ink">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-h3">{person.name[locale]}</p>
          <p className="mt-3 max-w-sm text-sm text-muted">{person.roles[locale].slice(0, 2).join(locale === "ar" ? "، " : ", ")}</p>
          <p className="mt-1 text-sm text-muted">{person.location[locale]}</p>
        </div>
        <nav className="md:col-span-3" aria-label={ui.nav.work[locale]}>
          <p className="mb-3 text-sm text-muted">{ui.nav.work[locale]}</p>
          <ul className="grid gap-1 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link className="inline-flex min-h-9 items-center hover:text-glow" href={href(locale, `/projects/${p.slug}`)}>{p.name[locale]}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="mb-3 text-sm text-muted">{ui.nav.contact[locale]}</p>
          <ul className="grid gap-1 text-sm">
            {([["WhatsApp", links.whatsapp], ...(links.email ? [["Email", `mailto:${links.email}`] as const] : []), ["LinkedIn", links.linkedin], ["GitHub", links.github]] as const).map(([label, url]) => (
              <li key={label}>
                <ExternalLink locale={locale} href={url} className="inline-flex min-h-9 items-center hover:text-glow">{label}</ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} {person.name[locale]}</p>
        <Link href={href(locale, "/privacy")} className="inline-flex min-h-9 items-center hover:text-ink">{ui.nav.privacy[locale]}</Link>
      </div>
    </footer>
  );
}
