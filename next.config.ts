import type { NextConfig } from "next";

const MAIN = "https://yourlio.com";

// business.yourlio.com is one landing page. Every other URL either jumps to
// the matching section of that page or goes to the page on yourlio.com.
const toSection: Record<string, string> = {
  demo: "demo",
  faqs: "faq",
  "why-choose-us": "product",
  "omnichannel-ai-crm-conversation-platform": "how-it-works",
  "capture-leads-from-ads": "product",
  "capture-leads": "product",
  "capture-facebook-leads": "product",
  "capture-instagram-leads": "product",
  "capture-tiktok-leads": "product",
  "capture-website-leads": "product",
  "capture-offline-leads": "product",
  "ai-agents": "product",
  "ai-agents-for-lead-qualification": "product",
  "lead-qualification": "product",
  "lead-distribution": "product",
  "book-a-meeting": "product",
  "team-inbox": "product",
  "mobile-app": "product",
  "conversational-support": "product",
  "whatsapp-crm-integration": "product",
  "send-promotions-and-newsletters": "product",
  "send-renewal-reminders": "product",
  surveys: "product",
  "whatsapp-business-api": "product",
  "whatsapp-business-calling-api": "product",
  "whatsapp-business-multiple-users": "product",
  "whatsapp-bulk-message": "product",
  "whatsapp-link-generator": "product",
  "whatsapp-qr-code-generator": "product",
};

const toMain: Record<string, string> = {
  pricing: "/pricing",
  "whatsapp-api-calling-pricing": "/pricing",
  "whatsapp-pricing-calculator": "/pricing",
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
