import { ArrowRight, Star } from "lucide-react";
import { Container, CtaPair, ProductShot } from "@/components/ui";
import { SHOPIFY_REVIEWS_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-grid-dark relative overflow-hidden bg-ink pt-28 pb-14 text-white sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[64rem] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl" aria-hidden="true" />
      <Container className="relative text-center">
        <a
          href="#product"
          className="inline-flex items-center gap-2 rounded-full bg-white/10 py-1 ps-1 pe-3 text-xs font-medium text-white/80 ring-1 ring-white/15 hover:bg-white/15"
        >
          <span className="rounded-full bg-brand-500 px-2 py-0.5 text-white">New</span>
          AI calls and WhatsApp calling in the same inbox
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
          Turn every enquiry into a booked call
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
          YourLio is an AI agent, shared inbox and CRM for businesses that sell through a conversation. It answers on your website, WhatsApp,
          Instagram and Facebook, asks your qualifying questions, collects contact details and books the call.
        </p>
        <div className="mt-8">
          <CtaPair center />
        </div>
        <a href={SHOPIFY_REVIEWS_URL} target="_blank" rel="noopener" className="mt-6 inline-flex items-center justify-center gap-2 text-sm text-white/60 hover:text-white">
          <span className="flex text-amber-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
            ))}
          </span>
          Rated 5.0 on the Shopify App Store, used by 100+ brands
        </a>
        <div className="mx-auto mt-12 max-w-5xl">
          <ProductShot shot="inbox-dark" priority sizes="(min-width: 1100px) 1024px, 100vw" />
        </div>
      </Container>
    </section>
  );
}
