import { projects } from "@/content/projects";

/** Per-project accent tokens (--p-<slug>) for both themes, generated from content. */
export function AccentStyles() {
  const dark = projects.map((p) => `--p-${p.slug}:${p.accent.dark}`).join(";");
  const light = projects.map((p) => `--p-${p.slug}:${p.accent.light}`).join(";");
  const css = `:root,[data-theme="dark"]{${dark}}[data-theme="light"]{${light}}`;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
