# Verification report — v1 (2026-11-23)

## Done
- 29 static pages: Home, About, Projects index (with category filter), Leadership & Experience, Contact, Privacy, and 6 case studies (RUKN, OFOQ Restaurant OS, MAAZEEM, RAFD, RAFD Financial System, AL TAYF) — all in Arabic (RTL) and English (LTR).
- Language choice persists (`/` returns to the last language); the language switch keeps the current page; dark/light theme persists without flash.
- Real portrait integrated (hero, About page, Open Graph image).
- 12 engineering figures (HTML/CSS, bilingual, conceptual, no infrastructure details).
- Accessible lightbox gallery (native `<dialog>`, keyboard, swipe, captions, lazy full-size loading).
- SEO: unique titles/descriptions, canonical + hreflang (ar/en/x-default), Open Graph/Twitter cards with per-project images, sitemap.xml, robots.txt, Person / CreativeWork / BreadcrumbList JSON-LD.
- Security: no secrets, no forms, no third-party requests; CSP and security headers in `public/_headers`; external links use `noopener noreferrer`.
- Company name updated to «شركة أفق للحلول التقنية والرقمنة» / "OFOQ Technical Solutions & Digitalization".

## Tests actually run
| Check | Result |
|---|---|
| `tsc --noEmit` | pass |
| `eslint .` | pass, 0 warnings |
| `next build` | pass, 29/29 pages |
| All 24 pages × 7 widths (360, 390, 430, 768, 1024, 1440, 1920) in headless Chrome | HTTP 200, **no horizontal overflow**, no console errors or warnings, no broken images |
| Internal links (every `href` on every page) | all 200 |
| Tap targets < 24px at 390px | none (except the skip link, which is visually hidden until focused) |
| Lightbox (desktop + mobile, EN + AR) | opens with Enter; ←/→ navigation (mirrored in RTL); focus kept inside; Esc closes; focus returns to the thumbnail. Tested with temporary placeholder images that were deleted afterwards. |
| Mobile menu | opens; Esc closes; focus trapped; closes after navigating |
| Theme toggle + language switch | works; preserved across navigation |
| Local performance, 390px, unthrottled, local server | LCP ≈ 190 ms, CLS 0.000, ~1.08 MB uncompressed incl. portrait, 477 KB JS uncompressed (Next/React runtime). **These aren't Lighthouse scores or real-network numbers.** Measure again after deploying. |

## Remaining / waiting for input
- **Image packages not received**: `RUKN_Portfolio_Enhanced(1).zip`, `OFOQ_PORTFOLIO_VISUAL_ASSETS.zip`, `maazeem-portfolio.zip`, `ALTAYF_PORTFOLIO_ASSETS.zip`. Access to Downloads/Projects on the computer was declined, so they couldn't be read. Every slot shows an honest "awaiting screenshots" state; drop the images in `assets-src/<slug>/` and run `npm run images`.
- **Technical reports not read** (same reason). Please confirm against the reports:
  - RUKN: project status (shown as "in development"), feature list, and whether Cloudflare and Bunny are active.
  - MAAZEEM: the "least-privilege links" description of the host/check-in links.
  - AL TAYF: Bunny is described as being in the source only, not in the deployed site.
- RAFD and RAFD Financial System: screenshots and technical reports pending; their stack lists are intentionally empty.
- Final domain: not set (`NEXT_PUBLIC_SITE_URL`). Nothing has been deployed.
- No original project was modified.
