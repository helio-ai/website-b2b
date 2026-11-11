import { CtaBand, FaqSection, Section, SectionHeading, SimpleHero } from "@/components/ui";

/** Shared layout for the free tool pages: hero, the tool, how to use it, FAQ, CTA. */
export function ToolShell({
  title,
  sub,
  steps,
  faqs,
  children,
}: {
  title: string;
  sub: string;
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <SimpleHero title={title} sub={sub} />
      <section className="bg-muted py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1040px] px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
      <Section>
        <SectionHeading title={`How to use the ${title}`} />
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl p-6 ring-1 ring-line">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{i + 1}</span>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-text-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <FaqSection title={`${title} questions`} items={faqs} />
      <CtaBand title="Let the agent answer the chats your link brings in" />
    </>
  );
}

export const inputCls =
  "mt-1 h-11 w-full rounded-lg bg-white px-3 text-sm text-text ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-400";
