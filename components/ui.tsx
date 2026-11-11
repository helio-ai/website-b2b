/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Plus, Star } from "lucide-react";
import { Icon } from "./Icon";
import { BRAND, SHOPIFY_REVIEWS_URL } from "@/lib/site";
import { CASE_STUDIES_URL, caseStudyUrl, customerLogos, pillars, reviewUrl, reviews, type CaseStudy } from "@/lib/yourlio";
import { JsonLd, faqSchema } from "@/lib/seo";

/* ------------------------------------------------------------------ */
/* Layout primitives                                                    */
/* ------------------------------------------------------------------ */

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  tone = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "muted" | "dark";
  id?: string;
}) {
  const tones = { light: "bg-surface text-text", muted: "bg-muted text-text", dark: "bg-ink text-white" };
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand-600"}`}>{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {sub && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-text-2"}`}>{sub}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                              */
/* ------------------------------------------------------------------ */

type BtnVariant = "primary" | "secondary" | "outline" | "white";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const v = {
    primary: "bg-brand-500 text-white hover:bg-brand-600",
    secondary: "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20",
    outline: "bg-white text-text ring-1 ring-line hover:bg-muted",
    white: "bg-white text-ink hover:bg-white/90",
  }[variant];
  const s = { sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-sm", lg: "h-12 px-6 text-base" }[size];
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${v} ${s} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaPair({ dark = true, center = false }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${center ? "sm:justify-center" : ""}`}>
      <Button href="/demo" variant="primary" size="lg">
        Book a demo
      </Button>
      <Button href="/pricing" variant={dark ? "secondary" : "outline"} size="lg">
        See pricing
      </Button>
    </div>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold ${dark ? "text-brand-300 hover:text-white" : "text-brand-600 hover:text-brand-700"}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Product visuals                                                      */
/* ------------------------------------------------------------------ */

export type ShotKey = "inbox" | "inbox-dark" | "helpdesk" | "helpdesk-dark" | "channels" | "comment-to-dm" | "journeys" | "profiles" | "agent" | "results";

// Each product screenshot ships in three widths (800, 1600 and 3840 for the
// creatives, 1200 and 2400 for the comparison shots) so high density screens
// get a sharp image and phones a light one.
const creative = (name: string, h: number, alt: string) => ({
  src: `/product-creatives/${name}-1600.webp`,
  srcSet: `/product-creatives/${name}-800.webp 800w, /product-creatives/${name}-1600.webp 1600w, /product-creatives/${name}-4k.webp 3840w`,
  w: 3840,
  h,
  alt,
});
const compare = (name: string, h: number, alt: string) => ({
  src: `/compare/${name}@2x.webp`,
  srcSet: `/compare/${name}.webp 1200w, /compare/${name}@2x.webp 2400w`,
  w: 2400,
  h,
  alt,
});

const SHOTS: Record<ShotKey, { src: string; srcSet: string; w: number; h: number; alt: string }> = {
  inbox: creative("yourlio-shopify-crm-shared-inbox-light", 1958, "YourLio shared inbox with every channel and the customer record beside each conversation"),
  "inbox-dark": creative("yourlio-shopify-crm-shared-inbox-dark", 1951, "YourLio shared inbox in dark mode, with every channel and the customer profile beside each conversation"),
  helpdesk: creative("yourlio-shopify-ai-helpdesk-light", 1949, "YourLio AI helpdesk with tickets, assignments and an AI summary"),
  "helpdesk-dark": creative("yourlio-shopify-ai-helpdesk-dark", 1961, "YourLio AI helpdesk in dark mode, with tickets, assignments and an AI summary"),
  channels: compare("every-channel", 1350, "Website chat, WhatsApp, Instagram, Facebook and email conversations in one YourLio view"),
  "comment-to-dm": compare("comment-to-dm", 1350, "An Instagram comment answered with a private DM by the YourLio agent"),
  journeys: compare("journeys", 1350, "A YourLio campaign journey with WhatsApp and email steps"),
  profiles: compare("shopper-profiles", 1482, "A YourLio customer profile with the memory of every conversation"),
  agent: compare("agent-is-product", 1350, "The YourLio AI agent answering a question in chat"),
  results: compare("what-it-earned", 1350, "YourLio dashboard showing conversations and the results they produced"),
};

