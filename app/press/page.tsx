/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { CtaBand, Section, SectionHeading, SimpleHero } from "@/components/ui";
import { CONTACT_EMAIL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "YourLio Press and Brand Assets | YourLio",
  description: "YourLio logos, the company boilerplate and media contact for journalists writing about YourLio AI and YourLio for business.",
  path: "/press",
});

const assets = [
  { label: "Wordmark, white", src: "/brand/wordmark-white.png", bg: "bg-ink" },
  { label: "Wordmark, graphite", src: "/brand/wordmark-graphite.png", bg: "bg-white" },
  { label: "App icon", src: "/brand/appicon-square-512.png", bg: "bg-muted" },
  { label: "Mark, for light backgrounds", src: "/brand/mark-light-bg.png", bg: "bg-white" },
];

export default function PressPage() {
  return (
    <>
      <SimpleHero title="Press and brand assets" sub="Logos, a short company description and who to contact." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-semibold">About YourLio</h2>
            <p className="mt-3 leading-relaxed text-text-2">
              YourLio AI, formerly Helio AI, is built by HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED in Bengaluru. It makes one AI agent, shared
              inbox and CRM that answers customers on the website, WhatsApp, Instagram, Facebook, email and calls, with one memory of each
              person. YourLio for Shopify serves 100+ ecommerce brands and is rated 5.0 on the Shopify App Store. YourLio for business serves
              companies that sell through a call, a quote, a site visit or an appointment.
            </p>
            <p className="mt-6 text-sm text-text-2">Media contact</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-600 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
          <div>
            <SectionHeading align="left" title="Logos" />
            <div className="grid gap-4 sm:grid-cols-2">
              {assets.map((a) => (
                <a key={a.src} href={a.src} download className="group overflow-hidden rounded-2xl ring-1 ring-line hover:shadow-lg">
                  <div className={`flex h-32 items-center justify-center p-6 ${a.bg}`}>
                    <img src={a.src} alt={a.label} className="max-h-16 w-auto" />
                  </div>
                  <div className="flex items-center justify-between p-4 text-sm">
                    <span className="font-medium">{a.label}</span>
                    <Download className="h-4 w-4 text-text-3 group-hover:text-brand-600" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
