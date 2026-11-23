import { fontVars } from "@/lib/fonts";
import { BASE } from "@/lib/base";

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl" className={fontVars} data-theme="dark">
      <body className="grid min-h-dvh place-items-center bg-bg p-8 text-ink">
        <div className="text-center">
          <p className="font-mono text-sm text-muted" dir="ltr">404</p>
          <h1 className="mt-4 font-display text-h2">الصفحة غير موجودة</h1>
          <p lang="en" dir="ltr" className="mt-2 text-muted">Page not found</p>
          <p className="mt-8 flex justify-center gap-6">
            <a className="underline" href={`${BASE}/ar/`}>الرئيسية</a>
            <a className="underline" lang="en" href={`${BASE}/en/`}>Home</a>
          </p>
        </div>
      </body>
    </html>
  );
}
