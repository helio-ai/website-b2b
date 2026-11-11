import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import {
  AppMock,
  Container,
  CtaBand,
  CtaPair,
  FeatureGrid,
  ImagePlaceholder,
  LogoStrip,
  RatingsBand,
  Section,
  SectionHeading,
  SplitFeature,
  StoryCarousel,
  SuccessPillars,
  Testimonials,
  TextLink,
  IconBadge,
} from "@/components/ui";
import { HomeLifecycleTabs } from "@/components/HomeLifecycleTabs";
import { customers, ph } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
        <Container className="relative text-center">
          <Link
            href="#announcement"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1 ps-1 pe-3 text-xs font-medium text-white/80 ring-1 ring-white/15 hover:bg-white/15"
          >
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-white">New</span>
            Placeholder announcement text
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            Placeholder headline for the home page
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">{ph.heroSub}</p>
          <div className="mt-8">
            <CtaPair center />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
            <span className="flex text-amber-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            Rating badge placeholder
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <AppMock />
          </div>
        </Container>
      </section>

      {/* Interactive tour */}
      <Section tone="dark" className="!pt-0">
        <div className="rounded-3xl bg-ink-2 p-6 ring-1 ring-ink-line sm:p-10">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">Placeholder heading for a product tour</h2>
              <p className="mt-2 text-white/65">{ph.short}</p>
            </div>
            <Link
              href="#tour"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm font-medium text-ink hover:bg-white/90"
            >
              <Play className="h-4 w-4" aria-hidden="true" /> Start interactive tour
            </Link>
          </div>
        </div>
      </Section>

      {/* Logos */}
      <section className="bg-surface py-14">
        <Container>
          <LogoStrip label="Placeholder line about the companies that use the product" />
          <div className="mt-8 text-center">
            <TextLink href="/customers">Explore success stories</TextLink>
          </div>
        </Container>
      </section>

      {/* Capture / Convert / Retain */}
      <Section tone="muted">
        <SectionHeading title="Placeholder heading for the customer lifecycle" sub={ph.heroSub} />
        <HomeLifecycleTabs />
      </Section>

      {/* Unified thread */}
      <Section>
        <SplitFeature
          eyebrow="Omnichannel"
          title="Placeholder heading for unified conversations"
          bullets={["Placeholder benefit one", "Placeholder benefit two", "Placeholder benefit three"]}
          link={{ href: "/team-inbox", label: "Learn more" }}
        />
      </Section>

      {/* AI section */}
      <Section tone="dark">
        <SectionHeading dark eyebrow="AI" title="Placeholder heading for the AI section" sub={ph.heroSub} />
        <div className="mx-auto mb-12 max-w-4xl">
          <div className="relative">
            <ImagePlaceholder label="Video" ratio="aspect-video" dark />
            <button
              type="button"
              aria-label="Play video"
              className="absolute inset-0 m-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-ink shadow-xl"
            >
              <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 text-center">
            <TextLink href="/ai-agents" dark>
              Try AI Agents for free
            </TextLink>
          </div>
        </div>
        <FeatureGrid
          dark
          items={[
            { title: "AI point one", icon: "TrendingUp" },
            { title: "AI point two", icon: "Clock" },
            { title: "AI point three", icon: "ShieldCheck" },
          ]}
        />
      </Section>

      {/* Proven results */}
      <Section>
        <SectionHeading title="Placeholder heading for proven results" />
        <div className="grid gap-4 sm:grid-cols-3">
          {customers.slice(0, 3).map((c) => (
            <Link
              key={c.slug}
              href={`/customers/${c.slug}`}
              className="group rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 transition-colors hover:bg-brand-100"
            >
              <p className="text-4xl font-semibold tracking-tight text-brand-700">{c.stat}</p>
              <p className="mt-1 text-sm text-text-2">{c.statLabel}</p>
              <p className="mt-6 flex items-center justify-between text-sm font-semibold">
                {c.company}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </p>
            </Link>
          ))}
        </div>
      </Section>
      <StoryCarousel title="Customer stories" stories={customers.slice(3, 11)} />

      <Testimonials />
      <RatingsBand />
      <SuccessPillars />

      {/* Why section with icon bullets */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Users", "Plug", "BarChart3", "Headphones"].map((ic, i) => (
            <div key={ic} className="flex gap-4">
              <IconBadge name={ic} />
              <div>
                <h3 className="font-semibold">Highlight {i + 1}</h3>
                <p className="mt-1 text-sm text-text-2">{ph.short}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
