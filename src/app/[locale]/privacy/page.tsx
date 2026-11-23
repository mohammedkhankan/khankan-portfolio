import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { privacy } from "@/content/pages";
import { isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/privacy", title: privacy.meta.title[l], description: privacy.meta.description[l] });
}

export default async function PrivacyPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  return (
    <div className="container-page pb-24 pt-12 md:pt-20">
      <div className="container-text">
        <h1 className="text-h1">{privacy.title[locale]}</h1>
        <div className="prose-case mt-10 text-lead text-ink/85">
          {privacy.body[locale].map((t, i) => <p key={i}>{t}</p>)}
        </div>
      </div>
    </div>
  );
}
