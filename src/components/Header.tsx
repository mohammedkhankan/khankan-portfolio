"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/content/types";
import { person, ui } from "@/content/site";
import { href, otherLocale } from "@/lib/i18n";
import { Close, Moon, Sun } from "./Icons";

const NAV = [
  { key: "work", path: "/projects" },
  { key: "about", path: "/about" },
  { key: "experience", path: "/experience" },
  { key: "contact", path: "/contact" },
] as const;

function ThemeToggle({ locale }: { locale: Locale }) {
  const toggle = () => {
    const d = document.documentElement;
    const next = d.getAttribute("data-theme") === "light" ? "dark" : "light";
    d.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={ui.a11y.theme[locale]}
      className="grid size-11 place-items-center rounded-sm text-muted transition-colors hover:text-ink"
    >
      <Sun className="when-dark" />
      <Moon className="when-light" />
    </button>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;
  // Menu is "open" only for the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (v: boolean) => setOpenOn(v ? pathname : null);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const rest = pathname.replace(/^\/(ar|en)/, "") || "/";
  const switchHref = href(otherLocale(locale), rest);
  const isActive = (p: string) => rest.startsWith(p);
  const isHome = rest === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock scroll, Esc to close, keep focus inside, restore focus on close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenOn(null);
      if (e.key === "Tab" && panel) {
        const f = Array.from(panel.querySelectorAll<HTMLElement>("a,button"));
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    const btn = btnRef.current;
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [open]);

  const persistLang = () => { try { localStorage.setItem("lang", otherLocale(locale)); } catch {} };

  return (
    <header
      // Over the home hero (a night sky) the header always uses dark tokens.
      data-theme={isHome && !scrolled ? "dark" : undefined}
      className={`${isHome ? "fixed inset-x-0" : "sticky"} top-0 z-50 border-b text-ink transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link href={href(locale)} className="group flex min-h-11 items-center gap-3" aria-label={person.name[locale]}>
          <span className="relative block h-5 w-5" aria-hidden>
            <span className="absolute inset-x-0 top-1/2 h-px bg-glow shadow-[0_0_10px_2px_rgb(244_201_139/0.55)]" />
            <span className="absolute left-1/2 top-[3px] h-[7px] w-[14px] -translate-x-1/2 rounded-t-full border border-b-0 border-ink/80" />
          </span>
          <span className="font-display text-[1rem] font-semibold tracking-tight">{person.name[locale]}</span>
        </Link>

        <nav aria-label={ui.a11y.primaryNav[locale]} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.key}>
                <Link
                  href={href(locale, n.path)}
                  aria-current={isActive(n.path) ? "page" : undefined}
                  className="relative inline-flex min-h-11 items-center rounded-full px-4 text-sm text-muted transition-colors hover:text-ink aria-[current=page]:bg-ink/10 aria-[current=page]:text-ink"
                >
                  {ui.nav[n.key][locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={switchHref}
            hrefLang={otherLocale(locale)}
            lang={otherLocale(locale)}
            onClick={persistLang}
            aria-label={ui.a11y.languageLabel[locale]}
            className="inline-flex min-h-11 items-center px-3 text-sm text-muted transition-colors hover:text-ink"
          >
            {ui.a11y.language[locale]}
          </Link>
          <ThemeToggle locale={locale} />
          <button
            ref={btnRef}
            type="button"
            className="grid size-11 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={ui.a11y.menu[locale]}
            onClick={() => setOpen(true)}
          >
            <span className="flex w-5 flex-col gap-[5px]" aria-hidden>
              <span className="h-px w-full bg-ink" />
              <span className="h-px w-3/5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — full-screen sheet, large touch targets */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={ui.a11y.menu[locale]}
        hidden={!open}
        data-theme="dark"
        className="fixed inset-0 z-[60] flex h-dvh flex-col bg-night text-ink md:hidden"
      >
        <div className="container-page flex h-16 items-center justify-between border-b border-line">
          <span className="text-sm text-muted">{ui.a11y.menu[locale]}</span>
          <button type="button" onClick={() => setOpen(false)} aria-label={ui.a11y.close[locale]} className="grid size-11 place-items-center">
            <Close />
          </button>
        </div>
        <nav className="container-page flex-1 overflow-y-auto pt-6" aria-label={ui.a11y.primaryNav[locale]}>
          <ol className="divide-y divide-line border-b border-line">
            {[{ key: "home", path: "/" } as const, ...NAV].map((n) => (
              <li key={n.key}>
                <Link
                  href={href(locale, n.path)}
                  aria-current={(n.path === "/" ? rest === "/" : isActive(n.path)) ? "page" : undefined}
                  className="flex min-h-16 items-center py-3 font-display text-[1.9rem] aria-[current=page]:text-glow"
                >
                  {ui.nav[n.key][locale]}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="container-page flex items-center justify-between border-t border-line py-4 text-sm text-muted">
          <span>{person.location[locale]}</span>
          <Link href={switchHref} hrefLang={otherLocale(locale)} lang={otherLocale(locale)} onClick={persistLang} className="min-h-11 inline-flex items-center text-ink">
            {ui.a11y.language[locale]}
          </Link>
        </div>
      </div>
    </header>
  );
}
