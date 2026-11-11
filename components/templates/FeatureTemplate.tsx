import {
  Breadcrumbs,
  CtaBand,
  FaqSection,
  FeatureGrid,
  LogoStrip,
  PageHero,
  ProductShot,
  ProofStats,
  Section,
  SectionHeading,
  SplitFeature,
  StoryCarousel,
  Container,
  type ShotKey,
} from "@/components/ui";
import { featuredForBusiness, pillars } from "@/lib/yourlio";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";
import type { FeatureCopy } from "@/lib/content";

const STEP_SHOTS: ShotKey[] = ["agent", "inbox", "profiles", "channels", "helpdesk", "journeys", "comment-to-dm"];

/** One template drives every product, solution and WhatsApp page; the copy comes from lib/copy/features.ts. */
export function FeatureTemplate({ slug, page }: { slug: string; page: FeatureCopy }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.title, path: `/${slug}` },
  ];
  const otherShots = STEP_SHOTS.filter((s) => s !== page.image);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow={page.eyebrow} icon={page.icon} title={page.h1} sub={page.sub} art="shot" shot={page.image as ShotKey}>
        <p className="mt-6 text-xs text-white/50 lg:text-left">Included in: {page.plan}</p>
      </PageHero>

      <section className="border-b border-line bg-surface">
        <Container className="py-3">
          <div className="[&_a]:text-text-2 [&_a:hover]:text-text [&_nav]:text-text-3 [&_span.text-white\/85]:text-text">
            <Breadcrumbs items={crumbs} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12">
        <Container>
          <LogoStrip label="Brands that run their conversations on YourLio" />
        </Container>
      </section>

      {/* Capabilities */}
      <Section tone="muted">
        <SectionHeading eyebrow={page.title} title={`What ${page.title} does`} sub={page.sub} />
        <FeatureGrid items={page.capabilities.map((c) => ({ title: c.title, body: c.body, icon: c.icon }))} />
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading title="How it works" />
        <div className="space-y-20">
          {page.steps.map((s, i) => (
            <SplitFeature
              key={s.title}
              reverse={i % 2 === 1}
              eyebrow={`Step ${i + 1}`}
              title={s.title}
              body={s.body}
              bullets={s.bullets}
              visual={<ProductShot shot={i === 0 ? (page.image as ShotKey) : otherShots[(i - 1) % otherShots.length]} />}
            />
          ))}
        </div>
      </Section>

      {/* Proof */}
      <Section tone="dark">
        <SectionHeading dark title="Results from published YourLio case studies" sub="Each figure comes from a case study with its own reporting period." />
        <ProofStats dark />
      </Section>

      {/* Principles */}
      <Section>
        <SectionHeading title="Built the way your team works" />
        <FeatureGrid cols={4} items={pillars.map((p) => ({ title: p.title, body: p.text, icon: p.icon }))} />
      </Section>

      <StoryCarousel stories={featuredForBusiness} />
      <FaqSection title={`${page.title}: frequently asked questions`} items={page.faqs} />
      <CtaBand />
    </>
  );
}
