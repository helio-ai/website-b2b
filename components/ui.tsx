/* eslint-disable @next/next/no-img-element */
// Shared building blocks for the landing page sections.
import Link from "next/link";
import { APP_SIGNUP_URL } from "@/lib/site";
import { SHOTS, type ShotKey } from "@/lib/shots";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** A full-width page section. `id` makes it a jump target for the navigation. */
export function Section({
  children,
  id,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  tone?: "light" | "muted" | "dark";
  className?: string;
}) {
  const tones = { light: "bg-surface text-text", muted: "bg-muted text-text", dark: "bg-ink text-white" };
  return (
    <section id={id} className={`scroll-mt-28 py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>
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
      {eyebrow && <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand-600"}`}>{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {sub && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-text-2"}`}>{sub}</p>}
    </div>
  );
}

const buttonVariants = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  secondary: "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20",
  outline: "bg-white text-text ring-1 ring-line hover:bg-muted",
  white: "bg-white text-ink hover:bg-white/90",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof buttonVariants;
  size?: "md" | "lg";
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${buttonVariants[variant]} ${
        size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 text-sm"
      }`}
    >
      {children}
    </Link>
  );
}

/** The page's two calls to action: Talk to Sales (demo section) and Start Free Trial. */
export function CtaPair({ dark = true, center = false }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${center ? "sm:justify-center" : ""}`}>
      <Button href="/#demo" variant={dark ? "secondary" : "outline"} size="lg">
        Talk to Sales
      </Button>
      <Button href={APP_SIGNUP_URL} size="lg">
        Start Free Trial
      </Button>
    </div>
  );
}

/** A product screenshot, sharp on high density screens. */
export function ProductShot({ shot, priority = false, sizes = "(min-width: 1024px) 800px, 100vw" }: { shot: ShotKey; priority?: boolean; sizes?: string }) {
  const s = SHOTS[shot];
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-2 shadow-2xl ring-1 ring-white/10">
      <img
        src={s.src}
        srcSet={s.srcSet}
        sizes={sizes}
        width={s.width}
        height={s.height}
        alt={s.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-auto w-full"
      />
    </div>
  );
}
