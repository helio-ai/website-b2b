// Structured data (schema.org JSON-LD) so search and answer engines read the
// page as facts about YourLio for business. Page metadata is in app/layout.tsx.
import { BRAND, CONTACT_EMAIL, MAIN_SITE, SITE_URL } from "./site";

export const DEFAULT_OG = "/og-card.jpg";

const ORG_ID = `${MAIN_SITE}/#organization`;

export const orgSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "YourLio AI",
  alternateName: ["YourLio", "Helio AI"],
  legalName: "HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED",
  url: MAIN_SITE,
  logo: `${SITE_URL}/brand/appicon-square-512.png`,
  email: CONTACT_EMAIL,
  sameAs: [
    "https://apps.shopify.com/helio-ai",
    "https://www.linkedin.com/company/yourlio/",
    "https://www.instagram.com/yourlio.ai/",
    "https://www.youtube.com/channel/UCF51KsPoGQVpodZRmTyMqfw",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: `${BRAND} for business`,
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

export const softwareSchema = {
  "@type": "SoftwareApplication",
  name: `${BRAND} for business`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "AI agent, shared inbox and CRM that answers enquiries on your website, WhatsApp, Instagram and Facebook, qualifies leads and books calls.",
  publisher: { "@id": ORG_ID },
  offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "49", highPrice: "399", offerCount: 4 },
};

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** Render one or more schema.org nodes as a single JSON-LD graph. */
export function JsonLd({ data }: { data: object | object[] }) {
  const graph = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped so it cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c") }}
    />
  );
}
