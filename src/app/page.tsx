import type { Metadata } from "next";
import { fontVars } from "@/lib/fonts";
import { BASE } from "@/lib/base";

// "/" picks the visitor's language: saved choice → browser language → Arabic.
// Works as a static file; <noscript>/meta-refresh fall back to Arabic.
export const metadata: Metadata = {
  title: "Mohammed Khankan — محمد خانكان",
  robots: { index: false, follow: true },
};

const pick = `(function(){var l;try{l=localStorage.getItem('lang')}catch(e){}if(l!=='ar'&&l!=='en'){l=((navigator.language||'').toLowerCase().indexOf('ar')===0)?'ar':((navigator.language||'').toLowerCase().indexOf('en')===0?'en':'ar')}location.replace('${BASE}/'+l+'/')})();`;

export default function Root() {
  return (
    <html lang="ar" dir="rtl" className={fontVars} data-theme="dark">
      <head>
        <meta httpEquiv="refresh" content={`2;url=${BASE}/ar/`} />
        <link rel="alternate" hrefLang="ar" href={`${BASE}/ar/`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en/`} />
        <script dangerouslySetInnerHTML={{ __html: pick }} />
      </head>
      <body className="grid min-h-dvh place-items-center bg-bg text-ink">
        <p className="flex gap-6 text-lg">
          <a href={`${BASE}/ar/`}>العربية</a>
          <a href={`${BASE}/en/`} lang="en">English</a>
        </p>
      </body>
    </html>
  );
}
