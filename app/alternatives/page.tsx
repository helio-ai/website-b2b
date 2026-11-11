/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, CtaBand, Monogram, SimpleHero } from "@/components/ui";
import { alternatives } from "@/lib/content";
import { MAIN_LINKS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "YourLio vs Intercom, Manychat and Tidio | YourLio",
  description: "How YourLio for business compares with Intercom, Manychat and Tidio on AI, channels, seats and pricing, with the dates our sources were checked.",
  path: "/alternatives",
});

export default function AlternativesIndex() {
  return (
    <>
      <SimpleHero
        title="YourLio vs other chat and support tools"
        sub="Written by YourLio, with the date each source was read. Billing units differ, so compare total cost for the same workload."
      />
      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alternatives.map((a) => (
              <Link key={a.slug} href={`/alternatives/${a.slug}`} className="group flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <img src="/brand/appicon-square-512.png" alt="" className="h-11 w-11 rounded-xl" />
                  <span className="text-sm font-semibold text-text-3">vs</span>
                  <Monogram name={a.name} />
                </div>
                <h2 className="mt-5 text-lg font-semibold group-hover:text-brand-600">YourLio vs {a.name}</h2>
                <p className="mt-2 text-sm text-text-2">{a.verdict}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600">
                  Compare <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-text-2">
            Running a Shopify store? See the{" "}
            <a href={MAIN_LINKS.compare} className="font-medium text-brand-600 hover:underline">
              Shopify comparisons on yourlio.com
            </a>
            .
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
