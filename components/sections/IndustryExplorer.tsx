"use client";

import { useState } from "react";
import { ChatDemo } from "./ChatDemo";
import type { IndustryCopy } from "@/lib/copy/industries";

/** Pick a group, then an industry, to see the sample conversation the agent runs for it. */
export function IndustryExplorer({ industries }: { industries: IndustryCopy[] }) {
  const groups = [...new Set(industries.map((i) => i.group))];
  const [group, setGroup] = useState(groups[0]);
  const inGroup = industries.filter((i) => i.group === group);
  const [slug, setSlug] = useState(inGroup[0].slug);
  const ind = inGroup.find((i) => i.slug === slug) ?? inGroup[0];

  const pickGroup = (g: string) => {
    setGroup(g);
    setSlug(industries.find((i) => i.group === g)!.slug);
  };

  return (
    <div>
      <div role="tablist" aria-label="Industry groups" className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:w-fit sm:rounded-xl sm:bg-muted sm:p-1">
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={g === group}
            onClick={() => pickGroup(g)}
            className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${g === group ? "bg-ink text-white" : "text-text-2 hover:text-text"}`}
          >
            {g}
          </button>
        ))}
      </div>

      <div role="tablist" aria-label={`${group} industries`} className="mt-4 flex flex-wrap gap-2">
        {inGroup.map((i) => (
          <button
            key={i.slug}
            type="button"
            role="tab"
            aria-selected={i.slug === ind.slug}
            onClick={() => setSlug(i.slug)}
            className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
              i.slug === ind.slug ? "bg-brand-500 text-white" : "bg-white text-text-2 ring-1 ring-line hover:text-text hover:ring-brand-200"
            }`}
          >
            {i.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-8">
        <h3 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">{ind.h1}</h3>
        <ChatDemo ind={ind} />
      </div>
    </div>
  );
}
