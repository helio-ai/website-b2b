# YourLio for business

The landing page at **business.yourlio.com**: an AI agent, shared inbox and CRM for businesses that sell through a conversation (a call, a quote, a site visit or an appointment). Next.js 16, Tailwind CSS 4, statically prerendered.

The site is **one page**. Company, blog, comparison, case study, contact and legal pages live on [yourlio.com](https://yourlio.com); every other URL on this domain redirects to a section of the landing page or to yourlio.com (see `next.config.ts`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # prerender to .next
npm run lint
```

Pushing `feature/nextjs-site` deploys to production on Vercel (project `website-b2b`).

## Structure

```
app/
  page.tsx            the landing page: a list of sections, top to bottom
  layout.tsx          metadata, header, footer, site-wide JSON-LD
  sitemap.ts, robots.ts, not-found.tsx
components/
  ui.tsx              Container, Section, SectionHeading, Button, CtaPair, ProductShot
  Icon.tsx            lucide icon by name
  layout/             Header (jump links), Footer, Logo
  sections/           one file per page section (Hero, ProductAreas, Industries, Pricing, Faq, Demo...)
lib/
  site.ts             URLs, navigation and footer links
  landing.ts          which features each product section shows, and their video or screenshot
  shots.ts            product screenshots (800, 1600 and 4K widths)
  seo.tsx             schema.org JSON-LD
  copy/               page copy: features.ts, industries.ts
  yourlio/            YourLio facts: plans, FAQs, comparisons, case study cards, reviews, integrations, logos
public/               brand, logos, product videos and screenshots, review photos, llms.txt
```

## Editing

| To change | Edit |
| --- | --- |
| A feature's text | `lib/copy/features.ts` |
| Which features a section shows, or their video | `lib/landing.ts` |
| An industry's sample chat | `lib/copy/industries.ts` |
| Prices, FAQs, comparisons, steps | `lib/yourlio/index.ts` |
| Case study cards | `lib/yourlio/case-studies.ts` (full stories stay on yourlio.com) |
| Navigation and footer links | `lib/site.ts` |
| Colours (YourLio purple) and fonts | `app/globals.css` |
| Section order | `app/page.tsx` |

## Content rules

- Only claim what YourLio does. No invented results, certifications, customers or setup times.
- Figures come from published case studies, each with its reporting period.
- Review cards are summaries of Shopify App Store reviews and link to the originals.
- Sample leads in demos use made-up companies and the reserved `example.com` domain.
