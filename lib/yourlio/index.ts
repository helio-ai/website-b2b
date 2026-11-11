// Typed access to YourLio's own data, copied from website-v2 (yourlio.com)
// and the earlier business.yourlio.com site. Facts only: nothing here is
// invented for this site.
import { CASE_STUDIES } from "./case-studies.js";
import { SHOPIFY_REVIEW_SUMMARIES } from "./shopify-reviews.js";
import { INTEGRATIONS as RAW_INTEGRATIONS } from "./integrations.js";

/* ------------------------------------------------------------------ */
/* Case studies (consented only)                                        */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  updated: string;
  industry: string;
  channels: string[];
  market: string;
  brandUrl: string;
  window: string;
  windowLong: string;
  heroImage: string;
  cardImage: string;
  ogImage: string;
  heroAlt: string;
  answer: string;
  stats: { value: string; display: string; label: string }[];
  features: { name: string; description: string }[];
  blockers: string[];
  results: { metric: string; result: string; note?: string }[];
  faqs: { question: string; answer: string }[];
  playbook: { lead: string; text: string }[];
  provenance: string;
  content: { introduction: string; sections: { title: string; paragraphs: string[] }[] };
};

export const caseStudies: CaseStudy[] = CASE_STUDIES as unknown as CaseStudy[];
export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

/** Studies whose story is closest to a business that books, quotes or serves. */
export const featuredForBusiness = ["yourspex", "deodap", "sylvi-watches", "cureayu", "soulflower", "blue-tea", "bluetea"]
  .map((s) => getCaseStudy(s))
  .filter(Boolean) as CaseStudy[];

/* ------------------------------------------------------------------ */
/* Shopify App Store review summaries                                   */
/* ------------------------------------------------------------------ */

export type Review = {
  brand: string;
  person: string;
  role: string;
  photo: string;
  rating: number;
  date: string;
  reviewId: string;
  summary: string;
};
export const reviews: Review[] = SHOPIFY_REVIEW_SUMMARIES as unknown as Review[];
export const reviewUrl = (id: string) => `https://apps.shopify.com/reviews/${id}`;

/* ------------------------------------------------------------------ */
/* Integrations                                                         */
/* ------------------------------------------------------------------ */

export type Integration = { slug: string; name: string; category: string; description: string; logo: string | null };

// Shopify-only commerce apps are left off the business site.
const SHOPIFY_ONLY = new Set(["recharge", "yotpo", "loop-returns", "judge-me", "shopify", "gokwik", "shopflo", "recurpay", "nector", "proship", "shiprocket", "aftership"]);

export const integrations: Integration[] = (
  RAW_INTEGRATIONS as unknown as { id: string; name: string; category: string; description: string; logo: string | null }[]
)
  .filter((i) => !SHOPIFY_ONLY.has(i.id))
  .map((i) => ({ slug: i.id, name: i.name, category: i.category, description: i.description, logo: i.logo }));

export const integrationCategories = [...new Set(integrations.map((i) => i.category))];

/* ------------------------------------------------------------------ */
/* Team (from yourlio.com/about)                                        */
/* ------------------------------------------------------------------ */

export const team = [
  { name: "Prakash", role: "Founder & CEO", photo: "/team/prakash.webp" },
  { name: "Priyansh", role: "Founder & CTO", photo: "/team/priyansh.webp" },
  { name: "Anand Doddamani", role: "Founding Engineer, Tech Lead", photo: "/team/anand.webp" },
  { name: "Ishwar Gowda", role: "Founding Engineer, Tech Lead", photo: "/team/ishwar.webp" },
  { name: "Anirban Sinha", role: "Frontend Engineer", photo: "/team/anirban.webp" },
  { name: "Aditya Anand", role: "Frontend Engineer", photo: "/team/aditya.webp" },
  { name: "Anubha Kumari", role: "Software Engineer", photo: "/team/anubha.webp" },
  { name: "Mahanam Rahul", role: "Head of Business & Sales", photo: "/team/mahanam.webp" },
  { name: "Vaibhav Kumar", role: "Head of Growth", photo: "/team/vaibhav.webp" },
  { name: "Neha Joshi", role: "Sales Development Rep.", photo: "/team/neha.webp" },
];

/* ------------------------------------------------------------------ */
/* Customer logos (yourlio.com, real customers)                         */
/* ------------------------------------------------------------------ */

