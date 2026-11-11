import Link from "next/link";
import { Container, SimpleHero } from "@/components/ui";
import { legalPages, ph } from "@/lib/content";

const sections = [
  "Introduction",
  "Definitions",
  "Information we collect",
  "How we use information",
  "Sharing and disclosure",
  "Data retention",
  "Your rights",
  "Changes to this document",
  "Contact",
];

export function LegalTemplate({ slug, title }: { slug: string; title: string }) {
  const isSubprocessors = slug === "subprocessors";
  return (
    <>
      <SimpleHero title={title} sub="Last updated: placeholder date" />
      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-3">On this page</p>
              <ul className="flex gap-2 overflow-x-auto pb-2 text-sm lg:flex-col lg:gap-1 lg:overflow-visible">
                {(isSubprocessors ? ["Subprocessor list", "Updates"] : sections).map((s, i) => (
                  <li key={s} className="shrink-0">
                    <a href={`#s${i}`} className="block rounded-md px-3 py-1.5 text-text-2 ring-1 ring-line hover:bg-muted hover:text-text lg:ring-0">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 mb-3 hidden text-xs font-semibold uppercase tracking-wider text-text-3 lg:block">Legal</p>
              <ul className="hidden space-y-1 text-sm lg:block">
                {Object.entries(legalPages).map(([s, t]) => (
                  <li key={s}>
                    <Link href={`/${s}`} className={`block rounded-md px-3 py-1.5 hover:bg-muted ${s === slug ? "bg-muted font-medium text-text" : "text-text-2"}`}>
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>

            <article className="max-w-3xl">
              {isSubprocessors ? (
                <>
                  <h2 id="s0" className="scroll-mt-24 text-2xl font-semibold">Subprocessor list</h2>
                  <p className="mt-3 text-text-2">{ph.medium}</p>
                  <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-line">
                    <table className="w-full min-w-[560px] text-left text-sm">
                      <thead className="bg-muted">
                        <tr>
                          {["Subprocessor", "Purpose", "Location"].map((h) => (
                            <th key={h} scope="col" className="p-4 font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {Array.from({ length: 10 }, (_, i) => (
                          <tr key={i}>
                            <td className="p-4 font-medium">Vendor {i + 1}</td>
                            <td className="p-4 text-text-2">Placeholder purpose</td>
                            <td className="p-4 text-text-2">Placeholder region</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <h2 id="s1" className="mt-10 scroll-mt-24 text-2xl font-semibold">Updates</h2>
                  <p className="mt-3 text-text-2">{ph.long}</p>
                </>
              ) : (
                sections.map((s, i) => (
                  <div key={s} className="mb-10">
                    <h2 id={`s${i}`} className="scroll-mt-24 text-2xl font-semibold">
                      {i + 1}. {s}
                    </h2>
                    <p className="mt-3 leading-relaxed text-text-2">{ph.long}</p>
                    <ul className="mt-3 list-disc space-y-1 ps-5 text-text-2">
                      <li>Placeholder clause.</li>
                      <li>Placeholder clause.</li>
                    </ul>
                  </div>
                ))
              )}
              <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
                This is placeholder text, not legal advice. Have your legal team write this page.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
