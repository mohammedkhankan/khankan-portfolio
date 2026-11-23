import type { L, Locale } from "@/content/types";

/** Section heading with a drafting-style index mark. */
export function SectionHead({ index, title, lead, locale, as: H = "h2", className = "" }: { index?: string; title: L; lead?: L; locale: Locale; as?: "h1" | "h2"; className?: string }) {
  return (
    <div className={`grid gap-6 md:grid-cols-12 ${className}`} data-reveal>
      <div className="md:col-span-3">
        {index && <span className="font-mono text-xs text-muted" dir="ltr">§ {index}</span>}
      </div>
      <div className="md:col-span-9">
        <H className={H === "h1" ? "text-h1" : "text-h2"}>{title[locale]}</H>
        {lead && <p className="mt-5 max-w-2xl text-lead text-muted">{lead[locale]}</p>}
      </div>
    </div>
  );
}

export function StatusDot({ className = "" }: { className?: string }) {
  return <span className={`inline-block size-1.5 rounded-full bg-project ${className}`} aria-hidden />;
}
