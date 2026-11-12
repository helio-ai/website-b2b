import { Section } from "@/components/ui";
import { steps } from "@/lib/yourlio";

/** Four steps in one compact row. */
export function HowItWorks() {
  return (
    <Section tone="muted" id="how-it-works">
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-brand-600">How it works</p>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl bg-white p-5 ring-1 ring-line">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{i + 1}</span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-text-2">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
