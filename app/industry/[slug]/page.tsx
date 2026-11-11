import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  CtaBand,
  FaqSection,
  FeatureGrid,
  LogoStrip,
  PageHero,
  Section,
  SectionHeading,
  StoryCarousel,
} from "@/components/ui";
import { HomeLifecycleTabs } from "@/components/HomeLifecycleTabs";
import { customers, industries } from "@/lib/content";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industry/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  return ind ? { title: `${ind.name} solutions`, description: `Placeholder description for ${ind.name}.` } : {};
}

const platform = [
  { title: "Omnichannel team inbox", icon: "Inbox" },
  { title: "AI Agents", icon: "Sparkles" },
  { title: "Automate and integrate", icon: "Workflow" },
  { title: "Customer lifecycle management", icon: "Route" },
  { title: "Lead generation and conversion", icon: "Target" },
  { title: "Customer retention at scale", icon: "HeartHandshake" },
  { title: "Data-driven insights", icon: "BarChart3" },
  { title: "Stability under high volumes", icon: "Zap" },
  { title: "Security for customer data", icon: "ShieldCheck" },
];

export default async function IndustryPage({ params }: PageProps<"/industry/[slug]">) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const parentSlug = ind.parent ?? ind.slug;
  const family = industries.filter((i) => i.slug === parentSlug || i.parent === parentSlug);
  const offset = (industries.indexOf(ind) * 2) % 40;

  return (
    <>
      <PageHero eyebrow={ind.name} icon={ind.icon} title={`Placeholder headline for ${ind.name}`} />

      {family.length > 1 && (
        <nav aria-label={`${ind.name} pages`} className="sticky top-[4.5rem] z-30 border-b border-line bg-white/90 backdrop-blur">
          <Container>
            <ul className="no-scrollbar flex gap-1 overflow-x-auto py-2 text-sm">
              {family.map((f) => (
                <li key={f.slug} className="shrink-0">
                  <Link
                    href={`/industry/${f.slug}`}
                    aria-current={f.slug === slug ? "page" : undefined}
                    className={`block rounded-lg px-3 py-1.5 ${f.slug === slug ? "bg-ink text-white" : "text-text-2 hover:bg-muted"}`}
                  >
                    {f.parent ? f.name : "Overview"}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}

      <Section tone="muted">
        <SectionHeading title={`Placeholder heading: growing a ${ind.name.toLowerCase()} business`} />
        <HomeLifecycleTabs subject={ind.name.toLowerCase()} />
      </Section>

      <Section>
        <SectionHeading title="Placeholder heading for the platform overview" />
        <FeatureGrid items={platform} />
      </Section>

      <section className="bg-surface pb-16">
        <Container>
          <h2 className="mb-6 text-center text-2xl font-semibold">Placeholder: trusted by {ind.name.toLowerCase()} businesses</h2>
          <LogoStrip />
        </Container>
      </section>

      <StoryCarousel title="Placeholder heading for customer stories" stories={customers.slice(offset, offset + 7)} />
      <FaqSection title={`Frequently asked questions for ${ind.name.toLowerCase()} businesses`} count={11} />
      <CtaBand />
    </>
  );
}
