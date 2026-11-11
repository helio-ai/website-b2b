import type { Metadata } from "next";
import { CtaBand, ProofStats, Section, SimpleHero } from "@/components/ui";
import { CustomersBrowser } from "@/components/CustomersBrowser";
import { caseStudies } from "@/lib/yourlio";
import { JsonLd, pageMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "YourLio Customer Stories and Case Study Results | YourLio",
  description: "16 published YourLio case studies with reporting periods: resolution rates, bookings, chats handled and revenue through AI conversations.",
  path: "/customers",
});

export default function CustomersPage() {
  return (
    <>
      <JsonLd
        data={{
          "@type": "ItemList",
          name: "YourLio customer stories",
          itemListElement: caseStudies.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/customers/${c.slug}`, name: c.title })),
        }}
      />
      <SimpleHero
        title="Customer stories"
        sub="Published YourLio case studies, each with its reporting period, channels and results. Individual results, not guarantees."
      />
      <Section tone="muted" className="!py-12">
        <ProofStats />
      </Section>
      <CustomersBrowser studies={caseStudies} />
      <CtaBand />
    </>
  );
}
