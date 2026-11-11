// What makes each product page look different: its hero media (a product
// video or screenshot from yourlio.com), the case study it features, and the
// extra section that fits its topic.
import type { ShotKey } from "@/components/ui";

export type Video = "chat-agent" | "whatsapp-ai" | "insta-comment-to-dm" | "campaigns" | "automation" | "ai-segmentation" | "ai-popups";
export type Extra = "steps" | "agent-vs-chatbot" | "pipeline" | "marketing-suite" | "social-suite" | "channels" | "before-after" | "crm";

export type FeatureMedia = { video?: Video; shot?: ShotKey; story: string; extra: Extra };

export const FEATURE_MEDIA: Record<string, FeatureMedia> = {
  "capture-leads-from-ads": { video: "insta-comment-to-dm", story: "rippedup-nutrition", extra: "social-suite" },
  "capture-leads": { video: "insta-comment-to-dm", story: "rippedup-nutrition", extra: "social-suite" },
  "capture-facebook-leads": { video: "insta-comment-to-dm", story: "ugees", extra: "social-suite" },
  "capture-instagram-leads": { video: "insta-comment-to-dm", story: "ugees", extra: "social-suite" },
  "capture-website-leads": { video: "ai-popups", story: "north-sole", extra: "steps" },
  "capture-offline-leads": { video: "whatsapp-ai", story: "yourspex", extra: "steps" },
  "ai-agents": { video: "chat-agent", story: "soulflower", extra: "agent-vs-chatbot" },
  "ai-agents-for-lead-qualification": { video: "chat-agent", story: "yourspex", extra: "agent-vs-chatbot" },
  "team-inbox": { shot: "inbox-dark", story: "sylvi-watches", extra: "crm" },
  "lead-qualification": { video: "chat-agent", story: "yourspex", extra: "pipeline" },
  "lead-distribution": { shot: "helpdesk-dark", story: "sylvi-watches", extra: "pipeline" },
  "book-a-meeting": { video: "whatsapp-ai", story: "yourspex", extra: "steps" },
  "conversational-support": { shot: "helpdesk-dark", story: "deodap", extra: "crm" },
  "send-promotions-and-newsletters": { video: "campaigns", story: "auravedic", extra: "marketing-suite" },
  "send-renewal-reminders": { video: "automation", story: "blue-nectar", extra: "marketing-suite" },
  surveys: { video: "ai-segmentation", story: "bake-cosmetics", extra: "marketing-suite" },
  "omnichannel-ai-crm-conversation-platform": { shot: "channels", story: "soulflower", extra: "channels" },
  "why-choose-us": { video: "chat-agent", story: "north-sole", extra: "before-after" },
  "whatsapp-business-api": { video: "whatsapp-ai", story: "cureayu", extra: "channels" },
  "whatsapp-business-calling-api": { shot: "helpdesk-dark", story: "cureayu", extra: "crm" },
  "whatsapp-business-multiple-users": { shot: "inbox-dark", story: "bluetea", extra: "crm" },
  "whatsapp-bulk-message": { video: "campaigns", story: "auravedic", extra: "marketing-suite" },
  "whatsapp-crm-integration": { shot: "profiles", story: "sylvi-watches", extra: "pipeline" },
};
