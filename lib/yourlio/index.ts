// YourLio's own facts and data for the landing page, from yourlio.com
// (website-v2) and the earlier business.yourlio.com site. Nothing here is
// invented for this site.
import { INTEGRATIONS, type Integration } from "./integrations";

export type { Integration };

/* Case studies: the slider is in ./stories.ts, full stories on yourlio.com */

export const CASE_STUDIES_URL = "https://yourlio.com/case-studies";
export const caseStudyUrl = (slug: string) => `${CASE_STUDIES_URL}/${slug}`;

/* Integrations ------------------------------------------------------- */

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

/* How it works ------------------------------------------------------- */

export const steps = [
  { title: "Answer every enquiry", text: "Replies to visitors in seconds, day or night, in the language they write in." },
  { title: "Ask your questions", text: "Asks what your sales team needs to know, with tap options that answer in one tap." },
  { title: "Collect contact details", text: "Name, company, phone and work email, inside the chat. No separate form page." },
  { title: "Book the call", text: "Offers open times and books the call. The invite lands in their email." },
];

/* FAQ ----------------------------------------------------------------- */

export const faqs = [
  { q: "What is YourLio for business?", a: "YourLio for business is an AI agent, shared inbox and CRM for businesses that sell through a conversation: a call, a quote, a site visit or an appointment. It answers enquiries on your website, WhatsApp, Instagram and Facebook, asks your qualifying questions, collects contact details and books the call." },
  { q: "Does YourLio work if my website is not on Shopify?", a: "Yes. The same agent that runs on Shopify stores also runs on custom built websites, WooCommerce, Magento and BigCommerce. Our team helps you add it to your site." },
  { q: "Can visitors book a sales call inside the chat?", a: "Yes. After collecting their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email and can reschedule from it." },
  { q: "Does it work on WhatsApp too?", a: "Yes. Connect your WhatsApp Business number and the same agent answers enquiries there, with the same memory of each lead. You can also send WhatsApp campaigns and let the agent handle the replies." },
  { q: "Can my sales team take over a conversation?", a: "Yes. Every conversation sits in the shared inbox, so a rep can step in at any point. Visitors can also ask to talk to a person, and the AI hands off with a reason." },
  { q: "Are WhatsApp and calling charges included?", a: "No. Meta messaging fees and carrier calling charges are separate. For WhatsApp you pay Meta directly, with no YourLio markup." },
];
