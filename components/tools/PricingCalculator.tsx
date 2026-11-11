"use client";

import { useState } from "react";
import Link from "next/link";
import { inputCls } from "./ToolShell";
import { plans, suites } from "@/lib/yourlio";

const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: n < 100 ? 2 : 0 });

/** Estimates a monthly YourLio bill from AI conversations and suites, using the published USD plans. */
export function PricingCalculator() {
  const [convos, setConvos] = useState(1000);
  const [social, setSocial] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const options = plans.map((p) => {
    const extra = Math.max(0, convos - p.convos);
    return { ...p, extra, total: p.price + extra * p.overage };
  });
  const best = options.reduce((a, b) => (b.total < a.total ? b : a));
  const suiteCost = (social ? suites[0].price : 0) + (marketing ? suites[1].price : 0);

  return (
    <div className="grid gap-6 rounded-3xl bg-white p-5 ring-1 ring-line sm:p-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-5">
        <label className="block text-sm font-medium">
          AI conversations per month
          <input
            type="number"
            min={0}
            step={50}
            inputMode="numeric"
            value={convos}
            onChange={(e) => setConvos(Math.max(0, Number(e.target.value) || 0))}
            className={inputCls}
          />
        </label>
        <input
          type="range"
          min={0}
          max={8000}
          step={50}
          value={Math.min(convos, 8000)}
          onChange={(e) => setConvos(Number(e.target.value))}
          aria-label="AI conversations per month"
          className="w-full accent-brand-500"
        />
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium">Add ons</legend>
          {[
            [social, setSocial, suites[0]] as const,
            [marketing, setMarketing, suites[1]] as const,
          ].map(([on, set, s]) => (
            <label key={s.id} className="flex items-center gap-3 rounded-lg p-2 text-sm ring-1 ring-line">
              <input type="checkbox" checked={on} onChange={() => set(!on)} className="h-4 w-4 accent-brand-500" />
              <span className="flex-1">{s.name}</span>
              <span className="text-text-2">${s.price}/mo</span>
            </label>
          ))}
        </fieldset>
        <div className="overflow-x-auto rounded-xl ring-1 ring-line">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="p-3 font-semibold">Plan</th>
                <th scope="col" className="p-3 font-semibold">Included</th>
                <th scope="col" className="p-3 text-right font-semibold">Monthly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {options.map((o) => (
                <tr key={o.id} className={o.id === best.id ? "bg-brand-50" : ""}>
                  <th scope="row" className="p-3 font-medium">{o.name}</th>
                  <td className="p-3 text-text-2">{o.convos.toLocaleString("en-US")}</td>
                  <td className="p-3 text-right">{fmt(o.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl bg-ink p-6 text-white">
        <p className="text-sm text-white/70">Lowest estimated monthly cost</p>
        <p className="mt-1 text-4xl font-semibold tracking-tight" aria-live="polite">
          {fmt(best.total + suiteCost)}
        </p>
        <p className="mt-2 text-sm text-white/70">
          {best.name} plan{best.extra > 0 ? `, with ${best.extra.toLocaleString("en-US")} extra conversations at ${fmt(best.overage)} each` : ""}
          {suiteCost ? `, plus ${fmt(suiteCost)} in add ons` : ""}.
        </p>
        <Link href="/demo" className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 text-sm font-medium hover:bg-brand-600">
          Confirm with a demo
        </Link>
        <p className="mt-auto pt-6 text-xs text-white/50">
          Published USD AI Agent plans. Excludes AI CRM & Helpdesk (quoted on a call), taxes, Meta messaging fees and carrier calling charges. For
          WhatsApp you pay Meta directly, with no YourLio markup.
        </p>
      </div>
    </div>
  );
}
