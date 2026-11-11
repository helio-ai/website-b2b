/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, Container, CtaBand, FaqAccordion, StatRow, StoryCard } from "@/components/ui";
import { caseStudies, getCaseStudy } from "@/lib/yourlio";
import { JsonLd, ORG_ID, breadcrumbSchema, faqSchema, pageMeta } from "@/lib/seo";
import { MAIN_LINKS, SITE_URL } from "@/lib/site";

// Every known slug is prerendered by generateStaticParams; unknown slugs 404.
export const instant = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/customers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return pageMeta({ title: c.seoTitle.replace(" · YourLio AI", " | YourLio"), description: c.seoDescription, path: `/customers/${slug}`, image: c.ogImage, type: "article" });
}

export default async function StoryPage({ params }: PageProps<"/customers/[slug]">) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const related = caseStudies.filter((x) => x.slug !== slug).slice(0, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Customer stories", path: "/customers" },
    { name: c.client, path: `/customers/${c.slug}` },
  ];
  const faqs = c.faqs.map((f) => ({ q: f.question, a: f.answer }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          {
            "@type": "Article",
            headline: c.title,
            description: c.seoDescription,
            datePublished: c.updated,
            dateModified: c.updated,
            image: `${SITE_URL}${c.ogImage}`,
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            about: { "@type": "Organization", name: c.client, url: c.brandUrl },
            mainEntityOfPage: `${SITE_URL}/customers/${c.slug}`,
          },
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />
      <section className="bg-grid-dark bg-ink pt-28 pb-14 text-white sm:pt-32 sm:pb-20">
        <Container>
          <Breadcrumbs items={crumbs} />
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-brand-300">
                {c.industry} · {c.market}
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{c.title}</h1>
              <p className="mt-5 text-white/75">{c.answer}</p>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <img src={c.heroImage} alt={c.heroAlt} className="aspect-video w-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-12">
        <Container>
          <StatRow stats={c.stats.map((s) => ({ value: s.display, label: s.label }))} />
          <p className="mt-4 text-xs text-text-3">{c.provenance}</p>
        </Container>
      </section>

      <section className="bg-surface pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <article className="max-w-3xl">
              <p className="text-lg leading-relaxed text-text">{c.content.introduction}</p>
              {c.content.sections.map((s) => (
                <div key={s.title} className="mt-10">
                  <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="mt-3 leading-relaxed text-text-2">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {c.results.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
                  <div className="mt-4 overflow-x-auto rounded-2xl ring-1 ring-line">
                    <table className="w-full min-w-[480px] text-left text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th scope="col" className="p-4 font-semibold">Metric</th>
                          <th scope="col" className="p-4 font-semibold">Result</th>
                          <th scope="col" className="p-4 font-semibold">Note</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {c.results.map((r) => (
                          <tr key={r.metric}>
                            <th scope="row" className="p-4 font-medium">{r.metric}</th>
                            <td className="p-4">{r.result}</td>
                            <td className="p-4 text-text-2">{r.note ?? ""}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {c.playbook.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold tracking-tight">What other teams can take from it</h2>
                  <ol className="mt-4 space-y-4">
                    {c.playbook.map((p, i) => (
                      <li key={p.lead} className="flex gap-4 rounded-2xl bg-muted p-5">
                        <span className="text-sm font-semibold text-brand-600">0{i + 1}</span>
                        <span>
                          <span className="block font-semibold">{p.lead}</span>
                          <span className="mt-1 block text-sm text-text-2">{p.text}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="mb-4 text-2xl font-semibold tracking-tight">Questions about this story</h2>
                  <FaqAccordion items={faqs} />
                </div>
              )}
            </article>

            <aside className="h-fit space-y-5 rounded-2xl bg-muted p-6 ring-1 ring-line lg:sticky lg:top-24">
              {[
                ["Company", c.client],
                ["Industry", c.industry],
                ["Market", c.market],
                ["Channels", c.channels.join(", ")],
                ["Reporting period", c.windowLong],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-3">{k}</p>
                  <p className="mt-0.5 text-sm font-medium">{v}</p>
                </div>
              ))}
              {c.features.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-3">YourLio features used</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    {c.features.map((f) => (
                      <li key={f.name}>{f.name}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Link href="/demo" className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-brand-500 text-sm font-medium text-white hover:bg-brand-600">
                Book a demo
              </Link>
              <a
                href={`${MAIN_LINKS.caseStudies}/${c.slug}`}
                target="_blank"
                rel="noopener"
                className="inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-brand-600 hover:underline"
              >
                Full story on yourlio.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-14 sm:py-20">
        <Container>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">More customer stories</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <StoryCard key={r.slug} study={r} />
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
