// Route data for every page in the site. All copy is neutral placeholder text:
// replace it with your own when you write the real content.
import { BRAND } from "./site";

/* ------------------------------------------------------------------ */
/* Placeholder copy helpers                                            */
/* ------------------------------------------------------------------ */

export const ph = {
  heroSub:
    "Use this space for a one or two sentence summary of the page. Say who it is for and the main outcome they get.",
  short: "Short supporting sentence that explains this point in plain words.",
  medium:
    "A short paragraph that describes this item. Explain the problem it solves, how it works at a high level and why it matters to the reader.",
  long:
    "Placeholder paragraph. Replace this with the real copy for this section. Keep sentences short, lead with the benefit, and back it up with a specific detail, number or example where you can. Two to four sentences is usually enough for a section like this.",
  answer:
    "Placeholder answer. Write a direct answer in the first sentence, then add one or two sentences of supporting detail or a link to a related page.",
};

export const titleFromSlug = (slug: string) =>
  slug
    .split("-")
    .map((w) => (w.length <= 3 && w !== "the" ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1)))
    .join(" ")
    .replace(/\bAnd\b/g, "and")
    .replace(/\bFor\b/g, "for")
    .replace(/\bFrom\b/g, "from");

/* ------------------------------------------------------------------ */
/* Top-level product, solution and WhatsApp pages (feature template)  */
/* ------------------------------------------------------------------ */

export type FeatureVariant = "feature" | "capture" | "whatsapp" | "platform" | "security" | "why" | "pricing-table" | "partner-story";

export type FeaturePage = {
  title: string;
  eyebrow: string;
  variant: FeatureVariant;
  icon: string;
};

export const featurePages: Record<string, FeaturePage> = {
  // Capture
  "capture-leads-from-ads": { title: "Capture Leads from Ads", eyebrow: "Capture", variant: "capture", icon: "Target" },
  "capture-leads": { title: "Capture Leads from Social", eyebrow: "Capture", variant: "capture", icon: "Users" },
  "capture-facebook-leads": { title: "Capture Facebook Leads", eyebrow: "Capture", variant: "capture", icon: "Users" },
  "capture-instagram-leads": { title: "Capture Instagram Leads", eyebrow: "Capture", variant: "capture", icon: "Users" },
  "capture-tiktok-leads": { title: "Capture TikTok Leads", eyebrow: "Capture", variant: "capture", icon: "Users" },
  "capture-website-leads": { title: "Capture Website Leads", eyebrow: "Capture", variant: "capture", icon: "Globe" },
  "capture-offline-leads": { title: "Capture Offline Leads", eyebrow: "Capture", variant: "capture", icon: "Store" },
  // Convert
  "ai-agents": { title: "AI Agents", eyebrow: "Convert", variant: "feature", icon: "Sparkles" },
  "ai-agents-for-lead-qualification": { title: "AI Agents for Lead Qualification", eyebrow: "Convert", variant: "feature", icon: "Bot" },
  "team-inbox": { title: "Team Inbox", eyebrow: "Convert", variant: "feature", icon: "Inbox" },
  "lead-qualification": { title: "Qualify Leads", eyebrow: "Convert", variant: "feature", icon: "Filter" },
  "lead-distribution": { title: "Route Leads", eyebrow: "Convert", variant: "feature", icon: "Route" },
  "book-a-meeting": { title: "Book Appointments", eyebrow: "Convert", variant: "feature", icon: "Calendar" },
  // Retain
  "conversational-support": { title: "Conversational Support", eyebrow: "Retain", variant: "feature", icon: "Headphones" },
  "send-promotions-and-newsletters": { title: "Promotions and Newsletters", eyebrow: "Retain", variant: "feature", icon: "Megaphone" },
  "send-renewal-reminders": { title: "Renewal Reminders", eyebrow: "Retain", variant: "feature", icon: "Bell" },
  surveys: { title: "CSAT and NPS Surveys", eyebrow: "Retain", variant: "feature", icon: "ClipboardCheck" },
  // Platform
  "omnichannel-ai-crm-conversation-platform": { title: `What is ${BRAND}?`, eyebrow: "Platform", variant: "platform", icon: "Layers" },
  "mobile-app": { title: "Mobile App", eyebrow: "Platform", variant: "platform", icon: "Smartphone" },
  security: { title: "Security", eyebrow: "Trust", variant: "security", icon: "ShieldCheck" },
  "why-choose-us": { title: `Why Choose ${BRAND}`, eyebrow: "Why us", variant: "why", icon: "Award" },
  // WhatsApp
  "whatsapp-business-api": { title: "WhatsApp Business API", eyebrow: "WhatsApp", variant: "whatsapp", icon: "MessageCircle" },
  "whatsapp-business-calling-api": { title: "WhatsApp Business Calling API", eyebrow: "WhatsApp", variant: "whatsapp", icon: "Phone" },
  "whatsapp-api-calling-pricing": { title: "WhatsApp API Calling Pricing", eyebrow: "WhatsApp", variant: "pricing-table", icon: "Phone" },
  "whatsapp-business-multiple-users": { title: "WhatsApp Business Multiple Users", eyebrow: "WhatsApp", variant: "whatsapp", icon: "Users" },
  "whatsapp-bulk-message": { title: "WhatsApp Bulk Message", eyebrow: "WhatsApp", variant: "whatsapp", icon: "Send" },
  "whatsapp-crm-integration": { title: "WhatsApp CRM Integration", eyebrow: "WhatsApp", variant: "whatsapp", icon: "Plug" },
  // Partner stories
  "partner-story-01": { title: "Partner Story 01", eyebrow: "Partner story", variant: "partner-story", icon: "Handshake" },
  "partner-story-02": { title: "Partner Story 02", eyebrow: "Partner story", variant: "partner-story", icon: "Handshake" },
};

