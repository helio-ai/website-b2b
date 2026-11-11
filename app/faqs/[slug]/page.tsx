import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, Container, CtaBand } from "@/components/ui";
import { faqs } from "@/lib/content";
import { JsonLd, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return faqs.map((f) => ({ slug: f.slug }));
}

const get = (slug: string) => faqs.find((x) => x.slug === slug);

export async function generateMetadata({ params }: PageProps<"/faqs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const f = get(slug);
  if (!f) return {};
  const title = f.question.length > 50 ? f.question : `${f.question} | YourLio`;
  return pageMeta({ title, description: f.answer.length > 158 ? f.answer.slice(0, 155).replace(/\s+\S*$/, "") + "..." : f.answer, path: `/faqs/${slug}` });
}

export default async function FaqPage({ params }: PageProps<"/faqs/[slug]">) {
  const { slug } = await params;
  const f = get(slug);
  if (!f) notFound();
  const related = faqs.filter((x) => x.topic === f.topic && x.slug !== slug).slice(0, 6);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQs", path: "/faqs" },
    { name: f.question, path: `/faqs/${f.slug}` },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema([{ q: f.question, a: f.answer }])]} />
      <section className="bg-grid-dark bg-ink pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <Container className="max-w-3xl">
          <Breadcrumbs items={crumbs.slice(0, 2).concat({ name: f.topic, path: `/faqs/${f.slug}` })} />
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{f.question}</h1>
        </Container>
      </section>
      <section className="bg-surface py-12 sm:py-16">
        <Container className="max-w-3xl">
          <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Answer</p>
            <p className="mt-2 text-lg leading-relaxed">{f.answer}</p>
          </div>
          {f.source && (
            <p className="mt-6 text-sm text-text-2">
              More detail on{" "}
              <Link href={f.source.href} className="font-medium text-brand-600 hover:underline">
                {f.source.label}
              </Link>
              .
            </p>
          )}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="mb-4 text-xl font-semibold">Related questions</h2>
              <ul className="divide-y divide-line rounded-2xl ring-1 ring-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/faqs/${r.slug}`} className="group flex items-center justify-between gap-4 p-4 text-sm hover:bg-muted">
                      <span className="font-medium group-hover:text-brand-600">{r.question}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-text-3" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
