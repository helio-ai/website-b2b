import { Section, SectionHeading } from "@/components/ui";
import { ProductTabs } from "./ProductTabs";
import { featureGroups } from "@/lib/landing";

/** Every feature in one section: a tab per product area, then a switcher per feature. */
export function ProductAreas() {
  return (
    <Section id="product" tone="dark">
      <SectionHeading
        dark
        eyebrow="Product"
        title="Everything you need to capture, qualify and close"
        sub="Pick an area, then a feature, to see it working in YourLio."
      />
      <ProductTabs groups={featureGroups} />
    </Section>
  );
}
