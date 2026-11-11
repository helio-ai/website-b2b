import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "./Icon";
import { BRAND, footerColumns } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-[1240px] px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              One short sentence describing what {BRAND} does. Replace this placeholder.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["App Store", "Google Play"].map((s) => (
                <Link
                  key={s}
                  href="/mobile-app"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/10 px-3 text-xs font-medium ring-1 ring-white/15 hover:bg-white/15"
                >
                  <Icon name="Smartphone" className="h-4 w-4" />
                  {s}
                </Link>
              ))}
            </div>
            <details className="group mt-6 w-fit">
              <summary className="flex cursor-pointer items-center gap-1 text-sm text-white/70 hover:text-white">
                LLM Resources
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="mt-2 rounded-lg bg-white/5 p-3 text-sm ring-1 ring-white/10">
                <a href="/llms.txt" className="text-white/70 hover:text-white">
                  Read llms.txt
                </a>
              </div>
            </details>
          </div>

          {/* Link columns: accordions on mobile, columns from sm up */}
          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                {/* Mobile accordion */}
                <details className="group border-b border-white/10 sm:hidden">
                  <summary className="flex cursor-pointer items-center justify-between py-4 text-sm font-semibold">
                    {col.title}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <FooterLinks links={col.links} />
                </details>
                {/* Desktop column */}
                <div className="hidden sm:block sm:pb-8">
                  <p className="mb-4 text-sm font-semibold">{col.title}</p>
                  <FooterLinks links={col.links} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
          {["Partner badge", "Partner badge", "Compliance badge", "Certification badge"].map((b, i) => (
            <span
              key={i}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-white/5 px-3 text-xs text-white/60 ring-1 ring-white/10"
            >
              <Icon name={i < 2 ? "Handshake" : "ShieldCheck"} className="h-4 w-4" />
              {b}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {BRAND}. All rights reserved.
          </p>
          <div className="flex gap-2">
            {["Globe", "Mail", "MessageCircle", "Video"].map((n) => (
              <a
                key={n}
                href="#social"
                aria-label={`Social link (${n})`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 hover:text-white"
              >
                <Icon name={n} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-3 pb-4 sm:pb-0">
      {links.map((l) => (
        <li key={l.href + l.label}>
          <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
