// Site-wide settings and navigation for YourLio for business
// (business.yourlio.com). The header, mobile menu and footer all render from
// this file. Company, legal and ecommerce pages live on yourlio.com.

export const BRAND = "YourLio";
export const SITE_URL = "https://business.yourlio.com";
export const MAIN_SITE = "https://yourlio.com";
export const DOCS_URL = "https://docs.yourlio.ai";
export const CONTACT_EMAIL = "prakash@helioai.tech";
export const APP_LOGIN_URL = "https://app.helioai.tech";
export const SHOPIFY_APP_URL = "https://apps.shopify.com/helio-ai";
export const SHOPIFY_REVIEWS_URL = "https://apps.shopify.com/helio-ai/reviews";

// Demo booking: Cal.com. The /demo page embeds it; this is the direct link.
export const DEMO_URL = "https://cal.com/prakash-singh-vcyfti/demo-request-yourlioai";
export const PARTNER_BOOK_URL = "https://cal.com/prakash-singh-vcyfti/yourlio-partner-program";

export const MAIN_LINKS = {
  shopify: MAIN_SITE,
  about: `${MAIN_SITE}/about`,
  privacy: `${MAIN_SITE}/privacy`,
  terms: `${MAIN_SITE}/terms`,
  security: `${MAIN_SITE}/security`,
  blog: `${MAIN_SITE}/blog`,
  affiliate: `${MAIN_SITE}/affiliate`,
  compare: `${MAIN_SITE}/compare`,
  caseStudies: `${MAIN_SITE}/case-studies`,
};

export type NavLink = { label: string; href: string; description?: string; icon?: string };

export const productMenu: { title: string; links: NavLink[] }[] = [
  {
    title: "Capture",
    links: [
      { label: "Leads from Meta ads", href: "/capture-leads-from-ads", icon: "Target" },
      { label: "Instagram and Facebook", href: "/capture-leads", icon: "Users" },
      { label: "Website chat and popups", href: "/capture-website-leads", icon: "Globe" },
      { label: "Offline: QR codes and links", href: "/capture-offline-leads", icon: "QrCode" },
    ],
  },
  {
    title: "Convert",
    links: [
      { label: "AI Agents", href: "/ai-agents", icon: "Sparkles" },
      { label: "Team Inbox", href: "/team-inbox", icon: "Inbox" },
      { label: "Qualify Leads", href: "/lead-qualification", icon: "Filter" },
      { label: "Route Leads", href: "/lead-distribution", icon: "Route" },
      { label: "Book Appointments", href: "/book-a-meeting", icon: "Calendar" },
    ],
  },
  {
    title: "Retain",
    links: [
      { label: "Conversational Support", href: "/conversational-support", icon: "Headphones" },
      { label: "Campaigns and Newsletters", href: "/send-promotions-and-newsletters", icon: "Megaphone" },
      { label: "Follow ups and Reminders", href: "/send-renewal-reminders", icon: "Bell" },
      { label: "Feedback Requests", href: "/surveys", icon: "ClipboardCheck" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "What is YourLio for business?", href: "/omnichannel-ai-crm-conversation-platform", icon: "Layers" },
      { label: "Customer Stories", href: "/customers", icon: "Award" },
      { label: "AI Calls and WhatsApp Calling", href: "/whatsapp-business-calling-api", icon: "Phone" },
      { label: "WhatsApp Business API", href: "/whatsapp-business-api", icon: "MessageCircle" },
    ],
  },
];

