import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CircleCheck } from "lucide-react";
import { Container, CtaBand, FaqAccordion, ImagePlaceholder, Monogram } from "@/components/ui";
import { integrations, ph } from "@/lib/content";
import { APP_SIGNUP_URL, BRAND } from "@/lib/site";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/integrations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const it = integrations.find((i) => i.slug === slug);
  return it ? { title: `${it.name} integration`, description: `Placeholder description for the ${it.name} integration.` } : {};
}

export default async function IntegrationPage({ params }: PageProps<"/integrations/[slug]">) {
  const { slug } = await params;
  const it = integrations.find((i) => i.slug === slug);
  if (!it) notFound();
  const related = integrations.filter((i) => i.slug !== slug && i.categories.some((c) => it.categories.includes(c))).slice(0, 4);

  return (
    <>
      <section className="bg-grid-dark bg-ink pt-28 pb-12 text-white sm:pt-32">
        <Container>
          <Link href="/integrations" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Integrations
          </Link>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Monogram name={it.name} size="lg" />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{it.name}</h1>
                <p className="mt-1 text-white/65">{it.categories.join(" · ")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href={APP_SIGNUP_URL} className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 px-5 text-sm font-medium hover:bg-brand-600">
                Connect on {BRAND}
              </Link>
              <Link href="/help" className="inline-flex h-11 items-center justify-center rounded-lg bg-white/10 px-5 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20">
                Learn how to set up
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <article>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{it.name}: placeholder subheading</h2>
              <p className="mt-4 text-text-2">{ph.long}</p>
              <div className="mt-8">
                <ImagePlaceholder label={`${it.name} screenshot`} ratio="aspect-video" />
              </div>

              <h2 className="mt-12 text-2xl font-semibold">{BRAND} + {it.name} capabilities</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {Array.from({ length: 6 }, (_, i) => (
                  <li key={i} className="flex gap-3 rounded-xl bg-muted p-4 text-sm">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                    Placeholder capability {i + 1}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-semibold">Why use {BRAND} for {it.name}</h2>
              <p className="mt-4 text-text-2">{ph.long}</p>

              <h2 className="mt-12 mb-5 text-2xl font-semibold">FAQs about the {it.name} integration</h2>
              <FaqAccordion items={Array.from({ length: 6 }, (_, i) => ({ q: `Placeholder question ${i + 1} about ${it.name}?` }))} />
            </article>

            <aside className="h-fit space-y-5 rounded-2xl bg-muted p-6 ring-1 ring-line lg:sticky lg:top-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-3">Category</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {it.categories.map((c) => (
                    <span key={c} className="rounded-full bg-white px-2.5 py-0.5 text-xs ring-1 ring-line">{c}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-3">Available on</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {it.plans.map((p) => (
                    <span key={p} className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs capitalize text-brand-700 ring-1 ring-brand-100">{p}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-text-3">Built by</p>
                <p className="mt-1 text-sm">{BRAND}</p>
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
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">You might also like</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/integrations/${r.slug}`} className="group rounded-2xl bg-white p-5 ring-1 ring-line hover:shadow-lg">
                <Monogram name={r.name} />
                <h3 className="mt-4 font-semibold group-hover:text-brand-600">{r.name}</h3>
                <p className="mt-1 text-sm text-text-2">{r.categories[0]}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
