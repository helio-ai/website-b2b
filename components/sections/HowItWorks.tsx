import { Section, SectionHeading } from "@/components/ui";
import { beforeAfter, steps } from "@/lib/yourlio";

export function HowItWorks() {
  return (
    <Section tone="muted" id="how-it-works">
      <SectionHeading eyebrow="How it works" title="From first message to booked call, without a form" sub="One AI agent does the same four things on every channel." />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{i + 1}</span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-text-2">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function WhySwitch() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Why YourLio" title="No flow trees to draw, no forms to chase" />
      <div className="grid gap-4 lg:grid-cols-3">
        {beforeAfter.map((s) => (
          <div key={s.after} className="rounded-2xl bg-white p-6 ring-1 ring-line">
            <p className="text-sm text-text-3 line-through">{s.before}</p>
            <p className="mt-4 font-medium">{s.after}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
