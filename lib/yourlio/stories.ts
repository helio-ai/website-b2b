// Customer story slides, the same picks, words and figures as the
// yourlio.com case study slider (website-v2 CaseStudyShowcase and
// featured-case-studies.js, consented studies only). Photos, logos and
// founder videos load from yourlio.com; full stories live there too.
export type Story = {
  slug: string;
  client: string;
  photo: string;
  photoTop: boolean;
  headline: string;
  tagline: string;
  window: string;
  result: { display: string; label: string };
  bold: string[];
  quote?: string;
  author?: string;
  role?: string;
  authorPhoto?: string;
  video?: { src: string; poster: string; label: string; duration: string };
  logo: { src: string; w: number; h: number } | null;
  logoInColour: boolean;
  badge: string | null;
};

export const STORIES: Story[] = [
  {
    slug: "north-sole",
    client: "North Sole",
    photo: "https://yourlio.com/casestudy/north-sole-founder-john-bergervoet-case-study.webp",
    photoTop: true,
    headline: "1 in 3 chats led to an order.",
    tagline: "Turning a two-question decision into a completed order",
    window: "24 Jul to 7 Sep 2026",
    result: {
      display: "50%",
      label: "of store revenue AI influenced"
    },
    bold: [
      "1 in 3 chats"
    ],
    author: "John Bergervoet",
    role: "Founder, North Sole",
    authorPhoto: "https://yourlio.com/brands/john-bergervoet.webp",
    logo: {
      src: "https://yourlio.com/logos/north_sole_yourlio.webp",
      w: 444,
      h: 124
    },
    logoInColour: false,
    badge: null
  },
  {
    slug: "soulflower",
    client: "Soulflower",
    photo: "https://yourlio.com/casestudy/soulflower-hero.webp",
    photoTop: false,
    headline: "One brand voice. Four channels.",
    tagline: "Four channels, one brand voice, and a creator inbox kept out of the way",
    window: "1 Apr to 7 Sep 2026",
    result: {
      display: "51%",
      label: "of store sales ran through a YourLio chat, August 2026"
    },
    bold: [
      "Replaced four tools with one",
      "18% lift in conversions"
    ],
    quote: "Replaced four tools with one … It's driven an 18% lift in conversions, and customers think they're talking to our team.",
    author: "Natasha Tuli",
    role: "Founder, Soulflower",
    authorPhoto: "https://yourlio.com/brands/natasha.webp",
    video: {
      src: "https://yourlio.com/testimonials/natasha-soulflower.mp4",
      poster: "https://yourlio.com/testimonials/posters/natasha-soulflower.webp",
      label: "Natasha Tuli, Founder of Soulflower, shares how YourLio AI replaced four tools with one agent that chats in their brand voice, helps shoppers find the right product, drives faster customer conversions, and scales personalized customer support.",
      duration: "0:58"
    },
    logo: {
      src: "https://yourlio.com/logos/soulflower_yourlio.webp",
      w: 428,
      h: 123
    },
    logoInColour: false,
    badge: null
  },
  {
    slug: "dr-ortho",
    client: "Dr. Ortho",
    photo: "https://yourlio.com/casestudy/dr-ortho-founder-sanjeev-juneja-case-study.webp",
    photoTop: false,
    headline: "Product guidance. Higher order value.",
    tagline: "Pushing order value with combos on a catalog the brand did not know it had",
    window: "1 Jul to 7 Sep 2026",
    result: {
      display: "20%",
      label: "higher order value than the store average, August"
    },
    bold: [
      "Higher order value"
    ],
    author: "Sanjeev Juneja",
    role: "Founder, Dr. Ortho",
    authorPhoto: "https://yourlio.com/brands/sanjeev-juneja.webp",
    logo: {
      src: "https://yourlio.com/logos/dr_ortho_yourlio.webp",
      w: 273,
      h: 126
    },
    logoInColour: true,
    badge: null
  },
  {
    slug: "bluetea",
    client: "Blue Tea",
    photo: "https://yourlio.com/casestudy/blue-tea-founders-case-study.webp",
    photoTop: false,
    headline: "1 in 3 visitors started a chat.",
    tagline: "When WhatsApp overtakes the website as the biggest sales surface",
    window: "1 May to 7 Sep 2026",
    result: {
      display: "43%",
      label: "arrived on WhatsApp, more than the website carried"
    },
    bold: [
      "knows exactly when to engage",
      "clear bump in cart completions"
    ],
    quote: "Behavioral intelligence that knows exactly when to engage. We've seen a clear bump in cart completions since implementing it.",
    author: "Nitesh Singh",
    role: "Founder, Blue Tea",
    authorPhoto: "https://yourlio.com/brands/nitesh.webp",
    logo: {
      src: "https://yourlio.com/logos/blue_tea_yourlio.webp",
      w: 265,
      h: 68
    },
    logoInColour: false,
    badge: null
  },
  {
    slug: "ugees",
    client: "Ugees",
    photo: "https://yourlio.com/casestudy/ugees-co-founders-case-study.webp",
    photoTop: false,
    headline: "Ugees turns Instagram comments into orders on a single-product catalog",
    tagline: "One product, three channels, the best conversion rate in the set",
    window: "1 Jul to 7 Sep 2026",
    result: {
      display: "37%",
      label: "ended in an order"
    },
    bold: [
      "clear upgrade from traditional chatbots",
      "Responsive, efficient, easy to understand"
    ],
    quote: "A clear upgrade from traditional chatbots that rely on rigid prebuilt flows. Responsive, efficient, easy to understand.",
    author: "Samiksha Yadav",
    role: "Co-founder & CEO, Ugees",
    authorPhoto: "https://yourlio.com/brands/ugees.webp",
    logo: {
      src: "https://yourlio.com/logos/ugees_yourlio.webp",
      w: 100,
      h: 76
    },
    logoInColour: false,
    badge: null
  },
  {
    slug: "lets-tilt",
    client: "Let's Tilt",
    photo: "https://yourlio.com/casestudy/lets-tilt-founder-podcast-interview-case-study.webp",
    photoTop: false,
    headline: "Answers shoppers can feel good asking.",
    tagline: "Answering the fit questions shoppers will not ask a person",
    window: "1 Jun to 7 Sep 2026",
    result: {
      display: "25%",
      label: "of store sales ran through chat, August"
    },
    bold: [
      "feel good asking"
    ],
    logo: {
      src: "https://yourlio.com/logos/tilt_yourlio.webp",
      w: 208,
      h: 97
    },
    logoInColour: false,
    badge: null
  },
  {
    slug: "cureayu",
    client: "Cureayu",
    photo: "https://yourlio.com/casestudy/cureayu-ayurvedic-practitioner-case-study.webp",
    photoTop: false,
    headline: "Cureayu answers the safety question before it answers the sales question",
    tagline: "Answering safety and timeline questions carefully, at scale",
    window: "1 May to 7 Sep 2026",
    result: {
      display: "92%",
      label: "resolved without a human handoff"
    },
    bold: [
      "around 20,000 conversations",
      "handled by the chat itself"
    ],
    quote: "We had around 20,000 conversations that were handled by the chat itself.",
    author: "Karan Gandhi",
    role: "Founder and CEO, Cureayu",
    authorPhoto: "https://yourlio.com/brands/karan.webp",
    video: {
      src: "https://yourlio.com/testimonials/karan-cureayu.mp4",
      poster: "https://yourlio.com/testimonials/posters/karan-cureayu.webp",
      label: "Karan Gandhi, Founder and CEO of Cureayu, shares how YourLio AI handled around 20,000 conversations, mostly about order tracking, freeing two to three team members for other work.",
      duration: "0:20"
    },
    logo: null,
    logoInColour: false,
    badge: null
  },
  {
    slug: "rippedup-nutrition",
    client: "RippedUp Nutrition",
    photo: "https://yourlio.com/casestudy/ripped-up-nutrition-run-logo-case-study.webp",
    photoTop: false,
    headline: "Start with the goal. Find the product.",
    tagline: "Where a serious buyer and a sponsorship enquiry arrive in the same DM",
    window: "1 Jun to 7 Sep 2026",
    result: {
      display: "31%",
      label: "of chats arrived through Instagram"
    },
    bold: [
      "Find the product."
    ],
    logo: {
      src: "https://yourlio.com/logos/ripped_up_nutrition_yourlio.webp",
      w: 310,
      h: 68
    },
    logoInColour: false,
    badge: "https://yourlio.com/logos/ripped_up_nutrition_badge.webp"
  }
];