export const customerLogos = [
  ["sugar_cosmetics_yourlio.webp", "SUGAR Cosmetics"],
  ["dot_and_key_yourlio.svg", "Dot & Key"],
  ["baidyanath_yourlio.webp", "Baidyanath"],
  ["sri_sri_tattva_yourlio.webp", "Sri Sri Tattva"],
  ["soulflower_yourlio.webp", "Soulflower"],
  ["deodap_yourlio.webp", "DeoDap"],
  ["dr_ortho_yourlio.webp", "Dr. Ortho"],
  ["blue_tea_yourlio.webp", "Blue Tea"],
  ["slurrp_farm_yourlio.webp", "Slurrp Farm"],
  ["sylvi_yourlio.webp", "Sylvi"],
  ["blue_nectar_yourlio.webp", "Blue Nectar"],
  ["north_sole_yourlio.webp", "North Sole"],
  ["fiona_diamonds_yourlio.webp", "Fiona Diamonds"],
  ["luxmi_estates_yourlio.webp", "Luxmi Estates"],
].map(([file, name]) => ({ src: `/logos/${file}`, name }));

/* ------------------------------------------------------------------ */
/* Pricing (USD, from yourlio.com/pricing, checked 2026-10)             */
/* ------------------------------------------------------------------ */

export const plans = [
  { id: "starter", name: "Starter", tagline: "Getting started", price: 49, convos: 250, overage: 0.3, support: "Email support",
    features: ["AI agent on your website, WhatsApp, Instagram and Facebook", "Custom brand voice and persona", "One memory of each lead across channels"] },
  { id: "growth", name: "Growth", tagline: "Growing teams", price: 119, convos: 700, overage: 0.25, support: "Priority support", popular: true,
    features: ["Everything in Starter", "AI training and corrections", "A full profile of every lead"] },
  { id: "pro", name: "Pro", tagline: "High enquiry volume", price: 249, convos: 2500, overage: 0.15, support: "Priority support",
    features: ["Everything in Growth", "Everything the agent can do, at higher volume"] },
  { id: "scale", name: "Scale", tagline: "Multi team operations", price: 399, convos: 5000, overage: 0.12, support: "Priority support",
    features: ["Everything in Pro", "Lowest overage rate", "A dedicated success manager"] },
];

export const includedInEveryPlan = [
  "AI on your website, WhatsApp, Instagram and Facebook",
  "Step into any AI chat live",
  "Lead capture popups",
  "Dashboard for AI activity, conversations and performance",
  "Unlimited team seats",
];

export const unlimitedPlan = { name: "Unlimited", fromUsd: 699, upTo: 30000 };

export const aiCrm = {
  name: "AI CRM & Helpdesk",
  note: "One flat price for the whole team, quoted on a call.",
  groups: [
    { title: "Every channel", items: ["Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls", "Gmail and Outlook mailboxes connected", "See which ad or post started each chat"] },
    { title: "Tickets and team", items: ["Ticket ownership, assignments and internal notes", "Statuses, priorities, labels and quick replies", "Routing by rules, teams, shifts and availability", "Agent performance and resolution reports"] },
    { title: "Calling", items: ["WhatsApp and phone calls from the browser", "Recordings and AI transcripts on the ticket", "Knowlarity and DLT calling lines connected"] },
    { title: "AI for your team", items: ["One click summaries of every conversation", "Customer memory beside each ticket", "With an AI Agent plan, the AI answers first and hands off with a reason"] },
  ],
};

export const suites = [
  { id: "social", name: "Social Suite", price: 49, tagline: "Turn comments into conversations",
    features: ["Comment to DM on posts, Reels and ads, Instagram and Facebook", "Story replies, mentions and ad comments answered", "Comment tagging, auto hide and per post analytics"] },
  { id: "marketing", name: "Marketing Suite", price: 199, tagline: "Campaigns and journeys",
    features: ["Campaigns on WhatsApp, email, SMS and web push", "AI segments in plain words, refreshed daily", "Drag and drop journeys", "Control groups that prove the real lift"], note: "No markup on WhatsApp. You pay Meta directly." },
];

/* ------------------------------------------------------------------ */
/* Business platform content (from the earlier business.yourlio.com)    */
/* ------------------------------------------------------------------ */

export const b2bChannels = [
  { icon: "Globe", title: "Chat agent on your website", text: "Answers enquiries, asks your qualifying questions and books the call, day or night." },
  { icon: "Phone", title: "AI calls", text: "An AI voice agent talks to leads on the phone and qualifies them the same way it does in chat." },
  { icon: "MessageCircle", title: "WhatsApp", text: "Answers enquiries, follows up and sends campaigns from your WhatsApp Business number." },
  { icon: "Users", title: "Instagram and Facebook", text: "Turns comments and DMs into qualified conversations, automatically." },
  { icon: "Target", title: "Meta ads", text: "Leads from your Facebook and Instagram ads go straight into a conversation with the agent." },
  { icon: "Mail", title: "Email", text: "Replies and follows up by email with the full history of every lead." },
];

