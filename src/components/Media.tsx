import { asset } from "@/lib/base";
import type { Locale, MediaItem, Project } from "@/content/types";
import { person, ui } from "@/content/site";
import { getMedia, getPortrait, srcFor, srcSetFor } from "@/lib/media";
import { Gallery, type GalleryImage } from "./Gallery";

export function toGallery(slug: string, items: MediaItem[], locale: Locale): GalleryImage[] {
  return items.map((m) => {
    const mid = m.sizes.find((s) => s >= 1280) ?? m.sizes[m.sizes.length - 1];
    return {
      src: srcFor(slug, m, mid),
      full: srcFor(slug, m, m.sizes[m.sizes.length - 1]),
      srcSet: srcSetFor(slug, m),
      width: m.width,
      height: m.height,
      alt: m.alt[locale],
      orientation: m.orientation,
      blur: m.blur,
    };
  });
}

export function heroOf(project: Project) {
  const media = getMedia(project.slug);
  return media.find((m) => m.role === "hero") ?? null;
}

/** Responsive <img> for one manifest item. */
export function MediaImg({ slug, item, locale, sizes, priority = false, className = "" }: { slug: string; item: MediaItem; locale: Locale; sizes: string; priority?: boolean; className?: string }) {
  const largest = item.sizes[item.sizes.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={srcFor(slug, item, item.sizes.find((s) => s >= 1280) ?? largest)}
      srcSet={srcSetFor(slug, item)}
      sizes={sizes}
      width={item.width}
      height={item.height}
      alt={item.alt[locale]}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}

/** Project showcase image, or a typographic plate when none exists yet. */
export function ProjectHeroImage({ project, locale, priority = false, sizes = "100vw", className = "" }: { project: Project; locale: Locale; priority?: boolean; sizes?: string; className?: string }) {
  const hero = heroOf(project);
  if (hero) return <MediaImg slug={project.slug} item={hero} locale={locale} sizes={sizes} priority={priority} className={`h-auto w-full ${className}`} />;
  return <Plate project={project} locale={locale} className={className} />;
}

/** Shown in place of screenshots that haven't arrived. Honest by design: never a fake UI. */
export function Plate({ project, locale, className = "" }: { project: Project; locale: Locale; className?: string }) {
  return (
    <div
      className={`relative flex aspect-[16/10] w-full flex-col justify-end overflow-hidden rounded-[var(--radius-lg)] p-6 md:p-10 ${className}`}
      style={{ background: project.chapter.bg, color: project.chapter.ink }}
      role="img"
      aria-label={`${project.name[locale]} — ${ui.labels.awaiting[locale]}`}
    >
      <div className="horizon-line pointer-events-none absolute inset-x-0 top-[38%] opacity-60" aria-hidden />
      <p className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-none" aria-hidden>{project.name[locale]}</p>
      <p className="mt-4 max-w-md text-sm" style={{ color: project.chapter.sub }} aria-hidden>{ui.labels.awaiting[locale]}</p>
    </div>
  );
}

/** Gallery of real images (excluding the hero), or an honest pending state. */
export function ProjectGallery({ project, locale, layout }: { project: Project; locale: Locale; layout?: "editorial" | "strip" }) {
  const media = getMedia(project.slug);
  const hero = heroOf(project);
  const rest = media.filter((m) => m.file !== hero?.file);
  if (rest.length) return <Gallery images={toGallery(project.slug, rest, locale)} locale={locale} layout={layout} />;

  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-line-strong p-6 md:p-10">
      <p className="font-display text-h4">{ui.labels.awaiting[locale]}</p>
      <p className="mt-3 max-w-2xl text-muted">{project.pendingMedia?.[locale]}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {project.shots.map((s) => <li key={s.key} className="tag">{s.label[locale]}</li>)}
      </ul>
    </div>
  );
}

/** Gallery for an auxiliary image set (e.g. engineering diagrams). */
export function ExtraGallery({ slug, locale }: { slug: string; locale: Locale }) {
  const media = getMedia(slug);
  if (!media.length) return null;
  return <Gallery images={toGallery(slug, media, locale)} locale={locale} layout="editorial" />;
}

/** Framed portrait (rectangular photo). */
export function Portrait({ locale, className = "", priority = false, sizes = "(min-width: 1024px) 34vw, 80vw" }: { locale: Locale; className?: string; priority?: boolean; sizes?: string }) {
  const p = person.portrait ? getPortrait() : null;
  if (!p) {
    return (
      <div className={`grid aspect-[4/5] place-items-center bg-raise ${className}`} role="img" aria-label={person.name[locale]}>
        <span className="font-display text-[5rem] text-muted">{person.initials[locale]}</span>
      </div>
    );
  }
  const mid = p.sizes.find((s) => s >= 800) ?? p.sizes[p.sizes.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(`/portrait/portrait-${mid}.webp`)}
      srcSet={p.sizes.map((s) => `${asset(`/portrait/portrait-${s}.webp`)} ${s}w`).join(", ")}
      sizes={sizes}
      width={p.width}
      height={p.height}
      alt={locale === "ar" ? `صورة ${person.name.ar}` : `Portrait of ${person.name.en}`}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ backgroundImage: `url(${p.blur})`, backgroundSize: "cover" }}
      className={`aspect-[4/5] h-auto w-full object-cover ${className}`}
    />
  );
}

/** Background-free portrait for the horizon hero. Falls back to the framed photo. */
export function CutoutPortrait({ locale, className = "", sizes }: { locale: Locale; className?: string; sizes: string }) {
  const p = person.portrait ? getPortrait() : null;
  if (!p?.cutout) return <Portrait locale={locale} priority className={className} sizes={sizes} />;
  const c = p.cutout;
  const mid = c.sizes.find((s) => s >= 900) ?? c.sizes[c.sizes.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(`/portrait/cutout-${mid}.webp`)}
      srcSet={c.sizes.map((s) => `${asset(`/portrait/cutout-${s}.webp`)} ${s}w`).join(", ")}
      sizes={sizes}
      width={c.width}
      height={c.height}
      alt={locale === "ar" ? `صورة ${person.name.ar}` : `Portrait of ${person.name.en}`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className={className}
    />
  );
}
