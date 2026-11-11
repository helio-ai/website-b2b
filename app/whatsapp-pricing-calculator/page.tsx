import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { PricingCalculator } from "@/components/tools/PricingCalculator";

export const metadata: Metadata = {
  title: "WhatsApp Pricing Calculator",
  description: "Placeholder description for the WhatsApp pricing calculator.",
};

export default function Page() {
  return (
    <ToolShell title="WhatsApp Pricing Calculator" sub="Placeholder line: estimate your monthly messaging and calling costs.">
      <PricingCalculator />
    </ToolShell>
  );
}
