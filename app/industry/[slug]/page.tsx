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
  Photo,
  ProofStats,
  Section,
  SectionHeading,
  StoryCarousel,
} from "@/components/ui";
import { HomeLifecycleTabs } from "@/components/HomeLifecycleTabs";
import { ChatDemo } from "@/components/ChatDemo";
import { getIndustry, industries } from "@/lib/content";
import { b2bChannels, b2bFaqs, featuredForBusiness } from "@/lib/yourlio";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industry/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  return ind ? pageMeta({ title: ind.seoTitle, description: ind.seoDescription, path: `/industry/${slug}`, image: ind.photo }) : {};
}

export default async function IndustryPage({ params }: PageProps<"/industry/[slug]">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const parentSlug = ind.parent ?? ind.slug;
  const family = industries.filter((i) => i.slug === parentSlug || i.parent === parentSlug);
  const parent = ind.parent ? getIndustry(ind.parent) : undefined;
  const crumbs = [
    { name: "Home", path: "/" },
    ...(parent ? [{ name: parent.name, path: `/industry/${parent.slug}` }] : []),
    { name: ind.name, path: `/industry/${ind.slug}` },
  ];
  const faqs = [...ind.faqs, ...b2bFaqs.filter((f) => ["Does it work on WhatsApp too?", "Can my sales team take over a conversation?", "How is YourLio priced for B2B?"].includes(f.q))];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={ind.name}
        icon={ind.icon}
        title={ind.h1}
        sub={ind.lead}
        art={ind.photo ? "photo" : "mock"}
        photo={ind.photo ? { src: ind.photo, alt: `${ind.name} team using YourLio to qualify enquiries` } : undefined}
      />

      {family.length > 1 && (
        <nav aria-label={`${ind.group} pages`} className="sticky top-[4.5rem] z-30 border-b border-line bg-white/90 backdrop-blur">
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

      <Section>
        <SectionHeading
          eyebrow="See it work"
          title={`A ${ind.name.toLowerCase()} enquiry, from first message to booked call`}
          sub="A sample conversation. The agent asks your questions, collects details in the chat and books the call, then remembers the lead on WhatsApp."
        />
        <ChatDemo ind={ind} />
      </Section>

      <Section tone="muted">
        <SectionHeading title={`How YourLio works for ${ind.name.toLowerCase()}`} />
        <HomeLifecycleTabs stages={ind.stages} />
      </Section>

      <Section>
        <SectionHeading title="Every channel your leads use" sub="One agent and one memory of each lead across all of them." />
        <FeatureGrid items={b2bChannels.map((c) => ({ title: c.title, body: c.text, icon: c.icon }))} />
      </Section>

      {ind.photo && (
        <Section tone="muted">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Photo src={ind.photo} alt={`${ind.name} team reviewing a qualified lead`} />
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your team starts every call with the brief</h2>
              <p className="mt-4 text-text-2">
                Every answer the lead gave, from every channel, is saved on the lead in your shared inbox and CRM. Nobody asks twice, and
                your team can step into any conversation.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {ind.asks.map((a) => (
                  <li key={a} className="rounded-xl bg-white px-4 py-3 ring-1 ring-line">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading title="Results from published YourLio case studies" sub="Each figure comes from a case study with its own reporting period." />
        <ProofStats />
      </Section>

      <section className="bg-surface pb-12">
        <Container>
          <LogoStrip label="Brands that run their conversations on YourLio" />
        </Container>
      </section>

      <StoryCarousel stories={featuredForBusiness} />
      <FaqSection title={`Questions from ${ind.name.toLowerCase()} teams`} items={faqs} />
      <CtaBand title={`See YourLio handle your ${ind.name.toLowerCase()} enquiries`} />
    </>
  );
}
