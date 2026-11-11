# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

`website-b2b` is **YourLio for business**, the marketing site for businesses
that sell through a conversation (a call, a quote or a site visit), meant for
`https://b2b.yourlio.com`. It is a sibling of `website-v2`, the main
`yourlio.com` site for Shopify brands, and shares no code with it at runtime.
Company, contact, legal and integrations pages stay on yourlio.com and are
linked from here (`MAIN_LINKS` in `src/lib/site.js`).

A Vite + React 19 single page app, prerendered to static HTML. No Tailwind
and no animation library.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # scripts/prerender.mjs: client build, SSR build, prerender every route to dist/
npm run preview   # serve the built dist/
npm run lint      # ESLint
npm run images    # rebuild public/images/ (WebP pictures and share cards) from content/photos/
```

## Structure

- `src/App.jsx`: routes. `/` is the home page, `/industries/:slug` one page
  per industry, everything else the 404 page.
- `src/data/industries.js`: all content. Each industry carries the demo
  conversation (`visitor`, `q1`, `q2`, `whatsapp` and the widget copy) and its
  page (`B2B_PAGES`: search title and description, headline, intro, three
  FAQs, photo and share card). Adding an industry is one entry in
  `B2B_INDUSTRIES` plus one in `B2B_PAGES`; routes, sitemap, nav, footer and
  llms.txt pick it up from there.
- `src/components/ChatDemo.jsx`: the replica of the live YourLio chat widget
  and the lead record that fills in beside it. Colours and sizes were measured
  from a recording of the real widget; keep it matching the product.
- `src/components/Sections.jsx`: the sections every page is built from, in one
  order. `Layout.jsx` adds the nav, closing call to action and footer.
- `src/lib/seo.js`: head tags per route, schema.org JSON-LD, the route list and
  llms.txt. The prerender and client navigation both read it.
- `src/pages/site.css` (page sections and the widget) and
  `src/components/chrome.css` (nav, footer, FAQ, 404). Design tokens are CSS
  variables in `src/styles.css`: midnight `#070d24`, navy `#0c184a`, blue
  `#4f7cff`, green `#22d3a6` only for qualified and booked states.

## Rules

- **No dashes in shipped copy.** No em dashes, en dashes or spaced hyphens in
  text, alt text or titles. Hyphenated words like "15-minute" are fine.
- Only claim what the product does. The demo shows answering, tap options,
  details collected in the chat, booking a call with an emailed invite, the
  shared inbox and WhatsApp follow up. Do not add setup time claims.
- The people in the photos are illustrative, never customers. Sample lead
  details use the reserved example.com domain.
- Search titles stay at 60 characters or fewer and descriptions at 158 or
  fewer.
- The demo booking opens Cal.com as an on-site modal (`src/lib/cal.js`), loaded
  on first click so it stays out of the first page load.

## Not set up yet

- Analytics. The main site's GA4 and PostHog setup is not copied here.
- Hosting. Deploy as its own Vercel project and point `b2b.yourlio.com` at it
  with a CNAME at Hostinger, where yourlio.com's DNS is managed.
