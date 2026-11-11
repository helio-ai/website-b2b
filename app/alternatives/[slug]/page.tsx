import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Minus } from "lucide-react";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  ImagePlaceholder,
  PageHero,
  Section,
  SectionHeading,
  StatRow,
} from "@/components/ui";
import { alternatives, ph } from "@/lib/content";
import { APP_SIGNUP_URL, BRAND } from "@/lib/site";
import { Button } from "@/components/ui";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/alternatives/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = alternatives.find((x) => x.slug === slug);
  return a ? { title: `${BRAND} vs ${a.name}`, description: `Placeholder comparison of ${BRAND} and ${a.name}.` } : {};
}

const tableGroups = [
  { group: "Channels and calls", rows: ["Row one", "Row two", "Row three"] },
  { group: "AI and automation", rows: ["Row one", "Row two", "Row three"] },
  { group: "Pricing", rows: ["Row one", "Row two"] },
  { group: "Support", rows: ["Row one", "Row two"] },
];

export default async function AlternativePage({ params }: PageProps<"/alternatives/[slug]">) {
  const { slug } = await params;
  const a = alternatives.find((x) => x.slug === slug);
  if (!a) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${BRAND} vs ${a.name}`}
        icon="Award"
        title={`Placeholder headline: the ${a.name} alternative`}
        art="image"
        ctas={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/demo" variant="secondary" size="lg">Book a demo</Button>
            <Button href={APP_SIGNUP_URL} size="lg">Start free trial</Button>
          </div>
        }
      />

      <Section>
        <SectionHeading title={`Placeholder heading: where ${a.name} falls short`} sub={ph.short} />
        <FeatureGrid cols={2} items={[1, 2, 3, 4].map((n) => ({ title: `Limitation ${n}`, icon: "Info" }))} />
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder label="Switch story image" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Customer story</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Placeholder: a customer that switched from {a.name}</h2>
            <p className="mt-4 text-text-2">{ph.long}</p>
            <div className="mt-6">
              <StatRow stats={[{ value: "00%", label: "Placeholder metric" }, { value: "0x", label: "Placeholder metric" }]} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title={`${a.name} or ${BRAND}: which should you choose?`} />
        <div className="grid gap-5 md:grid-cols-2">
          {[a.name, BRAND].map((n, i) => (
            <div key={n} className={`rounded-2xl p-6 ring-1 sm:p-8 ${i ? "bg-brand-50 ring-brand-100" : "bg-white ring-line"}`}>
              <h3 className="text-xl font-semibold">Choose {n} if…</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[1, 2, 3, 4].map((k) => (
                  <li key={k} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> Placeholder reason {k}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading dark title={`Why teams switch from ${a.name}`} />
        <FeatureGrid dark items={[{ title: "Reason one", icon: "Inbox" }, { title: "Reason two", icon: "Sparkles" }, { title: "Reason three", icon: "TrendingUp" }]} />
      </Section>

      <Section>
        <SectionHeading title={`${a.name} vs ${BRAND}: a quick comparison`} sub="All table values are placeholders." />
        <div className="overflow-x-auto rounded-2xl ring-1 ring-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="w-1/2 p-4 font-semibold">Feature</th>
                <th scope="col" className="p-4 font-semibold">{a.name}</th>
                <th scope="col" className="p-4 font-semibold text-brand-600">{BRAND}</th>
              </tr>
            </thead>
            {tableGroups.map((g) => (
              <tbody key={g.group} className="divide-y divide-line">
                <tr className="bg-muted/60">
                  <th scope="rowgroup" colSpan={3} className="p-3 px-4 text-xs font-semibold uppercase tracking-wider text-text-2">
                    {g.group}
                  </th>
                </tr>
                {g.rows.map((r, i) => (
                  <tr key={r}>
                    <th scope="row" className="p-4 font-medium">{r}</th>
                    <td className="p-4">{i % 2 ? <Check className="h-4 w-4 text-accent-500" aria-label="Yes" /> : <Minus className="h-4 w-4 text-text-3" aria-label="No" />}</td>
                    <td className="p-4"><Check className="h-4 w-4 text-accent-500" aria-label="Yes" /></td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title={`How ${BRAND} turns conversations into results`} />
        <FeatureGrid items={["Target", "Route", "Phone", "Calendar", "Megaphone", "LifeBuoy"].map((ic, i) => ({ title: `Capability ${i + 1}`, icon: ic }))} />
      </Section>

      <FaqSection count={9} />
      <CtaBand />
    </>
  );
}
