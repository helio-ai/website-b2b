import { Section, SectionHeading } from "@/components/ui";
import { IndustryExplorer } from "./IndustryExplorer";
import { INDUSTRY_COPY } from "@/lib/copy/industries";

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="See the conversation for your business"
        sub="Pick your industry to see a sample chat: the agent asks the right questions, books the call and remembers the lead on WhatsApp."
      />
      <IndustryExplorer industries={INDUSTRY_COPY} />
    </Section>
  );
}
