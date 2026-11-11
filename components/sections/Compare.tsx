import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { comparisons } from "@/lib/yourlio";
import { MAIN_LINKS } from "@/lib/site";

/** Short comparisons; the full ones, with sources, are on yourlio.com/compare. */
export function Compare() {
  return (
    <Section id="compare">
      <SectionHeading eyebrow="Compare" title="How YourLio compares" sub="Summaries of YourLio's published comparisons. Sources read in August 2026." />
      <div className="grid gap-5 lg:grid-cols-3">
        {comparisons.map((c) => (
          <div key={c.slug} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line">
            <h3 className="text-lg font-semibold">YourLio vs {c.name}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {c.points.map((p) => (
                <li key={p.them}>
                  <span className="block text-text-3">{p.them}</span>
                  <span className="mt-0.5 flex gap-2 font-medium">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {p.us}
                  </span>
                </li>
              ))}
            </ul>
            <a href={`${MAIN_LINKS.compare}/${c.slug}`} target="_blank" rel="noopener" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-600">
              Full comparison <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
