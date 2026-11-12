import { Container } from "@/components/ui";
import { DEMO_URL } from "@/lib/site";

/** Demo booking with the Cal.com calendar embedded. "Talk to Sales" buttons jump here. */
export function Demo() {
  return (
    <section id="demo" className="bg-grid-dark scroll-mt-20 bg-ink py-14 text-white sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
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
            <iframe src={`${DEMO_URL}?embed=true&layout=month_view&theme=light`} title="Book a YourLio demo" className="h-[600px] w-full" loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}
