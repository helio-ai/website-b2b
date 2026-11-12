"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { Check } from "lucide-react";
import { Icon } from "@/components/Icon";
import { SHOTS } from "@/lib/shots";
import type { FeatureGroup } from "@/lib/landing";

/** One product area: feature pills and the selected feature's details beside its video or screenshot. */
export function FeatureExplorer({ group }: { group: FeatureGroup }) {
  const [active, setActive] = useState(0);
  const f = group.items[active];
  const shot = f.shot ? SHOTS[f.shot] : undefined;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-12">
      <div>
        <div role="tablist" aria-label={group.eyebrow} className="flex flex-wrap gap-2">
          {group.items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`panel-${group.id}`}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                i === active ? "bg-white text-ink" : "bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon name={it.icon} className="h-4 w-4" />
              {it.title}
            </button>
          ))}
        </div>

        <div id={`panel-${group.id}`} role="tabpanel" className="mt-8">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{f.h1}</h3>
          <p className="mt-3 text-white/70">{f.sub}</p>
          <ul className="mt-5 space-y-2.5">
            {f.points.slice(0, 3).map((p) => (
              <li key={p.title} className="flex gap-3 text-sm text-white">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                {p.title}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-white/45">Included in: {f.plan}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-ink-2 shadow-xl ring-1 ring-white/10">
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
          <img
            key={f.id}
            src={shot.src}
            srcSet={shot.srcSet}
            sizes="(min-width: 1024px) 700px, 100vw"
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            className="h-auto w-full"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  );
}
