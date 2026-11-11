// Route data for every page. Copy lives in lib/copy/*, facts in lib/yourlio.
import { FEATURE_COPY, type FeatureCopy } from "./copy/features";
import { INDUSTRY_COPY, type IndustryCopy } from "./copy/industries";
import { b2bFaqs, caseStudies } from "./yourlio";
import { BRAND } from "./site";

export type { FeatureCopy, IndustryCopy };

/* ------------------------------------------------------------------ */
/* Product, solution and WhatsApp pages                                 */
/* ------------------------------------------------------------------ */

export const featurePages: Record<string, FeatureCopy> = FEATURE_COPY;

/* ------------------------------------------------------------------ */
/* Industries                                                           */
/* ------------------------------------------------------------------ */

export const industries: IndustryCopy[] = INDUSTRY_COPY;
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

/* ------------------------------------------------------------------ */
/* FAQ library: one page per question at /faqs/<slug>                   */
/* ------------------------------------------------------------------ */

export type Faq = { slug: string; question: string; answer: string; topic: string; source?: { label: string; href: string } };

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");

function buildFaqs(): Faq[] {
  const out: Faq[] = [];
  const seen = new Set<string>();
  const add = (question: string, answer: string, topic: string, source?: Faq["source"]) => {
    const slug = slugify(question);
    if (seen.has(slug)) return;
    seen.add(slug);
    out.push({ slug, question, answer, topic, source });
  };
  for (const f of b2bFaqs) add(f.q, f.a, "Getting started");
  for (const [slug, page] of Object.entries(featurePages)) {
    for (const f of page.faqs) add(f.q, f.a, page.eyebrow === "Why us" ? "Getting started" : page.eyebrow, { label: page.title, href: `/${slug}` });
  }
  for (const ind of industries) {
    for (const f of ind.faqs) add(f.q, f.a, "Industries", { label: ind.name, href: `/industry/${ind.slug}` });
  }
  return out;
}

export const faqs: Faq[] = buildFaqs();
export const faqTopics = [...new Set(faqs.map((f) => f.topic))];

/* ------------------------------------------------------------------ */
/* Comparison pages                                                     */
/* ------------------------------------------------------------------ */

// Summaries of YourLio's published comparisons (yourlio.com/compare), with the
// date their sources were read. The full comparison, with source links, lives
// on yourlio.com.
export const alternatives = [
  {
    slug: "intercom",
    name: "Intercom",
    checked: "August 2026",
    verdict: `Intercom is a mature support platform priced per seat, with AI outcomes billed on top. ${BRAND} is priced by AI conversations with unlimited team seats, and the agent is built to qualify leads and book calls as well as answer questions.`,
    points: [
      { them: "Billed per seat, from $29 to $132 a seat each month on annual billing.", us: "Unlimited team seats on every AI Agent plan." },
      { them: "AI outcomes from $0.99 each, on top of seats.", us: "AI conversations included in the plan, from 250 for $49 a month." },
      { them: "Pro, Copilot and Proactive Support Plus sold separately.", us: "Add only the suites you need: Social at $49, Marketing at $199." },
    ],
    chooseThem: ["You run a large support desk built around tickets and seats", "You need Intercom's help center and in product messaging", "Most of your conversations are with existing users, not new leads"],
    chooseUs: ["Most of your enquiries are new leads to qualify and book", "You sell over WhatsApp, Instagram and Facebook as well as your website", "You want one memory of each lead across every channel and calls"],
  },
  {
    slug: "manychat",
    name: "Manychat",
    checked: "August 2026",
    verdict: `Manychat is very good at comment to DM flows that you build by hand. ${BRAND} covers the same Instagram and Facebook surfaces with an AI agent that runs the conversation, asks your qualifying questions and books the call, with no flow trees to draw.`,
    points: [
      { them: "Runs the flows you build, step by step.", us: "You set the questions and the goal; the agent runs the conversation." },
      { them: "AI sold as an add on that answers from pages you load into it.", us: "The AI agent is the product, on every AI Agent plan." },
      { them: "Focused on Instagram, Messenger and WhatsApp automation.", us: "Website chat, WhatsApp, Instagram, Facebook, email and calls in one inbox." },
    ],
    chooseThem: ["You mainly need comment to DM giveaways and simple keyword flows", "Your team enjoys designing flows by hand", "You do not need a shared inbox or CRM"],
    chooseUs: ["Enquiries need real answers and qualifying questions", "You want leads from comments, DMs and ads in one CRM", "Your team needs to step in from one shared inbox"],
  },
  {
    slug: "tidio",
    name: "Tidio",
    checked: "August 2026",
    verdict: `Tidio is live chat that sells its Lyro AI as a separate add on. ${BRAND} includes the AI agent in every plan, with no seat cap, and adds WhatsApp, Instagram, Facebook and calls to the same memory of each lead.`,
    points: [
      { them: "Lyro AI is an add on, from $32.50 a month for 50 AI conversations.", us: "AI agent included: 250 conversations for $49 a month." },
      { them: "Flows are another add on on top.", us: "No flow builder needed; the agent runs the conversation." },
      { them: "Self serve plans capped at 10 seats.", us: "Unlimited team seats." },
    ],
    chooseThem: ["You want a simple live chat widget at a small starting budget", "Your team answers most chats by hand", "You do not need WhatsApp or calls in the same inbox"],
    chooseUs: ["You want the AI to qualify leads and book calls", "Enquiries arrive on WhatsApp and social as well as your website", "You need one CRM with stages from new to booked"],
  },
];

export const getAlternative = (slug: string) => alternatives.find((a) => a.slug === slug);

/* ------------------------------------------------------------------ */
/* Customer stories                                                     */
/* ------------------------------------------------------------------ */

export const customers = caseStudies;
export const storyIndustries = [...new Set(caseStudies.flatMap((c) => c.channels))];
