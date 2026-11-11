"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Container, IntegrationLogo } from "./ui";
import { FilterSidebar } from "./FilterSidebar";
import type { Integration } from "@/lib/yourlio";

export function IntegrationsBrowser({ items }: { items: Integration[] }) {
  const categories = useMemo(() => [...new Set(items.map((i) => i.category))].sort(), [items]);
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (v: string) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(v)) n.delete(v);
      else n.add(v);
      return n;
    });

  const list = useMemo(
    () =>
      items.filter(
        (i) =>
          (i.name + " " + i.description).toLowerCase().includes(q.trim().toLowerCase()) &&
          (selected.size === 0 || selected.has(i.category)),
      ),
    [q, selected, items],
  );

  return (
    <section className="bg-surface py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <FilterSidebar groups={[{ title: "Category", options: categories }]} selected={selected} onToggle={toggle} onClear={() => setSelected(new Set())} />
          <div>
            <label className="relative mb-6 block">
              <span className="sr-only">Search integrations</span>
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-text-3" aria-hidden="true" />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search integrations"
                className="h-11 w-full rounded-lg bg-white ps-10 pe-3 text-sm ring-1 ring-line outline-none focus:ring-2 focus:ring-brand-400"
              />
            </label>
            <p className="mb-4 text-sm text-text-2" aria-live="polite">
              {list.length} integration{list.length === 1 ? "" : "s"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((i) => (
                <Link key={i.slug} href={`/integrations/${i.slug}`} className="group flex flex-col rounded-2xl bg-white p-5 ring-1 ring-line transition-shadow hover:shadow-lg">
                  <IntegrationLogo name={i.name} logo={i.logo} />
                  <h2 className="mt-4 font-semibold group-hover:text-brand-600">{i.name}</h2>
                  <p className="mt-1 text-sm text-text-2">{i.description}</p>
                  <span className="mt-auto pt-4">
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-text-2">{i.category}</span>
                  </span>
                </Link>
              ))}
            </div>
            {list.length === 0 && <p className="py-16 text-center text-text-2">No integrations match these filters.</p>}
          </div>
        </div>
      </Container>
    </section>
  );
}
