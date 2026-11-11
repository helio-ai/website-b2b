// Product screenshots from yourlio.com. Each ships in several widths so
// high density screens get a sharp file and phones a light one.
export type ShotKey = "inbox-dark" | "helpdesk-dark" | "profiles";

export type Shot = { src: string; srcSet: string; width: number; height: number; alt: string };

const creative = (name: string, height: number, alt: string): Shot => ({
  src: `/product-creatives/${name}-1600.webp`,
  srcSet: `/product-creatives/${name}-800.webp 800w, /product-creatives/${name}-1600.webp 1600w, /product-creatives/${name}-4k.webp 3840w`,
  width: 3840,
  height,
  alt,
});

export const SHOTS: Record<ShotKey, Shot> = {
  "inbox-dark": creative(
    "yourlio-shopify-crm-shared-inbox-dark",
    1951,
    "YourLio shared inbox with every channel and the customer profile beside each conversation",
  ),
  "helpdesk-dark": creative("yourlio-shopify-ai-helpdesk-dark", 1961, "YourLio AI helpdesk with tickets, assignments and an AI summary"),
  profiles: {
    src: "/compare/shopper-profiles@2x.webp",
    srcSet: "/compare/shopper-profiles.webp 1200w, /compare/shopper-profiles@2x.webp 2400w",
    width: 2400,
    height: 1482,
    alt: "A YourLio customer profile with the memory of every conversation",
  },
};
