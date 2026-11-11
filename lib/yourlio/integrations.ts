// Integrations from yourlio.com (website-v2 src/data/integrations.js), with
// Shopify-only commerce apps left out.
export type Integration = { slug: string; name: string; category: string; logo: string | null };

export const INTEGRATIONS: Integration[] = [
  {
    slug: "klaviyo",
    name: "Klaviyo",
    category: "Marketing",
    logo: "/integrations/klaviyo.webp"
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    logo: "/integrations/hubspot.svg"
  },
  {
    slug: "attentive",
    name: "Attentive",
    category: "Marketing",
    logo: "/integrations/attentive.webp"
  },
  {
    slug: "sendgrid",
    name: "SendGrid",
    category: "Communication",
    logo: "https://cdn.brandfetch.io/idHHcfw5Qu/w/400/h/400/theme/light/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
  },
  {
    slug: "mailgun",
    name: "Mailgun",
    category: "Communication",
    logo: "https://storage.googleapis.com/helio_ai/helio_assets/integration_services/mailgun_logo_512.png"
  },
  {
    slug: "gmail",
    name: "Gmail",
    category: "Communication",
    logo: "https://images.seeklogo.com/logo-png/38/2/gmail-new-2020-logo-png_seeklogo-389043.png"
  },
  {
    slug: "outlook",
    name: "Outlook",
    category: "Communication",
    logo: "https://img.icons8.com/color/512/microsoft-outlook-2019.png"
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    category: "Communication",
    logo: null
  },
  {
    slug: "instagram",
    name: "Instagram",
    category: "Social",
    logo: null
  },
  {
    slug: "messenger",
    name: "Messenger",
    category: "Social",
    logo: null
  },
  {
    slug: "instagram-ads",
    name: "Instagram Ads",
    category: "Social",
    logo: null
  },
  {
    slug: "amazon-ses",
    name: "Amazon SES",
    category: "Communication",
    logo: null
  },
  {
    slug: "infobip",
    name: "Infobip",
    category: "Communication",
    logo: null
  },
  {
    slug: "sms",
    name: "SMS",
    category: "Communication",
    logo: null
  },
  {
    slug: "rcs",
    name: "RCS",
    category: "Communication",
    logo: null
  },
  {
    slug: "web-push",
    name: "Web Push",
    category: "Communication",
    logo: null
  },
  {
    slug: "zoho",
    name: "Zoho Desk",
    category: "Customer support",
    logo: "https://storage.googleapis.com/helio_ai/helio_assets/integration_services/zoho-logo-web.svg"
  },
  {
    slug: "webengage",
    name: "WebEngage WSP",
    category: "Marketing",
    logo: "https://cdn.shopify.com/app-store/listing_images/76338e232fc148805824efd630d1be86/icon/CM7Zs9SYpvkCEAE=.png"
  },
  {
    slug: "razorpay",
    name: "Razorpay",
    category: "Checkout",
    logo: "https://storage.googleapis.com/helio_ai/helio_assets/integration_services/razorpay.png"
  },
  {
    slug: "knowlarity",
    name: "Knowlarity",
    category: "Communication",
    logo: null
  },
  {
    slug: "msg91",
    name: "MSG91",
    category: "Communication",
    logo: null
  }
];
