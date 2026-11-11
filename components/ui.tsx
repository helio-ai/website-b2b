import Link from "next/link";
import { ArrowRight, Plus, Star } from "lucide-react";
import { Icon } from "./Icon";
import { APP_SIGNUP_URL, BRAND } from "@/lib/site";
import { ph } from "@/lib/content";

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
  const tones = {
    light: "bg-surface text-text",
    muted: "bg-muted text-text",
    dark: "bg-ink text-white",
  };
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
        <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand-600"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {sub && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-text-2"}`}>{sub}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                              */
/* ------------------------------------------------------------------ */

type BtnVariant = "primary" | "secondary" | "ghost-dark" | "outline" | "white";

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
    "ghost-dark": "text-white hover:bg-white/10",
    outline: "bg-white text-text ring-1 ring-line hover:bg-muted",
    white: "bg-white text-ink hover:bg-white/90",
  }[variant];
  const s = { sm: "h-8 px-3 text-sm", md: "h-10 px-4 text-sm", lg: "h-12 px-6 text-base" }[size];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${v} ${s} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaPair({ dark = true, center = false }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${center ? "sm:justify-center" : ""}`}>
      <Button href="/demo" variant={dark ? "secondary" : "outline"} size="lg">
        Talk to Sales
      </Button>
      <Button href={APP_SIGNUP_URL} variant="primary" size="lg">
        Start Free Trial
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
/* Visual placeholders (swap for real screenshots or illustrations)    */
/* ------------------------------------------------------------------ */

export function ImagePlaceholder({
  label = "Image",
  ratio = "aspect-[4/3]",
  dark = false,
  className = "",
}: {
  label?: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`bg-hatch flex ${ratio} w-full items-center justify-center rounded-2xl ring-1 ${dark ? "bg-ink-2 ring-ink-line text-white/40" : "bg-brand-50/60 ring-line text-text-3"} ${className}`}
    >
      <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-text-2 ring-1 ring-line">{label}</span>
    </div>
  );
}

