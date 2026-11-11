import Link from "next/link";
import { Check, Minus } from "lucide-react";
import {
  CtaBand,
  FaqSection,
  FeatureGrid,
  LogoStrip,
  PageHero,
  Section,
  SectionHeading,
  SplitFeature,
  StatRow,
  StoryCarousel,
  Container,
  ImagePlaceholder,
  TextLink,
} from "@/components/ui";
import { customers, ph, type FeaturePage } from "@/lib/content";
import { BRAND } from "@/lib/site";

const icons = ["Zap", "Users", "Route", "Bot", "BarChart3", "ShieldCheck", "Workflow", "Smartphone", "Clock"];
const grid = (n: number, prefix: string) =>
  Array.from({ length: n }, (_, i) => ({ title: `${prefix} ${i + 1}`, icon: icons[i % icons.length] }));

/**
 * One template drives every product, solution, WhatsApp and platform page.
 * The `variant` picks which optional sections appear, matching the section
 * order of each page type.
 */
export function FeatureTemplate({ slug, page }: { slug: string; page: FeaturePage }) {
  const stories = customers.slice((slug.length * 3) % 30, ((slug.length * 3) % 30) + 6);
  const v = page.variant;

  if (v === "partner-story") return <PartnerStory page={page} />;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} icon={page.icon} title={`${page.title}: placeholder headline`} />

      <section className="bg-surface py-12">
        <Container>
          <LogoStrip label="Placeholder line about companies using this feature" />
        </Container>
      </section>

      {/* Intro */}
      <Section>
        <SectionHeading eyebrow={page.title} title={`Placeholder heading: what ${page.title} does`} sub={ph.heroSub} />
        <ImagePlaceholder label="Overview image" ratio="aspect-[16/8]" />
      </Section>

      {/* Main capabilities */}
      <Section tone="muted">
        <SectionHeading title="Placeholder heading for key capabilities" sub={ph.short} />
        <FeatureGrid items={grid(v === "security" ? 6 : 8, "Capability").slice(0, v === "security" ? 6 : 6)} />
      </Section>

      {/* Alternating deep dives */}
      <Section>
        <div className="space-y-20">
          {[0, 1, 2].map((i) => (
            <SplitFeature
              key={i}
              reverse={i % 2 === 1}
              eyebrow={`Step ${i + 1}`}
              title={`Placeholder deep-dive heading ${i + 1}`}
              bullets={["Placeholder detail one", "Placeholder detail two", "Placeholder detail three"]}
            />
          ))}
        </div>
      </Section>

      {(v === "feature" || v === "platform") && <ChatbotVsAgentTable />}
      {v === "pricing-table" && <RateTable />}
      {v === "security" && <Certifications />}

      {/* Benefits */}
      <Section tone="dark">
        <SectionHeading dark title={`Placeholder heading: benefits of ${page.title}`} sub={ph.short} />
        <StatRow
          dark
          stats={[
            { value: "00%", label: "Placeholder metric one" },
            { value: "0x", label: "Placeholder metric two" },
            { value: "00k", label: "Placeholder metric three" },
            { value: "0 min", label: "Placeholder metric four" },
          ]}
        />
      </Section>

      {/* Differentiators */}
      <Section>
        <SectionHeading title={`Placeholder heading: what makes ${BRAND} different`} />
        <FeatureGrid items={grid(6, "Differentiator")} />
      </Section>

      {v !== "why" && (
        <Section tone="muted">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Placeholder heading: secure and reliable</h2>
              <p className="mt-4 text-text-2">{ph.long}</p>
              <div className="mt-6">
                <TextLink href="/security">Learn about security</TextLink>
              </div>
            </div>
            <FeatureGrid cols={2} items={grid(4, "Trust point").map((g, i) => ({ ...g, icon: ["Target", "SlidersHorizontal", "Lock", "ShieldCheck"][i] }))} />
          </div>
        </Section>
      )}

      <StoryCarousel title="Placeholder heading for customer stories" stories={stories} />
      <FaqSection count={8} />
      <CtaBand />
    </>
  );
}

function ChatbotVsAgentTable() {
  const rows = ["Row label one", "Row label two", "Row label three", "Row label four", "Row label five"];
  return (
    <Section tone="muted">
      <SectionHeading title="Placeholder heading for a comparison table" sub={ph.short} />
      <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-line">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th scope="col" className="p-4 font-semibold">Criteria</th>
              <th scope="col" className="p-4 font-semibold">Option A</th>
              <th scope="col" className="p-4 font-semibold text-brand-600">Option B</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((r) => (
              <tr key={r}>
                <th scope="row" className="p-4 font-medium">{r}</th>
                <td className="p-4 text-text-2">Placeholder cell</td>
                <td className="p-4 text-text-2">Placeholder cell</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function RateTable() {
  const countries = ["Country A", "Country B", "Country C", "Country D", "Country E", "Country F"];
  return (
    <Section tone="muted">
      <SectionHeading title="Placeholder rate table" sub="All rates below are placeholders. Replace them with current rates." />
      <div className="overflow-x-auto rounded-2xl bg-white ring-1 ring-line">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-muted">
            <tr>
              <th scope="col" className="p-4 font-semibold">Market</th>
              <th scope="col" className="p-4 font-semibold">Inbound / min</th>
              <th scope="col" className="p-4 font-semibold">Outbound / min</th>
              <th scope="col" className="p-4 font-semibold">Free tier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {countries.map((c, i) => (
              <tr key={c}>
                <th scope="row" className="p-4 font-medium">{c}</th>
                <td className="p-4 text-text-2">$0.00{i}</td>
                <td className="p-4 text-text-2">$0.0{i + 1}0</td>
                <td className="p-4">{i % 2 ? <Check className="h-4 w-4 text-accent-500" aria-label="Yes" /> : <Minus className="h-4 w-4 text-text-3" aria-label="No" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-sm text-text-2">
        Want an estimate? Try the <Link href="/whatsapp-pricing-calculator" className="font-medium text-brand-600 underline">pricing calculator</Link>.
      </p>
    </Section>
  );
}

function Certifications() {
  return (
    <Section>
      <SectionHeading title="Placeholder heading for certifications and compliance" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {["Certification 1", "Certification 2", "Regulation 1", "Regulation 2"].map((c) => (
          <div key={c} className="flex flex-col items-center rounded-2xl bg-muted p-6 text-center ring-1 ring-line">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 ring-line text-xs font-semibold text-text-2">Badge</span>
            <p className="mt-3 text-sm font-medium">{c}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PartnerStory({ page }: { page: FeaturePage }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} icon={page.icon} title={`${page.title}: placeholder headline`} art="image" ctas={<></>} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-10">
            {["About the partner", "The challenge", "The solution", "The results"].map((h) => (
              <div key={h}>
                <h2 className="text-2xl font-semibold tracking-tight">{h}</h2>
                <p className="mt-3 text-text-2">{ph.long}</p>
                <p className="mt-3 text-text-2">{ph.medium}</p>
              </div>
            ))}
          </article>
          <aside className="h-fit space-y-4 rounded-2xl bg-muted p-6 ring-1 ring-line lg:sticky lg:top-24">
            {[["Partner", "Partner name"], ["Region", "Placeholder"], ["Partner since", "0000"], ["Clients onboarded", "00"]].map(([k, val]) => (
              <div key={k}>
                <p className="text-xs uppercase tracking-wider text-text-3">{k}</p>
                <p className="font-medium">{val}</p>
              </div>
            ))}
            <Link href="/reseller" className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-lg bg-brand-500 text-sm font-medium text-white hover:bg-brand-600">
              Become a partner
            </Link>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
