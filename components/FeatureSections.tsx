/* eslint-disable @next/next/no-img-element */
// Sections that only some product pages show, so pages differ from each other.
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { Button, FeatureGrid, ProductShot, Section, SectionHeading } from "./ui";
import { aiCrm, b2bChannels, b2bPipeline, b2bSteps, b2bSwitch, caseStudyUrl, getCaseStudy, suites } from "@/lib/yourlio";
import type { Extra, Video } from "@/lib/featureMedia";

export function ProductVideo({ name, label }: { name: Video; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-ink-2 shadow-2xl ring-1 ring-white/10">
      <video
        className="aspect-video h-auto w-full object-cover"
        src={`/product/${name}.mp4`}
        poster={`/product/posters/${name}.webp`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}

/** One featured case study, linking to the full story on yourlio.com. */
export function StorySpotlight({ slug }: { slug: string }) {
  const s = getCaseStudy(slug);
  if (!s) return null;
  return (
    <Section tone="dark">
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-ink-2 p-6 ring-1 ring-ink-line sm:p-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img src={s.image} alt={s.imageAlt ?? `${s.client} case study`} loading="lazy" className="aspect-[2/1] w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Customer story · {s.client}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{s.title}</h2>
          <p className="mt-6">
            <span className="text-5xl font-semibold tracking-tight">{s.stat.value}</span>
            <span className="ml-2 text-white/70">{s.stat.label}</span>
          </p>
          <p className="mt-3 text-sm text-white/55">Channels: {s.channels.join(", ")}. Published case study with its own reporting period.</p>
          <a
            href={caseStudyUrl(s.slug)}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-white"
          >
            Read the full story on yourlio.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}

export function ExtraSection({ kind }: { kind: Extra }) {
  switch (kind) {
    case "steps":
      return (
        <Section tone="muted">
          <SectionHeading title="From first message to booked call" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {b2bSteps.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-text-2">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      );
    case "agent-vs-chatbot":
      return (
        <Section tone="muted">
          <SectionHeading title="An AI agent or a chatbot?" sub="A rule based chatbot follows the buttons you draw. The YourLio agent runs the conversation toward your goal." />
          <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-line">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-muted">
                <tr>
                  <th scope="col" className="p-4 font-semibold">What you need</th>
                  <th scope="col" className="p-4 font-semibold">Button chatbot</th>
                  <th scope="col" className="p-4 font-semibold text-brand-600">YourLio AI agent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  ["Understands free text", false, true],
                  ["Asks your qualifying questions with tap options", true, true],
                  ["Collects contact details inside the chat", true, true],
                  ["Books the call and sends the invite", false, true],
                  ["Remembers the lead on WhatsApp", false, true],
                  ["Hands off to your team with a reason", false, true],
                ].map(([label, bot, us]) => (
                  <tr key={label as string}>
                    <th scope="row" className="p-4 font-medium">{label}</th>
                    <td className="p-4">{bot ? <Check className="h-4 w-4 text-accent-500" aria-label="Yes" /> : <Minus className="h-4 w-4 text-text-3" aria-label="No" />}</td>
                    <td className="p-4">{us ? <Check className="h-4 w-4 text-accent-500" aria-label="Yes" /> : <Minus className="h-4 w-4 text-text-3" aria-label="No" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      );
    case "pipeline":
      return (
        <Section tone="muted">
          <SectionHeading title="Every lead, from new to booked" sub="Leads move through stages your team can see and change. Sample leads shown." />
          <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">
            {b2bPipeline.stages.map((st) => (
              <div key={st.label} className="w-[78%] shrink-0 rounded-2xl bg-white p-4 ring-1 ring-line sm:w-auto">
                <p className="mb-3 flex items-center justify-between text-sm font-semibold">
                  {st.label}
                  <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-text-2">{st.leads.length}</span>
                </p>
                <div className="space-y-3">
                  {st.leads.map((l) => (
                    <div key={l.company} className="rounded-xl bg-muted p-3 text-sm">
                      <p className="font-semibold">{l.company}</p>
                      <p className="text-text-2">{l.need}</p>
                      <p className="mt-2 text-xs text-text-3">{l.source}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
            {b2bPipeline.points.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-text-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
        </Section>
      );
    case "marketing-suite":
    case "social-suite": {
      const s = suites.find((x) => x.id === (kind === "social-suite" ? "social" : "marketing"))!;
      return (
        <Section tone="muted">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Add on</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{s.name}</h2>
              <p className="mt-2 text-text-2">{s.tagline}. A flat ${s.price} a month, added to any AI Agent plan.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              {"note" in s && s.note && <p className="mt-4 text-sm text-text-2">{s.note}</p>}
              <div className="mt-6">
                <Button href="/pricing" variant="outline">See pricing</Button>
              </div>
            </div>
            <ProductShot shot={kind === "social-suite" ? "comment-to-dm" : "journeys"} />
          </div>
        </Section>
      );
    }
    case "channels":
      return (
        <Section tone="muted">
          <SectionHeading title="Every channel, one agent, one memory" />
          <FeatureGrid items={b2bChannels.map((c) => ({ title: c.title, body: c.text, icon: c.icon }))} />
        </Section>
      );
    case "before-after":
      return (
        <Section tone="muted">
          <SectionHeading title="What changes when you switch" />
          <div className="grid gap-4 lg:grid-cols-3">
            {b2bSwitch.map((s) => (
              <div key={s.after} className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <p className="text-sm text-text-3 line-through">{s.before}</p>
                <p className="mt-4 font-medium">{s.after}</p>
              </div>
            ))}
          </div>
        </Section>
      );
    case "crm":
      return (
        <Section tone="muted">
          <SectionHeading title={aiCrm.name} sub={`${aiCrm.note} The inbox, tickets, routing and calling your team works from.`} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiCrm.groups.map((g) => (
              <div key={g.title} className="rounded-2xl bg-white p-5 ring-1 ring-line">
                <h3 className="font-semibold">{g.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-text-2">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      );
  }
}