/** A generic chat-app mock used as hero art. Purely decorative. */
export function AppMock({ className = "" }: { className?: string }) {
  const rows = [
    { name: "Contact A", msg: "Hi, is this still available?", ch: "bg-accent-500", active: true },
    { name: "Contact B", msg: "Can I book for Friday?", ch: "bg-brand-400" },
    { name: "Contact C", msg: "Thanks for the quick reply", ch: "bg-amber-400" },
    { name: "Contact D", msg: "What are your opening hours?", ch: "bg-rose-400" },
    { name: "Contact E", msg: "Sent a photo", ch: "bg-sky-400" },
  ];
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-2xl bg-white text-left text-text shadow-2xl ring-1 ring-black/5 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-muted px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 h-2 w-32 rounded bg-line" />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-5 border-r border-line sm:col-span-4">
          {rows.map((r) => (
            <div key={r.name} className={`flex items-center gap-2.5 px-3 py-3 ${r.active ? "bg-brand-50" : ""}`}>
              <span className="relative h-8 w-8 shrink-0 rounded-full bg-line">
                <span className={`absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full ring-2 ring-white ${r.ch}`} />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-semibold">{r.name}</span>
                <span className="block truncate text-[11px] text-text-3">{r.msg}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="col-span-7 flex flex-col gap-3 p-4 sm:col-span-8">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-xs">Hi, is this still available?</div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-3 py-2 text-xs text-white">
            Yes! Would you like to reserve one?
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-xs">Can I pick it up tomorrow?</div>
          <div className="ml-auto flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tr-sm bg-brand-50 px-3 py-2 text-xs text-brand-700 ring-1 ring-brand-100">
            <Icon name="Sparkles" className="h-3.5 w-3.5" /> AI suggested reply ready
          </div>
          <div className="mt-auto hidden h-9 rounded-lg border border-line sm:block" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content blocks                                                       */
/* ------------------------------------------------------------------ */

export function IconBadge({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-white/10 text-brand-300" : "bg-brand-50 text-brand-600"}`}
    >
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}

export type FeatureItem = { title: string; body?: string; icon?: string };

export function FeatureGrid({
  items,
  cols = 3,
  dark = false,
}: {
  items: FeatureItem[];
  cols?: 2 | 3 | 4;
  dark?: boolean;
}) {
  const c = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={`grid gap-4 sm:gap-6 ${c}`}>
      {items.map((f) => (
        <div
          key={f.title}
          className={`rounded-2xl p-6 ring-1 ${dark ? "bg-ink-2 ring-ink-line" : "bg-white ring-line"}`}
        >
          <IconBadge name={f.icon ?? "Sparkles"} dark={dark} />
          <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/65" : "text-text-2"}`}>{f.body ?? ph.medium}</p>
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
  imageLabel = "Product screenshot",
  link,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  bullets?: string[];
  reverse?: boolean;
  imageLabel?: string;
  link?: { href: string; label: string };
}) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 text-text-2">{body ?? ph.long}</p>
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
      <ImagePlaceholder label={imageLabel} />
    </div>
  );
}

export function StatRow({ stats, dark = false }: { stats: { value: string; label: string }[]; dark?: boolean }) {
  return (
    <dl className={`grid grid-cols-2 gap-4 sm:gap-6 ${stats.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {stats.map((s, i) => (
        <div key={i} className={`rounded-2xl p-6 ring-1 ${dark ? "bg-ink-2 ring-ink-line" : "bg-white ring-line"}`}>
          <dt className={`text-sm ${dark ? "text-white/60" : "text-text-2"}`}>{s.label}</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LogoStrip({ count = 7, dark = false, label }: { count?: number; dark?: boolean; label?: string }) {
  const logos = Array.from({ length: count }, (_, i) => `Logo ${i + 1}`);
  return (
    <div>
      {label && <p className={`mb-6 text-center text-sm ${dark ? "text-white/60" : "text-text-2"}`}>{label}</p>}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              aria-hidden={i >= count}
              className={`flex h-14 w-36 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${dark ? "bg-white/5 text-white/50" : "bg-muted text-text-3"}`}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items, dark = false }: { items: { q: string; a?: string }[]; dark?: boolean }) {
  return (
    <div className={`divide-y rounded-2xl ring-1 ${dark ? "divide-ink-line bg-ink-2 ring-ink-line" : "divide-line bg-white ring-line"}`}>
      {items.map((it) => (
        <details key={it.q} className="group px-5 sm:px-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left font-medium">
            <h3 className="text-base">{it.q}</h3>
            <Plus className="accordion-icon h-5 w-5 shrink-0 transition-transform" aria-hidden="true" />
          </summary>
          <p className={`pb-5 text-sm leading-relaxed ${dark ? "text-white/65" : "text-text-2"}`}>{it.a ?? ph.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ title = "Frequently asked questions", count = 8, items }: { title?: string; count?: number; items?: { q: string; a?: string }[] }) {
  const list = items ?? Array.from({ length: count }, (_, i) => ({ q: `Placeholder question ${i + 1}?` }));
  return (
    <Section tone="muted">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-text-2">Can&apos;t find what you&apos;re looking for?</p>
          <div className="mt-6">
            <Button href="/contact" variant="outline">
              Chat with us
            </Button>
          </div>
        </div>
        <FaqAccordion items={list} />
      </div>
    </Section>
  );
}

export function StoryCard({ href, company, title, stat, statLabel, industry }: { href: string; company: string; title: string; stat?: string; statLabel?: string; industry?: string }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow hover:shadow-lg"
    >
      <ImagePlaceholder label="Story image" ratio="aspect-[16/9]" className="rounded-none ring-0" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold">{company}</span>
          {industry && <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-text-2">{industry}</span>}
        </div>
        <h3 className="mt-3 text-base font-semibold leading-snug group-hover:text-brand-600">{title}</h3>
        {stat && (
          <p className="mt-auto pt-4 text-sm text-text-2">
            <span className="text-2xl font-semibold text-text">{stat}</span> {statLabel}
          </p>
        )}
      </div>
    </Link>
  );
}

export function StoryCarousel({ title = "Real results from customers", stories }: { title?: string; stories: { slug: string; company: string; title: string; stat: string; statLabel: string; industry: string }[] }) {
  return (
    <Section>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <TextLink href="/customers">See all stories</TextLink>
      </div>
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
        {stories.map((s) => (
          <div key={s.slug} className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[31%]">
            <StoryCard href={`/customers/${s.slug}`} {...s} />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials({ count = 6 }: { count?: number }) {
  return (
    <Section tone="muted">
      <SectionHeading title="What customers say" sub="Placeholder for a short line introducing customer quotes." />
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {Array.from({ length: count }, (_, i) => (
          <figure key={i} className="break-inside-avoid rounded-2xl bg-white p-6 ring-1 ring-line">
            <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-text">
              &ldquo;Placeholder customer quote. {i % 2 ? ph.short : ph.medium}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-brand-100" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">Customer Name</span>
                <span className="block text-xs text-text-2">Job title, Company {String(i + 1).padStart(2, "0")}</span>
              </span>
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
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Placeholder heading for review-site ratings</h2>
          <p className="mt-4 text-text-2">{ph.medium}</p>
          <div className="mt-6 flex items-center gap-2">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <span className="text-sm text-text-2">0.0 / 5 average rating (placeholder)</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex aspect-[4/5] flex-col items-center justify-center rounded-xl bg-muted p-3 text-center ring-1 ring-line">
              <Icon name="Award" className="h-8 w-8 text-brand-500" />
              <span className="mt-2 text-xs font-medium text-text-2">Badge {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function SuccessPillars() {
  const items = [
    { title: "Pillar one", icon: "Rocket" },
    { title: "Pillar two", icon: "ShieldCheck" },
    { title: "Pillar three", icon: "Award" },
    { title: "Pillar four", icon: "HeartHandshake" },
  ];
  return (
    <Section tone="muted">
      <SectionHeading title={`How ${BRAND} sets you up for success`} sub={ph.heroSub} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div key={it.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <span className="text-sm font-semibold text-brand-600">0{i + 1}</span>
            <div className="mt-4">
              <IconBadge name={it.icon} />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-text-2">{ph.medium}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function CtaBand({ title = "Placeholder closing headline", sub = ph.heroSub }: { title?: string; sub?: string }) {
  return (
    <section className="bg-surface px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
      <div className="bg-grid-dark relative mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/70">{sub}</p>
        <div className="relative mt-8">
          <CtaPair center />
        </div>
      </div>
    </section>
  );
}

/** Dark hero used across product, industry and comparison pages. */
export function PageHero({
  eyebrow,
  title,
  sub = ph.heroSub,
  icon,
  children,
  art = "mock",
  ctas,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  icon?: string;
  children?: React.ReactNode;
  art?: "mock" | "image" | "none";
  ctas?: React.ReactNode;
}) {
  return (
    <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-16 text-white sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className={art === "none" ? "mx-auto max-w-3xl text-center" : "grid items-center gap-12 lg:grid-cols-2"}>
          <div className={art === "none" ? "" : "text-center lg:text-left"}>
            {eyebrow && (
              <p className={`mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/15`}>
                {icon && <Icon name={icon} className="h-3.5 w-3.5 text-brand-300" />}
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">{sub}</p>
            <div className={`mt-8 flex ${art === "none" ? "justify-center" : "justify-center lg:justify-start"}`}>
              {ctas ?? <CtaPair />}
            </div>
            {children}
          </div>
          {art === "mock" && <AppMock />}
          {art === "image" && <ImagePlaceholder label="Hero image" dark />}
        </div>
      </Container>
    </section>
  );
}

/** Light hero for index pages (integrations, customers, faqs, legal). */
export function SimpleHero({ title, sub, children }: { title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="bg-grid-dark bg-ink pt-28 pb-14 text-white sm:pt-36 sm:pb-20">
      <Container className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
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
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-xl font-semibold text-white ${s}`}
      style={{ background: `hsl(${hue} 55% 52%)` }}
    >
      {name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
    </span>
  );
}