/* ------------------------------------------------------------------ */
/* Legal pages                                                          */
/* ------------------------------------------------------------------ */

export const legalPages: Record<string, string> = {
  "privacy-policy": "Privacy Policy",
  "cookie-policy": "Cookie Policy",
  "terms-of-service": "Terms of Service",
  "legal-notice": "Legal Notice",
  subprocessors: "Our Subprocessors",
  "data-processing-agreement": "Data Protection Addendum",
};

/* ------------------------------------------------------------------ */
/* Industries                                                           */
/* ------------------------------------------------------------------ */

export type Industry = { slug: string; name: string; parent?: string; icon: string };

export const industries: Industry[] = [
  { slug: "retail", name: "Retail", icon: "Store" },
  { slug: "electronics", name: "Electronics", parent: "retail", icon: "Store" },
  { slug: "fashion-apparel", name: "Fashion & Apparel", parent: "retail", icon: "Store" },
  { slug: "furniture", name: "Furniture", parent: "retail", icon: "Store" },
  { slug: "jewelry", name: "Jewelry and Watches", parent: "retail", icon: "Store" },
  { slug: "education", name: "Education", icon: "GraduationCap" },
  { slug: "academic-tutoring", name: "Academic Tutoring", parent: "education", icon: "GraduationCap" },
  { slug: "afterschool-activities", name: "Afterschool Activities", parent: "education", icon: "GraduationCap" },
  { slug: "sports-fitness", name: "Sport & Fitness", parent: "education", icon: "GraduationCap" },
  { slug: "healthcare", name: "Healthcare", icon: "Stethoscope" },
  { slug: "beauty-center", name: "Beauty Center", parent: "healthcare", icon: "Stethoscope" },
  { slug: "dental-clinic", name: "Dental Clinic", parent: "healthcare", icon: "Stethoscope" },
  { slug: "medical-clinic", name: "Medical Clinic", parent: "healthcare", icon: "Stethoscope" },
  { slug: "professional-services", name: "Professional Services", icon: "Briefcase" },
  { slug: "home-cleaning-maid-services", name: "Home Cleaning & Maid Services", parent: "professional-services", icon: "Briefcase" },
  { slug: "photography-videography", name: "Photography & Videography", parent: "professional-services", icon: "Briefcase" },
  { slug: "automotive", name: "Automotive", icon: "Car" },
  { slug: "auto-part-retailer", name: "Auto Part Retailer", parent: "automotive", icon: "Car" },
  { slug: "car-dealership", name: "Car Dealership", parent: "automotive", icon: "Car" },
  { slug: "travel", name: "Travel", icon: "Plane" },
  { slug: "travel-agency-tour-operator", name: "Travel Agency & Tour Operator", parent: "travel", icon: "Plane" },
];

