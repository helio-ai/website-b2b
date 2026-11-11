// The landing page's product sections: which features each one shows, and
// the video or screenshot for each feature.
import { FEATURE_COPY, type FeatureCopy } from "./copy/features";
import type { ShotKey } from "./shots";

export type Video = "chat-agent" | "whatsapp-ai" | "insta-comment-to-dm" | "campaigns" | "automation" | "ai-segmentation" | "ai-popups";

export type FeatureItem = FeatureCopy & { id: string; video?: Video; shot?: ShotKey };
export type FeatureGroup = { id: string; eyebrow: string; title: string; sub: string; items: FeatureItem[] };

const feature = (id: string, media: { video: Video } | { shot: ShotKey }, title?: string): FeatureItem => ({
  ...FEATURE_COPY[id],
  ...(title ? { title } : {}),
  ...media,
  id,
});

export const featureGroups: FeatureGroup[] = [
  {
    id: "capture",
    eyebrow: "Capture",
    title: "Catch every lead, wherever it starts",
    sub: "Ads, social, your website and the real world all open a conversation with the same AI agent.",
    items: [
      feature("capture-leads-from-ads", { video: "insta-comment-to-dm" }, "Meta ads"),
      feature("capture-leads", { video: "insta-comment-to-dm" }, "Instagram and Facebook"),
      feature("capture-website-leads", { video: "ai-popups" }, "Website chat and popups"),
      feature("capture-offline-leads", { video: "whatsapp-ai" }, "QR codes and links"),
    ],
  },
  {
    id: "convert",
    eyebrow: "Convert",
    title: "Qualify every lead and book the call",
    sub: "The agent answers, asks your questions, collects details in the chat and books the meeting.",
    items: [
      feature("ai-agents", { video: "chat-agent" }, "AI Agents"),
      feature("lead-qualification", { video: "chat-agent" }, "Qualify leads"),
      feature("lead-distribution", { shot: "helpdesk-dark" }, "Route leads"),
      feature("book-a-meeting", { video: "whatsapp-ai" }, "Book appointments"),
    ],
  },
  {
    id: "inbox",
    eyebrow: "Inbox and CRM",
    title: "One inbox and one CRM for the whole team",
    sub: "Every channel, every lead and every call in one place, with the AI answering first.",
    items: [
      feature("team-inbox", { shot: "inbox-dark" }, "Team inbox"),
      feature("whatsapp-crm-integration", { shot: "profiles" }, "CRM and lead stages"),
      feature("conversational-support", { shot: "helpdesk-dark" }, "Support for clients"),
    ],
  },
  {
    id: "retain",
    eyebrow: "Retain",
    title: "Follow up and keep clients coming back",
    sub: "Campaigns, journeys and reminders on WhatsApp, email and SMS, with replies handled by the agent.",
    items: [
      feature("send-promotions-and-newsletters", { video: "campaigns" }, "Campaigns and newsletters"),
      feature("send-renewal-reminders", { video: "automation" }, "Follow ups and reminders"),
      feature("surveys", { video: "ai-segmentation" }, "Feedback requests"),
    ],
  },
  {
    id: "whatsapp",
    eyebrow: "WhatsApp and calling",
    title: "WhatsApp and calls, built in",
    sub: "Your WhatsApp Business number, AI calls and browser calling in the same inbox and memory.",
    items: [
      feature("whatsapp-business-api", { video: "whatsapp-ai" }, "WhatsApp Business API"),
      feature("whatsapp-business-calling-api", { shot: "helpdesk-dark" }, "AI calls and WhatsApp calling"),
      feature("whatsapp-business-multiple-users", { shot: "inbox-dark" }, "One number, whole team"),
      feature("whatsapp-bulk-message", { video: "campaigns" }, "Bulk messages"),
    ],
  },
];

/** The "on this page" bar under the hero. */
export const sections = [
  { id: "how-it-works", label: "How it works" },
  ...featureGroups.map((g) => ({ id: g.id, label: g.eyebrow })),
  { id: "industries", label: "Industries" },
  { id: "integrations", label: "Integrations" },
  { id: "customers", label: "Customers" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];
