import type { NextConfig } from "next";

const MAIN = "https://yourlio.com";

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
      // Legal and company pages live on yourlio.com, where they are maintained.
      { source: "/privacy-policy", destination: `${MAIN}/privacy`, permanent: true },
      { source: "/cookie-policy", destination: `${MAIN}/privacy`, permanent: true },
      { source: "/data-processing-agreement", destination: `${MAIN}/privacy`, permanent: true },
      { source: "/subprocessors", destination: `${MAIN}/privacy`, permanent: true },
      { source: "/legal-notice", destination: `${MAIN}/terms`, permanent: true },
      { source: "/terms-of-service", destination: `${MAIN}/terms`, permanent: true },
      { source: "/security", destination: `${MAIN}/security`, permanent: true },
      { source: "/blog", destination: `${MAIN}/blog`, permanent: false },
      { source: "/help", destination: "https://docs.yourlio.ai", permanent: false },
      { source: "/video-tutorials", destination: "https://www.youtube.com/channel/UCF51KsPoGQVpodZRmTyMqfw", permanent: false },
      // Template pages for things YourLio does not offer point to the closest real page.
      { source: "/capture-tiktok-leads", destination: "/capture-leads", permanent: false },
      { source: "/mobile-app", destination: "/team-inbox", permanent: false },
      { source: "/whatsapp-api-calling-pricing", destination: "/pricing", permanent: false },
      { source: "/partner-story-01", destination: "/reseller", permanent: false },
      { source: "/partner-story-02", destination: "/reseller", permanent: false },
      { source: "/partner-directory", destination: "/reseller", permanent: false },
      { source: "/alternatives/sleekflow", destination: "/alternatives", permanent: false },
      { source: "/alternatives/trengo", destination: "/alternatives", permanent: false },
      { source: "/alternatives/wati", destination: "/alternatives", permanent: false },
      // Old business.yourlio.com industry URLs.
      { source: "/industries/:slug", destination: "/industry/:slug", permanent: true },
      { source: "/industry/offline-retail", destination: "/industry/retail", permanent: true },
      { source: "/industry/travel-and-hospitality", destination: "/industry/travel", permanent: true },
    ];
  },
};

export default nextConfig;
