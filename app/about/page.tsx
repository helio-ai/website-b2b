import type { Metadata } from "next";
import { CtaBand, ImagePlaceholder, PageHero, Section, SectionHeading, SuccessPillars, StatRow } from "@/components/ui";
import { ph } from "@/lib/content";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `Placeholder description of ${BRAND}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" icon="Building2" title="Placeholder headline about the company" art="image" />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {["Vision", "Mission"].map((k) => (
            <div key={k} className="rounded-3xl bg-muted p-8 ring-1 ring-line sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{k}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Placeholder {k.toLowerCase()} statement</h2>
              <p className="mt-4 text-text-2">{ph.medium}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Our story</h2>
            <p className="mt-4 text-text-2">{ph.long}</p>
            <p className="mt-4 text-text-2">{ph.long}</p>
          </div>
          <ImagePlaceholder label="Team photo" />
        </div>
        <div className="mt-12">
          <StatRow
            stats={[
              { value: "0,000+", label: "Placeholder customers" },
              { value: "00+", label: "Placeholder countries" },
              { value: "000+", label: "Placeholder team members" },
              { value: "0000", label: "Founded" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading title="Major milestones" />
        <ol className="relative mx-auto max-w-3xl border-s border-line ps-8">
          {Array.from({ length: 6 }, (_, i) => (
            <li key={i} className="mb-10 last:mb-0">
              <span className="absolute -start-2 mt-1.5 h-4 w-4 rounded-full bg-brand-500 ring-4 ring-white" aria-hidden="true" />
              <p className="text-sm font-semibold text-brand-600">Year {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold">Placeholder milestone {i + 1}</h3>
              <p className="mt-1 text-sm text-text-2">{ph.short}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Our awards" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-white p-4 text-center ring-1 ring-line">
              <span className="h-12 w-12 rounded-full bg-brand-100" aria-hidden="true" />
              <span className="mt-3 text-xs font-medium text-text-2">Award {i + 1}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Our leadership" />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i}>
              <ImagePlaceholder label="Portrait" ratio="aspect-square" />
              <p className="mt-3 font-semibold">Person Name</p>
              <p className="text-sm text-text-2">Job title</p>
            </div>
          ))}
        </div>
      </Section>

      <SuccessPillars />
      <CtaBand />
    </>
  );
}
