"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/content/types";
import { ui } from "@/content/site";
import { ChevronLeft, ChevronRight, Close, Expand } from "./Icons";

export interface GalleryImage {
  src: string;      // mid-size src
  full: string;     // largest available
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  orientation: "landscape" | "portrait" | "square";
  blur?: string;
}

/**
 * Editorial gallery + accessible lightbox (native <dialog>):
 * keyboard (← → Esc), swipe, captions, focus restored on close,
 * full-size images loaded only when opened.
 */
export function Gallery({ images, locale, layout = "editorial" }: { images: GalleryImage[]; locale: Locale; layout?: "editorial" | "strip" }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const rtl = locale === "ar";

  const open = (i: number, el: HTMLElement) => {
    triggerRef.current = el;
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = useCallback(() => dialogRef.current?.close(), []);
  const go = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onClose = () => { setIndex(null); triggerRef.current?.focus(); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
    };
    dlg.addEventListener("close", onClose);
    dlg.addEventListener("keydown", onKey);
    return () => { dlg.removeEventListener("close", onClose); dlg.removeEventListener("keydown", onKey); };
  }, [go, rtl]);

  const current = index !== null ? images[index] : null;

  const thumb = (img: GalleryImage, i: number, sizes: string, className?: string) => (
    <figure key={img.src} className={className}>
      <button
        type="button"
        onClick={(e) => open(i, e.currentTarget)}
        className="group relative block w-full overflow-hidden rounded-[var(--radius-md)] bg-raise shadow-soft ring-1 ring-line"
        aria-label={`${ui.a11y.openImage[locale]}: ${img.alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          srcSet={img.srcSet}
          sizes={sizes}
          width={img.width}
          height={img.height}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          style={img.blur ? { backgroundImage: `url(${img.blur})`, backgroundSize: "cover" } : undefined}
          className="h-auto w-full transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.015]"
        />
        <span className="absolute end-3 top-3 grid size-10 place-items-center rounded-full bg-bg/80 text-ink opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden>
          <Expand />
        </span>
      </button>
      <figcaption className="mt-3 text-sm text-muted">{img.alt}</figcaption>
    </figure>
  );

  return (
    <>
      {layout === "strip" ? (
        <div className="-mx-[var(--gutter)] overflow-x-auto overscroll-x-contain [scrollbar-width:thin]" style={{ ["--gutter" as string]: "clamp(1.125rem, 0.6rem + 2.6vw, 3rem)" }}>
          <ul className="flex snap-x snap-mandatory gap-4 px-[var(--gutter)] pb-4 md:gap-6">
            {images.map((img, i) => (
              <li key={img.src} className={`shrink-0 snap-start ${img.orientation === "portrait" ? "w-[62vw] max-w-[300px]" : "w-[84vw] max-w-[760px]"}`}>
                {thumb(img, i, "(min-width: 768px) 760px, 84vw")}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-6 md:gap-x-6">
          {images.map((img, i) => {
            const first = i === 0 && img.orientation === "landscape";
            const span = first
              ? "col-span-2 md:col-span-6"
              : img.orientation === "portrait"
                ? "col-span-1 md:col-span-2"
                : "col-span-2 md:col-span-3";
            const sizes = first ? "(min-width: 1440px) 1400px, 100vw" : img.orientation === "portrait" ? "(min-width: 768px) 30vw, 50vw" : "(min-width: 768px) 50vw, 100vw";
            return thumb(img, i, sizes, span);
          })}
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={ui.labels.gallery[locale]}
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
          touchX.current = null;
        }}
      >
        {current && (
          <div className="flex h-full flex-col" dir={rtl ? "rtl" : "ltr"}>
            <div className="flex items-center justify-between px-4 py-3 md:px-8">
              <span className="text-sm tabular-nums text-[#a3acbd]" dir="ltr" aria-live="polite">
                {String((index ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
              <button type="button" onClick={close} className="grid size-11 place-items-center rounded-sm hover:bg-white/10" aria-label={ui.a11y.close[locale]} autoFocus>
                <Close />
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-20" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={current.full}
                src={current.full}
                alt={current.alt}
                width={current.width}
                height={current.height}
                className="max-h-full max-w-full object-contain"
                style={current.blur ? { backgroundImage: `url(${current.blur})`, backgroundSize: "cover" } : undefined}
              />
              {images.length > 1 && (
                <>
                  <button type="button" onClick={() => go(-1)} aria-label={ui.a11y.prev[locale]} className="absolute start-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-sm hover:bg-white/10 md:grid">
                    {rtl ? <ChevronRight /> : <ChevronLeft />}
                  </button>
                  <button type="button" onClick={() => go(1)} aria-label={ui.a11y.next[locale]} className="absolute end-2 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-sm hover:bg-white/10 md:grid">
                    {rtl ? <ChevronLeft /> : <ChevronRight />}
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
              <p className="text-sm text-[#d8d4c8]">{current.alt}</p>
              {images.length > 1 && (
                <div className="flex gap-1 md:hidden">
                  <button type="button" onClick={() => go(-1)} aria-label={ui.a11y.prev[locale]} className="grid size-11 place-items-center rounded-sm bg-white/10">
                    {rtl ? <ChevronRight /> : <ChevronLeft />}
                  </button>
                  <button type="button" onClick={() => go(1)} aria-label={ui.a11y.next[locale]} className="grid size-11 place-items-center rounded-sm bg-white/10">
                    {rtl ? <ChevronLeft /> : <ChevronRight />}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
