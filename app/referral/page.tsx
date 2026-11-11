import type { Metadata } from "next";
import { CtaBand, FaqSection, PageHero, Section, SectionHeading, Button, IconBadge } from "@/components/ui";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "Refer & Earn",
  description: "Placeholder description for the referral program.",
};

export default function ReferralPage() {
  return (
    <>
      <PageHero
        eyebrow="Refer & Earn"
        icon="Gift"
        title="Placeholder headline for the referral program"
        art="image"
        ctas={<Button href="#signup" size="lg">Get your referral link</Button>}
      />
      <Section>
        <SectionHeading title="How it works" />
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            ["Link", "Share your link"],
            ["Users", "Friend signs up"],
            ["Gift", "You both get rewarded"],
          ].map(([ic, t], i) => (
            <li key={t} className="rounded-2xl p-6 ring-1 ring-line">
              <div className="flex items-center gap-3">
                <IconBadge name={ic} />
                <span className="text-sm font-semibold text-brand-600">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-text-2">{ph.medium}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="muted">
        <SectionHeading title="Rewards" sub="Placeholder reward amounts and conditions." />
        <div className="grid gap-5 sm:grid-cols-2">
          {["For you", "For your friend"].map((t) => (
            <div key={t} className="rounded-2xl bg-white p-8 text-center ring-1 ring-line">
              <p className="text-sm text-text-2">{t}</p>
              <p className="mt-2 text-5xl font-semibold tracking-tight">$00</p>
              <p className="mt-2 text-sm text-text-2">{ph.short}</p>
            </div>
          ))}
        </div>
      </Section>
      <FaqSection count={6} />
      <CtaBand />
    </>
  );
}
