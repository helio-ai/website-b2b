import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, CtaBand, FaqSection, RatingsBand, Section, SectionHeading, Button } from "@/components/ui";
import { PricingPlans } from "@/components/PricingPlans";
import { aiCrm, plans, suites } from "@/lib/yourlio";
import { JsonLd, ORG_ID, pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "YourLio for Business Pricing: AI Agent, CRM and Suites | YourLio",
  description: "AI Agent plans from $49 a month for 250 conversations, unlimited seats. AI CRM & Helpdesk at one flat team price. Social and Marketing suites as add ons.",
  path: "/pricing",
});

const faqs = [
  { q: "How much does YourLio cost for a business?", a: "AI Agent plans start at $49 a month for 250 AI conversations, with Growth at $119, Pro at $249 and Scale at $399. AI CRM & Helpdesk is one flat price for the whole team, quoted on a call. Prices are in USD." },
  { q: "Do you charge per seat?", a: "No. Every AI Agent plan includes unlimited team seats, so your whole team can use the shared inbox and step into chats." },
  { q: "What happens if we go over our conversation allowance?", a: "Extra conversations are billed monthly at your plan's overage rate, from $0.30 on Starter down to $0.12 on Scale. You can set a spend cap so costs stay predictable." },
  { q: "Are WhatsApp and calling charges included?", a: "No. Meta messaging fees and carrier calling charges are separate. For WhatsApp you pay Meta directly, with no YourLio markup." },
  { q: "What is the difference between AI Agent and AI CRM & Helpdesk?", a: "The AI Agent talks to your leads and customers on your website, WhatsApp, Instagram and Facebook. AI CRM & Helpdesk gives your team the inbox, ticket ownership, assignments, routing, calling and reports, at a separate flat team price." },
  { q: "Do I need the Social or Marketing Suite?", a: "Only if you need them. The Social Suite ($49 a month) adds comment to DM and story replies on Instagram and Facebook. The Marketing Suite ($199 a month) adds campaigns and journeys on WhatsApp, email, SMS and web push." },
  { q: "Is there a plan for very high volume?", a: "Yes. Unlimited starts at $699 a month for up to 30,000 AI conversations, shared across channels. Book a demo and the team will confirm the allowance for your volume." },
  { q: "Which plan is right for a B2B team?", a: "Start from your expected AI conversations each month and the channels you use. Book a demo and we will confirm the right plan and quote AI CRM & Helpdesk for your team." },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "Product",
          name: "YourLio for business",
          brand: { "@id": ORG_ID },
          url: `${SITE_URL}/pricing`,
          offers: plans.map((p) => ({ "@type": "Offer", name: `${p.name} plan`, price: String(p.price), priceCurrency: "USD", url: `${SITE_URL}/pricing` })),
        }}
      />
      <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-20 text-white sm:pt-36">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Pay for AI conversations, not seats</h1>
            <p className="mt-4 text-white/70 sm:text-lg">
              AI Agent plans from $49 a month with unlimited team seats. Add the CRM and suites only when you need them. Prices in USD from
              the published YourLio price list.
            </p>
          </div>
          <PricingPlans />
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">For your team</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{aiCrm.name}</h2>
            <p className="mt-4 text-text-2">{aiCrm.note} The inbox, tickets, routing and calling your team works from, with the AI answering first.</p>
            <div className="mt-6">
              <Button href="/demo">Get a quote</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aiCrm.groups.map((g) => (
              <div key={g.title} className="rounded-2xl bg-muted p-5 ring-1 ring-line">
                <h3 className="font-semibold">{g.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-text-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Add the suites you need" sub="Flat monthly prices, added to any AI Agent plan." />
        <div className="grid gap-5 md:grid-cols-2">
          {suites.map((s) => (
            <div key={s.id} className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">{s.name}</h3>
                <p>
                  <span className="text-2xl font-semibold">${s.price}</span>
                  <span className="text-sm text-text-2"> /month</span>
                </p>
              </div>
              <p className="mt-1 text-sm text-text-2">{s.tagline}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              {"note" in s && s.note && <p className="mt-4 text-xs text-text-2">{s.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      <FaqSection title="Pricing questions" items={faqs} />
      <RatingsBand />
      <CtaBand title="Get a plan quoted for your volume" />
    </>
  );
}
