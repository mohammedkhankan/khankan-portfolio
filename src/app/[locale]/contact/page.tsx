import type { Metadata } from "next";
import type { Locale } from "@/content/types";
import { links, person, ui } from "@/content/site";
import { contact } from "@/content/pages";
import { isLocale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { ExternalLink } from "@/components/Footer";
import { ArrowUpRight } from "@/components/Icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = (isLocale(locale) ? locale : "ar") as Locale;
  return pageMeta({ locale: l, path: "/contact", title: contact.meta.title[l], description: contact.meta.description[l] });
}

export default async function ContactPage({ params }: Props) {
  const locale = (await params).locale as Locale;
  const rtl = locale === "ar";
  const channels = [
    { name: "WhatsApp", url: links.whatsapp, d: contact.channels.whatsapp, handle: "+966 51 037 1924" },
    { name: "LinkedIn", url: links.linkedin, d: contact.channels.linkedin, handle: "mohammed-tarek-533a2a214" },
    { name: "GitHub", url: links.github, d: contact.channels.github, handle: "mohammedkhankan" },
  ];
  return (
    <div className="container-page pb-24 pt-14 md:pt-20">
      <header className="max-w-4xl pb-14">
        <p className="text-sm text-muted">{ui.nav.contact[locale]}</p>
        <h1 className="mt-4 text-h1">{contact.title[locale]}</h1>
        <p className="mt-6 max-w-2xl text-lead text-muted">{contact.lead[locale]}</p>
      </header>

      <ul className="grid gap-4 md:grid-cols-3">
        {channels.map((c, i) => (
          <li key={c.name}>
            <ExternalLink
              locale={locale}
              href={c.url}
              className={`group flex h-full min-h-56 flex-col justify-between rounded-[var(--radius-xl)] p-7 transition-colors ${i === 0 ? "bg-ink text-bg hover:bg-glow hover:text-night" : "bg-surface ring-1 ring-line hover:ring-ink"}`}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="text-sm opacity-75">{c.d[locale]}</span>
                <ArrowUpRight className={rtl ? "-scale-x-100" : ""} />
              </span>
              <span>
                <span className="block font-display text-h2">{c.name}</span>
                <span className="mt-1 block text-sm opacity-75" dir="ltr">{c.handle}</span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>

      <section className="mt-20 grid gap-10 md:grid-cols-3" aria-label={person.name[locale]}>
        {contact.audiences.map((a) => (
          <div key={a.t.en} className="border-t border-line pt-5">
            <h2 className="font-display text-h4">{a.t[locale]}</h2>
            <p className="mt-2 text-muted">{a.d[locale]}</p>
          </div>
        ))}
      </section>
      <p className="mt-10 text-sm text-muted">{person.location[locale]}</p>
    </div>
  );
}
