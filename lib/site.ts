// Site settings and navigation for YourLio for business
// (business.yourlio.com). The site is one landing page; company, legal,
// blog, comparison and case study pages live on yourlio.com.

export const BRAND = "YourLio";
export const SITE_URL = "https://business.yourlio.com";
export const MAIN_SITE = "https://yourlio.com";
export const DOCS_URL = "https://docs.yourlio.ai";
export const CONTACT_EMAIL = "prakash@helioai.tech";
export const APP_LOGIN_URL = "https://app.helioai.tech/login";
export const APP_SIGNUP_URL = "https://app.helioai.tech/signup";
export const SHOPIFY_REVIEWS_URL = "https://apps.shopify.com/helio-ai/reviews";

// Demo booking on Cal.com, embedded in the page's #demo section.
export const DEMO_URL = "https://cal.com/prakash-singh-vcyfti/demo-request-yourlioai";

export const MAIN_LINKS = {
  about: `${MAIN_SITE}/about`,
  privacy: `${MAIN_SITE}/privacy`,
  terms: `${MAIN_SITE}/terms`,
  security: `${MAIN_SITE}/security`,
  blog: `${MAIN_SITE}/blog`,
  affiliate: `${MAIN_SITE}/affiliate`,
  compare: `${MAIN_SITE}/compare`,
  caseStudies: `${MAIN_SITE}/case-studies`,
  contact: `${MAIN_SITE}/contact`,
  integrations: `${MAIN_SITE}/integrations`,
};

export type NavLink = { label: string; href: string; description?: string; icon?: string };

// The site is one landing page: navigation jumps to its sections.
export const navLinks: NavLink[] = [
  { label: "Product", href: "/#capture" },
  { label: "Industries", href: "/#industries" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Customers", href: "/#customers" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Capture leads", href: "/#capture" },
      { label: "Qualify and book", href: "/#convert" },
      { label: "Inbox and CRM", href: "/#inbox" },
      { label: "Campaigns and follow ups", href: "/#retain" },
      { label: "WhatsApp and calling", href: "/#whatsapp" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/#industries" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Customers", href: "/#customers" },
      { label: "Book a demo", href: "/#demo" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: MAIN_LINKS.contact },
      { label: "About YourLio", href: MAIN_LINKS.about },
      { label: "Customer stories", href: MAIN_LINKS.caseStudies },
      { label: "Compare YourLio", href: MAIN_LINKS.compare },
      { label: "Blog", href: MAIN_LINKS.blog },
      { label: "Help Center", href: DOCS_URL },
      { label: "Affiliate program", href: MAIN_LINKS.affiliate },
      { label: "YourLio for Shopify", href: MAIN_SITE },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: MAIN_LINKS.privacy },
      { label: "Terms of Service", href: MAIN_LINKS.terms },
      { label: "Security", href: MAIN_LINKS.security },
    ],
  },
];
