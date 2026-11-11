import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import {
  Container,
  CtaBand,
  CtaPair,
  FaqSection,
  FeatureGrid,
  LogoStrip,
  ProductShot,
  ProofStats,
  RatingsBand,
  Section,
  SectionHeading,
  SplitFeature,
  StoryCarousel,
  SuccessPillars,
  Testimonials,
  TextLink,
} from "@/components/ui";
import { HomeLifecycleTabs } from "@/components/HomeLifecycleTabs";
import { CASE_STUDIES_URL, b2bChannels, b2bFaqs, b2bPipeline, b2bSteps, b2bSwitch, caseStudies, featuredForBusiness } from "@/lib/yourlio";
import { JsonLd, softwareSchema } from "@/lib/seo";
import { SHOPIFY_REVIEWS_URL } from "@/lib/site";

export default function Home() {
  const stories = [...featuredForBusiness, ...caseStudies.filter((c) => !featuredForBusiness.includes(c))].slice(0, 8);
  return (
    <>
      <JsonLd data={softwareSchema} />

      {/* Hero */}
      <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl" aria-hidden="true" />
        <Container className="relative text-center">
          <Link
            href="/whatsapp-business-calling-api"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1 ps-1 pe-3 text-xs font-medium text-white/80 ring-1 ring-white/15 hover:bg-white/15"
          >
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-white">New</span>
            AI calls and WhatsApp calling in the same inbox
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            Turn every enquiry into a booked call
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            YourLio is an AI agent, shared inbox and CRM for businesses that sell through a conversation. It answers on your website,
            WhatsApp, Instagram and Facebook, asks your qualifying questions, collects contact details and books the call.
          </p>
          <div className="mt-8">
            <CtaPair center />
          </div>
          <a href={SHOPIFY_REVIEWS_URL} target="_blank" rel="noopener" className="mt-6 inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white">
            <span className="flex text-amber-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            Rated 5.0 on the Shopify App Store, used by 100+ brands
          </a>
          <div className="mx-auto mt-14 max-w-5xl">
            <ProductShot shot="inbox" priority />
          </div>
        </Container>
      </section>

      {/* How it works, the four steps */}
      <Section tone="dark" className="!pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {b2bSteps.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-ink-2 p-6 ring-1 ring-ink-line">
              <span className="text-sm font-semibold text-brand-300">Step {i + 1}</span>
              <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-white/65">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Logos */}
      <section className="bg-surface py-14">
        <Container>
          <LogoStrip label="Brands that run their customer conversations on YourLio" />
          <div className="mt-8 text-center">
            <TextLink href={CASE_STUDIES_URL}>Read their stories</TextLink>
          </div>
        </Container>
      </section>

      {/* Capture / Convert / Retain */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="One agent, one memory"
          title="Capture the lead, qualify it, keep the client"
          sub="The same AI agent works every stage of the conversation, so your team only steps in where it matters."
        />
        <HomeLifecycleTabs />
      </Section>

      {/* Every channel */}
      <Section>
        <SectionHeading title="Every way a lead reaches you, in one place" sub="Each channel feeds the same agent and the same record of the lead." />
        <FeatureGrid items={b2bChannels.map((c) => ({ title: c.title, body: c.text, icon: c.icon }))} />
      </Section>

      {/* Shared inbox */}
      <Section tone="muted">
        <SplitFeature
          eyebrow="Shared inbox and CRM"
          title="Every lead lands in one CRM, with the whole conversation"
          body="Chats, calls, WhatsApp, social, ads and email arrive in one inbox. The AI answers first and hands off with a reason; your team sees every answer the lead gave before they reply."
          bullets={b2bPipeline.points}
          visual={<ProductShot shot="inbox" />}
          link={{ href: "/team-inbox", label: "See the team inbox" }}
        />
      </Section>

      {/* Pipeline */}
      <Section>
        <SectionHeading title="From new enquiry to booked call" sub="Leads move through stages your team can see and change. Sample leads shown." />
        <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
          {b2bPipeline.stages.map((st) => (
            <div key={st.label} className="w-[78%] shrink-0 rounded-2xl bg-muted p-4 ring-1 ring-line sm:w-auto">
              <p className="mb-3 flex items-center justify-between text-sm font-semibold">
                {st.label}
                <span className="rounded-full bg-white px-2 py-0.5 text-xs text-text-2 ring-1 ring-line">{st.leads.length}</span>
              </p>
              <div className="space-y-3">
                {st.leads.map((l) => (
                  <div key={l.company} className="rounded-xl bg-white p-3 text-sm ring-1 ring-line">
                    <p className="font-semibold">{l.company}</p>
                    <p className="text-text-2">{l.need}</p>
                    <p className="mt-2 flex items-center justify-between text-xs text-text-3">
                      <span>{l.source}</span>
                      {"when" in l && l.when ? <span className="font-medium text-emerald-700">{l.when as string}</span> : null}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why switch */}
      <Section tone="dark">
        <SectionHeading dark eyebrow="Why teams switch" title="No flow trees to draw, no forms to chase" />
        <div className="grid gap-4 lg:grid-cols-3">
          {b2bSwitch.map((s) => (
            <div key={s.after} className="rounded-2xl bg-ink-2 p-6 ring-1 ring-ink-line">
              <p className="text-sm text-white/50 line-through decoration-white/30">{s.before}</p>
              <p className="mt-4 text-base font-medium">{s.after}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Proof */}
      <Section>
        <SectionHeading title="Results from published YourLio case studies" sub="Each figure comes from a case study with its own reporting period." />
        <ProofStats />
      </Section>
      <StoryCarousel stories={stories} />

      <Testimonials />
      <RatingsBand />
      <SuccessPillars />
      <FaqSection items={b2bFaqs.map((f) => ({ q: f.q, a: f.a }))} />
      <CtaBand />
    </>
  );
}
