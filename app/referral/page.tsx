import type { Metadata } from "next";
import { CtaBand, FaqSection, PageHero, Section, SectionHeading, Button, IconBadge } from "@/components/ui";
import { MAIN_LINKS, PARTNER_BOOK_URL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Refer and Earn with the YourLio Affiliate Program | YourLio",
  description: "Refer businesses to YourLio and earn a flat 25% of their plan for 6 months, paid via Wise. Full terms are published on yourlio.com.",
  path: "/referral",
});

const faqs = [
  { q: "How much do YourLio affiliates earn?", a: "The YourLio affiliate program pays a flat 25% of each referred plan, every month for 6 months, while the referred customer is billed. Full terms are on yourlio.com/affiliate." },
  { q: "How are affiliates paid?", a: "Payouts are made via Wise." },
  { q: "Which referrals qualify?", a: "The published terms on yourlio.com/affiliate list which referrals qualify. Book a partner call if you mainly refer businesses that are not on Shopify, and the team will confirm what applies." },
];

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer & Earn"
        icon="Gift"
        title="Refer a business, earn 25% of its plan for 6 months"
        sub="A flat 25% every month for 6 months, paid via Wise while the business is billed. No commission curve."
        art="shot"
        shot="results"
        ctas={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={MAIN_LINKS.affiliate} size="lg">See affiliate terms</Button>
            <Button href={PARTNER_BOOK_URL} variant="secondary" size="lg">Book a partner call</Button>
          </div>
        }
      />
      <Section>
        <SectionHeading title="How it works" />
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            ["Link", "Get your link", "Join the affiliate program on yourlio.com."],
            ["Users", "Refer a business", "Share YourLio with businesses that answer customers on chat, WhatsApp or social."],
            ["Gift", "Earn for 6 months", "A flat 25% of their plan, every month for 6 months, paid via Wise."],
          ].map(([ic, t, b], i) => (
            <li key={t} className="rounded-2xl p-6 ring-1 ring-line">
              <div className="flex items-center gap-3">
                <IconBadge name={ic} />
                <span className="text-sm font-semibold text-brand-600">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-text-2">{b}</p>
            </li>
          ))}
        </ol>
      </Section>
      <FaqSection title="Affiliate questions" items={faqs} />
      <CtaBand />
    </>
  );
}
