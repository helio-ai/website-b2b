"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Icon } from "./Icon";

type Stage = { key: "Capture" | "Convert" | "Retain"; icon: string; href: string; img: string; alt: string; title: string; body: string; points: string[] };

const DEFAULT: Stage[] = [
  {
    key: "Capture",
    icon: "Target",
    href: "/capture-leads",
    img: "/compare/comment-to-dm.webp",
    alt: "An Instagram comment answered with a private DM by the YourLio agent",
    title: "Catch every enquiry, wherever it starts",
    body: "Website chat, popups, WhatsApp, Instagram and Facebook comments, DMs and Meta ads all open a conversation with the same agent.",
    points: ["Replies in seconds, day or night", "See which ad or post started each chat", "QR codes and links bring offline leads to WhatsApp"],
  },
  {
    key: "Convert",
    icon: "TrendingUp",
    href: "/lead-qualification",
    img: "/compare/agent-is-product.webp",
    alt: "The YourLio AI agent answering and qualifying a lead in chat",
    title: "Qualify the lead and book the call",
    body: "The agent asks your qualifying questions with tap options, collects contact details in the chat and offers open times. The invite lands in their email.",
    points: ["Your questions, answered in one tap or in their own words", "Name, company, phone and work email, no form page", "Your team can step into any chat live"],
  },
  {
    key: "Retain",
    icon: "HeartHandshake",
    href: "/conversational-support",
    img: "/compare/journeys.webp",
    alt: "A YourLio campaign journey with WhatsApp and email steps",
    title: "Follow up and keep clients close",
    body: "Existing clients get answers in the same chat, and campaigns and journeys follow up on WhatsApp, email and SMS with the full history of each contact.",
    points: ["One memory of every contact across channels", "Campaigns and journeys with the Marketing Suite", "Replies come back to the agent and your inbox"],
  },
];

/** Three-step tabbed section (Capture / Convert / Retain). Industry pages pass their own text. */
export function HomeLifecycleTabs({ stages }: { stages?: { capture: string; convert: string; retain: string } }) {
  const [active, setActive] = useState(0);
  const tabs = DEFAULT.map((t) =>
    stages ? { ...t, body: stages[t.key.toLowerCase() as "capture" | "convert" | "retain"] } : t,
  );
  const tab = tabs[active];
  return (
    <div>
      <div role="tablist" aria-label="Lifecycle stages" className="mx-auto mb-8 flex w-fit gap-1 rounded-xl bg-white p-1 ring-1 ring-line">
        {tabs.map((t, i) => (
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
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{tab.title}</h3>
          <p className="mt-4 text-text-2">{tab.body}</p>
          <ul className="mt-6 space-y-3">
            {tab.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Link href={tab.href} className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl ring-1 ring-line">
          <img
            src={tab.img.replace(".webp", "@2x.webp")}
            srcSet={`${tab.img} 1200w, ${tab.img.replace(".webp", "@2x.webp")} 2400w`}
            sizes="(min-width: 1024px) 560px, 100vw"
            alt={tab.alt}
            width={2400}
            height={1350}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
