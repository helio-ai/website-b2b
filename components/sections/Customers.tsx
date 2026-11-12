/* eslint-disable @next/next/no-img-element */
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { Stories } from "./Stories";
import { CASE_STUDIES_URL, integrations } from "@/lib/yourlio";
import { MAIN_LINKS } from "@/lib/site";

/** Case study slider (full stories on yourlio.com), then the integrations row. */
export function Customers() {
  return (
    <section id="customers" className="scroll-mt-28 bg-surface py-14 sm:py-16">
      <Container className="mb-8 text-center sm:mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">Case studies</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          Real businesses. <span className="text-brand-500">Real results.</span>
        </h2>
      </Container>

      <Stories />

      <p className="mt-5 text-center">
        <a href={CASE_STUDIES_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600">
          See all case studies <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
        </a>
      </p>

      <Container className="mt-12">
        <div className="flex flex-col items-center gap-5 border-t border-line pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3" aria-label="Integrations">
            {integrations
              .filter((i) => i.logo)
              .map((i) => (
                <span key={i.slug} title={i.name} className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-line">
                  <img src={i.logo as string} alt={i.name} loading="lazy" className="h-full w-full object-contain" />
                </span>
              ))}
          </div>
          <a href={MAIN_LINKS.integrations} target="_blank" rel="noopener" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
            All integrations <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