export function ProductShot({
  shot,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 600px, 100vw",
}: {
  shot: ShotKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const s = SHOTS[shot] ?? SHOTS.inbox;
  const dark = shot.endsWith("-dark");
  return (
    <div className={`overflow-hidden rounded-2xl shadow-2xl ring-1 ${dark ? "bg-ink-2 ring-white/10" : "bg-white ring-black/5"} ${className}`}>
      <img
        src={s.src}
        srcSet={s.srcSet}
        sizes={sizes}
        width={s.w}
        height={s.h}
        alt={s.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-auto w-full"
      />
    </div>
  );
}

export function Photo({ src, alt, ratio = "aspect-[3/2]", className = "" }: { src: string; alt: string; ratio?: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-muted ring-1 ring-line ${ratio} ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
    </div>
  );
}

export function ImagePlaceholder({ label = "Image", ratio = "aspect-[4/3]", dark = false, className = "" }: { label?: string; ratio?: string; dark?: boolean; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`bg-hatch flex ${ratio} w-full items-center justify-center rounded-2xl ring-1 ${dark ? "bg-ink-2 ring-ink-line" : "bg-brand-50/60 ring-line"} ${className}`}
    >
      <img src="/brand/mark-light-bg.png" alt="" className="h-14 w-auto opacity-80" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                       */
/* ------------------------------------------------------------------ */

export function IconBadge({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-white/10 text-brand-300" : "bg-brand-50 text-brand-600"}`}>
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}

export type FeatureItem = { title: string; body?: string; icon?: string };

export function FeatureGrid({ items, cols = 3, dark = false }: { items: FeatureItem[]; cols?: 2 | 3 | 4; dark?: boolean }) {
  const c = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`grid gap-4 sm:gap-6 ${c}`}>
      {items.map((f) => (
        <div key={f.title} className={`rounded-2xl p-6 ring-1 ${dark ? "bg-ink-2 ring-ink-line" : "bg-white ring-line"}`}>
          <IconBadge name={f.icon ?? "Sparkles"} dark={dark} />
          <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
          {f.body && <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/65" : "text-text-2"}`}>{f.body}</p>}
        </div>
      ))}
    </div>
  );
}

export function SplitFeature({
  eyebrow,
  title,
  body,
  bullets,
  reverse = false,
  visual,
  link,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  reverse?: boolean;
  visual: React.ReactNode;
  link?: { href: string; label: string };
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 text-text-2">{body}</p>
        {bullets && (
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm">
                <Icon name="CircleCheck" className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {link && (
          <div className="mt-6">
            <TextLink href={link.href}>{link.label}</TextLink>
          </div>
        )}
      </div>
      <div>{visual}</div>
    </div>
  );
}

export function StatRow({ stats, dark = false }: { stats: { value: string; label: string; note?: string }[]; dark?: boolean }) {
  return (
    <dl className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 ${stats.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {stats.map((s, i) => (
        <div key={i} className={`rounded-2xl p-6 ring-1 ${dark ? "bg-ink-2 ring-ink-line" : "bg-white ring-line"}`}>
          <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
          <dt className={`mt-2 text-sm ${dark ? "text-white/70" : "text-text-2"}`}>{s.label}</dt>
          {s.note && <p className={`mt-3 text-xs ${dark ? "text-white/45" : "text-text-3"}`}>{s.note}</p>}
        </div>
      ))}
    </dl>
  );
}

/** Real proof from published YourLio case studies, for any page. */
export function ProofStats({ dark = false }: { dark?: boolean }) {
  return (
    <StatRow
      dark={dark}
      stats={[
        { value: "718", label: "home eye test bookings from chats, no call required", note: "YourSpex case study" },
        { value: "92%", label: "of chats resolved without a human handoff", note: "Cureayu case study" },
        { value: "15,000+", label: "chats handled in 46 days for a wholesale marketplace", note: "DeoDap case study" },
        { value: "5.0", label: "rating on the Shopify App Store, used by 100+ brands", note: "As of October 2026" },
      ]}
    />
  );
}

export function LogoStrip({ dark = false, label }: { dark?: boolean; label?: string }) {
  const tone = dark
    ? "brightness-0 invert opacity-60 group-hover/logo:opacity-100"
    : "grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100";
  return (
    <div>
      {label && <p className={`mb-8 text-center text-sm font-medium ${dark ? "text-white/60" : "text-text-2"}`}>{label}</p>}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-14 py-2 hover:[animation-play-state:paused] sm:gap-20" aria-label="YourLio customers">
          {[...customerLogos, ...customerLogos].map((l, i) => (
            <li key={i} aria-hidden={i >= customerLogos.length} className="group/logo flex h-12 shrink-0 items-center">
              <img
                src={l.src}
                alt={i < customerLogos.length ? `${l.name} logo` : ""}
                width={l.width}
                height={l.height}
                loading="lazy"
                decoding="async"
                style={{ width: l.width, height: l.height }}
                className={`object-contain transition duration-300 ${tone}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FaqAccordion({ items, dark = false }: { items: { q: string; a: string }[]; dark?: boolean }) {
  return (
    <div className={`divide-y rounded-2xl ring-1 ${dark ? "divide-ink-line bg-ink-2 ring-ink-line" : "divide-line bg-white ring-line"}`}>
      {items.map((it) => (
        <details key={it.q} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left font-medium">
            <h3 className="text-base">{it.q}</h3>
            <Plus className="accordion-icon h-5 w-5 shrink-0 transition-transform" aria-hidden="true" />
          </summary>
          <p className={`pb-5 text-sm leading-relaxed ${dark ? "text-white/65" : "text-text-2"}`}>{it.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQ block plus FAQPage structured data for answer engines. */
export function FaqSection({ title = "Frequently asked questions", items }: { title?: string; items: { q: string; a: string }[] }) {
  return (
    <Section tone="muted">
      <JsonLd data={faqSchema(items)} />
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-text-2">Still have a question? Talk to the team.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/demo">Book a demo</Button>
            <Button href="/faqs" variant="outline">
              All FAQs
            </Button>
          </div>
        </div>
        <FaqAccordion items={items} />
      </div>
    </Section>
  );
}

/** Card for a published case study. The full story lives on yourlio.com. */
export function StoryCard({ study }: { study: CaseStudy }) {
  return (
    <a
      href={caseStudyUrl(study.slug)}
      target="_blank"
      rel="noopener"
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[2/1] overflow-hidden bg-muted">
        <img src={study.image} alt={study.imageAlt ?? `${study.client} case study`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold">{study.client}</span>
          <span className="truncate rounded-full bg-muted px-2.5 py-0.5 text-xs text-text-2">{study.channels.slice(0, 2).join(", ")}</span>
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug group-hover:text-brand-600">{study.title}</h3>
        <p className="mt-auto pt-4 text-sm text-text-2">
          <span className="text-2xl font-semibold text-text">{study.stat.value}</span> {study.stat.label}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-600">
          Read on yourlio.com <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

export function StoryCarousel({ title = "Results from YourLio customers", stories }: { title?: string; stories: CaseStudy[] }) {
  return (
    <Section>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm text-text-2">Published case studies with reporting periods. Individual results, not guarantees.</p>
        </div>
        <TextLink href={CASE_STUDIES_URL}>See all stories</TextLink>
      </div>
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        {stories.map((s) => (
          <div key={s.slug} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
            <StoryCard study={s} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials({ count = 6 }: { count?: number }) {
  return (
    <Section tone="muted">
      <SectionHeading
        title="What teams say about YourLio"
        sub="Summaries of merchant reviews on the Shopify App Store, not verbatim quotes. Each links to the original review."
      />
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {reviews.slice(0, count).map((r) => (
          <figure key={r.reviewId} className="break-inside-avoid rounded-2xl bg-white p-6 ring-1 ring-line">
            <div className="flex gap-0.5 text-amber-400" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: r.rating }, (_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-text">{r.summary}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img src={r.photo} alt={r.person} width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{r.person}</span>
                <span className="block text-xs text-text-2">
                  {r.role}, {r.brand}
                </span>
              </span>
              <a href={reviewUrl(r.reviewId)} target="_blank" rel="noopener" className="ml-auto text-xs font-medium text-brand-600 hover:underline">
                Review
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function RatingsBand() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Rated 5.0 by the businesses that run on it</h2>
          <p className="mt-4 text-text-2">
            {BRAND} is rated 5.0 on the Shopify App Store and used by 100+ brands. Every review is public, and every case study states its
            reporting period.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <a href={SHOPIFY_REVIEWS_URL} target="_blank" rel="noopener" className="text-sm font-semibold text-brand-600 hover:underline">
              Read the reviews on Shopify
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            ["5.0", "Shopify App Store rating"],
            ["100+", "brands use YourLio"],
            ["16", "published case studies"],
          ].map(([v, l]) => (
            <div key={l} className="flex aspect-[4/5] flex-col items-center justify-center rounded-xl bg-muted p-3 text-center ring-1 ring-line">
              <span className="text-3xl font-semibold tracking-tight text-brand-700 sm:text-4xl">{v}</span>
              <span className="mt-2 text-xs font-medium text-text-2">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SuccessPillars() {
  return (
    <Section tone="muted">
      <SectionHeading title={`How ${BRAND} works for your team`} sub="What we build toward, and what you can expect from the product." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((it, i) => (
          <div key={it.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <span className="text-sm font-semibold text-brand-600">0{i + 1}</span>
            <div className="mt-4">
              <IconBadge name={it.icon} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-text-2">{it.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CtaBand({
  title = "Turn every enquiry into a booked call",
  sub = "See YourLio answer, qualify and book on your own website and WhatsApp, with your real questions.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="bg-surface px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="bg-grid-dark relative mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-400/45 blur-3xl" aria-hidden="true" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/70">{sub}</p>
        <div className="relative mt-8">
          <CtaPair center />
        </div>
      </div>
    </section>
  );
}

/** On dark backgrounds, show the dark mode screenshot where one exists. */
const darkVariant = (k: ShotKey): ShotKey => (k === "inbox" ? "inbox-dark" : k === "helpdesk" ? "helpdesk-dark" : k);

/** Dark hero used across product, industry and comparison pages. */
export function PageHero({
  eyebrow,
  title,
  sub,
  icon,
  children,
  art = "mock",
  shot,
  photo,
  ctas,
}: {
  eyebrow?: string;
  title: string;
  sub: string;
  icon?: string;
  children?: React.ReactNode;
  art?: "mock" | "shot" | "photo" | "none";
  shot?: ShotKey;
  photo?: { src: string; alt: string };
  ctas?: React.ReactNode;
}) {
  return (
    <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className={art === "none" ? "mx-auto max-w-3xl text-center" : "grid items-center gap-12 lg:grid-cols-2"}>
          <div className={art === "none" ? "" : "text-center lg:text-left"}>
            {eyebrow && (
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15">
                {icon && <Icon name={icon} className="h-3.5 w-3.5 text-brand-300" />}
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">{title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">{sub}</p>
            <div className={`mt-8 flex ${art === "none" ? "justify-center" : "justify-center lg:justify-start"}`}>{ctas ?? <CtaPair />}</div>
            {children}
          </div>
          {art === "mock" && <ProductShot shot="inbox-dark" priority />}
          {art === "shot" && <ProductShot shot={darkVariant(shot ?? "inbox")} priority />}
          {art === "photo" && photo && <Photo src={photo.src} alt={photo.alt} ratio="aspect-[3/2]" className="ring-white/10" />}
        </div>
      </Container>
    </section>
  );
}

/** Dark hero for index pages (integrations, customers, faqs). */
export function SimpleHero({ title, sub, children }: { title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="bg-grid-dark bg-ink pt-28 pb-14 text-white sm:pt-36 sm:pb-20">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {sub && <p className="mx-auto mt-4 max-w-2xl text-white/70 sm:text-lg">{sub}</p>}
        {children}
      </Container>
    </section>
  );
}

export function Monogram({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  const s = size === "lg" ? "h-16 w-16 text-2xl" : "h-11 w-11 text-base";
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center rounded-xl font-semibold text-white ${s}`} style={{ background: `hsl(${hue} 55% 52%)` }}>
      {name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
    </span>
  );
}

export function IntegrationLogo({ name, logo, size = "md" }: { name: string; logo: string | null; size?: "md" | "lg" }) {
  if (!logo) return <Monogram name={name} size={size} />;
  const s = size === "lg" ? "h-16 w-16 p-2.5" : "h-11 w-11 p-1.5";
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-line ${s}`}>
      <img src={logo} alt="" loading="lazy" className="h-full w-full object-contain" />
    </span>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i < items.length - 1 ? (
              <Link href={it.path} className="hover:text-white">
                {it.name}
              </Link>
            ) : (
              <span className="text-white/85">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
