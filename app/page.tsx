import { Hero } from "@/components/sections/Hero";
import { SectionNav } from "@/components/sections/SectionNav";
import { Logos } from "@/components/sections/Logos";
import { HowItWorks, WhySwitch } from "@/components/sections/HowItWorks";
import { ProductAreas } from "@/components/sections/ProductAreas";
import { Industries } from "@/components/sections/Industries";
import { Integrations } from "@/components/sections/Integrations";
import { Customers, Reviews } from "@/components/sections/Customers";
import { Compare } from "@/components/sections/Compare";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBand, Demo } from "@/components/sections/Demo";
import { JsonLd, softwareSchema } from "@/lib/seo";

/** business.yourlio.com is this one page. Each section has an id the navigation jumps to. */
export default function Home() {
  return (
    <>
      <JsonLd data={softwareSchema} />
      <Hero />
      <SectionNav />
      <Logos />
      <HowItWorks />
      <ProductAreas />
      <WhySwitch />
      <Industries />
      <Integrations />
      <Customers />
      <Reviews />
      <Compare />
      <Pricing />
      <Faq />
      <Demo />
      <CtaBand />
    </>
  );
}
