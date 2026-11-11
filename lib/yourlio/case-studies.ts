// Published YourLio case studies. The full stories live on yourlio.com;
// this site only shows a card for each and links there. Keep in step with
// website-v2 src/data/case-studies.js (consented studies only).
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  channels: string[];
  image: string;
  imageAlt?: string;
  stat: { value: string; label: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    "slug": "north-sole",
    "client": "North Sole",
    "title": "North Sole turns a three-SKU catalog into a one-question sale",
    "channels": [
      "Website Agent"
    ],
    "image": "https://yourlio.com/casestudy/north-sole-founder-john-bergervoet-case-study-card.webp",
    "imageAlt": "John Bergervoet, founder of North Sole",
    "stat": {
      "value": "50%",
      "label": "of store revenue AI influenced"
    }
  },
  {
    "slug": "soulflower",
    "client": "Soulflower",
    "title": "Soulflower scales a founder's voice across four channels",
    "channels": [
      "Website Agent",
      "Instagram AI",
      "WhatsApp AI",
      "Messenger AI"
    ],
    "image": "https://yourlio.com/casestudy/soulflower-card.webp",
    "stat": {
      "value": "51%",
      "label": "of store sales ran through a YourLio chat, August 2026"
    }
  },
  {
    "slug": "dr-ortho",
    "client": "Dr. Ortho",
    "title": "Dr. Ortho sells the combo, not the bottle, and order value rises 20%",
    "channels": [
      "Website Agent",
      "Instagram AI"
    ],
    "image": "https://yourlio.com/casestudy/dr-ortho-founder-sanjeev-juneja-case-study-card.webp",
    "imageAlt": "Sanjeev Juneja, founder of Dr. Ortho, in a podcast interview",
    "stat": {
      "value": "20%",
      "label": "higher order value than the store average, August"
    }
  },
  {
    "slug": "bluetea",
    "client": "Blue Tea",
    "title": "Blue Tea starts a chat with one in three visitors",
    "channels": [
      "WhatsApp AI",
      "Website Agent",
      "Instagram AI"
    ],
    "image": "https://yourlio.com/casestudy/blue-tea-founders-case-study-card.webp",
    "imageAlt": "Blue Tea founders",
    "stat": {
      "value": "33%",
      "label": "of visitors engaged the agent, the highest here"
    }
  },
  {
    "slug": "lets-tilt",
    "client": "Let's Tilt",
    "title": "Let's Tilt answers the questions shoppers won't ask a human",
    "channels": [
      "Website Agent"
    ],
    "image": "https://yourlio.com/casestudy/lets-tilt-founder-podcast-interview-case-study-card.webp",
    "imageAlt": "Let’s Tilt founder in a podcast interview",
    "stat": {
      "value": "25%",
      "label": "of store sales ran through chat, August"
    }
  },
  {
    "slug": "deodap",
    "client": "DeoDap",
    "title": "DeoDap runs more than 350 chats a day across a 50,000-SKU wholesale catalog",
    "channels": [
      "Website Agent"
    ],
    "image": "https://yourlio.com/casestudy/deodap-founder-samir-rajani-case-study-card.webp",
    "imageAlt": "Samir Rajani, founder of DeoDap",
    "stat": {
      "value": "22%",
      "label": "higher order value than the store average, August"
    }
  },
  {
    "slug": "sylvi-watches",
    "client": "Sylvi Watches",
    "title": "Sylvi Watches runs discovery, warranty and repair through one memory",
    "channels": [
      "Website Agent",
      "WhatsApp AI",
      "Instagram AI",
      "Messenger AI"
    ],
    "image": "https://yourlio.com/casestudy/sylvi-watches-card.webp",
    "stat": {
      "value": "4",
      "label": "channels on one shared customer memory"
    }
  },
  {
    "slug": "auravedic",
    "client": "Auravedic",
    "title": "Auravedic makes a chat the default path to purchase",
    "channels": [
      "Website Agent",
      "WhatsApp AI"
    ],
    "image": "https://yourlio.com/casestudy/auravedic-card.webp",
    "stat": {
      "value": "81%",
      "label": "of store sales ran through chat or WhatsApp, August"
    }
  },
  {
    "slug": "rippedup-nutrition",
    "client": "RippedUp Nutrition",
    "title": "RippedUp Nutrition handles the goal question before the product question",
    "channels": [
      "Website Agent",
      "Instagram AI"
    ],
    "image": "https://yourlio.com/casestudy/ripped-up-nutrition-run-logo-case-study-card.webp",
    "imageAlt": "Ripped Up Nutrition (RUN) logo",
    "stat": {
      "value": "31%",
      "label": "of chats arrived through Instagram"
    }
  },
  {
    "slug": "yourspex",
    "client": "YourSpex",
    "title": "YourSpex measures its agent on appointments booked, not orders closed",
    "channels": [
      "WhatsApp AI",
      "Website Agent",
      "Instagram AI"
    ],
    "image": "https://yourlio.com/casestudy/yourspex-card.webp",
    "stat": {
      "value": "718",
      "label": "home eye test bookings, no call required"
    }
  },
  {
    "slug": "cureayu",
    "client": "Cureayu",
    "title": "Cureayu answers the safety question before it answers the sales question",
    "channels": [
      "WhatsApp AI",
      "Website Agent",
      "Instagram AI"
    ],
    "image": "https://yourlio.com/casestudy/cureayu-ayurvedic-practitioner-case-study-card.webp",
    "imageAlt": "Cureayu’s ayurvedic practitioner",
    "stat": {
      "value": "92%",
      "label": "resolved without a human handoff"
    }
  },
  {
    "slug": "ashba-botanics",
    "client": "Ashba Botanics",
    "title": "Ashba Botanics teaches the agent a community's vocabulary",
    "channels": [
      "Website Agent"
    ],
    "image": "https://yourlio.com/casestudy/ashba-botanics-card.webp",
    "stat": {
      "value": "96%",
      "label": "resolved without a human handoff"
    }
  },
  {
    "slug": "blue-nectar",
    "client": "Blue Nectar",
    "title": "Blue Nectar makes the chat the default path to purchase",
    "channels": [
      "Website Agent",
      "WhatsApp AI"
    ],
    "image": "https://yourlio.com/casestudy/blue-nectar-card.webp",
    "stat": {
      "value": "31%",
      "label": "of chats ended in an order, August 2026"
    }
  },
  {
    "slug": "bake-cosmetics",
    "client": "Bake Cosmetics",
    "title": "Bake Cosmetics turns a described skin concern into the right active",
    "channels": [
      "Website Agent",
      "WhatsApp AI"
    ],
    "image": "https://yourlio.com/casestudy/bake-cosmetics-card.webp",
    "stat": {
      "value": "94%",
      "label": "resolved without a human handoff"
    }
  },
  {
    "slug": "ugees",
    "client": "Ugees",
    "title": "Ugees turns Instagram comments into orders on a single-product catalog",
    "channels": [
      "Website Agent",
      "Instagram AI",
      "WhatsApp AI"
    ],
    "image": "https://yourlio.com/casestudy/ugees-co-founders-case-study-card.webp",
    "imageAlt": "Ugees co-founders",
    "stat": {
      "value": "37%",
      "label": "ended in an order, second highest here"
    }
  },
  {
    "slug": "nysh",
    "client": "Nysh",
    "title": "Nysh sells a product most shoppers have to have explained first",
    "channels": [
      "Website Agent",
      "Instagram AI",
      "WhatsApp AI"
    ],
    "image": "https://yourlio.com/casestudy/nysh-card.webp",
    "stat": {
      "value": "54%",
      "label": "higher order value, the largest lift here"
    }
  }
];
