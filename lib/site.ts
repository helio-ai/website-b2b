// Site-wide settings and navigation. Edit labels and links here; the header,
// mobile menu and footer all render from this file.

export const BRAND = "YourBrand";
export const APP_LOGIN_URL = "#login";
export const APP_SIGNUP_URL = "#signup";

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
      { label: "Success Stories", href: "/customers", icon: "Award" },
      { label: "Mobile App", href: "/mobile-app", icon: "Smartphone" },
      { label: "WhatsApp Business Calling API", href: "/whatsapp-business-calling-api", icon: "Phone" },
    ],
  },
];

export const industryMenu: {
  label: string;
  icon: string;
  links: NavLink[];
  storyHref: string;
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
    storyHref: "/customers/customer-story-01",
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
    storyHref: "/customers/customer-story-02",
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
    storyHref: "/customers/customer-story-03",
  },
  {
    label: "Professional Services",
    icon: "Briefcase",
    links: [
      { label: "Overview", href: "/industry/professional-services" },
      { label: "Home Cleaning & Maid Services", href: "/industry/home-cleaning-maid-services" },
      { label: "Photography & Videography", href: "/industry/photography-videography" },
    ],
    storyHref: "/customers/customer-story-04",
  },
  {
    label: "Automotive",
    icon: "Car",
    links: [
      { label: "Overview", href: "/industry/automotive" },
      { label: "Auto Part Retailer", href: "/industry/auto-part-retailer" },
      { label: "Car Dealership", href: "/industry/car-dealership" },
    ],
    storyHref: "/customers/customer-story-05",
  },
  {
    label: "Travel",
    icon: "Plane",
    links: [
      { label: "Overview", href: "/industry/travel" },
      { label: "Travel Agency & Tour Operator", href: "/industry/travel-agency-tour-operator" },
    ],
    storyHref: "/customers/customer-story-06",
  },
];

export const resourcesMenu: { title: string; links: NavLink[] }[] = [
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact", description: "Reach the team on any channel", icon: "LifeBuoy" },
      { label: "Help Center", href: "/help", description: "Setup guides and how-tos", icon: "BookOpen" },
      { label: "Video Guides", href: "/video-tutorials", description: "Short walkthrough videos", icon: "Video" },
      { label: "Blog", href: "/blog", description: "Tips, news and product updates", icon: "Newspaper" },
      { label: "Developer Hub", href: "#developers", description: "API reference and docs", icon: "Code2" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { label: "WhatsApp Pricing Calculator", href: "/whatsapp-pricing-calculator", description: "Estimate messaging and calling costs", icon: "Calculator" },
      { label: "WhatsApp Link Generator", href: "/whatsapp-link-generator", description: "Create a click-to-chat link", icon: "Link" },
      { label: "WhatsApp QR Generator", href: "/whatsapp-qr-code-generator", description: "Create a scannable chat QR code", icon: "QrCode" },
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
      { label: "Roadmap", href: "#roadmap" },
      { label: "Partner Program", href: "/reseller" },
      { label: "Partner Directory", href: "/partner-directory" },
      { label: "Refer & Earn", href: "/referral" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact Us", href: "/contact" },
      { label: "Status", href: "#status" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: `${BRAND} vs Competitors`, href: "/alternatives" },
      { label: `${BRAND} vs SleekFlow`, href: "/alternatives/sleekflow" },
      { label: `${BRAND} vs Wati`, href: "/alternatives/wati" },
      { label: `${BRAND} vs Trengo`, href: "/alternatives/trengo" },
      { label: `${BRAND} vs Intercom`, href: "/alternatives/intercom" },
      { label: `${BRAND} vs Manychat`, href: "/alternatives/manychat" },
    ],
  },
  {
    title: "WhatsApp",
    links: [
      { label: "WhatsApp Business API", href: "/whatsapp-business-api" },
      { label: "WhatsApp Business Calling API", href: "/whatsapp-business-calling-api" },
      { label: "WhatsApp API Calling Pricing", href: "/whatsapp-api-calling-pricing" },
      { label: "WhatsApp Business Multiple Users", href: "/whatsapp-business-multiple-users" },
      { label: "WhatsApp Bulk Message", href: "/whatsapp-bulk-message" },
      { label: "WhatsApp CRM Integration", href: "/whatsapp-crm-integration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Legal Notice", href: "/legal-notice" },
      { label: "Our Subprocessors", href: "/subprocessors" },
      { label: "Data Protection Addendum", href: "/data-processing-agreement" },
      { label: "Security", href: "/security" },
    ],
  },
];
