"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Info, X } from "lucide-react";
import { plans, includedInEveryPlan, unlimitedPlan } from "@/lib/yourlio";

const money = (n: number) => (n % 1 ? `$${n.toFixed(2)}` : `$${n}`);

/** AI Agent plan cards, from the published USD price list on yourlio.com. */
export function PricingPlans() {
  const [unitOpen, setUnitOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <button type="button" onClick={() => setUnitOpen(true)} className="inline-flex items-center gap-1.5 text-sm text-white/70 underline-offset-4 hover:text-white hover:underline">
          <Info className="h-4 w-4" aria-hidden="true" /> What counts as a conversation?
        </button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((p) => (
          <div key={p.id} className={`relative flex flex-col rounded-2xl bg-white p-6 text-text ${p.popular ? "ring-2 ring-brand-400" : "ring-1 ring-line"}`}>
            {p.popular && <span className="absolute -top-3 left-6 rounded-full bg-brand-500 px-2.5 py-0.5 text-xs font-medium text-white">Most popular</span>}
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="mt-1 text-sm text-text-2">{p.tagline}</p>
            <p className="mt-6">
              <span className="text-4xl font-semibold tracking-tight">{money(p.price)}</span>
              <span className="text-sm text-text-2"> /month</span>
            </p>
            <p className="mt-2 text-sm text-text-2">
              {p.convos.toLocaleString("en-US")} AI conversations, then {money(p.overage)} each
            </p>
            <Link
              href="/demo"
              className={`mt-6 inline-flex h-11 items-center justify-center rounded-lg text-sm font-medium ${p.popular ? "bg-brand-500 text-white hover:bg-brand-600" : "bg-ink text-white hover:bg-ink-3"}`}
            >
              Book a demo
            </Link>
            <ul className="mt-6 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {f}
                </li>
              ))}
              <li className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {p.support}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl bg-white/5 p-6 text-white ring-1 ring-white/10">
          <p className="text-sm font-semibold">Included in every AI Agent plan</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
            {includedInEveryPlan.map((f) => (
              <li key={f} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" /> {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white/5 p-6 text-white ring-1 ring-white/10">
          <p className="text-sm font-semibold">{unlimitedPlan.name}</p>
          <p className="mt-2 text-sm text-white/75">
            From {money(unlimitedPlan.fromUsd)} a month for up to {unlimitedPlan.upTo.toLocaleString("en-US")} AI conversations, shared across channels.
            Quoted on a call.
          </p>
          <Link href="/demo" className="mt-4 inline-flex text-sm font-semibold text-brand-300 hover:text-white">
            Talk to the team
          </Link>
        </div>
      </div>

      {unitOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="unit-title">
          <button type="button" aria-label="Close" className="absolute inset-0 bg-black/50" onClick={() => setUnitOpen(false)} />
          <div className="relative w-full max-w-lg rounded-t-3xl bg-white p-6 text-text sm:rounded-3xl sm:p-8">
            <button type="button" aria-label="Close" onClick={() => setUnitOpen(false)} className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <h2 id="unit-title" className="text-xl font-semibold">What counts as a conversation?</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-2">
              AI Agent plans are priced by AI conversations, not by seats, tickets or individual replies. Allowances reset monthly. Extra
              conversations are billed at your plan&apos;s overage rate, and you can set a spend cap. Meta messaging fees and carrier calling
              charges are separate: for WhatsApp you pay Meta directly, with no YourLio markup.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
