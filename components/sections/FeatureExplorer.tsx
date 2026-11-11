"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Check } from "lucide-react";
import { Icon } from "@/components/Icon";
import { SHOTS } from "@/lib/shots";
import type { FeatureGroup } from "@/lib/landing";

/** One product area: a list of features on one side, the selected feature's video or screenshot and details on the other. */
export function FeatureExplorer({ group, dark = false }: { group: FeatureGroup; dark?: boolean }) {
  const [active, setActive] = useState(0);
  const f = group.items[active];
  const shot = f.shot ? SHOTS[f.shot] : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
      <div role="tablist" aria-label={group.eyebrow} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
        {group.items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            id={`tab-${it.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${group.id}`}
            onClick={() => setActive(i)}
            className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors lg:py-4 ${
              i === active
                ? dark
                  ? "bg-white/10 text-white ring-1 ring-white/20"
                  : "bg-white text-text shadow-sm ring-1 ring-line"
                : dark
                  ? "text-white/65 hover:bg-white/5 hover:text-white"
                  : "text-text-2 hover:bg-white/60 hover:text-text"
            }`}
          >
            <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${i === active ? "bg-brand-500 text-white" : dark ? "bg-white/10 text-brand-300" : "bg-brand-50 text-brand-600"}`}>
              <Icon name={it.icon} className="h-4 w-4" />
            </span>
            {it.title}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${group.id}`} aria-labelledby={`tab-${f.id}`}>
        <div className={`overflow-hidden rounded-2xl shadow-xl ring-1 ${dark ? "bg-ink-2 ring-white/10" : "bg-ink ring-black/5"}`}>
          {f.video ? (
            <video
              key={f.video}
              className="aspect-video h-auto w-full object-cover"
              src={`/product/${f.video}.mp4`}
              poster={`/product/posters/${f.video}.webp`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${f.title} in YourLio`}
            />
          ) : shot ? (
            <img key={f.id} src={shot.src} srcSet={shot.srcSet} sizes="(min-width: 1024px) 800px, 100vw" alt={shot.alt} width={shot.width} height={shot.height} className="h-auto w-full" loading="lazy" />
          ) : null}
        </div>
        <div className="mt-6">
          <h3 className={`text-2xl font-semibold tracking-tight ${dark ? "text-white" : "text-text"}`}>{f.h1}</h3>
          <p className={`mt-2 ${dark ? "text-white/70" : "text-text-2"}`}>{f.sub}</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {f.points.map((p) => (
              <li key={p.title} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                <span>
                  <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-text"}`}>{p.title}</span>
                  <span className={`block text-sm ${dark ? "text-white/60" : "text-text-2"}`}>{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className={`mt-5 text-xs ${dark ? "text-white/45" : "text-text-3"}`}>Included in: {f.plan}</p>
        </div>
      </div>
    </div>
  );
}
