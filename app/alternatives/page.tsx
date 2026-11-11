import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, CtaBand, Monogram, SimpleHero } from "@/components/ui";
import { alternatives, ph } from "@/lib/content";
import { BRAND } from "@/lib/site";

export const metadata: Metadata = {
  title: `${BRAND} vs competitors`,
  description: "Placeholder description for the comparison index.",
};

export default function AlternativesIndex() {
  return (
    <>
      <SimpleHero title={`${BRAND} vs competitors`} sub="Placeholder line introducing side-by-side comparisons." />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((a) => (
              <Link key={a.slug} href={`/alternatives/${a.slug}`} className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <Monogram name={BRAND} />
                  <span className="text-sm font-semibold text-text-3">vs</span>
                  <Monogram name={a.name} />
                </div>
                <h2 className="mt-5 text-lg font-semibold group-hover:text-brand-600">
                  {BRAND} vs {a.name}
                </h2>
                <p className="mt-2 text-sm text-text-2">{ph.short}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600">
                  Compare <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
