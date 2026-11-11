"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Check, Info, Minus, X } from "lucide-react";
import { APP_SIGNUP_URL } from "@/lib/site";

const plans = [
  { key: "starter", monthly: 0, yearly: 0, cta: "Start Free Trial", href: APP_SIGNUP_URL, popular: false },
  { key: "growth", monthly: 0, yearly: 0, cta: "Start Free Trial", href: APP_SIGNUP_URL, popular: true },
  { key: "advanced", monthly: 0, yearly: 0, cta: "Start Free Trial", href: APP_SIGNUP_URL, popular: false },
  { key: "enterprise", monthly: null, yearly: null, cta: "Talk to Sales", href: "/demo", popular: false },
] as const;

const groups = [
  "Usage",
  "Channels",
  "AI & Automation",
  "Support & Success",
  "Inbox & Contacts",
  "Broadcasts",
  "Integrations",
  "Reports",
  "Platform & Security",
];

// Placeholder availability matrix: [starter, growth, advanced, enterprise]
const cell = (g: number, r: number, p: number): string | boolean => {
  if (r === 0) return ["00", "00", "00", "Custom"][p];
  return p >= (g + r) % 3;
};

export function PricingPlans() {
  const [yearly, setYearly] = useState(true);
  const [tab, setTab] = useState<"key" | "all">("key");
  const [mobilePlan, setMobilePlan] = useState(1);
  const [macOpen, setMacOpen] = useState(false);

  const shownGroups = tab === "key" ? groups.slice(0, 4) : groups;

  return (
    <>
      {/* Billing toggle */}
      <div className="flex flex-col items-center gap-3">
        <div role="radiogroup" aria-label="Billing period" className="inline-flex rounded-xl bg-white/10 p-1 ring-1 ring-white/15">
          {[
            ["Monthly", false],
            ["Yearly (save 00%)", true],
          ].map(([label, val]) => (
            <button
              key={String(label)}
              type="button"
              role="radio"
              aria-checked={yearly === val}
              onClick={() => setYearly(val as boolean)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${yearly === val ? "bg-white text-ink" : "text-white/80 hover:text-white"}`}
            >
              {label as string}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setMacOpen(true)} className="inline-flex items-center gap-1.5 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline">
          <Info className="h-4 w-4" aria-hidden="true" /> How is usage billed?
        </button>
      </div>

      {/* Plan cards */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((p) => {
          const price = yearly ? p.yearly : p.monthly;
          return (
            <div
              key={p.key}
              className={`relative flex flex-col rounded-2xl p-6 text-text ${p.popular ? "bg-white ring-2 ring-brand-400" : "bg-white ring-1 ring-line"}`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-medium text-white">Most popular</span>
              )}
              <h2 className="text-lg font-semibold capitalize">{p.key}</h2>
              <p className="mt-1 text-sm text-text-2">Placeholder plan summary.</p>
              <p className="mt-6">
                {price === null ? (
                  <span className="text-3xl font-semibold">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-tight">${price}</span>
                    <span className="text-sm text-text-2"> /month{yearly ? ", billed yearly" : ""}</span>
                  </>
                )}
              </p>
              <Link
                href={p.href}
                className={`mt-6 inline-flex h-11 items-center justify-center rounded-lg text-sm font-medium ${p.popular ? "bg-brand-500 text-white hover:bg-brand-600" : "bg-ink text-white hover:bg-ink-3"}`}
              >
                {p.cta}
              </Link>
              <ul className="mt-6 space-y-2.5 text-sm">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> Placeholder plan feature {n}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      <div className="mt-20 rounded-3xl bg-white p-4 text-text sm:p-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-2xl font-semibold tracking-tight">Compare plans</h2>
          <div role="tablist" className="inline-flex rounded-xl bg-muted p-1">
            {(
              [
                ["key", "Key features"],
                ["all", "All features"],
              ] as const
            ).map(([k, l]) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${tab === k ? "bg-white shadow-sm" : "text-text-2"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: choose one plan to compare */}
        <label className="mt-6 block sm:hidden">
          <span className="text-sm font-medium">Show plan</span>
          <select
            value={mobilePlan}
            onChange={(e) => setMobilePlan(Number(e.target.value))}
            className="mt-1 h-11 w-full rounded-lg bg-white px-3 text-sm capitalize ring-1 ring-line"
          >
            {plans.map((p, i) => (
              <option key={p.key} value={i}>
                {p.key}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-line">
                <th scope="col" className="py-3 pe-4 font-semibold">Feature</th>
                {plans.map((p, i) => (
                  <th key={p.key} scope="col" className={`px-3 py-3 font-semibold capitalize ${i === mobilePlan ? "" : "hidden sm:table-cell"}`}>
                    {p.key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shownGroups.map((g, gi) => (
                <Fragment key={g}>
                  <tr>
                    <th colSpan={5} scope="rowgroup" className="pt-8 pb-2 text-base font-semibold">
                      {g}
                    </th>
                  </tr>
                  {[0, 1, 2, 3].map((r) => (
                    <tr key={r} className="border-b border-line">
                      <th scope="row" className="py-3 pe-4 font-normal text-text-2">
                        Placeholder feature {r + 1}
                      </th>
                      {plans.map((p, pi) => {
                        const v = cell(gi, r, pi);
                        return (
                          <td key={p.key} className={`px-3 py-3 ${pi === mobilePlan ? "" : "hidden sm:table-cell"}`}>
                            {typeof v === "string" ? (
                              v
                            ) : v ? (
                              <Check className="h-4 w-4 text-accent-500" aria-label="Included" />
                            ) : (
                              <Minus className="h-4 w-4 text-text-3" aria-label="Not included" />
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {macOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="mac-title">
          <button type="button" aria-label="Close" className="absolute inset-0 bg-black/50" onClick={() => setMacOpen(false)} />
          <div className="relative w-full max-w-lg rounded-t-3xl bg-white p-6 text-text sm:rounded-3xl sm:p-8">
            <button type="button" aria-label="Close" onClick={() => setMacOpen(false)} className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <h2 id="mac-title" className="text-xl font-semibold">How usage is billed</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-2">
              Placeholder explanation of the billing unit. Describe what is counted, when the count resets and what happens
              when a limit is reached.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
