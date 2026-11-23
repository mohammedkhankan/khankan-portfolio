/** Sub-path the site is served under (e.g. "/khankan-portfolio" on GitHub Pages). Empty at a domain root. */
export const BASE = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");
/** Prefix a root-relative static asset path with the base path (next/link does this automatically for pages). */
export const asset = (p: string) => `${BASE}${p}`;
