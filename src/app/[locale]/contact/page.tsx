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
  const channels = [
    { name: "WhatsApp", url: links.whatsapp, d: contact.channels.whatsapp, handle: "+966 51 037 1924", primary: true },
    { name: "LinkedIn", url: links.linkedin, d: contact.channels.linkedin, handle: "mohammed-tarek-533a2a214" },
    { name: "GitHub", url: links.github, d: contact.channels.github, handle: "mohammedkhankan" },
  ];
  return (
    <div className="container-page pb-24 pt-12 md:pt-20">
      <header className="grid gap-6 pb-14 md:grid-cols-12" data-reveal>
        <div className="md:col-span-3"><p className="annot annot-ar">{ui.nav.contact[locale]}</p></div>
        <div className="md:col-span-9">
          <h1 className="text-display leading-[1.05]">{contact.title[locale]}</h1>
          <p className="mt-6 max-w-2xl text-lead text-muted">{contact.lead[locale]}</p>
        </div>
      </header>

      <ul className="border-t border-line">
        {channels.map((c) => (
          <li key={c.name} className="border-b border-line" data-reveal>
            <ExternalLink locale={locale} href={c.url} className="group grid gap-2 py-8 md:grid-cols-12 md:items-center md:gap-8">
              <span className="md:col-span-3 text-sm text-muted">{c.d[locale]}</span>
              <span className={`md:col-span-5 font-display ${c.primary ? "text-h1" : "text-h2"} transition-colors group-hover:text-accent`}>{c.name}</span>
              <span className="flex items-center justify-between gap-4 md:col-span-4">
                <span className="font-mono text-xs text-muted" dir="ltr">{c.handle}</span>
                <ArrowUpRight className="flip-rtl transition-transform group-hover:-translate-y-0.5" />
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>

      <section className="mt-20 grid ruled md:grid-cols-3" aria-label={person.name[locale]}>
        {contact.audiences.map((a) => (
          <div key={a.t.en} className="bg-bg p-6 md:p-8" data-reveal>
            <h2 className="font-display text-h4">{a.t[locale]}</h2>
            <p className="mt-2 text-sm text-muted">{a.d[locale]}</p>
          </div>
        ))}
      </section>
      <p className="mt-8 text-sm text-muted">{person.location[locale]}</p>
    </div>
  );
}
