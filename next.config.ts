import type { NextConfig } from "next";

const MAIN = "https://yourlio.com";

// business.yourlio.com is one landing page. Every other URL either jumps to
// the matching section of that page or goes to the page on yourlio.com.
const toSection: Record<string, string> = {
  pricing: "pricing",
  demo: "demo",
  faqs: "faq",
  "why-choose-us": "how-it-works",
  "omnichannel-ai-crm-conversation-platform": "how-it-works",
  "capture-leads-from-ads": "capture",
  "capture-leads": "capture",
  "capture-facebook-leads": "capture",
  "capture-instagram-leads": "capture",
  "capture-tiktok-leads": "capture",
  "capture-website-leads": "capture",
  "capture-offline-leads": "capture",
  "ai-agents": "convert",
  "ai-agents-for-lead-qualification": "convert",
  "lead-qualification": "convert",
  "lead-distribution": "convert",
  "book-a-meeting": "convert",
  "team-inbox": "inbox",
  "mobile-app": "inbox",
  "conversational-support": "inbox",
  "whatsapp-crm-integration": "inbox",
  "send-promotions-and-newsletters": "retain",
  "send-renewal-reminders": "retain",
  surveys: "retain",
  "whatsapp-business-api": "whatsapp",
  "whatsapp-business-calling-api": "whatsapp",
  "whatsapp-api-calling-pricing": "pricing",
  "whatsapp-business-multiple-users": "whatsapp",
  "whatsapp-bulk-message": "whatsapp",
  "whatsapp-pricing-calculator": "pricing",
  "whatsapp-link-generator": "capture",
  "whatsapp-qr-code-generator": "capture",
};

const toMain: Record<string, string> = {
  about: "/about",
  careers: "/about",
  press: "/about",
  contact: "/contact",
  blog: "/blog",
  reseller: "/affiliate",
  referral: "/affiliate",
  "partner-directory": "/affiliate",
  "partner-story-01": "/affiliate",
  "partner-story-02": "/affiliate",
  integrations: "/integrations",
  alternatives: "/compare",
  customers: "/case-studies",
  "privacy-policy": "/privacy",
  "cookie-policy": "/privacy",
  "data-processing-agreement": "/privacy",
  subprocessors: "/privacy",
  "legal-notice": "/terms",
  "terms-of-service": "/terms",
  security: "/security",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      ...Object.entries(toSection).map(([from, id]) => ({ source: `/${from}`, destination: `/#${id}`, permanent: true })),
      ...Object.entries(toMain).map(([from, to]) => ({ source: `/${from}`, destination: `${MAIN}${to}`, permanent: true })),
      // Sub pages: comparisons, case studies and integrations live on yourlio.com.
      { source: "/alternatives/:slug", destination: `${MAIN}/compare/:slug`, permanent: true },
      { source: "/customers/:slug", destination: `${MAIN}/case-studies/:slug`, permanent: true },
      { source: "/integrations/:slug", destination: `${MAIN}/integrations`, permanent: true },
      { source: "/industry/:slug", destination: "/#industries", permanent: true },
      { source: "/industries/:slug", destination: "/#industries", permanent: true },
      { source: "/faqs/:slug", destination: "/#faq", permanent: true },
      { source: "/help", destination: "https://docs.yourlio.ai", permanent: false },
      { source: "/video-tutorials", destination: "https://www.youtube.com/channel/UCF51KsPoGQVpodZRmTyMqfw", permanent: false },
    ];
  },
};

export default nextConfig;
