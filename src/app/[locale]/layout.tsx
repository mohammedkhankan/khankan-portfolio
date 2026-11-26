import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/content/types";
import { person, links, nameVariants, ui } from "@/content/site";
import { dirOf, isLocale } from "@/lib/i18n";
import { fontVars } from "@/lib/fonts";
import { themeScript } from "@/lib/theme-script";
import { SITE_URL } from "@/lib/seo";
import { asset } from "@/lib/base";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { AccentStyles } from "@/components/AccentStyles";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f100e" },
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: person.name[l], template: `%s — ${person.name[l]}` },
    applicationName: person.name[l],
    authors: [{ name: person.name.en }],
    creator: person.name.en,
    formatDetection: { telephone: false },
    icons: { icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }, { url: asset("/icon-192.png"), sizes: "192x192", type: "image/png" }], apple: asset("/apple-touch-icon.png") },
    manifest: asset("/manifest.webmanifest"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name[locale],
    alternateName: nameVariants.filter((n) => n !== person.name[locale]),
    ...(links.email ? { email: `mailto:${links.email}` } : {}),
    jobTitle: locale === "ar" ? "مؤسس ومدير تنفيذي، مهندس برمجيات" : "Founder & CEO, Software Engineer",
    url: `${SITE_URL}/${locale}/`,
    image: person.portrait ? `${SITE_URL}/portrait/portrait-800.webp` : undefined,
    homeLocation: { "@type": "Country", name: person.location[locale] },
    alumniOf: { "@type": "CollegeOrUniversity", name: locale === "ar" ? "الجامعة الافتراضية السورية" : "Syrian Virtual University" },
    worksFor: [
      { "@type": "Organization", name: "OFOQ Technical Solutions & Digitalization", alternateName: "شركة أفق للحلول التقنية والرقمنة", url: "https://ofoqsy.com/" },
      { "@type": "Organization", name: "RAFD", alternateName: "منصة رفد التعليمية", url: "https://rafd6.netlify.app/" },
    ],
    knowsAbout: ["Software Engineering", "Web Development", "Mobile Apps", "SaaS", "Business Systems", "PostgreSQL", "Next.js", "React", "TypeScript", "ASP.NET Core"],
    sameAs: [links.github, links.linkedin],
  };

  return (
    <html lang={locale} dir={dirOf(locale)} data-theme="dark" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <AccentStyles />
        <JsonLd data={personLd} />
      </head>
      <body className="min-h-dvh bg-bg text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:text-bg"
        >
          {ui.a11y.skip[locale]}
        </a>
        <Header locale={locale} />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
