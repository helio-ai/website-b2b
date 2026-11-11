import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CtaBand, FeatureGrid, ImagePlaceholder, PageHero, Section, SectionHeading, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers",
  description: "Placeholder description for the careers page.",
};

const roles = [
  ["Placeholder role title", "Engineering", "Remote"],
  ["Placeholder role title", "Product", "Remote"],
  ["Placeholder role title", "Sales", "City, Country"],
  ["Placeholder role title", "Customer Success", "City, Country"],
  ["Placeholder role title", "Marketing", "Remote"],
  ["Placeholder role title", "Operations", "City, Country"],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        icon="Briefcase"
        title="Placeholder careers headline"
        art="image"
        ctas={<Button href="#roles" size="lg">See open roles</Button>}
      />
      <Section>
        <SectionHeading title="Our values" />
        <FeatureGrid items={["Rocket", "Users", "HeartHandshake", "Target", "Zap", "Award"].map((ic, i) => ({ title: `Value ${i + 1}`, icon: ic }))} />
      </Section>
      <Section tone="muted">
        <SectionHeading title="Life on the team" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <ImagePlaceholder key={i} label="Team photo" ratio={i % 3 ? "aspect-square" : "aspect-[3/4]"} />
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading title="Benefits" />
        <FeatureGrid cols={4} items={["Globe", "HeartHandshake", "BookOpen", "Clock"].map((ic, i) => ({ title: `Benefit ${i + 1}`, icon: ic }))} />
      </Section>
      <Section tone="muted" id="roles">
        <SectionHeading title="Open roles" sub="Placeholder roles. Connect your applicant tracking system here." />
        <ul className="divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
          {roles.map(([t, team, loc], i) => (
            <li key={i}>
              <Link href="#apply" className="group flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  <span className="block font-semibold group-hover:text-brand-600">{t}</span>
                  <span className="text-sm text-text-2">{team}</span>
                </span>
                <span className="flex items-center gap-4 text-sm text-text-2">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" aria-hidden="true" />{loc}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  );
}
