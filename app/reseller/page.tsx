import type { Metadata } from "next";
import { CtaBand, FaqSection, FeatureGrid, PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { MAIN_LINKS, PARTNER_BOOK_URL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "YourLio Partner Program for Agencies and Consultants | YourLio",
  description: "Agencies and consultants set up YourLio AI agents, WhatsApp and the shared inbox for their clients. Book a partner call with the YourLio team.",
  path: "/reseller",
});

const faqs = [
  { q: "Who is the YourLio partner program for?", a: "Agencies, consultants and freelancers who set up websites, WhatsApp, ads or CRM for clients and want to add an AI agent that answers, qualifies and books." },
  { q: "How do I join?", a: "Book a partner call with the YourLio team. We will talk through your clients, how you work and the best way to partner." },
  { q: "Is there a referral commission?", a: "YourLio runs an affiliate program with published terms on yourlio.com/affiliate. The team will confirm what applies to your referrals on the partner call." },
  { q: "Do partners get help with setup?", a: "Yes. The YourLio team helps with the first setups, and setup guides are in the help center." },
];

export default function ResellerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner program"
        icon="Handshake"
        title="Add an AI agent to every client you serve"
        sub="Agencies and consultants set up YourLio for their clients: the website chat agent, WhatsApp, Instagram and Facebook, the shared inbox and CRM."
        art="shot"
        shot="channels"
        ctas={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={PARTNER_BOOK_URL} size="lg">Book a partner call</Button>
            <Button href="/referral" variant="secondary" size="lg">Refer and earn</Button>
          </div>
        }
      />
      <Section>
        <SectionHeading title="Why partners use YourLio" />
        <FeatureGrid
          items={[
            { title: "One setup, every channel", body: "Website chat, WhatsApp, Instagram and Facebook run on one agent with one memory of each lead.", icon: "Layers" },
            { title: "Your client's questions", body: "Set the qualifying questions and booking goal for each client. No flow trees to draw.", icon: "Filter" },
            { title: "A clear handoff", body: "Every conversation lands in the shared inbox and CRM, so your client's team picks up with the full brief.", icon: "Inbox" },
          ]}
        />
      </Section>
      <Section tone="muted">
        <SectionHeading title="How it works" />
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            ["Book a partner call", "Tell us about your clients and how you work."],
            ["Set up the first client", "The YourLio team helps you add the agent and connect channels."],
            ["Grow together", "Roll YourLio out to more clients with the same playbook."],
          ].map(([t, b], i) => (
            <li key={t} className="rounded-2xl bg-white p-6 ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-text-2">{b}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm text-text-2">
          Affiliate terms are published on{" "}
          <a href={MAIN_LINKS.affiliate} className="font-medium text-brand-600 hover:underline">
            yourlio.com/affiliate
          </a>
          .
        </p>
      </Section>
      <FaqSection title="Partner questions" items={faqs} />
      <CtaBand title="Bring YourLio to your clients" />
    </>
  );
}