/* ------------------------------------------------------------------ */
/* Integrations                                                         */
/* ------------------------------------------------------------------ */

export const integrationCategories = [
  "Messaging Channels", "Voice", "WebChat", "WhatsApp", "SMS", "Email", "Bots", "Integration",
] as const;
export const planNames = ["starter", "growth", "advanced"] as const;

export type Integration = {
  slug: string;
  name: string;
  categories: (typeof integrationCategories)[number][];
  plans: (typeof planNames)[number][];
};

const ALL: Integration["plans"] = ["starter", "growth", "advanced"];
const GA: Integration["plans"] = ["growth", "advanced"];
const A: Integration["plans"] = ["advanced"];

export const integrations: Integration[] = [
  { slug: "whatsapp", name: "WhatsApp Business Platform", categories: ["Messaging Channels", "WhatsApp"], plans: ALL },
  { slug: "whatsapp-business-calling-api", name: "WhatsApp Business Calling API", categories: ["Voice", "WhatsApp"], plans: ALL },
  { slug: "voip-calls", name: "VoIP Calls", categories: ["Voice"], plans: GA },
  { slug: "tiktok-business-messaging", name: "TikTok Business Messaging", categories: ["Messaging Channels"], plans: ALL },
  { slug: "facebook-messenger-calls", name: "Facebook Messenger Calls", categories: ["Voice"], plans: ALL },
  { slug: "facebook-messenger", name: "Facebook Messenger", categories: ["Messaging Channels"], plans: ALL },
  { slug: "google-calendar", name: "Google Calendar", categories: ["Integration"], plans: GA },
  { slug: "calendly", name: "Calendly", categories: ["Integration"], plans: GA },
  { slug: "calcom", name: "Cal.com", categories: ["Integration"], plans: GA },
  { slug: "hubspot", name: "HubSpot", categories: ["Integration"], plans: GA },
  { slug: "salesforce", name: "Salesforce", categories: ["Integration"], plans: A },
  { slug: "twilio-rcs", name: "Twilio RCS", categories: ["Messaging Channels", "SMS"], plans: ALL },
  { slug: "n8n", name: "n8n", categories: ["Integration"], plans: GA },
  { slug: "mcp-server", name: "MCP Server", categories: ["Integration", "Bots"], plans: GA },
  { slug: "zapier", name: "Zapier", categories: ["Integration"], plans: GA },
  { slug: "instagram", name: "Instagram", categories: ["Messaging Channels"], plans: ALL },
  { slug: "tiktok-messaging-ads", name: "TikTok Messaging Ads", categories: ["Messaging Channels", "Integration"], plans: ALL },
  { slug: "google-sheets", name: "Google Sheets", categories: ["Integration"], plans: GA },
  { slug: "custom-channel", name: "Custom Channel", categories: ["Messaging Channels"], plans: GA },
  { slug: "google-workspace", name: "Google Workspace", categories: ["Email"], plans: ALL },
  { slug: "gmail", name: "Gmail", categories: ["Email"], plans: ALL },
  { slug: "yahoo-mail", name: "Yahoo Mail", categories: ["Email"], plans: ALL },
  { slug: "shopify", name: "Shopify", categories: ["Integration"], plans: GA },
  { slug: "magento", name: "Magento", categories: ["Integration"], plans: GA },
  { slug: "woocommerce", name: "WooCommerce", categories: ["Integration"], plans: GA },
  { slug: "twilio-sms", name: "Twilio - SMS", categories: ["SMS"], plans: ALL },
  { slug: "messagebird-sms", name: "MessageBird - SMS", categories: ["SMS"], plans: ALL },
  { slug: "vonage-nexmo-sms", name: "Vonage - SMS", categories: ["SMS"], plans: ALL },
  { slug: "sms", name: "SMS", categories: ["SMS"], plans: ALL },
  { slug: "wechat", name: "WeChat", categories: ["Messaging Channels"], plans: ALL },
  { slug: "line", name: "LINE", categories: ["Messaging Channels"], plans: ALL },
  { slug: "telegram", name: "Telegram", categories: ["Messaging Channels"], plans: ALL },
  { slug: "viber", name: "Viber", categories: ["Messaging Channels"], plans: ALL },
  { slug: "webhook", name: "Webhook", categories: ["Integration"], plans: GA },
  { slug: "make", name: "Make", categories: ["Integration"], plans: GA },
  { slug: "pipedrive", name: "Pipedrive", categories: ["Integration"], plans: GA },
  { slug: "activecampaign", name: "ActiveCampaign", categories: ["Integration"], plans: GA },
  { slug: "zendesk", name: "Zendesk", categories: ["Integration"], plans: A },
  { slug: "imap-smtp", name: "IMAP/SMTP", categories: ["Email"], plans: ALL },
  { slug: "outlook", name: "Outlook and Microsoft 365", categories: ["Email"], plans: ALL },
  { slug: "dialogflow-former-api-ai", name: "Dialogflow", categories: ["Bots"], plans: GA },
  { slug: "squarespace", name: "Squarespace", categories: ["WebChat"], plans: ALL },
  { slug: "wix-website", name: "Wix Website", categories: ["WebChat"], plans: ALL },
  { slug: "wordpress", name: "WordPress", categories: ["WebChat"], plans: ALL },
  { slug: "joomla", name: "Joomla", categories: ["WebChat"], plans: ALL },
];

