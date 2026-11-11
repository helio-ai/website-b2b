// YourLio's own facts and data for the landing page, from yourlio.com
// (website-v2) and the earlier business.yourlio.com site. Nothing here is
// invented for this site.
import { CASE_STUDIES, type CaseStudy } from "./case-studies";
import { INTEGRATIONS, type Integration } from "./integrations";
import { REVIEWS, type Review } from "./reviews";

export type { CaseStudy, Integration, Review };

/* Case studies: cards here, full stories on yourlio.com ------------- */

export const CASE_STUDIES_URL = "https://yourlio.com/case-studies";
export const caseStudyUrl = (slug: string) => `${CASE_STUDIES_URL}/${slug}`;
export const caseStudies = CASE_STUDIES;

/** Stories closest to a business that books, quotes or serves, shown first. */
const FEATURED = ["yourspex", "deodap", "sylvi-watches", "cureayu", "soulflower", "bluetea"];
export const featuredStories = [
  ...FEATURED.map((slug) => CASE_STUDIES.find((c) => c.slug === slug)).filter((c): c is CaseStudy => Boolean(c)),
  ...CASE_STUDIES.filter((c) => !FEATURED.includes(c.slug)),
];

/* Reviews and integrations ------------------------------------------ */

export const reviews = REVIEWS;
export const reviewUrl = (id: string) => `https://apps.shopify.com/reviews/${id}`;
export const integrations = INTEGRATIONS;

/* Customer logos: same files and trimmed sizes as the yourlio.com wall */

const LOGOS: [name: string, file: string, w: number, h: number][] = [
  ["Sugar Cosmetics", "sugar_cosmetics_yourlio.webp", 392, 126],
  ["Dot & Key", "dot_and_key_yourlio.svg", 278, 65],
  ["Baidyanath", "baidyanath_yourlio.webp", 212, 41],
  ["Sri Sri Tattva", "sri_sri_tattva_yourlio.webp", 195, 101],
  ["Soulflower", "soulflower_yourlio.webp", 428, 123],
  ["DeoDap", "deodap_yourlio.webp", 153, 43],
  ["Dr. Ortho", "dr_ortho_yourlio.webp", 273, 126],
  ["Sylvi", "sylvi_yourlio.webp", 121, 126],
  ["Auravedic", "auravedic_yourlio.webp", 484, 126],
  ["Majestic Pure", "majestic_pure_yourlio.webp", 314, 89],
  ["Slurrp Farm", "slurrp_farm_yourlio.webp", 148, 126],
  ["Blue Tea", "blue_tea_yourlio.webp", 265, 68],
  ["ZeroHarm", "zeroharm_yourlio.webp", 268, 71],
  ["Ripped Up Nutrition", "ripped_up_nutrition_yourlio.webp", 310, 68],
  ["Sesa", "sesa_yourlio.webp", 320, 126],
  ["Herbtantra", "herbtantra_yourlio.webp", 117, 126],
  ["Sarin Skin", "sarin_skin_yourlio.webp", 138, 57],
  ["Blue Nectar", "blue_nectar_yourlio.webp", 158, 126],
  ["Nourish You", "nourish_you_yourlio.webp", 355, 126],
  ["Sova Health", "sova_health_yourlio.webp", 163, 73],
  ["Fiona Diamonds", "fiona_diamonds_yourlio.webp", 140, 53],
  ["GlamVeda", "glamveda_yourlio.webp", 958, 126],
  ["Longway", "longway_yourlio.webp", 610, 126],
  ["Bubble Me", "bubble_me_yourlio.webp", 156, 126],
  ["Ashba Botanics", "ashba_botanics_yourlio.webp", 134, 56],
  ["Ugees", "ugees_yourlio.webp", 100, 76],
];

/** Display size per logo so wide wordmarks and square marks carry the same visual weight. */
export const customerLogos = LOGOS.map(([name, file, w, h]) => {
  const ratio = w / h;
  const height = Math.round(Math.min(46, Math.max(22, Math.sqrt(5200 / ratio))));
  return { name, src: `/logos/${file}`, width: Math.round(height * ratio), height };
});

/* Pricing (USD, from yourlio.com/pricing, checked October 2026) ------ */

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
  { id: "social", name: "Social Suite", price: 49, features: ["Comment to DM on posts, Reels and ads, Instagram and Facebook", "Story replies, mentions and ad comments answered"] },
  { id: "marketing", name: "Marketing Suite", price: 199, features: ["Campaigns on WhatsApp, email, SMS and web push", "Drag and drop journeys, with no markup on WhatsApp"] },
];

/* How it works, why switch and the lead pipeline --------------------- */

export const steps = [
  { title: "Answer every enquiry", text: "Replies to visitors in seconds, day or night, in the language they write in." },
  { title: "Ask your questions", text: "Asks what your sales team needs to know, with tap options that answer in one tap." },
  { title: "Collect contact details", text: "Name, company, phone and work email, inside the chat. No separate form page." },
  { title: "Book the call", text: "Offers open times and books the call. The invite lands in their email." },
];

