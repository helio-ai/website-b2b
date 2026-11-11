import { CtaBand, FaqSection, Section, SectionHeading, SimpleHero } from "@/components/ui";
import { ph } from "@/lib/content";

/** Shared layout for the free tool pages: hero, the tool itself, how-to, FAQ, CTA. */
export function ToolShell({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <>
      <SimpleHero title={title} sub={sub} />
      <section className="bg-muted py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1040px] px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
      <Section>
        <SectionHeading title={`How to use the ${title}`} />
        <ol className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <li key={n} className="rounded-2xl p-6 ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{n}</span>
              <h3 className="mt-4 font-semibold">Placeholder step {n}</h3>
              <p className="mt-2 text-sm text-text-2">{ph.short}</p>
            </li>
          ))}
        </ol>
      </Section>
      <FaqSection count={5} />
      <CtaBand />
    </>
  );
}

export const inputCls =
  "mt-1 h-11 w-full rounded-lg bg-white px-3 text-sm text-text ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-400";
