import { asset } from "@/lib/base";
import type { Locale, MediaItem, Project } from "@/content/types";
import { person, ui } from "@/content/site";
import { getMedia, getPortrait, srcFor, srcSetFor } from "@/lib/media";
import { Gallery, type GalleryImage } from "./Gallery";

function toGallery(slug: string, items: MediaItem[], locale: Locale): GalleryImage[] {
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
  return media.find((m) => m.role === "hero") ?? media.find((m) => m.orientation === "landscape") ?? null;
}

/** Project hero image, or a designed plate when official images are not yet available. */
export function ProjectHeroImage({ project, locale, priority = false, sizes = "100vw", className = "", index = false }: { project: Project; locale: Locale; priority?: boolean; sizes?: string; className?: string; index?: boolean }) {
  const hero = heroOf(project);
  if (hero) {
    const largest = hero.sizes[hero.sizes.length - 1];
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={srcFor(project.slug, hero, hero.sizes.find((s) => s >= 1280) ?? largest)}
        srcSet={srcSetFor(project.slug, hero)}
        sizes={sizes}
        width={hero.width}
        height={hero.height}
        alt={hero.alt[locale]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={hero.blur ? { backgroundImage: `url(${hero.blur})`, backgroundSize: "cover" } : undefined}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return <Plate project={project} locale={locale} className={className} index={index} />;
}

/**
 * Typographic "drawing sheet" shown in place of missing screenshots.
 * Honest by design: it lists the screens that will be shown, never fakes a UI.
 */
export function Plate({ project, locale, className = "", index = false }: { project: Project; locale: Locale; className?: string; index?: boolean }) {
  return (
    <div
      className={`grid-paper relative flex h-full min-h-[16rem] w-full flex-col justify-between overflow-hidden bg-surface p-6 md:p-10 ${className}`}
      style={{ ["--p" as string]: `var(--p-${project.slug})` }}
      role="img"
      aria-label={`${project.name[locale]} — ${ui.labels.awaiting[locale]}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="annot annot-ar">{project.kind[locale]}</span>
        <span className="size-2.5 rounded-full bg-project" aria-hidden />
      </div>
      {index ? (
        <ol className="my-6 grid gap-1.5" aria-hidden>
          {project.shots.map((s, i) => (
            <li key={s.key} className="flex items-baseline gap-4 border-b border-line pb-1.5 font-display text-h4 text-ink/80">
              <span className="font-mono text-xs text-project" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
              {s.label[locale]}
            </li>
          ))}
        </ol>
      ) : (
        <p className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-tight text-ink/90" aria-hidden>
          {project.name[locale]}
        </p>
      )}
      <div className={`flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-4 ${index ? "hidden" : ""}`} aria-hidden>
        {project.shots.slice(0, 5).map((s, i) => (
          <span key={s.key} className="text-xs text-muted">
            <span className="font-mono" dir="ltr">{String(i + 1).padStart(2, "0")}</span> {s.label[locale]}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Gallery of real images, or an honest pending state listing expected screens. */
export function ProjectGallery({ project, locale, layout }: { project: Project; locale: Locale; layout?: "editorial" | "strip" }) {
  const media = getMedia(project.slug);
  const hero = heroOf(project);
  const rest = media.filter((m) => m.file !== hero?.file);
  if (rest.length) return <Gallery images={toGallery(project.slug, rest, locale)} locale={locale} layout={layout} />;

  return (
    <div className="rounded-md border border-dashed border-line-strong p-6 md:p-10" data-reveal>
      <p className="annot annot-ar">{ui.labels.awaiting[locale]}</p>
      <p className="mt-3 max-w-2xl text-muted">{project.pendingMedia?.[locale]}</p>
      <p className="mt-8 mb-4 text-sm font-medium">{ui.labels.pendingScreens[locale]}</p>
      <ol className="grid grid-cols-1 ruled sm:grid-cols-2 lg:grid-cols-3">
        {project.shots.map((s, i) => (
          <li key={s.key} className="flex items-center gap-3 bg-bg px-4 py-3 text-sm">
            <span className="font-mono text-xs text-muted" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
            {s.label[locale]}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Portrait with graceful fallback to a monogram. */
export function Portrait({ locale, className = "", priority = false, sizes = "(min-width: 1024px) 34vw, 80vw" }: { locale: Locale; className?: string; priority?: boolean; sizes?: string }) {
  const p = person.portrait ? getPortrait() : null;
  if (!p) {
    return (
      <div className={`grid aspect-[4/5] place-items-center bg-surface-2 ${className}`} role="img" aria-label={person.name[locale]}>
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
      alt={locale === "ar" ? `صورة شخصية لـ${person.name.ar}` : `Portrait of ${person.name.en}`}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ backgroundImage: `url(${p.blur})`, backgroundSize: "cover" }}
      className={`aspect-[4/5] h-auto w-full object-cover ${className}`}
    />
  );
}
