export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

/** A localized string. */
export type L = Record<Locale, string>;
/** Localized paragraphs / list items. */
export type LL = Record<Locale, string[]>;

export type CategoryKey = "saas" | "business" | "edtech" | "corporate" | "internal";

export type StatusKey = "trial" | "in-use" | "live" | "internal" | "in-development";

/** Visual treatment of the case study. Content model is shared; presentation varies. */
export type Variant = "product" | "operations" | "workflow" | "leadership" | "internal" | "client";

export type DiagramKey =
  | "rukn-architecture"
  | "rukn-isolation"
  | "rukn-order-flow"
  | "ofoq-state"
  | "ofoq-flow"
  | "ofoq-architecture"
  | "maazeem-workflow"
  | "maazeem-checkin"
  | "maazeem-architecture"
  | "rafd-ecosystem"
  | "rafd-finance-flow"
  | "altayf-journey";

export interface StackItem {
  name: string;
  /** Optional qualifier, e.g. "per technical report" or "in progress". */
  note?: L;
}

export interface Feature {
  title: L;
  body?: L;
}

export interface Decision {
  title: L;
  body: L;
}

/** A screen the case study expects. Used to label images and to describe pending ones. */
export interface ShotSlot {
  key: string;
  label: L;
}

export interface Project {
  slug: string;
  order: number;
  featured: boolean;
  variant: Variant;
  category: CategoryKey;
  name: L;
  /** Short line under the name. */
  tagline: L;
  /** One-paragraph summary for cards and meta descriptions (≤ 160 chars per locale ideally). */
  summary: L;
  kind: L;
  role: L;
  status: StatusKey;
  statusNote?: L;
  stack: StackItem[];
  url?: string;
  /** Accent used for small markers only. */
  accent: { dark: string; light: string };
  facts?: { label: L; value: L }[];
  context: LL;
  challenge: LL;
  strategy: LL;
  solution: LL;
  features: Feature[];
  engineering: LL;
  /** Short list of engineering topics (e.g. tenant isolation). */
  engineeringTopics?: Feature[];
  decisions: Decision[];
  results: LL;
  currentStatus: LL;
  next: LL;
  diagrams: DiagramKey[];
  shots: ShotSlot[];
  /** Message shown where real media is not yet available. */
  pendingMedia?: L;
}

/** Image entry produced by scripts/optimize-images.mjs into public/projects/<slug>/manifest.json */
export interface MediaItem {
  file: string; // base name without size suffix, e.g. "dashboard"
  width: number;
  height: number;
  sizes: number[]; // available widths, e.g. [640, 1280, 1920]
  orientation: "landscape" | "portrait" | "square";
  alt: L;
  role?: "hero" | "gallery" | "mobile" | "detail";
  order?: number;
  blur?: string; // tiny data-URI placeholder
}
