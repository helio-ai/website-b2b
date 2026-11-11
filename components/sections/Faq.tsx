import { Plus } from "lucide-react";
import { Button, Section } from "@/components/ui";
import { faqs } from "@/lib/yourlio";
import { APP_SIGNUP_URL } from "@/lib/site";
import { JsonLd, faqSchema } from "@/lib/seo";

/** FAQ accordion plus FAQPage structured data for search and answer engines. */
export function Faq() {
  return (
    <Section tone="muted" id="faq">
      <JsonLd data={faqSchema(faqs)} />
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-text-2">Still have a question? Talk to the team.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/#demo">Book a demo</Button>
            <Button href={APP_SIGNUP_URL} variant="outline">
              Start Free Trial
            </Button>
          </div>
        </div>
        <div className="divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 sm:px-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-left font-medium">
                <h3 className="text-base">{f.q}</h3>
                <Plus className="accordion-icon h-5 w-5 shrink-0 transition-transform" aria-hidden="true" />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-text-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
