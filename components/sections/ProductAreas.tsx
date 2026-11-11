import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { FeatureExplorer } from "./FeatureExplorer";
import { featureGroups } from "@/lib/landing";
import { aiCrm, pipeline } from "@/lib/yourlio";

/** Capture, Convert, Inbox and CRM, Retain, WhatsApp: one section each, alternating light and dark. */
export function ProductAreas() {
  return (
    <>
      {featureGroups.map((g, i) => {
        const dark = i % 2 === 1;
        return (
          <Section key={g.id} id={g.id} tone={dark ? "dark" : "light"}>
            <SectionHeading eyebrow={g.eyebrow} title={g.title} sub={g.sub} align="left" dark={dark} />
            <FeatureExplorer group={g} dark={dark} />
            {g.id === "inbox" && <PipelineAndCrm />}
          </Section>
        );
      })}
    </>
  );
}

/** Lead stages (sample leads) and what AI CRM & Helpdesk includes, on the dark Inbox section. */
function PipelineAndCrm() {
  return (
    <div className="mt-14">
      <h3 className="mb-6 text-xl font-semibold text-white">Every lead, from new to booked</h3>
      <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
        {pipeline.map((stage) => (
          <div key={stage.label} className="w-[78%] shrink-0 rounded-2xl bg-ink-2 p-4 ring-1 ring-ink-line sm:w-auto">
            <p className="mb-3 flex items-center justify-between text-sm font-semibold text-white">
              {stage.label}
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">{stage.leads.length}</span>
            </p>
            <div className="space-y-3">
              {stage.leads.map((l) => (
                <div key={l.company} className="rounded-xl bg-white/5 p-3 text-sm ring-1 ring-white/10">
                  <p className="font-semibold text-white">{l.company}</p>
                  <p className="text-white/65">{l.need}</p>
                  <p className="mt-2 text-xs text-white/45">{l.source}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aiCrm.groups.map((grp) => (
          <div key={grp.title} className="rounded-2xl bg-ink-2 p-5 ring-1 ring-ink-line">
            <p className="text-sm font-semibold text-white">{grp.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              {grp.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" /> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
