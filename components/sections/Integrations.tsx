/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";
import { integrations } from "@/lib/yourlio";
import { MAIN_LINKS } from "@/lib/site";

function Mark({ name, logo }: { name: string; logo: string | null }) {
  if (logo) {
    return (
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-line">
        <img src={logo} alt="" loading="lazy" className="h-full w-full object-contain" />
      </span>
    );
  }
  // No logo file: a coloured monogram from the name.
  const hue = [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-base font-semibold text-white" style={{ background: `hsl(${hue} 55% 52%)` }}>
      {name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2)}
    </span>
  );
}

export function Integrations() {
  const sorted = [...integrations.filter((i) => i.logo), ...integrations.filter((i) => !i.logo)];
  return (
    <Section tone="muted" id="integrations">
      <SectionHeading eyebrow="Integrations" title="Connect the channels and tools you already use" sub="WhatsApp, Instagram, Messenger, email, SMS, calling lines, HubSpot, Zoho Desk and more." />
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {sorted.map((i) => (
          <li key={i.slug} className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 text-center ring-1 ring-line">
            <Mark name={i.name} logo={i.logo} />
            <span className="text-xs font-medium">{i.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <a href={MAIN_LINKS.integrations} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700">
          All integrations on yourlio.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
