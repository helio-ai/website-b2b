"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Icon } from "./Icon";

const defaultTabs = [
  { key: "Capture", icon: "Target", href: "/capture-leads" },
  { key: "Convert", icon: "TrendingUp", href: "/ai-agents" },
  { key: "Retain", icon: "HeartHandshake", href: "/conversational-support" },
];

/** Three-step tabbed section (Capture / Convert / Retain). Used on home and industry pages. */
export function HomeLifecycleTabs({ subject = "" }: { subject?: string }) {
  const [active, setActive] = useState(0);
  const tab = defaultTabs[active];
  return (
    <div>
      <div role="tablist" aria-label="Lifecycle stages" className="mx-auto mb-8 flex w-fit gap-1 rounded-xl bg-white p-1 ring-1 ring-line">
        {defaultTabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={i === active}
            aria-controls={`panel-${t.key}`}
            onClick={() => setActive(i)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:px-6 ${
              i === active ? "bg-ink text-white" : "text-text-2 hover:text-text"
            }`}
          >
            <Icon name={t.icon} className="hidden h-4 w-4 sm:block" />
            {t.key}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`panel-${tab.key}`}
        aria-labelledby={`tab-${tab.key}`}
        className="grid items-center gap-8 rounded-3xl bg-white p-6 ring-1 ring-line sm:p-10 lg:grid-cols-2 lg:gap-14"
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Step {active + 1} · {tab.key}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Placeholder {tab.key.toLowerCase()} heading{subject ? ` for ${subject}` : ""}
          </h3>
          <p className="mt-4 text-text-2">
            Placeholder paragraph for the {tab.key.toLowerCase()} stage. Describe what the customer can do at this step and
            the result they should expect.
          </p>
          <ul className="mt-6 space-y-3">
            {[1, 2, 3].map((n) => (
              <li key={n} className="flex gap-3 text-sm">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                Placeholder {tab.key.toLowerCase()} point {n}
              </li>
            ))}
          </ul>
          <Link href={tab.href} className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div
          role="img"
          aria-label={`${tab.key} illustration placeholder`}
          className="bg-hatch flex aspect-[4/3] items-center justify-center rounded-2xl bg-brand-50/60 ring-1 ring-line"
        >
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-text-2 ring-1 ring-line">{tab.key} visual</span>
        </div>
      </div>
    </div>
  );
}
