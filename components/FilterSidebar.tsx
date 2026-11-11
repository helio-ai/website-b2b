"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

export type FilterGroup = { title: string; options: string[] };

/**
 * Checkbox filter list. On desktop it is a sticky sidebar; on mobile a
 * "Filter" button opens it as a bottom sheet.
 */
export function FilterSidebar({
  groups,
  selected,
  onToggle,
  onClear,
}: {
  groups: FilterGroup[];
  selected: Set<string>;
  onToggle: (v: string) => void;
  onClear: () => void;
}) {
  const [open, setOpen] = useState(false);

  const body = (
    <div className="space-y-6">
      {groups.map((g) => (
        <fieldset key={g.title}>
          <legend className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-3">{g.title}</legend>
          <div className="space-y-1">
            {g.options.map((o) => (
              <label key={o} className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1.5 text-sm hover:bg-muted">
                <input
                  type="checkbox"
                  name={o}
                  checked={selected.has(o)}
                  onChange={() => onToggle(o)}
                  className="h-4 w-4 rounded border-line accent-brand-500"
                />
                <span className="capitalize">{o}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );

  return (
    <>
      <div className="flex items-center gap-2 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium ring-1 ring-line"
        >
          <SlidersHorizontal className="h-4 w-4" aria-hidden="true" /> Filter
          {selected.size > 0 && <span className="rounded-full bg-brand-500 px-1.5 text-xs text-white">{selected.size}</span>}
        </button>
        {selected.size > 0 && (
          <button type="button" onClick={onClear} className="text-sm font-medium text-brand-600">
            Clear filters
          </button>
        )}
      </div>

      <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-fit">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold">Filter</p>
          <button type="button" onClick={onClear} disabled={selected.size === 0} className="text-sm font-medium text-brand-600 disabled:text-text-3">
            Clear filters
          </button>
        </div>
        {body}
      </aside>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Filters">
          <button type="button" aria-label="Close filters" className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[80dvh] overflow-y-auto rounded-t-3xl bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-lg font-semibold">Filter</p>
              <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            {body}
            <div className="sticky bottom-0 mt-6 grid grid-cols-2 gap-2 bg-white pt-3">
              <button type="button" onClick={onClear} className="h-11 rounded-lg text-sm font-medium ring-1 ring-line">
                Clear filters
              </button>
              <button type="button" onClick={() => setOpen(false)} className="h-11 rounded-lg bg-brand-500 text-sm font-medium text-white">
                Show results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
