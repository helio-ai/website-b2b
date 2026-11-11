import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { Container, LogoStrip } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Talk to Sales",
  description: "Placeholder description for the sales demo page.",
};

export default function DemoPage() {
  return (
    <section className="bg-grid-dark bg-ink pt-28 pb-20 text-white sm:pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Placeholder headline for booking a demo</h1>
            <p className="mt-5 text-white/70 sm:text-lg">Placeholder line about what happens in the call.</p>
            <ul className="mt-8 space-y-4">
              {[1, 2, 3].map((n) => (
                <li key={n} className="flex gap-3">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  <span className="text-white/85">Placeholder benefit of talking to sales {n}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <LogoStrip dark count={6} label="Placeholder line about customers" />
            </div>
          </div>
          <LeadForm submitLabel="Book a demo" />
        </div>
      </Container>
    </section>
  );
}
