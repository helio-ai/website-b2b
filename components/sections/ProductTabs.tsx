"use client";

import { useState } from "react";
import { FeatureExplorer } from "./FeatureExplorer";
import type { FeatureGroup } from "@/lib/landing";

/** Product areas as tabs (Capture, Convert, ...), each showing its feature switcher. */
export function ProductTabs({ groups }: { groups: FeatureGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div>
      <div role="tablist" aria-label="Product areas" className="no-scrollbar -mx-4 mb-8 flex gap-1 overflow-x-auto px-4 sm:mx-0 sm:w-fit sm:rounded-xl sm:bg-white/5 sm:p-1 sm:ring-1 sm:ring-white/10">
        {groups.map((g, i) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              i === active ? "bg-brand-500 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {g.eyebrow}
          </button>
        ))}
      </div>
      <p className="mb-8 max-w-2xl text-white/70">
        <span className="font-semibold text-white">{group.title}.</span> {group.sub}
      </p>
      <FeatureExplorer key={group.id} group={group} />
    </div>
  );
}
