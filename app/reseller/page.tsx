import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand, FaqSection, FeatureGrid, PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "Partner program",
  description: "Placeholder description for the partner program.",
};

export default function ResellerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner program"
        icon="Handshake"
        title="Placeholder headline for the partner program"
        art="image"
        ctas={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#apply" size="lg">Become a partner</Button>
            <Button href="/partner-directory" variant="secondary" size="lg">Find a partner</Button>
          </div>
        }
      />
      <Section>
        <SectionHeading title="Why partner with us" />
        <FeatureGrid items={["TrendingUp", "Gift", "BookOpen", "Headphones", "Users", "Award"].map((ic, i) => ({ title: `Partner benefit ${i + 1}`, icon: ic }))} />
      </Section>
      <Section tone="muted">
        <SectionHeading title="Partner tiers" sub="Placeholder tiers and requirements." />
        <div className="grid gap-5 md:grid-cols-3">
          {["Certified", "Silver", "Gold"].map((t, i) => (
            <div key={t} className={`rounded-2xl bg-white p-6 ring-1 ${i === 2 ? "ring-2 ring-brand-400" : "ring-line"}`}>
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-text-2">{ph.short}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {[1, 2, 3, 4].map((n) => (
                  <li key={n} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> Placeholder tier perk {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading title="How it works" />
        <ol className="grid gap-5 md:grid-cols-3">
          {["Apply", "Get certified", "Grow together"].map((s, i) => (
            <li key={s} className="rounded-2xl p-6 ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{s}</h3>
              <p className="mt-2 text-sm text-text-2">{ph.medium}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section tone="muted">
        <SectionHeading title="Partner stories" />
        <div className="grid gap-5 md:grid-cols-2">
          {["partner-story-01", "partner-story-02"].map((s, i) => (
            <Link key={s} href={`/${s}`} className="group rounded-2xl bg-white p-6 ring-1 ring-line hover:shadow-lg">
              <p className="text-sm text-text-2">Partner story</p>
              <h3 className="mt-2 text-xl font-semibold group-hover:text-brand-600">Placeholder partner story headline {i + 1}</h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Read story <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <FaqSection count={6} />
      <CtaBand title="Placeholder partner sign-up headline" />
    </>
  );
}
