import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureTemplate } from "@/components/templates/FeatureTemplate";
import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { featurePages, legalPages } from "@/lib/content";

// Serves every single-segment product, solution, WhatsApp, platform, partner
// story and legal route. Pages with their own layout (pricing, about, demo,
// tools...) live in their own folders and take precedence over this one.

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return [...Object.keys(featurePages), ...Object.keys(legalPages)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const title = featurePages[slug]?.title ?? legalPages[slug];
  return title ? { title, description: `Placeholder description for ${title}.` } : {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  if (featurePages[slug]) return <FeatureTemplate slug={slug} page={featurePages[slug]} />;
  if (legalPages[slug]) return <LegalTemplate slug={slug} title={legalPages[slug]} />;
  notFound();
}
