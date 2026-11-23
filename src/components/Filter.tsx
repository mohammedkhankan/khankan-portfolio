"use client";
import { useState } from "react";

/** Category filter. Items are server-rendered with data-cat; filtering is pure CSS. Without JS all items show. */
export function Filter({ options, allLabel, label, children }: { options: { key: string; label: string; count: number }[]; allLabel: string; label: string; children: React.ReactNode }) {
  const [active, setActive] = useState<string>("all");
  const css = active === "all" ? "" : `[data-filter="${active}"] [data-cat]:not([data-cat="${active}"]){display:none}`;
  return (
    <div data-filter={active}>
      {css && <style>{css}</style>}
      <div role="group" aria-label={label} className="-mx-1 mb-10 flex gap-1 overflow-x-auto pb-1">
        {[{ key: "all", label: allLabel, count: 0 }, ...options].map((o) => (
          <button
            key={o.key}
            type="button"
            aria-pressed={active === o.key}
            onClick={() => setActive(o.key)}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm border border-transparent px-3 text-sm text-muted transition-colors hover:text-ink aria-pressed:border-line-strong aria-pressed:text-ink"
          >
            {o.label}
            {o.count > 0 && <span className="font-mono text-[0.7rem] text-muted" dir="ltr">{o.count}</span>}
          </button>
        ))}
      </div>
      <div aria-live="polite">{children}</div>
    </div>
  );
}
