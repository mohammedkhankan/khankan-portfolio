import Link from "next/link";
import type { Locale, Project } from "@/content/types";
import { ui } from "@/content/site";
import { href } from "@/lib/i18n";

/**
 * A project's name as a link. Goes to the live product when it has one,
 * otherwise to its case study.
 */
export function ProjectLink({
  p,
  locale,
  className,
  style,
  children,
}: {
  p: Project;
  locale: Locale;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  if (p.url) {
    return (
      <a href={p.url} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {children}
        <span className="sr-only"> {ui.a11y.newTab[locale]}</span>
      </a>
    );
  }
  return (
    <Link href={href(locale, `/projects/${p.slug}`)} className={className} style={style}>
      {children}
    </Link>
  );
}
