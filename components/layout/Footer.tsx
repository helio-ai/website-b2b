import Link from "next/link";
import { ChevronDown, Star } from "lucide-react";
import { Logo } from "./Logo";
import { Icon } from "@/components/Icon";
import { CONTACT_EMAIL, MAIN_SITE, SHOPIFY_REVIEWS_URL, footerColumns } from "@/lib/site";

const socials = [
  { label: "YourLio on LinkedIn", href: "https://www.linkedin.com/company/yourlio/", icon: "Briefcase" },
  { label: "YourLio on Instagram", href: "https://www.instagram.com/yourlio.ai/", icon: "Camera" },
  { label: "YourLio on YouTube", href: "https://www.youtube.com/channel/UCF51KsPoGQVpodZRmTyMqfw", icon: "Play" },
  { label: "Email YourLio", href: `mailto:${CONTACT_EMAIL}`, icon: "Mail" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-[1240px] px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Link href="/" aria-label="YourLio for business home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              An AI agent, shared inbox and CRM for businesses that sell through a conversation: a call, a quote, a site visit or an
              appointment.
            </p>
            <a
              href={SHOPIFY_REVIEWS_URL}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex h-10 items-center gap-2 rounded-lg bg-white/10 px-3 text-xs font-medium ring-1 ring-white/15 hover:bg-white/15"
            >
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                ))}
              </span>
              Rated 5.0 on the Shopify App Store
            </a>
            <details className="group mt-6 w-fit">
              <summary className="flex cursor-pointer items-center gap-1 text-sm text-white/70 hover:text-white">
                LLM Resources
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="mt-2 space-y-1 rounded-lg bg-white/5 p-3 text-sm ring-1 ring-white/10">
                <a href="/llms.txt" className="block text-white/70 hover:text-white">
                  llms.txt
                </a>
                <a href="/sitemap.xml" className="block text-white/70 hover:text-white">
                  Sitemap
                </a>
              </div>
            </details>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <details className="group border-b border-white/10 sm:hidden">
                  <summary className="flex cursor-pointer items-center justify-between py-4 text-sm font-semibold">
                    {col.title}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <FooterLinks links={col.links} />
                </details>
                <div className="hidden sm:block sm:pb-8">
                  <p className="mb-4 text-sm font-semibold">{col.title}</p>
                  <FooterLinks links={col.links} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED. YourLio AI was previously called Helio AI.{" "}
            <a href={MAIN_SITE} className="underline-offset-2 hover:text-white hover:underline">
              yourlio.com
            </a>
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 hover:text-white"
              >
                <Icon name={s.icon} className="h-4 w-4" />
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
