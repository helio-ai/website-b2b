// Site-wide settings and navigation for YourLio for business
// (business.yourlio.com). The header, mobile menu and footer all render from
// this file. Menu labels and layout follow the original template; company,
// legal and ecommerce pages live on yourlio.com.

export const BRAND = "YourLio";
export const SITE_URL = "https://business.yourlio.com";
export const MAIN_SITE = "https://yourlio.com";
export const DOCS_URL = "https://docs.yourlio.ai";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCF51KsPoGQVpodZRmTyMqfw";
export const CONTACT_EMAIL = "prakash@helioai.tech";
export const APP_LOGIN_URL = "https://app.helioai.tech/login";
export const APP_SIGNUP_URL = "https://app.helioai.tech/signup";
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
      { label: "Capture from Ads", href: "/capture-leads-from-ads", icon: "Target" },
      { label: "Capture from Social", href: "/capture-leads", icon: "Users" },
      { label: "Capture from Website", href: "/capture-website-leads", icon: "Globe" },
      { label: "Capture from Offline", href: "/capture-offline-leads", icon: "Store" },
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
      { label: "Promotions and Newsletters", href: "/send-promotions-and-newsletters", icon: "Megaphone" },
      { label: "Renewal Reminders", href: "/send-renewal-reminders", icon: "Bell" },
      { label: "CSAT or NPS Surveys", href: "/surveys", icon: "ClipboardCheck" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: `What is ${BRAND}?`, href: "/omnichannel-ai-crm-conversation-platform", icon: "Layers" },
      { label: "Success Stories", href: MAIN_LINKS.caseStudies, icon: "Award" },
      { label: "WhatsApp Business Calling API", href: "/whatsapp-business-calling-api", icon: "Phone" },
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
    storySlug: "bluetea",
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
    storySlug: "deodap",
  },
  {
    label: "Travel",
    icon: "Plane",
    links: [
      { label: "Overview", href: "/industry/travel" },
      { label: "Travel Agency & Tour Operator", href: "/industry/travel-agency-tour-operator" },
    ],
    storySlug: "soulflower",
  },
];

export const resourcesMenu: { title: string; links: NavLink[] }[] = [
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact", description: "We're here to help with human and AI support", icon: "LifeBuoy" },
      { label: "Help Center", href: DOCS_URL, description: "Step-by-step guides to set up and use YourLio", icon: "BookOpen" },
      { label: "Video Guides", href: YOUTUBE_URL, description: "Short walkthroughs from the YourLio team", icon: "Video" },
      { label: "Blog", href: MAIN_LINKS.blog, description: "Practical guides to grow with conversations", icon: "Newspaper" },
      { label: "Developer Hub", href: DOCS_URL, description: "Guides and documentation for developers", icon: "Code2" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "WhatsApp Pricing Calculator", href: "/whatsapp-pricing-calculator", description: "Estimate your messaging costs", icon: "Calculator" },
      { label: "WhatsApp Link Generator", href: "/whatsapp-link-generator", description: "Create a WhatsApp link instantly", icon: "Link" },
      { label: "WhatsApp QR Generator", href: "/whatsapp-qr-code-generator", description: "Create a WhatsApp QR code", icon: "QrCode" },
    ],
  },
];

export const topLinks: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Why Us", href: "/why-choose-us" },
];

export const languages = [
  "English", "Spanish", "Arabic", "Chinese (Simplified)", "Chinese (Traditional)", "French",
  "German", "Bahasa Indonesia", "Italian", "Portuguese", "Russian", "Thai", "Vietnamese",
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "FAQs", href: "/faqs" },
      { label: "About Us", href: "/about" },
      { label: "Partner Program", href: "/reseller" },
      { label: "Partner Directory", href: "/reseller" },
      { label: "Refer & Earn", href: "/referral" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: `${BRAND} vs Competitors`, href: "/alternatives" },
      { label: `${BRAND} vs Intercom`, href: "/alternatives/intercom" },
      { label: `${BRAND} vs Manychat`, href: "/alternatives/manychat" },
      { label: `${BRAND} vs Tidio`, href: "/alternatives/tidio" },
    ],
  },
  {
    title: "WhatsApp",
    links: [
      { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
      { label: "WhatsApp Business Calling API", href: "/whatsapp-business-calling-api" },
      { label: "WhatsApp API Calling Pricing", href: "/pricing" },
      { label: "WhatsApp Business Multiple Users", href: "/whatsapp-business-multiple-users" },
      { label: "WhatsApp Bulk Message", href: "/whatsapp-bulk-message" },
      { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: MAIN_LINKS.privacy },
      { label: "Cookie Policy", href: MAIN_LINKS.privacy },
      { label: "Terms of Service", href: MAIN_LINKS.terms },
      { label: "Legal Notice", href: MAIN_LINKS.terms },
      { label: "Our Subprocessors", href: MAIN_LINKS.privacy },
      { label: "Data Protection Addendum", href: MAIN_LINKS.privacy },
      { label: "Security", href: MAIN_LINKS.security },
    ],
  },
];
