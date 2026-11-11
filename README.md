# Website template

A Next.js 16 + Tailwind CSS 4 marketing site: about 270 routes with a mega-menu header, a mobile drawer, a footer and responsive layouts. Every piece of copy, image and logo is a placeholder for you to replace.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` prerenders every page as static HTML.

## Where to edit

| What | File |
| --- | --- |
| Brand name, header menus, footer links | `lib/site.ts` |
| Route data: product pages, industries, integrations, comparisons, customer stories, FAQs, legal pages | `lib/content.ts` |
| Colours, font and other design tokens | `app/globals.css` (`@theme` block) |
| Logo | `components/Logo.tsx` |
| Shared sections (hero, feature grid, FAQ, CTA, story cards…) | `components/ui.tsx` |
| Header and mobile menu | `components/Header.tsx` |
| Footer | `components/Footer.tsx` |

## Route map

| Route | Source |
| --- | --- |
| `/` | `app/page.tsx` |
| `/pricing`, `/about`, `/careers`, `/contact`, `/demo`, `/press`, `/reseller`, `/referral`, `/partner-directory` | own folder in `app/` |
| `/whatsapp-link-generator`, `/whatsapp-qr-code-generator`, `/whatsapp-pricing-calculator` | working tools in `components/tools/` |
| Product, solution, WhatsApp, platform, partner story and legal pages (`/team-inbox`, `/ai-agents`, `/privacy-policy`, …) | `app/[slug]/page.tsx`, driven by `featurePages` and `legalPages` |
| `/industry/[slug]` (21) | `app/industry/[slug]/page.tsx` |
| `/integrations` + `/integrations/[slug]` (45) | search and filters in `components/IntegrationsBrowser.tsx` |
| `/customers` + `/customers/[slug]` (49) | industry filter in `components/CustomersBrowser.tsx` |
| `/faqs` + `/faqs/[slug]` (89) | `app/faqs/` |
| `/alternatives` + `/alternatives/[slug]` (5) | `app/alternatives/` |
| `/blog`, `/help`, `/video-tutorials` | "coming soon" stubs, so nav links don't 404 |

To add a page, add an entry to the matching list in `lib/content.ts`.

## Still to wire up

- Forms (`components/LeadForm.tsx`) only show a success message. Connect them to your CRM or form backend.
- Login and sign-up links point to `#login` and `#signup` (`lib/site.ts`).
- Prices and rates in the pricing page, calling rate table and pricing calculator are placeholders.
- The language switcher is UI only. Translated routes aren't built.
