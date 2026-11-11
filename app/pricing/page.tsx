import type { Metadata } from "next";
import { Container, CtaBand, FaqSection, FeatureGrid, RatingsBand, Section, SectionHeading } from "@/components/ui";
import { PricingPlans } from "@/components/PricingPlans";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Placeholder description for the pricing page.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-20 text-white sm:pt-36">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Placeholder pricing headline</h1>
            <p className="mt-4 text-white/70 sm:text-lg">Placeholder line about how pricing works. All prices on this page are placeholders.</p>
          </div>
          <PricingPlans />
        </Container>
      </section>

      <Section>
        <SectionHeading title="Placeholder heading for built-in safeguards" sub="Placeholder line about limits and protections included with every plan." />
        <FeatureGrid
          cols={4}
          items={[
            { title: "Safeguard one", icon: "ShieldCheck" },
            { title: "Safeguard two", icon: "Bell" },
            { title: "Safeguard three", icon: "SlidersHorizontal" },
            { title: "Safeguard four", icon: "Lock" },
          ]}
        />
      </Section>

      <FaqSection count={12} />
      <RatingsBand />
      <CtaBand />
    </>
  );
}
