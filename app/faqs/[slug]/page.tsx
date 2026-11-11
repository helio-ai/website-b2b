import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, CtaBand } from "@/components/ui";
import { faqs, ph } from "@/lib/content";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return faqs.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps<"/faqs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const f = faqs.find((x) => x.slug === slug);
  return f ? { title: f.question, description: ph.answer } : {};
}

export default async function FaqPage({ params }: PageProps<"/faqs/[slug]">) {
  const { slug } = await params;
  const f = faqs.find((x) => x.slug === slug);
  if (!f) notFound();
  const related = faqs.filter((x) => x.topic === f.topic && x.slug !== slug).slice(0, 5);

  return (
    <>
      <section className="bg-grid-dark bg-ink pt-28 pb-12 text-white sm:pt-32 sm:pb-16">
        <Container className="max-w-3xl">
          <Link href="/faqs" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All FAQs
          </Link>
          <p className="mt-6 text-sm font-medium text-brand-300">{f.topic}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{f.question}</h1>
        </Container>
      </section>
      <section className="bg-surface py-12 sm:py-16">
        <Container className="max-w-3xl">
          <div className="rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Short answer</p>
            <p className="mt-2 font-medium">{ph.answer}</p>
          </div>
          {["Details", "When this applies", "Next steps"].map((h) => (
            <div key={h} className="mt-10">
              <h2 className="text-2xl font-semibold">{h}</h2>
              <p className="mt-3 leading-relaxed text-text-2">{ph.long}</p>
            </div>
          ))}
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
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