/* ------------------------------------------------------------------ */
/* Competitor comparison pages                                          */
/* ------------------------------------------------------------------ */

export const alternatives = [
  { slug: "intercom", name: "Intercom" },
  { slug: "manychat", name: "Manychat" },
  { slug: "sleekflow", name: "SleekFlow" },
  { slug: "trengo", name: "Trengo" },
  { slug: "wati", name: "Wati" },
];

/* ------------------------------------------------------------------ */
/* Customer stories (placeholder entries, same count as the source)    */
/* ------------------------------------------------------------------ */

export const storyIndustries = [
  "IT & SaaS", "Education", "Real Estate", "Recruitment", "Automotive", "Fitness", "Mobility",
  "Accounting", "Healthcare", "eCommerce & Retail", "Travel Agency & Tour Operator",
  "Dermocosmetics", "Professional Services", "Food & Beverage", "Hospitality", "Logistics",
];

const metrics = ["more conversions", "faster replies", "more leads", "higher retention", "lower costs", "more bookings"];

export type CustomerStory = {
  slug: string;
  company: string;
  title: string;
  industry: string;
  stat: string;
  statLabel: string;
  region: string;
};

const regions = ["Asia Pacific", "Europe", "Latin America", "Middle East", "North America", "Africa"];

export const customers: CustomerStory[] = Array.from({ length: 49 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const stat = `${10 + ((i * 17) % 80)}%`;
  const statLabel = metrics[i % metrics.length];
  return {
    slug: `customer-story-${n}`,
    company: `Company ${n}`,
    title: `Customer story ${n}: headline describing the result (${stat} ${statLabel})`,
    industry: storyIndustries[i % storyIndustries.length],
    stat,
    statLabel,
    region: regions[i % regions.length],
  };
});

/* ------------------------------------------------------------------ */
/* FAQ entries (placeholder entries, same count as the source)         */
/* ------------------------------------------------------------------ */

export const faqTopics = ["Getting started", "Pricing", "AI Agents", "Integrations", "Security", "Comparisons", "Industries"];

export type Faq = { slug: string; question: string; topic: string };

export const faqs: Faq[] = Array.from({ length: 89 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const topic = faqTopics[i % faqTopics.length];
  return { slug: `faq-${n}`, question: `Placeholder question ${n} about ${topic.toLowerCase()}?`, topic };
});
