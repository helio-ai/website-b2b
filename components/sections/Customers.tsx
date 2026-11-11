/* eslint-disable @next/next/no-img-element */
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { CASE_STUDIES_URL, caseStudies, caseStudyUrl, featuredStories, reviewUrl, reviews } from "@/lib/yourlio";

// Each figure comes from a published case study on yourlio.com.
const proof = [
  { value: "718", label: "home eye test bookings from chats, no call required", note: "YourSpex case study" },
  { value: "92%", label: "of chats resolved without a human handoff", note: "Cureayu case study" },
  { value: "15,000+", label: "chats handled in 46 days for a wholesale marketplace", note: "DeoDap case study" },
  { value: "5.0", label: "rating on the Shopify App Store, used by 100+ brands", note: "As of October 2026" },
];

/** Proof figures and case study cards, which link to the full stories on yourlio.com. */
export function Customers() {
  return (
    <Section id="customers">
      <SectionHeading eyebrow="Customers" title="Results from published YourLio case studies" sub="Each figure comes from a case study with its own reporting period. Individual results, not guarantees." />
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {proof.map((p) => (
          <div key={p.note} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{p.value}</dd>
            <dt className="mt-2 text-sm text-text-2">{p.label}</dt>
            <p className="mt-3 text-xs text-text-3">{p.note}</p>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredStories.slice(0, 6).map((s) => (
          <a
            key={s.slug}
            href={caseStudyUrl(s.slug)}
            target="_blank"
            rel="noopener"
            className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[2/1] overflow-hidden bg-muted">
              <img src={s.image} alt={s.imageAlt ?? `${s.client} case study`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">{s.client}</span>
                <span className="truncate rounded-full bg-muted px-2.5 py-0.5 text-xs text-text-2">{s.channels.slice(0, 2).join(", ")}</span>
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug group-hover:text-brand-600">{s.title}</h3>
              <p className="mt-auto pt-4 text-sm text-text-2">
                <span className="text-2xl font-semibold text-text">{s.stat.value}</span> {s.stat.label}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-600">
                Read on yourlio.com <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href={CASE_STUDIES_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
          All {caseStudies.length} case studies on yourlio.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}

/** Summaries of Shopify App Store reviews, each linking to the original. */
export function Reviews() {
  return (
    <Section tone="muted">
      <SectionHeading title="What teams say about YourLio" sub="Summaries of merchant reviews on the Shopify App Store, not verbatim quotes. Each links to the original review." />
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {reviews.slice(0, 6).map((r) => (
          <figure key={r.reviewId} className="break-inside-avoid rounded-2xl bg-white p-6 ring-1 ring-line">
            <div className="flex gap-0.5 text-amber-400" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-text">{r.summary}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img src={r.photo} alt={r.person} width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{r.person}</span>
                <span className="block text-xs text-text-2">
                  {r.role}, {r.brand}
                </span>
              </span>
              <a href={reviewUrl(r.reviewId)} target="_blank" rel="noopener" className="ml-auto text-xs font-medium text-brand-600 hover:underline">
                Review
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
