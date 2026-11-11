"use client";

import { useMemo, useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Container, Monogram } from "./ui";

const regions = ["All regions", "Asia Pacific", "Europe", "Latin America", "Middle East", "North America", "Africa"];
const tiers = ["Gold", "Silver", "Certified"];

const partners = Array.from({ length: 18 }, (_, i) => ({
  name: `Partner ${String(i + 1).padStart(2, "0")}`,
  region: regions[1 + (i % (regions.length - 1))],
  tier: tiers[i % tiers.length],
}));

export function PartnerDirectory() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState(regions[0]);
  const list = useMemo(
    () =>
      partners.filter(
        (p) => p.name.toLowerCase().includes(q.trim().toLowerCase()) && (region === regions[0] || p.region === region),
      ),
    [q, region],
  );

  return (
    <section className="bg-surface py-12 sm:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <span className="sr-only">Search partners</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-text-3" aria-hidden="true" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search partners"
              className="h-11 w-full rounded-lg ps-10 pe-3 text-sm ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-400"
            />
          </label>
          <label>
            <span className="sr-only">Region</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="h-11 w-full rounded-lg bg-white px-3 text-sm ring-1 ring-line sm:w-56"
            >
              {regions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.name} className="rounded-2xl p-5 ring-1 ring-line">
              <div className="flex items-start justify-between">
                <Monogram name={p.name} />
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">{p.tier}</span>
              </div>
              <h2 className="mt-4 font-semibold">{p.name}</h2>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-text-2">
                <MapPin className="h-4 w-4" aria-hidden="true" /> {p.region}
              </p>
              <p className="mt-3 text-sm text-text-2">Placeholder partner description and services offered.</p>
              <a href="#partner" className="mt-4 inline-flex text-sm font-semibold text-brand-600 hover:underline">
                Contact partner
              </a>
            </article>
          ))}
        </div>
        {list.length === 0 && <p className="py-16 text-center text-text-2">No partners match your search.</p>}
      </Container>
    </section>
  );
}
