import { Container, CtaPair } from "@/components/ui";
import { DEMO_URL } from "@/lib/site";

/** Demo booking with the Cal.com calendar embedded. "Talk to Sales" buttons jump here. */
export function Demo() {
  return (
    <section id="demo" className="bg-grid-dark scroll-mt-20 bg-ink py-16 text-white sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">Talk to Sales</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Book a demo with your own questions</h2>
            <p className="mt-4 text-white/70">
              Bring a few real enquiries and we will show the agent handling them, from the first question to the booked call, and quote a plan
              for your volume.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Calendar not loading?{" "}
              <a href={DEMO_URL} target="_blank" rel="noopener" className="font-medium text-brand-300 underline">
                Open the booking page
              </a>
              .
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-white/10">
            <iframe src={`${DEMO_URL}?embed=true&layout=month_view&theme=light`} title="Book a YourLio demo" className="h-[680px] w-full" loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Closing call to action band. */
export function CtaBand() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="bg-grid-dark relative mx-auto max-w-[1240px] overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-400/45 blur-3xl" aria-hidden="true" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Turn every enquiry into a booked call</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/70">
          See YourLio answer, qualify and book on your own website and WhatsApp, with your real questions.
        </p>
        <div className="relative mt-8">
          <CtaPair center />
        </div>
      </div>
    </section>
  );
}
