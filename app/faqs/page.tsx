import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, CtaBand, SimpleHero } from "@/components/ui";
import { faqs, faqTopics, ph } from "@/lib/content";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Placeholder description for the ${BRAND} FAQ index.`,
};

export default function FaqIndex() {
  return (
    <>
      <SimpleHero title={`Frequently asked questions about ${BRAND}`} sub="Placeholder line introducing the FAQ library." />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <nav aria-label="FAQ topics" className="lg:sticky lg:top-24 lg:h-fit">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-3">Topics</p>
              <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-2 text-sm lg:flex-col lg:gap-1 lg:overflow-visible">
                {faqTopics.map((t) => (
                  <li key={t} className="shrink-0">
                    <a href={`#${t.toLowerCase().replace(/\s+/g, "-")}`} className="block rounded-md px-3 py-1.5 text-text-2 ring-1 ring-line hover:bg-muted lg:ring-0">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-12">
              {faqTopics.map((t) => (
                <div key={t} id={t.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-24">
                  <h2 className="mb-4 text-xl font-semibold">{t}</h2>
                  <ol className="divide-y divide-line rounded-2xl ring-1 ring-line">
                    {faqs
                      .filter((f) => f.topic === t)
                      .map((f) => (
                        <li key={f.slug}>
                          <Link href={`/faqs/${f.slug}`} className="group flex items-start justify-between gap-4 p-5 hover:bg-muted">
                            <span>
                              <span className="block font-medium group-hover:text-brand-600">
                                {faqs.indexOf(f) + 1}. {f.question}
                              </span>
                              <span className="mt-1 block text-sm text-text-2">{ph.short}</span>
                            </span>
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-3 group-hover:text-brand-600" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
