import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { CtaBand, FaqSection, FeatureGrid, PageHero, ProofStats, Section, SectionHeading, Button } from "@/components/ui";
import { alternatives, getAlternative } from "@/lib/content";
import { b2bChannels } from "@/lib/yourlio";
import { MAIN_LINKS } from "@/lib/site";
import { JsonLd, breadcrumbSchema, pageMeta } from "@/lib/seo";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/alternatives/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getAlternative(slug);
  if (!a) return {};
  return pageMeta({
    title: `YourLio vs ${a.name}: AI Agent, Inbox and Pricing | YourLio`.slice(0, 60),
    description: `Compare YourLio and ${a.name} for qualifying leads, booking calls and running one inbox. Pricing and sources checked ${a.checked}.`,
    path: `/alternatives/${slug}`,
  });
}

export default async function AlternativePage({ params }: PageProps<"/alternatives/[slug]">) {
  const { slug } = await params;
  const a = getAlternative(slug);
  if (!a) notFound();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: "/alternatives" },
    { name: `YourLio vs ${a.name}`, path: `/alternatives/${a.slug}` },
  ];
  const faqs = [
    { q: `Is YourLio a good ${a.name} alternative?`, a: a.verdict },
    { q: `How does ${a.name} pricing compare with YourLio?`, a: `${a.points[0].them} ${a.points[0].us} ${a.points[1].them} ${a.points[1].us} Prices were read from public sources in ${a.checked}; confirm current terms before you decide.` },
    { q: `When should I choose ${a.name} instead?`, a: `Choose ${a.name} if ${a.chooseThem.map((c) => c.charAt(0).toLowerCase() + c.slice(1)).join(", or ")}.` },
    { q: `Can I try YourLio alongside ${a.name}?`, a: `Yes. Test YourLio on selected channels or pages first, and avoid having two assistants answer the same conversation. Compare answers, handoffs, booked calls and cost before you move everything.` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={`YourLio vs ${a.name}`}
        icon="Award"
        title={`The ${a.name} alternative for teams that sell through conversations`}
        sub={a.verdict}
        art="shot"
        shot="inbox"
        ctas={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/demo" size="lg">Book a demo</Button>
            <Button href="/pricing" variant="secondary" size="lg">See pricing</Button>
          </div>
        }
      />

      <Section>
        <SectionHeading title={`${a.name} vs YourLio: a quick comparison`} sub={`Sources read in ${a.checked}. Written by YourLio.`} />
        <div className="overflow-x-auto rounded-2xl ring-1 ring-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th scope="col" className="w-1/2 p-4 font-semibold">{a.name}</th>
                <th scope="col" className="p-4 font-semibold text-brand-600">YourLio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {a.points.map((p) => (
                <tr key={p.them}>
                  <td className="p-4 text-text-2">{p.them}</td>
                  <td className="p-4 font-medium">{p.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-sm text-text-2">
          Full comparison with source links:{" "}
          <a href={`${MAIN_LINKS.compare}/${a.slug}`} target="_blank" rel="noopener" className="font-medium text-brand-600 hover:underline">
            yourlio.com/compare/{a.slug}
          </a>
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading title={`${a.name} or YourLio: which should you choose?`} />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { n: a.name, list: a.chooseThem, us: false },
            { n: "YourLio", list: a.chooseUs, us: true },
          ].map((col) => (
            <div key={col.n} className={`rounded-2xl p-6 ring-1 sm:p-8 ${col.us ? "bg-brand-50 ring-brand-100" : "bg-white ring-line"}`}>
              <h3 className="text-xl font-semibold">Choose {col.n} if</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.list.map((k) => (
                  <li key={k} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" /> {k}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Every channel your leads use, one agent" />
        <FeatureGrid items={b2bChannels.map((c) => ({ title: c.title, body: c.text, icon: c.icon }))} />
      </Section>

      <Section tone="dark">
        <SectionHeading dark title="Results from published YourLio case studies" sub="Each figure comes from a case study with its own reporting period." />
        <ProofStats dark />
      </Section>

      <FaqSection items={faqs} />
      <CtaBand />
    </>
  );
}
