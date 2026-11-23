// Minimal hand-drawn icon set (1.5px strokes) — only what's used.
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const ArrowRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" className={className} {...base}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Sun = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...base}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="18" height="18" className={className} {...base}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
);
export const Close = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="22" height="22" className={className} {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Plus = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" className={className} {...base}><path d="M12 5v14M5 12h14" /></svg>
);
export const ChevronLeft = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" className={className} {...base}><path d="m15 6-6 6 6 6" /></svg>
);
export const ChevronRight = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="24" height="24" className={className} {...base}><path d="m9 6 6 6-6 6" /></svg>
);
export const Expand = ({ className }: P) => (
  <svg viewBox="0 0 24 24" width="16" height="16" className={className} {...base}><path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" /></svg>
);
