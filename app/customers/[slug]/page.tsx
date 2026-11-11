import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Quote } from "lucide-react";
import { Container, CtaBand, ImagePlaceholder, StatRow, StoryCard } from "@/components/ui";
import { customers, ph } from "@/lib/content";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return customers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/customers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = customers.find((x) => x.slug === slug);
  return c ? { title: c.title, description: `Placeholder summary of the ${c.company} story.` } : {};
}

export default async function StoryPage({ params }: PageProps<"/customers/[slug]">) {
  const { slug } = await params;
  const c = customers.find((x) => x.slug === slug);
  if (!c) notFound();
  const related = customers.filter((x) => x.slug !== slug && x.industry === c.industry).concat(customers.filter((x) => x.slug !== slug)).slice(0, 3);

  return (
    <>
      <section className="bg-grid-dark bg-ink pt-28 pb-14 text-white sm:pt-32 sm:pb-20">
        <Container>
          <Link href="/customers" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Customer stories
          </Link>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-brand-300">{c.industry}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{c.title}</h1>
              <p className="mt-5 text-white/70">{ph.heroSub}</p>
            </div>
            <ImagePlaceholder label="Customer photo" dark />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12">
        <Container>
          <StatRow
            stats={[
              { value: c.stat, label: c.statLabel },
              { value: "0x", label: "Placeholder metric" },
              { value: "00%", label: "Placeholder metric" },
            ]}
          />
        </Container>
      </section>

      <section className="bg-surface pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="max-w-3xl space-y-10">
              {["Background", "The challenge", "The solution", "The results"].map((h, i) => (
                <div key={h}>
                  <h2 className="text-2xl font-semibold tracking-tight">{h}</h2>
                  <p className="mt-3 leading-relaxed text-text-2">{ph.long}</p>
                  <p className="mt-3 leading-relaxed text-text-2">{ph.medium}</p>
                  {i === 1 && (
                    <figure className="mt-8 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100 sm:p-8">
                      <Quote className="h-8 w-8 text-brand-400" aria-hidden="true" />
                      <blockquote className="mt-3 text-lg font-medium">&ldquo;Placeholder customer quote. {ph.short}&rdquo;</blockquote>
                      <figcaption className="mt-4 text-sm text-text-2">Customer Name, Job title at {c.company}</figcaption>
                    </figure>
                  )}
                  {i === 2 && (
                    <div className="mt-8">
                      <ImagePlaceholder label="Screenshot" ratio="aspect-video" />
                    </div>
                  )}
                </div>
              ))}
            </article>
            <aside className="h-fit space-y-5 rounded-2xl bg-muted p-6 ring-1 ring-line lg:sticky lg:top-24">
              {[
                ["Company", c.company],
                ["Industry", c.industry],
                ["Region", c.region],
                ["Channels", "Placeholder list"],
                ["Features used", "Placeholder list"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-3">{k}</p>
                  <p className="mt-0.5 text-sm font-medium">{v}</p>
                </div>
              ))}
              <Link href="/demo" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-brand-500 text-sm font-medium text-white hover:bg-brand-600">
                Talk to Sales
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-14 sm:py-20">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">More customer stories</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <StoryCard key={r.slug} href={`/customers/${r.slug}`} {...r} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
