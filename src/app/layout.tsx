import "./globals.css";

// The <html> element lives in app/[locale]/layout.tsx so lang/dir are correct per locale.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
