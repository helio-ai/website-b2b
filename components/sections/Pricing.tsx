import { Container, SectionHeading } from "@/components/ui";
import { PricingPlans } from "./PricingPlans";
import { aiCrm, suites } from "@/lib/yourlio";

export function Pricing() {
  return (
    <section id="pricing" className="bg-grid-dark relative scroll-mt-28 overflow-hidden bg-ink py-16 text-white sm:py-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-400/30 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="Pricing"
          title="Pay for AI conversations, not seats"
          sub="AI Agent plans from $49 a month with unlimited team seats. Prices in USD from the published YourLio price list."
        />
        <PricingPlans />
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="font-semibold">{aiCrm.name}</p>
            <p className="mt-2 text-sm text-white/70">{aiCrm.note} Inbox, tickets, routing, calling and reports for your team.</p>
          </div>
          {suites.map((s) => (
            <div key={s.id} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="flex items-baseline justify-between font-semibold">
                {s.name} <span className="text-sm font-normal text-white/70">${s.price}/month</span>
              </p>
              <p className="mt-2 text-sm text-white/70">{s.features.join(". ")}.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
