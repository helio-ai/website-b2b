"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { ChatDemo } from "./ChatDemo";
import type { IndustryCopy } from "@/lib/copy/industries";

/** Pick an industry to see the sample conversation the agent runs for it. */
export function IndustryExplorer({ industries }: { industries: IndustryCopy[] }) {
  const groups = [...new Set(industries.map((i) => i.group))];
  const [slug, setSlug] = useState(industries[0].slug);
  const ind = industries.find((i) => i.slug === slug) ?? industries[0];

  return (
    <div>
      <div className="space-y-4">
        {groups.map((g) => (
          <div key={g} className="flex flex-col gap-2 sm:flex-row sm:items-start">
            <p className="w-48 shrink-0 pt-1.5 text-xs font-semibold uppercase tracking-wider text-text-3">{g}</p>
            <div role="tablist" aria-label={`${g} industries`} className="flex flex-wrap gap-2">
              {industries
                .filter((i) => i.group === g)
                .map((i) => (
                  <button
                    key={i.slug}
                    type="button"
                    role="tab"
                    aria-selected={i.slug === slug}
                    onClick={() => setSlug(i.slug)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                      i.slug === slug ? "bg-brand-500 text-white" : "bg-white text-text-2 ring-1 ring-line hover:text-text hover:ring-brand-200"
                    }`}
                  >
                    {i.slug === slug && <Icon name={i.icon} className="h-3.5 w-3.5" />}
                    {i.name}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div role="tabpanel" className="mt-10">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{ind.h1}</h3>
        <p className="mt-2 max-w-3xl text-text-2">{ind.lead}</p>
        <div className="mt-8">
          <ChatDemo ind={ind} />
        </div>
      </div>
    </div>
  );
}
