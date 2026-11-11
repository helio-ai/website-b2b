import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, CtaBand, SimpleHero } from "@/components/ui";
import { faqTopics, faqs } from "@/lib/content";
import { JsonLd, faqSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "YourLio for Business FAQs: AI Agent, Inbox and CRM | YourLio",
  description: "Direct answers about YourLio for business: qualifying leads, booking calls, WhatsApp, AI calls, the shared inbox, CRM, pricing and setup.",
  path: "/faqs",
});

const anchor = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqIndex() {
  return (
    <>
      <JsonLd data={faqSchema(faqs.filter((f) => f.topic === "Getting started").map((f) => ({ q: f.question, a: f.answer })))} />
      <SimpleHero title="Frequently asked questions about YourLio for business" sub={`${faqs.length} direct answers about the AI agent, inbox, CRM, channels and pricing.`} />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
            <nav aria-label="FAQ topics" className="lg:sticky lg:top-24 lg:h-fit">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-3">Topics</p>
              <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-2 text-sm lg:flex-col lg:gap-1 lg:overflow-visible">
                {faqTopics.map((t) => (
                  <li key={t} className="shrink-0">
                    <a href={`#${anchor(t)}`} className="block rounded-md px-3 py-1.5 text-text-2 ring-1 ring-line hover:bg-muted lg:ring-0">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-12">
              {faqTopics.map((t) => (
                <div key={t} id={anchor(t)} className="scroll-mt-24">
                  <h2 className="mb-4 text-xl font-semibold">{t}</h2>
                  <ul className="divide-y divide-line rounded-2xl ring-1 ring-line">
                    {faqs
                      .filter((f) => f.topic === t)
                      .map((f) => (
                        <li key={f.slug}>
                          <Link href={`/faqs/${f.slug}`} className="group flex items-start justify-between gap-4 p-5 hover:bg-muted">
                            <span>
                              <span className="block font-medium group-hover:text-brand-600">{f.question}</span>
                              <span className="mt-1 line-clamp-2 block text-sm text-text-2">{f.answer}</span>
                            </span>
                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-3 group-hover:text-brand-600" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                  </ul>
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
