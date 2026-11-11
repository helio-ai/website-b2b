import {
  Breadcrumbs,
  CtaBand,
  FaqSection,
  FeatureGrid,
  PageHero,
  ProductShot,
  Section,
  SectionHeading,
  SplitFeature,
  Container,
  type ShotKey,
} from "@/components/ui";
import { ExtraSection, ProductVideo, StorySpotlight } from "@/components/FeatureSections";
import { FEATURE_MEDIA } from "@/lib/featureMedia";
import { JsonLd, breadcrumbSchema } from "@/lib/seo";
import type { FeatureCopy } from "@/lib/content";

const STEP_SHOTS: ShotKey[] = ["agent", "inbox", "profiles", "channels", "helpdesk", "journeys", "comment-to-dm", "results"];

/**
 * Template for every product, solution and WhatsApp page. Copy comes from
 * lib/copy/features.ts; the hero media, featured story and topic section
 * from lib/featureMedia.ts, so no two pages look the same.
 */
export function FeatureTemplate({ slug, page }: { slug: string; page: FeatureCopy }) {
  const media = FEATURE_MEDIA[slug] ?? { shot: page.image as ShotKey, story: "soulflower", extra: "channels" as const };
  const crumbs = [
    { name: "Home", path: "/" },
    { name: page.title, path: `/${slug}` },
  ];
  // Step visuals: start from a different screenshot on each page and skip the hero one.
  const offset = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0) % STEP_SHOTS.length;
  const stepShots = [...STEP_SHOTS.slice(offset), ...STEP_SHOTS.slice(0, offset)].filter((s) => s !== media.shot && `${s}-dark` !== media.shot);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero eyebrow={page.eyebrow} icon={page.icon} title={page.h1} sub={page.sub} art="none">
        <p className="mt-6 pb-16 text-xs text-white/50 sm:pb-24">Included in: {page.plan}</p>
      </PageHero>

      <section className="relative -mt-24 sm:-mt-36">
        <Container className="relative z-10">
          <div className="mx-auto max-w-5xl">
            {media.video ? <ProductVideo name={media.video} label={`${page.title} in YourLio`} /> : <ProductShot shot={media.shot ?? "inbox-dark"} priority sizes="(min-width: 1100px) 1024px, 100vw" />}
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-surface">
        <Container className="py-3">
          <div className="[&_a]:text-text-2 [&_a:hover]:text-text [&_nav]:text-text-3 [&_span.text-white\/85]:text-text">
            <Breadcrumbs items={crumbs} />
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading eyebrow={page.title} title={`What ${page.title} does`} />
        <FeatureGrid items={page.capabilities.map((c) => ({ title: c.title, body: c.body, icon: c.icon }))} />
      </Section>

      <ExtraSection kind={media.extra} />

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
              visual={<ProductShot shot={stepShots[i % stepShots.length]} />}
            />
          ))}
        </div>
      </Section>

      <StorySpotlight slug={media.story} />
      <FaqSection title={`${page.title}: frequently asked questions`} items={page.faqs} />
      <CtaBand />
    </>
  );
}
