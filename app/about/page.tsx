/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { CtaBand, FeatureGrid, PageHero, Section, SectionHeading, StatRow, SuccessPillars, Button } from "@/components/ui";
import { team } from "@/lib/yourlio";
import { MAIN_LINKS } from "@/lib/site";
import { JsonLd, ORG_ID, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About YourLio: the Team Behind YourLio for Business | YourLio",
  description: "YourLio AI, formerly Helio AI, builds AI agents, a shared inbox and CRM for businesses that sell through conversations. Built in Bengaluru.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{ "@type": "AboutPage", name: "About YourLio", about: { "@id": ORG_ID } }} />
      <PageHero
        eyebrow="About YourLio"
        icon="Building2"
        title="We build the AI that answers every enquiry"
        sub="YourLio AI, formerly Helio AI, makes one AI agent, shared inbox and CRM that answers customers on every channel with one memory of each person. It is used by 100+ brands and rated 5.0 on the Shopify App Store."
        art="shot"
        shot="results"
        ctas={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/demo" size="lg">Book a demo</Button>
            <Button href={MAIN_LINKS.about} variant="secondary" size="lg">About us on yourlio.com</Button>
          </div>
        }
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-muted p-8 ring-1 ring-line sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">What we do</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">One agent, one memory, every channel</h2>
            <p className="mt-4 text-text-2">
              Most businesses answer customers across a website widget, WhatsApp, Instagram, email and the phone, each with its own tool and
              its own half of the story. YourLio puts one AI agent and one record of each person behind all of them.
            </p>
          </div>
          <div className="rounded-3xl bg-muted p-8 ring-1 ring-line sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Who it is for</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Shopify brands and every business that sells by conversation</h2>
            <p className="mt-4 text-text-2">
              yourlio.com serves Shopify brands. YourLio for business is for teams that sell through a call, a quote, a site visit or an
              appointment, from agencies and IT services to clinics, schools and real estate.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <StatRow
          stats={[
            { value: "100+", label: "brands use YourLio" },
            { value: "5.0", label: "rating on the Shopify App Store" },
            { value: "16", label: "published case studies" },
            { value: "Bengaluru", label: "where the team is based" },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading title="The team" sub="The people building YourLio." />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((p) => (
            <figure key={p.name}>
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted ring-1 ring-line">
                <img src={p.photo} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3">
                <span className="block font-semibold">{p.name}</span>
                <span className="block text-sm text-text-2">{p.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Company details" />
        <FeatureGrid
          items={[
            { title: "Legal name", body: "HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED", icon: "Building2" },
            { title: "Formerly", body: "Helio AI. The Shopify App Store listing keeps the helio-ai address.", icon: "Layers" },
            { title: "Contact", body: "prakash@helioai.tech", icon: "Mail" },
          ]}
        />
      </Section>

      <SuccessPillars />
      <CtaBand />
    </>
  );
}
