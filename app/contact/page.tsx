import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CtaBand, FaqSection, Section, SimpleHero } from "@/components/ui";
import { CONTACT_EMAIL, DEMO_URL, DOCS_URL, MAIN_SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact YourLio: Book a Demo or Talk to the Team | YourLio",
  description: "Talk to the YourLio team about AI agents, WhatsApp, AI calls, the shared inbox and CRM for your business. Book a demo or email us.",
  path: "/contact",
});

const faqs = [
  { q: "How do I get a YourLio demo?", a: "Book a time on the demo page. Bring a few real enquiries and the team will show the agent handling them, from the first question to the booked call." },
  { q: "Where can I get help with setup?", a: "Setup guides are in the YourLio help center at docs.yourlio.ai, and the team helps you add the agent to your website and connect your channels." },
  { q: "I run a Shopify store. Where should I go?", a: "YourLio for Shopify lives at yourlio.com, with plans and features built around your store and catalog." },
];

export default function ContactPage() {
  return (
    <>
      <SimpleHero title="Talk to the YourLio team" sub="Book a demo, ask about pricing or get help with setup." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-ink p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Book a demo</h2>
            <p className="mt-2 text-sm text-white/70">See the agent answer, qualify and book with your own questions, and get a plan quoted for your volume.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {["Your website and WhatsApp, live", "Your qualifying questions and booking flow", "The shared inbox, CRM and calling"].map((t) => (
                <li key={t} className="flex gap-2">
                  <Icon name="CircleCheck" className="h-5 w-5 text-accent-400" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row">
              <Link href="/demo" className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-brand-500 text-sm font-medium hover:bg-brand-600">
                Book a demo
              </Link>
              <a href={DEMO_URL} target="_blank" rel="noopener" className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-white/10 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20">
                Open booking page
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              { icon: "Mail", title: "Email", text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
              { icon: "BookOpen", title: "Help center", text: "Setup guides and how-tos", href: DOCS_URL },
              { icon: "Store", title: "Running a Shopify store?", text: "YourLio for Shopify at yourlio.com", href: MAIN_SITE },
              { icon: "Handshake", title: "Partners", text: "Agencies and consultants who set up YourLio for clients", href: "/reseller" },
            ].map((c) => (
              <a key={c.title} href={c.href} className="flex items-start gap-4 rounded-2xl p-5 ring-1 ring-line hover:ring-brand-300">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold">{c.title}</span>
                  <span className="block text-sm text-text-2">{c.text}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>
      <FaqSection title="Contact questions" items={faqs} />
      <CtaBand />
    </>
  );
}
