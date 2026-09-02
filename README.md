# Fortivex CRM — Marketing Website

Premium marketing site for **Fortivex.AI CRM**, the admissions & student
lifecycle CRM. Built with Next.js 16 (App Router) + TypeScript.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3010
```

The CRM app itself runs on port 3002, so this site uses **3010** to avoid a clash.

```bash
npm run build && npm start   # production
```

> **First run:** if a `node_modules` folder already exists, delete it before
> `npm install` — an earlier partial install may be in there.

---

## Where to edit things

| I want to change… | Edit this |
|---|---|
| Pricing, stats, testimonials, FAQs, contact details, nav, footer links | `src/content/site.ts` |
| Colours, spacing, shadows, typography, every section's styling | `src/app/globals.css` (design tokens live in `:root` at the top) |
| Page order / which sections appear | `src/app/page.tsx` |
| SEO title, description, OG tags, favicon | `src/app/layout.tsx` |

**`src/content/site.ts` is the file to hand to a non-developer.** Anything marked
`// TODO` in there is a placeholder that should be replaced before launch:
pricing, customer counts, testimonials, email, phone, WhatsApp number and
social links.

---

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, favicon
    page.tsx          section order
    globals.css       design system + all section styles + motion layer
  content/
    site.ts           ALL editable copy and data
  components/
    Nav / Hero / Stats / Problem / Lifecycle / Features /
    Showcase / Roles / Modules / Integrations / Testimonials /
    Pricing / FAQ / CTA / Footer          ← page sections
    DashboardMock / LeadsMock /
    PipelineMock / ReportsMock / Frame    ← product UI recreations
    Motion / Tilt / CountUp / Reveal      ← animation primitives
```

### Product visuals

The four screens in the hero and "Inside the product" tabs are **CSS
recreations** of the real CRM (`*Mock.tsx`), not screenshots. They stay crisp at
any resolution, respond to the brand palette, and never show empty demo data.

To swap in real screenshots instead: drop PNGs into `public/shots/` and replace
the `render: () => <DashboardMock />` entries in `src/components/Showcase.tsx`
with `next/image` tags.

---

## Motion

| Effect | Where |
|---|---|
| Scroll-progress bar, cursor spotlight on cards | `Motion.tsx` |
| 3D tilt on the hero product frame | `Tilt.tsx` |
| Stat counters that animate on scroll | `CountUp.tsx` |
| Section fade-and-lift on scroll | `Reveal.tsx` |
| Drifting aurora, gradient sheen, button shine, chart grow-in, staggered chips | `globals.css` → "MOTION LAYER" |

Everything is disabled automatically under `prefers-reduced-motion: reduce`.

---

## Domains & subdomains

Every URL on the site comes from two environment variables — nothing is
hard-coded. Copy `.env.example` to `.env.local` and set them:

```bash
NEXT_PUBLIC_SITE_URL=https://fortivex.ai        # where THIS site is served
NEXT_PUBLIC_APP_URL=https://app.fortivex.ai     # where the CRM app is served
```

They are read at **build time**, so rebuild (or redeploy) after changing them.

Setting these controls, in one shot:

- the **Log in** link in the nav and the signup link
- the host shown in the browser-chrome bar of every product mockup
  (hero + the four "Inside the product" tabs)
- `metadataBase`, the canonical URL and `og:url`
- `/robots.txt` and `/sitemap.xml`

### Typical arrangement

| Host | Serves | Env |
|---|---|---|
| `fortivex.ai` | this marketing site | `NEXT_PUBLIC_SITE_URL` |
| `app.fortivex.ai` | the CRM app (`Fortivex_CRM`, port 3002) | `NEXT_PUBLIC_APP_URL` |

If instead the marketing site goes on a subdomain (say `www.fortivex.ai` or
`crm.fortivex.ai`), just point `NEXT_PUBLIC_SITE_URL` at it — nothing else changes.

### DNS

Point an `A` record (or `CNAME` to your host) for each subdomain, then add the
domain in your hosting provider so TLS is issued. On Vercel: Project → Settings →
Domains → add `fortivex.ai`, and add `app.fortivex.ai` on the CRM project.

Set the same two variables in the host's environment-variable settings —
`.env.local` is local-only and is not committed.

---

## Deploying

Zero-config on Vercel: import the repo, framework auto-detects as Next.js.
For any Node host: `npm run build` then `npm start`.

Before going live: set the two environment variables above in your host, replace
every `// TODO` in `src/content/site.ts`, and add an OG image at `public/og.png`.
