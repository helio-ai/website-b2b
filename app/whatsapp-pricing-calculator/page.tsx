import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { PricingCalculator } from "@/components/tools/PricingCalculator";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "YourLio Cost Calculator for AI Conversations | YourLio",
  description: "Estimate your monthly YourLio bill from AI conversations and add ons, using the published USD plans. Meta WhatsApp fees are paid to Meta directly.",
  path: "/whatsapp-pricing-calculator",
});

const steps = [
  { title: "Estimate your conversations", body: "Count the AI conversations you expect each month across website chat, WhatsApp, Instagram and Facebook." },
  { title: "Pick your add ons", body: "Add the Social Suite for comment to DM, or the Marketing Suite for campaigns and journeys." },
  { title: "Confirm on a demo", body: "The team confirms the plan and quotes AI CRM & Helpdesk for your team." },
];

const faqs = [
  { q: "How is YourLio priced?", a: "AI Agent plans are priced by AI conversations each month: Starter $49 for 250, Growth $119 for 700, Pro $249 for 2,500 and Scale $399 for 5,000, with overage from $0.30 down to $0.12." },
  { q: "Does the estimate include WhatsApp fees?", a: "No. Meta charges WhatsApp messaging fees separately and you pay Meta directly, with no YourLio markup. Carrier calling charges are separate too." },
  { q: "Is AI CRM & Helpdesk included in the estimate?", a: "No. AI CRM & Helpdesk is one flat price for the whole team, quoted on a call." },
  { q: "What if my volume changes month to month?", a: "Extra conversations are billed at your plan's overage rate and you can set a spend cap. Move to a larger plan when your volume grows." },
];

export default function Page() {
  return (
    <ToolShell title="Conversation Cost Calculator" sub="Estimate your monthly YourLio bill from your expected AI conversations." steps={steps} faqs={faqs}>
      <PricingCalculator />
    </ToolShell>
  );
}
