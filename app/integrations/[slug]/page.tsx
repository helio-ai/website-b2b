import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";
import { Breadcrumbs, Container, CtaBand, FaqAccordion, IntegrationLogo, ProductShot } from "@/components/ui";
import { integrations } from "@/lib/yourlio";
import { DOCS_URL } from "@/lib/site";
import { JsonLd, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

const get = (slug: string) => integrations.find((i) => i.slug === slug);

export async function generateMetadata({ params }: PageProps<"/integrations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const it = get(slug);
  if (!it) return {};
  return pageMeta({
    title: `YourLio and ${it.name} Integration | YourLio`.slice(0, 60),
    description: `Connect ${it.name} to YourLio. ${it.description} One AI agent, shared inbox and CRM for every lead and conversation.`.slice(0, 158),
    path: `/integrations/${slug}`,
  });
}

function whatItDoes(category: string, name: string): string[] {
  switch (category) {
    case "Social":
      return [`Conversations from ${name} arrive in the shared inbox`, "The AI agent answers and asks your qualifying questions", "See which ad or post started each chat", "Your team can step into any conversation"];
    case "CRM":
    case "Customer support":
      return [`Leads and conversations stay in step with ${name}`, "Your team sees the full history of each contact", "Handoffs keep the reason the AI passed the chat on", "Use it alongside the YourLio CRM stages"];
    case "Marketing":
      return [`Use ${name} alongside YourLio campaigns and journeys`, "Replies come back to the AI agent and your inbox", "One memory of each contact across channels", "Check which system owns each automation to avoid duplicates"];
    default:
      return [`Send and receive through ${name} from the shared inbox`, "Conversations stay on one memory of each lead", "The AI agent replies first and hands off with a reason", "Test with a sample conversation before going live"];
  }
}

export default async function IntegrationPage({ params }: PageProps<"/integrations/[slug]">) {
  const { slug } = await params;
  const it = get(slug);
  if (!it) notFound();
  const related = integrations.filter((i) => i.slug !== slug && i.category === it.category).concat(integrations.filter((i) => i.category !== it.category)).slice(0, 4);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Integrations", path: "/integrations" },
    { name: it.name, path: `/integrations/${it.slug}` },
  ];
  const faqs = [
    { q: `What does the ${it.name} integration do?`, a: `${it.description} Connected to YourLio, it works with the same AI agent, shared inbox and memory of each lead as your other channels.` },
    { q: `How do I connect ${it.name} to YourLio?`, a: `Connect your ${it.name} account from the YourLio integrations dashboard, then test it with a sample conversation before switching it on for everyone. The YourLio team helps during setup.` },
    { q: `Are ${it.name} charges included in YourLio pricing?`, a: `No. Any ${it.name} subscription, messaging or usage charges are billed by ${it.name}. YourLio plans cover YourLio usage only.` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section className="bg-grid-dark bg-ink pt-28 pb-12 text-white sm:pt-32">
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <IntegrationLogo name={it.name} logo={it.logo} size="lg" />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">YourLio and {it.name}</h1>
                <p className="mt-1 text-white/65">{it.description}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/demo" className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 px-5 text-sm font-medium hover:bg-brand-600">
                Book a demo
              </Link>
              <a href={DOCS_URL} target="_blank" rel="noopener" className="inline-flex h-11 items-center justify-center rounded-lg bg-white/10 px-5 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20">
                Setup guides
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <article>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What you can do with {it.name}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {whatItDoes(it.category, it.name).map((t) => (
                  <li key={t} className="flex gap-3 rounded-xl bg-muted p-4 text-sm">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <ProductShot shot={it.category === "Social" ? "comment-to-dm" : it.category === "Marketing" ? "journeys" : "inbox"} />
              </div>
              <h2 className="mt-12 mb-5 text-2xl font-semibold">Questions about {it.name}</h2>
              <FaqAccordion items={faqs} />
            </article>
            <aside className="h-fit space-y-5 rounded-2xl bg-muted p-6 ring-1 ring-line lg:sticky lg:top-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-3">Category</p>
                <p className="mt-1 text-sm font-medium">{it.category}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-3">Works with</p>
                <p className="mt-1 text-sm">AI agent, shared inbox and CRM</p>
              </div>
              <Link href="/pricing" className="inline-flex text-sm font-medium text-brand-600 hover:underline">
                Compare plans
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-14 sm:py-20">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">More integrations</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/integrations/${r.slug}`} className="group rounded-2xl bg-white p-5 ring-1 ring-line hover:shadow-lg">
                <IntegrationLogo name={r.name} logo={r.logo} />
                <h3 className="mt-4 font-semibold group-hover:text-brand-600">{r.name}</h3>
                <p className="mt-1 text-sm text-text-2">{r.category}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
