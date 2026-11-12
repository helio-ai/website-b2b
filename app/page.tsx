import { Hero } from "@/components/sections/Hero";
import { SectionNav } from "@/components/sections/SectionNav";
import { Logos } from "@/components/sections/Logos";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductAreas } from "@/components/sections/ProductAreas";
import { Industries } from "@/components/sections/Industries";
import { Customers } from "@/components/sections/Customers";
import { Faq } from "@/components/sections/Faq";
import { Demo } from "@/components/sections/Demo";
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
      <Industries />
      <Customers />
      <Faq />
      <Demo />
    </>
  );
}