export const industryMenu: {
  label: string;
  icon: string;
  links: NavLink[];
  storySlug?: string;
}[] = [
  {
    label: "B2B",
    icon: "Building2",
    links: [
      { label: "Security and AV", href: "/industry/security-and-av" },
      { label: "IT services", href: "/industry/it-services" },
      { label: "Software and SaaS", href: "/industry/software-and-saas" },
      { label: "Manufacturing and wholesale", href: "/industry/manufacturing-and-wholesale" },
      { label: "Agencies and consulting", href: "/industry/agencies-and-consulting" },
      { label: "Real estate", href: "/industry/real-estate" },
      { label: "Events and webinars", href: "/industry/events-and-webinars" },
      { label: "Finance and insurance", href: "/industry/finance-and-insurance" },
    ],
    storySlug: "deodap",
  },
  {
    label: "Retail",
    icon: "Store",
    links: [
      { label: "Overview", href: "/industry/retail" },
      { label: "Electronics", href: "/industry/electronics" },
      { label: "Fashion & Apparel", href: "/industry/fashion-apparel" },
      { label: "Furniture", href: "/industry/furniture" },
      { label: "Jewelry and Watches", href: "/industry/jewelry" },
    ],
    storySlug: "sylvi-watches",
  },
  {
    label: "Education",
    icon: "GraduationCap",
    links: [
      { label: "Overview", href: "/industry/education" },
      { label: "Academic Tutoring", href: "/industry/academic-tutoring" },
      { label: "Afterschool Activities", href: "/industry/afterschool-activities" },
      { label: "Sport & Fitness", href: "/industry/sports-fitness" },
    ],
  },
  {
    label: "Healthcare",
    icon: "Stethoscope",
    links: [
      { label: "Overview", href: "/industry/healthcare" },
      { label: "Beauty Center", href: "/industry/beauty-center" },
      { label: "Dental Clinic", href: "/industry/dental-clinic" },
      { label: "Medical Clinic", href: "/industry/medical-clinic" },
    ],
    storySlug: "cureayu",
  },
  {
    label: "Professional Services",
    icon: "Briefcase",
    links: [
      { label: "Overview", href: "/industry/professional-services" },
      { label: "Home Cleaning & Maid Services", href: "/industry/home-cleaning-maid-services" },
      { label: "Photography & Videography", href: "/industry/photography-videography" },
    ],
    storySlug: "yourspex",
  },
  {
    label: "Automotive",
    icon: "Car",
    links: [
      { label: "Overview", href: "/industry/automotive" },
      { label: "Auto Part Retailer", href: "/industry/auto-part-retailer" },
      { label: "Car Dealership", href: "/industry/car-dealership" },
    ],
  },
  {
    label: "Travel",
    icon: "Plane",
    links: [
      { label: "Overview", href: "/industry/travel" },
      { label: "Travel Agency & Tour Operator", href: "/industry/travel-agency-tour-operator" },
    ],
  },
];

export const resourcesMenu: { title: string; links: NavLink[] }[] = [
  {
    title: "Learn",
    links: [
      { label: "Contact Us", href: "/contact", description: "Talk to the YourLio team", icon: "LifeBuoy" },
      { label: "Help Center", href: DOCS_URL, description: "Setup guides and how-tos", icon: "BookOpen" },
      { label: "FAQs", href: "/faqs", description: "Answers for B2B teams", icon: "MessagesSquare" },
      { label: "Blog", href: MAIN_LINKS.blog, description: "Guides from the YourLio team", icon: "Newspaper" },
      { label: "Integrations", href: "/integrations", description: "Channels, CRM and the tools you use", icon: "Plug" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "Conversation Cost Calculator", href: "/whatsapp-pricing-calculator", description: "Estimate your YourLio plan", icon: "Calculator" },
      { label: "WhatsApp Link Generator", href: "/whatsapp-link-generator", description: "Create a click to chat link", icon: "Link" },
      { label: "WhatsApp QR Generator", href: "/whatsapp-qr-code-generator", description: "Create a scannable chat QR code", icon: "QrCode" },
    ],
  },
];

export const topLinks: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Why YourLio", href: "/why-choose-us" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Customer Stories", href: "/customers" },
      { label: "FAQs", href: "/faqs" },
      { label: "Partner Program", href: "/reseller" },
      { label: "Refer & Earn", href: "/referral" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact Us", href: "/contact" },
      { label: "YourLio for Shopify", href: MAIN_SITE },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "YourLio vs Competitors", href: "/alternatives" },
      { label: "YourLio vs Intercom", href: "/alternatives/intercom" },
      { label: "YourLio vs Manychat", href: "/alternatives/manychat" },
      { label: "YourLio vs Tidio", href: "/alternatives/tidio" },
    ],
  },
  {
    title: "WhatsApp",
    links: [
      { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
      { label: "WhatsApp and AI Calling", href: "/whatsapp-business-calling-api" },
      { label: "WhatsApp Business Multiple Users", href: "/whatsapp-business-multiple-users" },
      { label: "WhatsApp Bulk Message", href: "/whatsapp-bulk-message" },
      { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
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
