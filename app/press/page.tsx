import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { CtaBand, ImagePlaceholder, Section, SectionHeading, SimpleHero } from "@/components/ui";
import { ph } from "@/lib/content";

export const metadata: Metadata = {
  title: "Press",
  description: "Placeholder description for the press page.",
};

export default function PressPage() {
  return (
    <>
      <SimpleHero title="Press" sub="Placeholder line for journalists and media." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-ink p-8 text-white lg:col-span-1">
            <h2 className="text-2xl font-semibold">Press kit</h2>
            <p className="mt-2 text-sm text-white/70">Placeholder: logos, product screenshots and founder photos.</p>
            <Link href="#press-kit" className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium text-ink">
              <Download className="h-4 w-4" aria-hidden="true" /> Download press kit
            </Link>
            <p className="mt-8 text-sm text-white/70">Media contact</p>
            <a href="mailto:press@example.com" className="font-medium">press@example.com</a>
          </div>
          <div className="lg:col-span-2">
            <SectionHeading align="left" title="In the news" />
            <div className="grid gap-5 sm:grid-cols-2">
              {Array.from({ length: 6 }, (_, i) => (
                <Link key={i} href="#article" className="group rounded-2xl ring-1 ring-line hover:shadow-lg">
                  <ImagePlaceholder label="Outlet logo" ratio="aspect-[16/7]" className="rounded-b-none ring-0" />
                  <div className="p-5">
                    <p className="text-xs text-text-3">Outlet name · Date</p>
                    <h3 className="mt-2 font-semibold group-hover:text-brand-600">Placeholder press headline {i + 1}</h3>
                    <p className="mt-2 text-sm text-text-2">{ph.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
