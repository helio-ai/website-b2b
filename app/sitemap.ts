import type { MetadataRoute } from "next";
import { alternatives, faqs, featurePages, industries } from "@/lib/content";
import { integrations } from "@/lib/yourlio";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({ url: `${SITE_URL}${path}`, priority });
  return [
    page("/", 1),
    page("/pricing", 0.9),
    page("/demo", 0.9),
    ...Object.keys(featurePages).map((s) => page(`/${s}`, 0.8)),
    ...industries.map((i) => page(`/industry/${i.slug}`, 0.8)),
    page("/integrations", 0.7),
    ...integrations.map((i) => page(`/integrations/${i.slug}`, 0.5)),
    page("/alternatives", 0.6),
    ...alternatives.map((a) => page(`/alternatives/${a.slug}`, 0.6)),
    page("/faqs", 0.6),
    ...faqs.map((f) => page(`/faqs/${f.slug}`, 0.4)),
    ...[
      "/about",
      "/contact",
      "/careers",
      "/press",
      "/reseller",
      "/referral",
      "/whatsapp-link-generator",
      "/whatsapp-qr-code-generator",
      "/whatsapp-pricing-calculator",
    ].map((p) => page(p, 0.5)),
  ];
}
