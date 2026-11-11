import type { Metadata } from "next";
import { CircleCheck } from "lucide-react";
import { Container, LogoStrip } from "@/components/ui";
import { DEMO_URL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Book a YourLio Demo for Your Business | YourLio",
  description: "Book a 30 minute YourLio demo. See the AI agent answer, qualify and book calls with your own questions on your website and WhatsApp.",
  path: "/demo",
});

const points = [
  "See the agent answer your real enquiries, on your website and WhatsApp",
  "Set the qualifying questions your sales team needs before a call",
  "Walk through the shared inbox, CRM stages and calling",
  "Get a plan quoted for your conversation volume and channels",
];

export default function DemoPage() {
  return (
    <section className="bg-grid-dark bg-ink pt-28 pb-20 text-white sm:pt-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Book a YourLio demo</h1>
            <p className="mt-5 text-white/70 sm:text-lg">
              Pick a time with the YourLio team. Bring a few real enquiries and we will show the agent handling them, from the first
              question to the booked call.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  <span className="text-white/85">{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/60">
              Calendar not loading?{" "}
              <a href={DEMO_URL} target="_blank" rel="noopener" className="font-medium text-brand-300 underline">
                Open the booking page
              </a>
              .
            </p>
            <div className="mt-12 hidden lg:block">
              <LogoStrip dark label="Brands that run on YourLio" />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-white/10">
            <iframe
              src={`${DEMO_URL}?embed=true&layout=month_view&theme=light`}
              title="Book a YourLio demo"
              className="h-[720px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
