# DRKN Digital Studio

A responsive, original agency website built with Next.js App Router, TypeScript, Tailwind CSS 4, Lucide icons, and Framer Motion. Typography uses a performant system font stack. Portfolio photography is licensed from Pexels, optimized to local WebP files, and rendered with Next Image. Browser mockups are original components. No external image hotlinks or runtime font downloads.

## Run locally

Use Node.js 22 or newer and npm.

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://127.0.0.1:3000. Commands: `npm run lint`, `npm run typecheck`, `npm run build`, `npm start`. Run build before start. Commit the lockfile for reproducible dependency installation (`npm ci`).

## Pages

Home, Services, Pricing, Portfolio, About, Contact, Privacy, and Terms. Legal pages are visibly marked drafts and excluded from indexing and the sitemap. The three portfolio examples are fictional concepts, not client work. Mobile navigation, accessible FAQ accordion, contact validation, package-prefilled enquiries, and reduced-motion preferences are supported.

## Content editing

- `lib/config.ts`: brand identity, official email and phone, founder and location placeholders, social links, packages, services, concepts, FAQs.
- `app/page.tsx`: homepage narrative and process.
- `app/pricing/page.tsx`: illustrative care scope and custom package.
- `components/ui.tsx`: reusable cards and original concept visuals.
- `components/hero.tsx`, `app/globals.css`: visual identity, responsive layouts, and original abstract artwork.
- `lib/contact.ts`: shared client/server validation and accepted package/budget choices. Update accepted options and `components/contact-form.tsx` if adding packages.

## Real email setup

1. Create a Resend account and verify a domain you control.
2. Set server-only `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (a sender on your verified domain) in `.env.local` or your deployment environment. A Gmail recipient is supported, but Gmail is not a verified sender domain you control.
3. All DRKN enquiries are sent to **drkn915@gmail.com**, from the central `brand.email` in `lib/config.ts`. The public phone is **(915) 449-0822**, linked as `tel:+19154490822`. Legacy `NEXT_PUBLIC_CONTACT_EMAIL` and `CONTACT_TO_EMAIL` overrides are intentionally unused so they cannot silently route business enquiries elsewhere.
4. Restart or redeploy. Submit a test enquiry and verify receipt in the recipient mailbox and the provider dashboard before launch.

`POST /api/contact` validates inputs using Zod, checks a honeypot, rejects disallowed browser origins, limits accepted text size, and calls Resend on the server with a timeout. It sends plain text to prevent HTML injection. No secrets enter the client bundle, no database is used, and submitted data is not logged by the application. An unconfigured route returns 503 and the form visibly explains the setup requirement. Provider failure returns 502; a success means provider acceptance, not guaranteed inbox delivery. The live email integration has not been verified without credentials. Consider host-level rate limiting for public launch, since the honeypot is only a basic spam control.

## Deploy to Vercel

Import this repository in Vercel, select the Next.js preset, and retain the default build/output settings. Add environment values, configure your domain, then deploy. Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS origin without a trailing slash before building; sitemap and Open Graph URLs derive from it. Public variables are compiled into the build. The contact page is dynamically rendered to accept query parameters and expose configuration status without exposing secrets. The Desert Shine demo also renders dynamically to prefill its selected package. Other marketing pages are statically rendered.

## Before launch

Replace the `.example` site domain; complete founder biography and location; review all content, package scope, currency/tax treatment, and legal drafts with appropriate advisors; configure email and test end-to-end delivery; confirm host request-log retention and privacy disclosures. No analytics or tracking is installed. Do not describe concept work as client results. Legal pages intentionally remain drafts until owner review.

## Verification

Run lint, typecheck, and production build. Check all routes, mobile overflow/menu, keyboard focus, FAQ toggling, package links, and form validation. The API can be tested without credentials: invalid input returns 400; a filled honeypot returns 400; a valid enquiry with no email configuration returns 503. Avoid making real email requests during automated checks unless deliberately using a verified test destination.

### Checks completed during implementation

Production build, ESLint (including accessibility rules), TypeScript, and `npm run test:smoke` passed. The smoke check requires a running server (`npm start`) and verifies all page routes, SEO assets, the 404 page, Growth package prefill, invalid input, honeypot rejection, origin rejection, and the unconfigured-provider 503 response. Dependency audit reported zero vulnerabilities after the PostCSS override and lint dependency changes.

Visual browser QA could not run because the supplied browser plugin failed during initialization (`Cannot redefine property: process`). Responsive and interactive behavior is implemented, but should receive a desktop/mobile browser review before public launch. Live email delivery remains untested until credentials are configured.

## Portfolio update: Desert Shine

- `/portfolio/desert-shine` is a complete fictional auto-detailing demo, with independent navigation, cinematic photography, services, example pricing, gallery, benefits, FAQs, and a quote preview. It is marked noindex and intentionally excluded from the sitemap so it is not mistaken for a real local business.
- The demo form validates sample inputs and renders an on-page request preview. It makes **no network request**, sends no email, stores no personal data, and books no services. Do not connect it to the DRKN business contact route as if it were a real detailing company. A real detailing deployment would require a separate recipient, service terms, privacy notice, and booking/submission backend.
- Ember & Oak Restaurant and Greenstone Landscaping have photographic previews and explicit **Demo Coming Soon** labels. No nonexistent demo routes are linked.
- `lib/desert-shine.ts`: illustrative detailing packages and FAQ content.
- `components/desert-shine-interactive.tsx`: independent mobile navigation and local quote preview.
- `app/portfolio/desert-shine/page.tsx` and `desert-shine.css`: full demo page and scoped design.
- `components/studio-shell.tsx`: preserves studio navigation/footer everywhere except the independent demo.
- `lib/photos.ts` and `public/images/`: locally hosted images, meaningful alt text, static dimensions and blur placeholders. [Image credits](public/images/CREDITS.md) records each original photograph, photographer, and license.
- The gallery uses two different vehicles as process/finish references, explicitly not a before-and-after result or completed customer work. No testimonials or commercial performance claims are included.
- SEO Foundations was removed as a standalone service. Package SEO inclusions, page metadata, robots, sitemap, and accessibility remain intact.

### Portfolio update verification

The update passes `npm run lint`, `npm run typecheck`, `npm run build`, and the expanded `test:smoke` suite. Additional checks cover the five-card service lists, official mailto/tel links, portfolio live/coming-soon states, all three Desert Shine package prefills, independent demo navigation, concept disclosures, local WebP delivery, and Next Image optimization. The unconfigured contact API returns 503 as intended. Live email receipt is not verified because Resend credentials are absent. The browser plugin still fails to initialize, so desktop/mobile visual review and client interaction testing remain manual checks.
