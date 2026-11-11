"use client";

import { useState } from "react";
import { inputCls } from "./ToolShell";

// PLACEHOLDER RATES (USD). These are not real prices: replace with the
// current official rate card before publishing.
const markets: Record<string, { marketing: number; utility: number; authentication: number; callMin: number }> = {
  "Market A": { marketing: 0.025, utility: 0.004, authentication: 0.004, callMin: 0.01 },
  "Market B": { marketing: 0.06, utility: 0.02, authentication: 0.03, callMin: 0.02 },
  "Market C": { marketing: 0.04, utility: 0.01, authentication: 0.01, callMin: 0.015 },
  "Market D": { marketing: 0.08, utility: 0.03, authentication: 0.035, callMin: 0.03 },
};

const cats = [
  ["marketing", "Marketing messages"],
  ["utility", "Utility messages"],
  ["authentication", "Authentication messages"],
] as const;

export function PricingCalculator() {
  const [market, setMarket] = useState("Market A");
  const [counts, setCounts] = useState({ marketing: 1000, utility: 500, authentication: 200 });
  const [minutes, setMinutes] = useState(100);

  const r = markets[market];
  const lines = cats.map(([k, label]) => ({ label, cost: counts[k] * r[k] }));
  const calls = minutes * r.callMin;
  const total = lines.reduce((s, l) => s + l.cost, 0) + calls;
  const fmt = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="grid gap-6 rounded-3xl bg-white p-5 ring-1 ring-line sm:p-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <label className="block text-sm font-medium">
          Recipient market
          <select value={market} onChange={(e) => setMarket(e.target.value)} className={inputCls}>
            {Object.keys(markets).map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        {cats.map(([k, label]) => (
          <label key={k} className="block text-sm font-medium">
            {label} per month
            <input
              type="number"
              min={0}
              inputMode="numeric"
              value={counts[k]}
              onChange={(e) => setCounts((c) => ({ ...c, [k]: Math.max(0, Number(e.target.value) || 0) }))}
              className={inputCls}
            />
          </label>
        ))}
        <label className="block text-sm font-medium">
          Call minutes per month
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={minutes}
            onChange={(e) => setMinutes(Math.max(0, Number(e.target.value) || 0))}
            className={inputCls}
          />
        </label>
      </div>
      <div className="flex flex-col rounded-2xl bg-ink p-6 text-white">
        <p className="text-sm text-white/70">Estimated monthly cost</p>
        <p className="mt-1 text-4xl font-semibold tracking-tight" aria-live="polite">
          {fmt(total)}
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          {lines.map((l) => (
            <div key={l.label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-white/70">{l.label}</dt>
              <dd>{fmt(l.cost)}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4">
            <dt className="text-white/70">Calls</dt>
            <dd>{fmt(calls)}</dd>
          </div>
        </dl>
        <p className="mt-auto pt-6 text-xs text-white/50">Placeholder rates for layout only. Replace them with the official rate card.</p>
      </div>
    </div>
  );
}
