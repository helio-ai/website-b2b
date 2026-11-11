import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureTemplate } from "@/components/templates/FeatureTemplate";
import { featurePages } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

// Serves every single-segment product, solution and WhatsApp route. Pages
// with their own layout (pricing, about, demo, tools...) live in their own
// folders and take precedence over this one. Legal pages, and template pages
// for features YourLio does not have, redirect in next.config.ts.

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return Object.keys(featurePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = featurePages[slug];
  return page ? pageMeta({ title: page.seoTitle, description: page.seoDescription, path: `/${slug}` }) : {};
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = featurePages[slug];
  if (!page) notFound();
  return <FeatureTemplate slug={slug} page={page} />;
}
