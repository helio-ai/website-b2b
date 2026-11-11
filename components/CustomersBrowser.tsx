"use client";

import { useMemo, useState } from "react";
import { Container, StoryCard } from "./ui";
import { FilterSidebar } from "./FilterSidebar";
import { customers, storyIndustries } from "@/lib/content";

export function CustomersBrowser() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggle = (v: string) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(v)) n.delete(v);
      else n.add(v);
      return n;
    });
  const list = useMemo(() => (selected.size ? customers.filter((c) => selected.has(c.industry)) : customers), [selected]);

  return (
    <section className="bg-surface py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <FilterSidebar
            groups={[{ title: "Industry", options: storyIndustries }]}
            selected={selected}
            onToggle={toggle}
            onClear={() => setSelected(new Set())}
          />
          <div>
            <p className="mb-4 text-sm text-text-2" aria-live="polite">
              {list.length} stor{list.length === 1 ? "y" : "ies"}
            </p>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((c) => (
                <StoryCard key={c.slug} href={`/customers/${c.slug}`} {...c} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