export const beforeAfter = [
  { before: "Button menus that break the moment someone types a real question.", after: "Understands free text, then guides with tap options where they help." },
  { before: "The website chat and WhatsApp ask the same questions twice.", after: "One memory of every lead across your website and WhatsApp." },
  { before: "Leads wait in a sheet until someone follows up by hand.", after: "Details, answers and the booked call reach your team together." },
];

/** Sample leads, not customers. */
export const pipeline = [
  { label: "New", leads: [{ company: "Lumen Freight", need: "Demo request", source: "Meta ad" }, { company: "Oakridge Clinics", need: "Website and SEO", source: "Instagram" }] },
  { label: "Qualifying", leads: [{ company: "Harbor Foods", need: "Bulk quote", source: "WhatsApp" }] },
  { label: "Qualified", leads: [{ company: "Brightline Legal", need: "Managed IT", source: "AI call" }] },
  { label: "Call booked", leads: [{ company: "Northwind Offices", need: "CCTV install", source: "Website chat" }] },
];

/* Comparisons: summaries of yourlio.com/compare, sources read August 2026 */

export const comparisons = [
  {
    slug: "intercom",
    name: "Intercom",
    points: [
      { them: "Billed per seat, from $29 to $132 a seat each month on annual billing.", us: "Unlimited team seats on every AI Agent plan." },
      { them: "AI outcomes from $0.99 each, on top of seats.", us: "AI conversations included in the plan, from 250 for $49 a month." },
      { them: "Pro, Copilot and Proactive Support Plus sold separately.", us: "Add only the suites you need: Social at $49, Marketing at $199." },
    ],
  },
  {
    slug: "manychat",
    name: "Manychat",
    points: [
      { them: "Runs the flows you build, step by step.", us: "You set the questions and the goal; the agent runs the conversation." },
      { them: "AI sold as an add on that answers from pages you load into it.", us: "The AI agent is the product, on every AI Agent plan." },
      { them: "Focused on Instagram, Messenger and WhatsApp automation.", us: "Website chat, WhatsApp, Instagram, Facebook, email and calls in one inbox." },
    ],
  },
  {
    slug: "tidio",
    name: "Tidio",
    points: [
      { them: "Lyro AI is an add on, from $32.50 a month for 50 AI conversations.", us: "AI agent included: 250 conversations for $49 a month." },
      { them: "Flows are another add on on top.", us: "No flow builder needed; the agent runs the conversation." },
      { them: "Self serve plans capped at 10 seats.", us: "Unlimited team seats." },
    ],
  },
];

/* FAQ ----------------------------------------------------------------- */

export const faqs = [
  { q: "What is YourLio for business?", a: "YourLio for business is an AI agent, shared inbox and CRM for businesses that sell through a conversation: a call, a quote, a site visit or an appointment. It answers enquiries on your website, WhatsApp, Instagram and Facebook, asks your qualifying questions, collects contact details and books the call." },
  { q: "Does YourLio work if my website is not on Shopify?", a: "Yes. The same agent that runs on Shopify stores also runs on custom built websites, WooCommerce, Magento and BigCommerce. Our team helps you add it to your site." },
  { q: "Can it ask our own qualifying questions?", a: "Yes. You decide what the agent needs to know before a call, such as team size, budget, location or timeline. It asks with tap options, and visitors can still type freely." },
  { q: "Can visitors book a sales call inside the chat?", a: "Yes. After collecting their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email and can reschedule from it." },
  { q: "Does it work on WhatsApp too?", a: "Yes. Connect your WhatsApp Business number and the same agent answers enquiries there, with the same memory of each lead. You can also send WhatsApp campaigns and let the agent handle the replies." },
  { q: "Does YourLio include a CRM?", a: "Yes. Every lead from chat, calls, WhatsApp, social, ads and email lands in one CRM with their answers and the full conversation, and your team moves it through stages from new to booked." },
  { q: "Do I need to build chatbot or WhatsApp flows?", a: "No. There are no flow trees to draw. You set the questions and the goal, such as a booked call or a quote request, and the agent runs the conversation, using tap options and forms where they make answering faster." },
  { q: "Can my sales team take over a conversation?", a: "Yes. Every conversation sits in the shared inbox, so a rep can step in at any point. Visitors can also ask to talk to a person, and the AI hands off with a reason." },
  { q: "Which languages does it support?", a: "Visitors can write in their own language and the agent replies in it. Test your customers' languages and terms with real questions during setup." },
  { q: "How much does YourLio cost?", a: "AI Agent plans start at $49 a month for 250 AI conversations, with Growth at $119, Pro at $249 and Scale at $399. AI CRM & Helpdesk is one flat price for the whole team, quoted on a call. Prices are in USD." },
  { q: "Do you charge per seat?", a: "No. Every AI Agent plan includes unlimited team seats, so your whole team can use the shared inbox and step into chats." },
  { q: "Are WhatsApp and calling charges included?", a: "No. Meta messaging fees and carrier calling charges are separate. For WhatsApp you pay Meta directly, with no YourLio markup." },
  { q: "How does YourLio handle my data?", a: "YourLio uses your connected business information and conversations to answer enquiries. Read the Security and Privacy pages on yourlio.com and contact us with specific data handling, retention or security requirements." },
];
