import type { Metadata } from "next";
import { SimpleHero, CtaBand, FaqSection } from "@/components/ui";
import { IntegrationsBrowser } from "@/components/IntegrationsBrowser";
import { integrations } from "@/lib/yourlio";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "YourLio Integrations: WhatsApp, CRM, Email and Calling | YourLio",
  description: "Connect YourLio to WhatsApp, Instagram, Messenger, Gmail, Outlook, HubSpot, Zoho Desk, SMS and calling lines. One AI agent and inbox across them all.",
  path: "/integrations",
});

const faqs = [
  { q: "Which channels and tools does YourLio connect to?", a: "YourLio connects WhatsApp, Instagram, Messenger, Instagram Ads, website chat, Gmail, Outlook and other email providers, SMS and RCS, web push and calling lines such as Knowlarity. It also connects CRM and support tools such as HubSpot and Zoho Desk." },
  { q: "Do I need to replace the tools I already use?", a: "No. Start with the channels and integrations you need and keep your existing tools. Check which system owns each automation so customers do not get duplicate replies or campaigns." },
  { q: "Are messaging and calling charges included?", a: "No. Meta messaging fees, carrier calling charges and other third party fees are billed separately. For WhatsApp you pay Meta directly, with no YourLio markup." },
  { q: "How do I check an integration works for my business?", a: "Start with one task, such as answering an enquiry on WhatsApp or syncing a lead to your CRM. Test it with a sample conversation, check permissions and handoffs, then switch it on for everyone." },
];

export default function IntegrationsPage() {
  return (
    <>
      <SimpleHero title="Integrations" sub="Connect the channels your leads use and the tools your team already runs on. One agent and one inbox across all of them." />
      <IntegrationsBrowser items={integrations} />
      <FaqSection title="Integration questions" items={faqs} />
      <CtaBand />
    </>
  );
}