export const b2bSteps = [
  { icon: "MessagesSquare", title: "Answer every enquiry", text: "Replies to visitors in seconds, day or night, in the language they write in." },
  { icon: "Filter", title: "Ask your questions", text: "Asks what your sales team needs to know, with tap options that answer in one tap." },
  { icon: "ClipboardCheck", title: "Collect contact details", text: "Name, company, phone and work email, inside the chat. No separate form page." },
  { icon: "Calendar", title: "Book the call", text: "Offers open times and books the call. The invite lands in their email." },
];

export const b2bSwitch = [
  { before: "Button menus that break the moment someone types a real question.", after: "Understands free text, then guides with tap options where they help." },
  { before: "The website chat and WhatsApp ask the same questions twice.", after: "One memory of every lead across your website and WhatsApp." },
  { before: "Leads wait in a sheet until someone follows up by hand.", after: "Details, answers and the booked call reach your team together." },
];

export const b2bPipeline = {
  stages: [
    { label: "New", leads: [{ company: "Lumen Freight", need: "Demo request", source: "Meta ad" }, { company: "Oakridge Clinics", need: "Website and SEO", source: "Instagram" }] },
    { label: "Qualifying", leads: [{ company: "Harbor Foods", need: "Bulk quote", source: "WhatsApp" }] },
    { label: "Qualified", leads: [{ company: "Brightline Legal", need: "Managed IT", source: "AI call" }] },
    { label: "Call booked", leads: [{ company: "Northwind Offices", need: "CCTV install", source: "Website chat", when: "Wed, 2:00 pm" }] },
  ],
  points: [
    "Every answer from every channel is saved on the lead, so nobody asks twice.",
    "Leads move through stages your team can see and change, from new to booked.",
    "Syncs with HubSpot and the other tools you already use.",
  ],
};

export const b2bFaqs = [
  { q: "What is YourLio for business?", a: "YourLio for business is an AI agent, shared inbox and CRM for businesses that sell through a conversation: a call, a quote, a site visit or an appointment. It answers enquiries on your website, WhatsApp, Instagram and Facebook, asks your qualifying questions, collects contact details and books the call." },
  { q: "Does YourLio work if my website is not on Shopify?", a: "Yes. The same agent that runs on Shopify stores also runs on custom built websites, WooCommerce, Magento and BigCommerce. Our team helps you add it to your site." },
  { q: "Can it ask our own qualifying questions?", a: "Yes. You decide what the agent needs to know before a call, such as team size, budget, location or timeline. It asks with tap options, and visitors can still type freely." },
  { q: "Can visitors book a sales call inside the chat?", a: "Yes. After collecting their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email and can reschedule from it." },
  { q: "Does it work on WhatsApp too?", a: "Yes. Connect your WhatsApp Business number and the same agent answers enquiries there, with the same memory of each lead. You can also send WhatsApp campaigns and let the agent handle the replies." },
  { q: "What does YourLio include for B2B teams?", a: "A chat agent for your website, AI calls, WhatsApp, Instagram and Facebook automation, leads from Meta ads and email, all qualified by one AI agent. Every lead lands in one CRM with stages, which syncs with HubSpot and the tools you already use." },
  { q: "Does YourLio include a CRM?", a: "Yes. Every lead from chat, calls, WhatsApp, social, ads and email lands in one CRM with their answers and the full conversation, and your team moves it through stages from new to booked." },
  { q: "Do I need to build chatbot or WhatsApp flows?", a: "No. There are no flow trees to draw. You set the questions and the goal, such as a booked call or a quote request, and the agent runs the conversation, using tap options and forms where they make answering faster." },
  { q: "Can my sales team take over a conversation?", a: "Yes. Every conversation sits in the shared inbox, so a rep can step in at any point. Visitors can also ask to talk to a person, and the AI hands off with a reason." },
  { q: "Which languages does it support?", a: "Visitors can write in their own language and the agent replies in it. Test your customers' languages and terms with real questions during setup." },
  { q: "How is YourLio priced for B2B?", a: "AI Agent plans are priced by AI conversations and start at $49 a month for 250 conversations. AI CRM & Helpdesk is one flat team price quoted on a call. Book a demo and we will confirm the right setup for your volume and channels." },
  { q: "How does YourLio handle my data?", a: "YourLio uses your connected business information and conversations to answer enquiries. Read the Security and Privacy pages on yourlio.com and contact us with specific data handling, retention or security requirements." },
];

export const pillars = [
  { icon: "Target", title: "Outcome over output", text: "Every feature ships against one question: did it move a lead closer to a booked call or a sale?" },
  { icon: "Zap", title: "Answer before they leave", text: "The agent replies in seconds, day or night, so enquiries do not go cold while your team is busy." },
  { icon: "Layers", title: "One memory, every channel", text: "Website, WhatsApp, Instagram, Facebook, email and calls share one record of each lead." },
  { icon: "HeartHandshake", title: "People stay in charge", text: "Your team sees every conversation and can step in at any point from the shared inbox." },
];
