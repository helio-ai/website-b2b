// Copy for the product, solution and WhatsApp pages. Facts only: see the
// fact sheet in the commit that added this file.
export type FeatureCopy = {
  title: string; // short page name used in nav and breadcrumbs
  eyebrow: "Capture" | "Convert" | "Retain" | "Platform" | "WhatsApp" | "Why us";
  icon: string; // one icon name from components/Icon.tsx
  seoTitle: string;
  seoDescription: string;
  h1: string; // under about 70 characters
  sub: string; // one or two sentences
  plan: string; // where it lives, e.g. "Every AI Agent plan", "Social Suite add on"
  image: "inbox" | "helpdesk" | "channels" | "comment-to-dm" | "journeys" | "profiles" | "agent";
  capabilities: { title: string; body: string; icon: string }[]; // exactly 6; body one or two sentences
  steps: { title: string; body: string; bullets: string[] }[]; // exactly 3; 3 bullets each
  faqs: { q: string; a: string }[]; // 4 to 6; answers 2 to 3 sentences
};

export const FEATURE_COPY: Record<string, FeatureCopy> = {
  /* ------------------------------------------------------------------ */
  /* Capture                                                            */
  /* ------------------------------------------------------------------ */

  "capture-leads-from-ads": {
    title: "Capture from Ads",
    eyebrow: "Capture",
    icon: "Target",
    seoTitle: "Turn Meta Ad Leads into Booked Calls | YourLio",
    seoDescription:
      "Leads from Facebook and Instagram ads go straight into a chat with an AI agent that qualifies them and books the call. See which ad started each chat.",
    h1: "Turn every ad lead into a conversation that books the call.",
    sub: "Leads from your Facebook and Instagram ads go straight into a chat with the AI agent. It asks your questions, collects contact details and books the call while the ad is still fresh in their mind.",
    plan: "AI Agent plan and Social Suite add on",
    image: "agent",
    capabilities: [
      {
        title: "Click to message ads",
        body: "Ads that open a chat on WhatsApp, Instagram or Messenger reach the agent first. It replies straight away, day or night.",
        icon: "MessageCircle",
      },
      {
        title: "Lead ads",
        body: "Leads from your lead ads go straight into a conversation with the agent, so the follow up starts while interest is high.",
        icon: "ClipboardCheck",
      },
      {
        title: "Your qualifying questions",
        body: "The agent asks what your sales team needs to know, such as budget, team size, location or timeline. Leads answer in one tap or in their own words.",
        icon: "Filter",
      },
      {
        title: "See which ad started it",
        body: "Every chat shows the ad or post that started it, so you know which campaigns bring in leads that book.",
        icon: "BarChart3",
      },
      {
        title: "Ad comments answered",
        body: "With the Social Suite, comments on your ads get a reply and a DM, so a question asked in public becomes a private conversation.",
        icon: "MessagesSquare",
      },
      {
        title: "Calls booked in the chat",
        body: "Once the lead shares their details, the agent offers open times and books the call. The invite lands in their email.",
        icon: "Calendar",
      },
    ],
    steps: [
      {
        title: "A lead responds to your ad",
        body: "Someone taps a click to message ad or sends a lead ad on Facebook or Instagram. The agent picks up the conversation straight away.",
        bullets: ["Facebook and Instagram ads", "Replies day or night", "In the language the lead writes in"],
      },
      {
        title: "The agent qualifies them",
        body: "It answers questions about your services, asks yours and collects name, company, phone and work email inside the chat.",
        bullets: ["Your own qualifying questions", "Tap options and free text", "No separate form page"],
      },
      {
        title: "Your team gets a booked call",
        body: "The lead picks a time, and your team sees every answer and the ad that started the chat.",
        bullets: ["Calendar invite by email", "Ad or post shown on the lead", "Step into the chat at any point"],
      },
    ],
    faqs: [
      {
        q: "Which Meta ads does this work with?",
        a: "Click to message ads and lead ads on Facebook and Instagram. Leads from both go straight into a conversation with the agent.",
      },
      {
        q: "Can I see which ad a lead came from?",
        a: "Yes. Each chat shows the ad or post that started it, and the dashboard shows attribution across your channels.",
      },
      {
        q: "What happens to comments on my ads?",
        a: "With the Social Suite add on, ad comments are answered and the person can be moved into a DM with the agent. You can also tag comments and auto hide the ones you do not want shown.",
      },
      {
        q: "Do I need to build a chatbot flow for each ad?",
        a: "No flow trees to draw. You set the questions and the goal, such as a booked call, and the agent runs the conversation.",
      },
      {
        q: "Can my team take over a chat that started from an ad?",
        a: "Yes. The agent hands off to a person with a reason, and anyone on your team can step into a chat live.",
      },
    ],
  },

  "capture-leads": {
    title: "Capture from Social",
    eyebrow: "Capture",
    icon: "Users",
    seoTitle: "Instagram and Facebook Lead Capture with AI | YourLio",
    seoDescription:
      "Turn Instagram and Facebook comments and DMs into qualified leads. An AI agent replies, asks your questions and books the call, with one memory of each lead.",
    h1: "Turn Instagram and Facebook comments and DMs into qualified leads.",
    sub: "The AI agent answers Instagram and Facebook DMs, moves people who comment into a private chat, asks your qualifying questions and books the call.",
    plan: "AI Agent plan and Social Suite add on",
    image: "comment-to-dm",
    capabilities: [
      {
        title: "DMs answered day or night",
        body: "The agent replies to Instagram DMs and Facebook Messenger chats in the language the person writes in.",
        icon: "MessageCircle",
      },
      {
        title: "Comment to DM",
        body: "When someone comments on a post, Reel or ad, they get a DM that starts the conversation. Part of the Social Suite.",
        icon: "MessagesSquare",
      },
      {
        title: "Story replies and mentions",
        body: "Replies to your stories and mentions of your account get an answer, so people who reach out are not left waiting.",
        icon: "Bell",
      },
      {
        title: "Qualified in the chat",
        body: "The agent asks your questions and collects name, company, phone and work email without a separate form.",
        icon: "Filter",
      },
      {
        title: "Tag, hide and measure",
        body: "Tag comments, auto hide the ones you do not want on your posts and see analytics for each post.",
        icon: "SlidersHorizontal",
      },
      {
        title: "One memory across channels",
        body: "If the lead later writes on WhatsApp or your website, the agent already knows them, so nobody is asked twice.",
        icon: "Layers",
      },
    ],
    steps: [
      {
        title: "Someone comments or sends a DM",
        body: "A comment on a post, Reel or ad, a story reply or a DM reaches the agent.",
        bullets: ["Instagram and Facebook", "Posts, Reels and ads", "Story replies and mentions"],
      },
      {
        title: "The agent starts the conversation",
        body: "It replies in the DM, answers questions about your services and asks what your team needs to know.",
        bullets: ["Your own qualifying questions", "Tap options and free text", "Replies in their language"],
      },
      {
        title: "Your team gets the lead",
        body: "Contact details, answers and the booked call land in one place, with the post or ad that started it.",
        bullets: ["Calendar invite by email", "Post or ad shown on the lead", "Take over the chat at any time"],
      },
    ],
    faqs: [
      {
        q: "What is comment to DM?",
        a: "When someone comments on your post, Reel or ad, they get a direct message that starts a conversation with the agent. It is part of the Social Suite, a $49 a month add on.",
      },
      {
        q: "Does the agent answer Instagram and Facebook DMs on its own?",
        a: "Yes. It answers Instagram DMs and Facebook Messenger chats day or night and asks your qualifying questions. Your team can step into any chat live.",
      },
      {
        q: "Are story replies and mentions answered?",
        a: "Yes, with the Social Suite. Story replies, mentions and ad comments are answered, so people who reach out in public get a reply.",
      },
      {
        q: "Will a lead be asked the same questions again on WhatsApp?",
        a: "No. The agent keeps one memory of each lead across channels. A lead who started on Instagram is not asked twice on WhatsApp or your website.",
      },
      {
        q: "Can I control what stays on my posts?",
        a: "Yes. The Social Suite includes comment tagging, auto hide and analytics for each post, so you can sort comments and see how each post performs.",
      },
    ],
  },

  "capture-facebook-leads": {
    title: "Capture Facebook Leads",
    eyebrow: "Capture",
    icon: "MessageCircle",
    seoTitle: "Capture and Qualify Facebook Leads with AI | YourLio",
    seoDescription:
      "Answer Facebook Messenger chats, comments and ad leads with an AI agent that asks your questions, collects contact details and books the call.",
    h1: "Turn Facebook messages, comments and ads into booked calls.",
    sub: "The AI agent answers Messenger, replies to comments with a DM and picks up leads from your Facebook ads. Every lead reaches your team with their answers.",
    plan: "AI Agent plan and Social Suite add on",
    image: "comment-to-dm",
    capabilities: [
      {
        title: "Messenger answered",
        body: "The agent replies to Facebook Messenger chats day or night, in the language the person writes in.",
        icon: "MessageCircle",
      },
      {
        title: "Comment to DM on posts and ads",
        body: "A comment on your Facebook post, Reel or ad starts a private conversation with the agent. Part of the Social Suite.",
        icon: "MessagesSquare",
      },
      {
        title: "Leads from Facebook ads",
        body: "Leads from your Facebook ads go straight into a conversation, and each chat shows the ad or post that started it.",
        icon: "Target",
      },
      {
        title: "Your qualifying questions",
        body: "Ask about budget, location, timeline or anything else your team needs. Leads answer in one tap or in their own words.",
        icon: "Filter",
      },
      {
        title: "Calls booked in the chat",
        body: "The agent offers open times and books the call. The lead gets a calendar invite by email.",
        icon: "Calendar",
      },
      {
        title: "Comment tools",
        body: "Tag comments, auto hide the ones you do not want shown and see analytics for each post.",
        icon: "SlidersHorizontal",
      },
    ],
    steps: [
      {
        title: "A lead reaches out on Facebook",
        body: "They send a message, comment on a post or respond to your ad.",
        bullets: ["Messenger chats", "Post, Reel and ad comments", "Click to message and lead ads"],
      },
      {
        title: "The agent qualifies them",
        body: "It answers questions about your services, asks yours and collects contact details in the chat.",
        bullets: ["Name, company, phone and work email", "No separate form", "Hands off to a person with a reason"],
      },
      {
        title: "The call is booked",
        body: "The lead picks a time, and your team sees every answer before the call.",
        bullets: ["Invite by email, reschedule from it", "Ad or post shown on the lead", "Every answer saved on the lead"],
      },
    ],
    faqs: [
      {
        q: "Does the agent answer Facebook Messenger?",
        a: "Yes. It replies to Messenger chats day or night, asks your qualifying questions and books the call. Your team can step into any chat live.",
      },
      {
        q: "Can comments on my Facebook posts become leads?",
        a: "Yes. With the Social Suite, a comment on a post, Reel or ad gets a DM that starts a conversation with the agent. The Social Suite is a $49 a month add on.",
      },
      {
        q: "Do leads from Facebook ads go to the agent?",
        a: "Yes. Leads from your Facebook ads go straight into a conversation with the agent, and you can see which ad or post started each chat.",
      },
      {
        q: "Where do Facebook leads go after the chat?",
        a: "Every lead keeps their answers and the full conversation. With AI CRM & Helpdesk, they also move through stages your team can see and change, from new to qualified to booked.",
      },
      {
        q: "Does it work with my Instagram account too?",
        a: "Yes. The same agent answers Instagram DMs with the same memory of each lead, so nobody is asked twice.",
      },
    ],
  },

  "capture-instagram-leads": {
    title: "Capture Instagram Leads",
    eyebrow: "Capture",
    icon: "MessagesSquare",
    seoTitle: "Capture and Qualify Instagram Leads with AI | YourLio",
    seoDescription:
      "Answer Instagram DMs, comments, story replies and mentions with an AI agent that asks your questions and books the call, day or night.",
    h1: "Turn Instagram DMs and comments into qualified leads.",
    sub: "The AI agent replies to DMs, story replies and mentions, sends a DM to people who comment and books the call. Your team sees every answer.",
    plan: "AI Agent plan and Social Suite add on",
    image: "comment-to-dm",
    capabilities: [
      {
        title: "DMs answered",
        body: "The agent replies to Instagram DMs day or night and asks your qualifying questions.",
        icon: "MessageCircle",
      },
      {
        title: "Comment to DM",
        body: "Someone comments on a post, Reel or ad and gets a DM that starts the conversation. Part of the Social Suite.",
        icon: "MessagesSquare",
      },
      {
        title: "Story replies and mentions",
        body: "Replies to your stories and mentions of your account are answered, so people who reach out get a response.",
        icon: "Bell",
      },
      {
        title: "Leads from Instagram ads",
        body: "Leads from your Instagram ads go straight into a chat with the agent, and you can see which ad or post started it.",
        icon: "Target",
      },
      {
        title: "Details collected in the DM",
        body: "Name, company, phone and work email, collected inside the conversation. No link to a separate form.",
        icon: "ClipboardCheck",
      },
      {
        title: "Comment tagging and auto hide",
        body: "Tag comments, auto hide the ones you do not want on a post and see analytics for each post.",
        icon: "SlidersHorizontal",
      },
    ],
    steps: [
      {
        title: "Someone reaches out on Instagram",
        body: "A DM, a comment, a story reply or a mention lands with the agent.",
        bullets: ["Posts, Reels and ads", "Story replies and mentions", "Replies in their language"],
      },
      {
        title: "The agent qualifies in the DM",
        body: "It answers questions, asks what your team needs to know and collects contact details.",
        bullets: ["Your own qualifying questions", "Tap options and free text", "No separate form"],
      },
      {
        title: "Your team gets a booked call",
        body: "The lead books a time in the chat and gets the invite by email.",
        bullets: ["Reschedule from the invite", "Post or ad shown on the lead", "Step into the chat at any time"],
      },
    ],
    faqs: [
      {
        q: "Does the agent reply to Instagram DMs automatically?",
        a: "Yes. It answers Instagram DMs day or night, in the language the person writes in. It asks your qualifying questions and books the call.",
      },
      {
        q: "What happens when someone comments on my post or Reel?",
        a: "With the Social Suite, they get a DM that starts a conversation with the agent. The same works for comments on your ads.",
      },
      {
        q: "Are story replies and mentions answered?",
        a: "Yes, with the Social Suite. Story replies, mentions and ad comments are answered, so people who reach out in public or through your stories get a reply.",
      },
      {
        q: "Can I see which post or ad brought in a lead?",
        a: "Yes. Each chat shows the ad or post that started it, and the Social Suite adds analytics for each post.",
      },
      {
        q: "Can my team take over an Instagram conversation?",
        a: "Yes. The agent hands off to a person with a reason, and anyone on your team can step into a chat live.",
      },
    ],
  },

  "capture-website-leads": {
    title: "Capture from Website",
    eyebrow: "Capture",
    icon: "Globe",
    seoTitle: "AI Chat Agent for Website Lead Capture | YourLio",
    seoDescription:
      "Answer website visitors day or night. YourLio asks your qualifying questions, collects contact details in the chat and books the call, on any website.",
    h1: "Turn website visitors into qualified leads and booked calls.",
    sub: "The AI agent answers enquiries on your website, asks your qualifying questions, collects contact details in the chat and books the call. Lead capture popups help you collect details from more of your visitors.",
    plan: "Every AI Agent plan",
    image: "agent",
    capabilities: [
      {
        title: "Every enquiry answered",
        body: "The agent replies to visitors day or night, in the language they write in.",
        icon: "Clock",
      },
      {
        title: "Free text, then tap options",
        body: "It understands questions in the visitor's own words, then guides with tap options that answer in one tap.",
        icon: "Sparkles",
      },
      {
        title: "Your qualifying questions",
        body: "Team size, budget, location, timeline or whatever your team needs to know before a call.",
        icon: "Filter",
      },
      {
        title: "Details without a form",
        body: "Name, company, phone and work email, collected inside the chat. No separate form page.",
        icon: "ClipboardCheck",
      },
      {
        title: "Lead capture popups",
        body: "Add lead capture popups to your website so more visitors leave their details.",
        icon: "Target",
      },
      {
        title: "Works on any website",
        body: "Runs on custom built websites, WooCommerce, Magento, BigCommerce and Shopify. Our team helps you add it.",
        icon: "Plug",
      },
    ],
    steps: [
      {
        title: "Add the agent to your site",
        body: "Our team helps you add it to your website, whatever it is built on.",
        bullets: ["Custom built websites", "WooCommerce, Magento, BigCommerce and Shopify", "Your brand voice and persona"],
      },
      {
        title: "The agent answers and asks",
        body: "It answers from what you teach it about your business and asks what your team needs to know.",
        bullets: ["Your own qualifying questions", "Contact details inside the chat", "Replies in the visitor's language"],
      },
      {
        title: "The call gets booked",
        body: "The agent offers open times and books the call. The visitor gets the invite by email.",
        bullets: ["Reschedule from the invite", "Answers saved on the lead", "Hand off to your team at any point"],
      },
    ],
    faqs: [
      {
        q: "Does it work if my website is not on Shopify?",
        a: "Yes. The agent runs on custom built websites, WooCommerce, Magento and BigCommerce as well as Shopify. Our team helps you add it to your site.",
      },
      {
        q: "Can it ask our own qualifying questions?",
        a: "Yes. You decide what the agent needs to know before a call, such as team size, budget, location or timeline. It asks with tap options, and visitors can still type freely.",
      },
      {
        q: "Do visitors have to fill in a form?",
        a: "No. The agent collects name, company, phone and work email inside the chat. You can also add lead capture popups to your website.",
      },
      {
        q: "Can visitors book a call inside the chat?",
        a: "Yes. After collecting their details, the agent offers open times and books the call. The visitor gets a calendar invite by email and can reschedule from it.",
      },
      {
        q: "Can my sales team take over a website chat?",
        a: "Yes. Your team can step into any chat live. The agent also hands off with a reason when a person should take over.",
      },
    ],
  },

  "capture-offline-leads": {
    title: "Capture from Offline",
    eyebrow: "Capture",
    icon: "QrCode",
    seoTitle: "Capture Offline Leads with WhatsApp QR Codes | YourLio",
    seoDescription:
      "Put a QR code or click to chat link on flyers, counters, site boards and stands. Each scan opens a WhatsApp chat with an AI agent that qualifies the lead.",
    h1: "Turn flyers, counters and event stands into WhatsApp conversations.",
    sub: "A QR code or click to chat link opens a WhatsApp chat with the AI agent. It asks your questions, collects contact details and books the call, even when nobody is at the stand.",
    plan: "AI Agent plan",
    image: "channels",
    capabilities: [
      {
        title: "QR codes for print",
        body: "Put a QR code on a flyer, a shop counter, a site board or an event stand. A scan opens a WhatsApp chat with the agent.",
        icon: "QrCode",
      },
      {
        title: "Click to chat links",
        body: "Add a click to chat link to brochures, slides and messages. One tap starts the conversation.",
        icon: "Link",
      },
      {
        title: "Answered on the spot",
        body: "The agent replies straight away, day or night, so a lead who scans after hours still gets an answer.",
        icon: "Clock",
      },
      {
        title: "Qualified in WhatsApp",
        body: "It asks your qualifying questions and collects name, company, phone and work email in the chat.",
        icon: "Filter",
      },
      {
        title: "Know where it started",
        body: "Give each flyer, board or stand its own opening message, so the first line of the chat tells you where the lead saw you.",
        icon: "Search",
      },
      {
        title: "Free link and QR tools",
        body: "Make a WhatsApp link or QR code for your business number with our free generators.",
        icon: "Sparkles",
      },
    ],
    steps: [
      {
        title: "Create your link or QR code",
        body: "Use the free WhatsApp link or QR code generator with your WhatsApp Business number.",
        bullets: ["Free link generator", "Free QR code generator", "A different opening message for each spot"],
      },
      {
        title: "Put it where people see it",
        body: "Print it or place it wherever people meet your business in person.",
        bullets: ["Flyers and brochures", "Shop counters and site boards", "Event and trade show stands"],
      },
      {
        title: "The agent takes it from there",
        body: "Each scan opens a WhatsApp chat. The agent qualifies the lead and books the call.",
        bullets: ["Your qualifying questions", "Calendar invite by email", "One memory if they return on another channel"],
      },
    ],
    faqs: [
      {
        q: "How does a QR code turn into a lead?",
        a: "The QR code opens a WhatsApp chat with your business number. The agent answers, asks your qualifying questions, collects contact details and books the call.",
      },
      {
        q: "Do I pay for the QR code or link?",
        a: "No. The WhatsApp link and QR code generators on this site are free to use. The agent that answers the chat comes with an AI Agent plan.",
      },
      {
        q: "Can I tell which flyer or stand a lead came from?",
        a: "Yes. Give each link or QR code its own opening message, and it shows as the first message in the chat. The full conversation is saved on the lead.",
      },
      {
        q: "What if the lead later visits our website?",
        a: "The agent keeps one memory of each lead across channels. A lead who started on WhatsApp is not asked the same questions again on your website.",
      },
      {
        q: "Can my team reply on the same WhatsApp number?",
        a: "Yes. Your team shares one WhatsApp number in one inbox and can step into any chat live.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Convert                                                            */
  /* ------------------------------------------------------------------ */

  "ai-agents": {
    title: "AI Agents",
    eyebrow: "Convert",
    icon: "Sparkles",
    seoTitle: "AI Agents for Sales and Support Conversations | YourLio",
    seoDescription:
      "One AI agent for your website, WhatsApp, Instagram and Messenger. It answers, qualifies leads, books calls and hands off to your team with a reason.",
    h1: "One AI agent that answers, qualifies and books on every channel.",
    sub: "The agent talks to leads and clients on your website, WhatsApp, Instagram and Facebook Messenger, in your brand voice. It remembers each person across channels and hands off when your team should step in.",
    plan: "Every AI Agent plan",
    image: "agent",
    capabilities: [
      {
        title: "Every channel, one agent",
        body: "Website chat, WhatsApp, Instagram and Facebook Messenger, answered day or night in the language the visitor writes in.",
        icon: "Layers",
      },
      {
        title: "Understands free text",
        body: "People ask in their own words. The agent understands, then guides with tap options where they help.",
        icon: "Sparkles",
      },
      {
        title: "Your brand voice",
        body: "Set a custom voice and persona so the agent sounds like your business.",
        icon: "SlidersHorizontal",
      },
      {
        title: "Training and corrections",
        body: "Teach the agent about your business and correct any answer it gets wrong.",
        icon: "ClipboardCheck",
      },
      {
        title: "One memory of each lead",
        body: "Answers from every channel are saved on the lead, so nobody is asked twice.",
        icon: "Users",
      },
      {
        title: "Hands off with a reason",
        body: "When a person should take over, the agent passes the chat to your team and says why. Anyone can step in live.",
        icon: "Handshake",
      },
    ],
    steps: [
      {
        title: "Tell it about your business",
        body: "Add your services, the questions you ask leads and the voice you want.",
        bullets: ["Your services and answers", "Your qualifying questions", "Brand voice and persona"],
      },
      {
        title: "Connect your channels",
        body: "Put the agent on your website and connect WhatsApp, Instagram and Facebook Messenger.",
        bullets: ["Any website, with our team's help", "Your WhatsApp Business number", "Instagram and Messenger"],
      },
      {
        title: "Watch it work",
        body: "See every conversation, what the AI did and how it performs, and correct it as you go.",
        bullets: ["AI activity and conversation history", "Analytics and attribution", "AI performance"],
      },
    ],
    faqs: [
      {
        q: "What can the AI agent do?",
        a: "It answers questions, asks your qualifying questions, collects contact details and books calls. It works on your website, WhatsApp, Instagram and Facebook Messenger, day or night.",
      },
      {
        q: "Do I need to build chatbot flows?",
        a: "No flow trees to draw. You set the questions and the goal, such as a booked call, and the agent runs the conversation. It still uses tap options where they make answering faster.",
      },
      {
        q: "How does the agent learn about our business?",
        a: "You train it on your services and the answers you want it to give. You can correct any answer, and the dashboard shows what the AI did in every conversation.",
      },
      {
        q: "What happens when the agent cannot help?",
        a: "It hands off to a person on your team with the reason, and your team can step into any chat live. The lead's answers stay on their memory, so nobody starts over.",
      },
      {
        q: "Which languages does it reply in?",
        a: "Visitors can write in their own language and the agent replies in it. This works on every channel the agent answers on.",
      },
      {
        q: "How many people on my team can use it?",
        a: "Every AI Agent plan includes unlimited team seats. Your whole team can see conversations and step in.",
      },
    ],
  },

  "ai-agents-for-lead-qualification": {
    title: "AI Agents for Lead Qualification",
    eyebrow: "Convert",
    icon: "Bot",
    seoTitle: "AI Agent for Lead Qualification | YourLio",
    seoDescription:
      "An AI agent that asks your qualifying questions in chat, on WhatsApp, on social and on phone calls, collects contact details and books the call.",
    h1: "An AI agent that qualifies every lead before your team picks up.",
    sub: "It asks the questions your sales team would ask, in chat and on the phone, then books the call. Your team starts every conversation knowing the brief.",
    plan: "AI Agent plan",
    image: "agent",
    capabilities: [
      {
        title: "Your questions, your criteria",
        body: "Team size, budget, location, timeline or anything else you choose. The agent asks what your team needs to know.",
        icon: "Filter",
      },
      {
        title: "Tap options and free text",
        body: "Leads answer in one tap or in their own words, and the agent understands both.",
        icon: "Sparkles",
      },
      {
        title: "AI calls",
        body: "An AI voice agent talks to leads on the phone and qualifies them the same way it does in chat.",
        icon: "Phone",
      },
      {
        title: "Contact details in the chat",
        body: "Name, company, phone and work email, collected in the conversation. No separate form.",
        icon: "ClipboardCheck",
      },
      {
        title: "Nobody asked twice",
        body: "One memory of each lead across channels, so a lead who answered on your website is not asked again on WhatsApp.",
        icon: "Users",
      },
      {
        title: "Qualified leads get booked",
        body: "The agent offers open times and books the call. The invite lands in the lead's email.",
        icon: "Calendar",
      },
    ],
    steps: [
      {
        title: "Set your questions",
        body: "Choose what your team needs to know to judge a fit.",
        bullets: ["Budget and timeline", "Team size and location", "Anything else you choose"],
      },
      {
        title: "The agent asks them",
        body: "In chat, on WhatsApp, on social and on the phone, in the lead's own language.",
        bullets: ["Website chat and WhatsApp", "Instagram and Messenger", "AI calls"],
      },
      {
        title: "Your team gets the brief",
        body: "Every answer is saved on the lead, ready for the first call.",
        bullets: ["Answers on the lead's memory", "Booked call with an email invite", "Hand off with a reason"],
      },
    ],
    faqs: [
      {
        q: "What questions can the agent ask?",
        a: "Any you choose, such as team size, budget, location or timeline. It asks with tap options, and leads can still type freely.",
      },
      {
        q: "Can the agent qualify leads on phone calls?",
        a: "Yes. An AI voice agent talks to leads on the phone and qualifies them the same way it does in chat.",
      },
      {
        q: "What does my team see after a lead is qualified?",
        a: "Each lead's answers, contact details and the full conversation, saved on their memory. With AI CRM & Helpdesk, leads also move through stages from new to qualified to booked.",
      },
      {
        q: "Does it work on WhatsApp and social as well as the website?",
        a: "Yes. The same agent asks your questions on your website, WhatsApp, Instagram and Facebook Messenger, with one memory of each lead.",
      },
      {
        q: "Can a rep step in during qualification?",
        a: "Yes. Anyone on your team can step into a chat live. The agent also hands off with a reason when a person should take over.",
      },
    ],
  },

  "team-inbox": {
    title: "Team Inbox",
    eyebrow: "Convert",
    icon: "Inbox",
    seoTitle: "Shared Team Inbox for Every Channel | YourLio",
    seoDescription:
      "One inbox for website chat, WhatsApp, Instagram, Facebook, email, SMS and calls. Assign chats, add notes and see the full history of every lead and client.",
    h1: "Every conversation from every channel, in one team inbox.",
    sub: "Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls land in one place. Your team assigns, replies and follows up with the full history beside every chat.",
    plan: "AI CRM & Helpdesk",
    image: "inbox",
    capabilities: [
      {
        title: "One inbox, every channel",
        body: "Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls, side by side.",
        icon: "Inbox",
      },
      {
        title: "Gmail and Outlook connected",
        body: "Connect your team's Gmail and Outlook mailboxes, so email sits beside every other conversation.",
        icon: "Mail",
      },
      {
        title: "Ownership and assignments",
        body: "Every conversation has an owner. Assign it to a person or a team and add internal notes.",
        icon: "Users",
      },
      {
        title: "Statuses, priorities and labels",
        body: "Sort the inbox the way your team works, and reply faster with quick replies.",
        icon: "SlidersHorizontal",
      },
      {
        title: "One click summaries",
        body: "Summarise any conversation in one click, with the customer's memory beside the ticket.",
        icon: "Sparkles",
      },
      {
        title: "AI answers first",
        body: "With an AI Agent plan, the AI replies first and hands off to your team with a reason.",
        icon: "Bot",
      },
    ],
    steps: [
      {
        title: "Connect your channels",
        body: "Bring website chat, WhatsApp, social, email, SMS and calls into one inbox.",
        bullets: ["Gmail and Outlook mailboxes", "WhatsApp, Instagram and Facebook", "Knowlarity and DLT calling lines"],
      },
      {
        title: "Route and assign",
        body: "Conversations go to the right person by rules, teams, shifts and availability.",
        bullets: ["Ticket ownership", "Internal notes", "Statuses, priorities and labels"],
      },
      {
        title: "Reply with the full picture",
        body: "Every reply has the conversation summary and the customer's memory beside it.",
        bullets: ["One click summaries", "Quick replies", "Agent performance reports"],
      },
    ],
    faqs: [
      {
        q: "Which channels come into the team inbox?",
        a: "Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls. Gmail and Outlook mailboxes connect directly.",
      },
      {
        q: "Can the AI answer before my team does?",
        a: "Yes. With an AI Agent plan, the AI answers first and hands off to your team with a reason. Your team can step into any chat live.",
      },
      {
        q: "How does my team know who owns a conversation?",
        a: "Every ticket has an owner. You can assign conversations, add internal notes and set statuses, priorities and labels.",
      },
      {
        q: "Can we make calls from the inbox?",
        a: "Yes. WhatsApp and phone calls run from the browser, with recordings and AI transcripts saved on the ticket.",
      },
      {
        q: "How is AI CRM & Helpdesk priced?",
        a: "It has its own flat team price, separate from the AI Agent plans. Book a call and we will quote for your team.",
      },
    ],
  },

  "lead-qualification": {
    title: "Qualify Leads",
    eyebrow: "Convert",
    icon: "Filter",
    seoTitle: "Qualify Leads on Every Channel with AI | YourLio",
    seoDescription:
      "Ask your qualifying questions in chat, on WhatsApp, social and calls. YourLio saves every answer on the lead and moves them from new to qualified to booked.",
    h1: "Know which leads are a fit before the first call.",
    sub: "Ask your qualifying questions on every channel, save every answer on the lead and move them from new to qualified to booked. Your sales team spends its time on the leads that fit.",
    plan: "AI Agent plan and AI CRM & Helpdesk",
    image: "profiles",
    capabilities: [
      {
        title: "Questions you choose",
        body: "Budget, team size, location, timeline or whatever decides a fit for your business.",
        icon: "Filter",
      },
      {
        title: "Asked on every channel",
        body: "Website chat, WhatsApp, Instagram, Messenger and AI calls all ask the same questions.",
        icon: "Layers",
      },
      {
        title: "Answers saved on the lead",
        body: "Every answer sits on the lead's memory, beside the full conversation.",
        icon: "ClipboardCheck",
      },
      {
        title: "Stages your team can see",
        body: "Leads move through CRM stages from new to qualified to booked, and your team can change them.",
        icon: "Workflow",
      },
      {
        title: "See where leads come from",
        body: "Each chat shows the ad or post that started it, so you know which sources bring leads that fit.",
        icon: "BarChart3",
      },
      {
        title: "Syncs with HubSpot",
        body: "Leads and their answers sync with HubSpot and the tools you already use.",
        icon: "Plug",
      },
    ],
    steps: [
      {
        title: "Decide what a fit looks like",
        body: "Pick the questions that separate ready leads from early ones.",
        bullets: ["Budget and timeline", "Team size and location", "Your own questions"],
      },
      {
        title: "Let the agent ask",
        body: "The agent asks with tap options and understands free text, on every channel.",
        bullets: ["Chat, WhatsApp and social", "AI calls", "In the lead's own language"],
      },
      {
        title: "Act on the answers",
        body: "Qualified leads get a booked call, and your team sees every answer.",
        bullets: ["Stages from new to booked", "Calendar invite by email", "Synced to HubSpot"],
      },
    ],
    faqs: [
      {
        q: "How does lead qualification work in YourLio?",
        a: "You choose the questions your team needs answered, such as budget, team size, location or timeline. The agent asks them in the conversation and saves every answer on the lead, so your team can see who is ready.",
      },
      {
        q: "Can leads be qualified on phone calls?",
        a: "Yes. An AI voice agent talks to leads on the phone and qualifies them the same way it does in chat.",
      },
      {
        q: "Where do I see qualified leads?",
        a: "In the CRM, where leads move through stages your team can see and change, from new to qualified to booked. Each lead carries its answers and the full conversation.",
      },
      {
        q: "Does it work with HubSpot?",
        a: "Yes. YourLio syncs with HubSpot and the tools you already use, so your team can keep working where they are.",
      },
      {
        q: "Can my sales team take over in the middle of a conversation?",
        a: "Yes. Anyone on your team can step into a chat live. The agent hands off with a reason when a person should take over.",
      },
    ],
  },

  "lead-distribution": {
    title: "Route Leads",
    eyebrow: "Convert",
    icon: "Route",
    seoTitle: "Route Leads to the Right Person Automatically | YourLio",
    seoDescription:
      "Route every lead and conversation by rules, teams, shifts and availability. Assign owners, add notes and move leads from new to qualified to booked.",
    h1: "Send every lead to the right person, on shift and available.",
    sub: "Route conversations by rules, teams, shifts and availability, so leads go to someone who can reply. Every lead has an owner and a stage your team can see.",
    plan: "AI CRM & Helpdesk",
    image: "helpdesk",
    capabilities: [
      {
        title: "Routing rules",
        body: "Set rules that send each conversation to the right person or team.",
        icon: "Route",
      },
      {
        title: "Teams",
        body: "Group your people into teams, such as sales and support, and route to the team.",
        icon: "Users",
      },
      {
        title: "Shifts and availability",
        body: "Conversations go to people who are on shift and available, not to someone who is off.",
        icon: "Clock",
      },
      {
        title: "Clear ownership",
        body: "Every ticket has an owner and an assignment, so it is always clear who follows up.",
        icon: "Briefcase",
      },
      {
        title: "CRM stages",
        body: "Leads move from new to qualified to booked, and your team can see and change each stage.",
        icon: "Workflow",
      },
      {
        title: "Performance reports",
        body: "See performance and resolution reports for each person on your team.",
        icon: "BarChart3",
      },
    ],
    steps: [
      {
        title: "Set up teams and shifts",
        body: "Add your people, group them into teams and set when each one works.",
        bullets: ["Teams", "Shifts", "Availability"],
      },
      {
        title: "Write your routing rules",
        body: "Decide where each conversation goes and who owns it.",
        bullets: ["Rules for each team", "AI answers first with an AI Agent plan", "Hand off with a reason"],
      },
      {
        title: "Track every lead",
        body: "Owners, notes and stages keep the follow up moving.",
        bullets: ["Ticket ownership and assignments", "Internal notes", "Stages from new to booked"],
      },
    ],
    faqs: [
      {
        q: "How are leads routed?",
        a: "By rules you set, by team, and by who is on shift and available. Every conversation gets an owner, so it is clear who follows up.",
      },
      {
        q: "What happens to a lead that comes in outside working hours?",
        a: "With an AI Agent plan, the AI answers first, day or night, and hands off with a reason. Routing by shifts and availability means the hand off goes to someone who is working.",
      },
      {
        q: "Can I reassign a lead?",
        a: "Yes. Change the assignment at any time, and internal notes keep the context for whoever picks it up.",
      },
      {
        q: "Can my team see where each lead is?",
        a: "Yes. Leads move through CRM stages your team can see and change, from new to qualified to booked.",
      },
      {
        q: "How do I see how my team is doing?",
        a: "Agent performance and resolution reports show how each person is handling their conversations. Use them to balance teams and shifts.",
      },
    ],
  },

  "book-a-meeting": {
    title: "Book Appointments",
    eyebrow: "Convert",
    icon: "Calendar",
    seoTitle: "Book Calls and Appointments in the Chat | YourLio",
    seoDescription:
      "Let an AI agent book calls, demos and appointments inside the chat. Leads pick an open time, get a calendar invite by email and can reschedule from it.",
    h1: "Book the call while the lead is still in the chat.",
    sub: "The AI agent collects contact details, offers open times and books the call or appointment. The lead gets a calendar invite by email and can reschedule from it.",
    plan: "Every AI Agent plan",
    image: "agent",
    capabilities: [
      {
        title: "Open times in the chat",
        body: "The agent offers open times inside the conversation, so the lead picks one without leaving.",
        icon: "Calendar",
      },
      {
        title: "Invite by email",
        body: "The lead gets a calendar invite by email as soon as the call is booked.",
        icon: "Mail",
      },
      {
        title: "Reschedule from the invite",
        body: "If plans change, the lead reschedules from the invite. No back and forth.",
        icon: "Clock",
      },
      {
        title: "Qualified before booking",
        body: "The agent asks your questions first, so your team knows the brief before the call.",
        icon: "Filter",
      },
      {
        title: "Details without a form",
        body: "Name, company, phone and work email, collected in the chat.",
        icon: "ClipboardCheck",
      },
      {
        title: "Book from any channel",
        body: "Leads can book from website chat, WhatsApp, Instagram or Facebook Messenger.",
        icon: "Layers",
      },
    ],
    steps: [
      {
        title: "The lead asks",
        body: "A visitor asks about your services on your website, WhatsApp or social.",
        bullets: ["Website chat", "WhatsApp", "Instagram and Messenger"],
      },
      {
        title: "The agent qualifies",
        body: "It asks your questions and collects contact details in the chat.",
        bullets: ["Your own qualifying questions", "Tap options and free text", "No separate form"],
      },
      {
        title: "The call is booked",
        body: "The lead picks an open time and gets the invite by email.",
        bullets: ["Reschedule from the invite", "Answers saved on the lead", "Your team sees the brief"],
      },
    ],
    faqs: [
      {
        q: "Can visitors book a call inside the chat?",
        a: "Yes. After collecting their details, the agent offers open times and books the call in the chat. The visitor gets a calendar invite by email.",
      },
      {
        q: "What kinds of appointments can it book?",
        a: "The call your team runs with new leads, such as a discovery call, a demo or a consultation. You set it up the way your business works.",
      },
      {
        q: "Can the lead reschedule?",
        a: "Yes. The calendar invite arrives by email, and the lead can reschedule from it.",
      },
      {
        q: "Does the agent qualify the lead before booking?",
        a: "Yes. It asks your qualifying questions and collects contact details first, so your team starts the call knowing the brief.",
      },
      {
        q: "Can it book from WhatsApp and social too?",
        a: "Yes. The same agent answers on WhatsApp, Instagram and Facebook Messenger as well as your website, with one memory of each lead.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Retain                                                             */
  /* ------------------------------------------------------------------ */

  "conversational-support": {
    title: "Conversational Support",
    eyebrow: "Retain",
    icon: "Headphones",
    seoTitle: "AI Customer Support for Existing Clients | YourLio",
    seoDescription:
      "Support clients on chat, WhatsApp, social, email and calls. The AI answers first, hands off with a reason, and your team works from one helpdesk.",
    h1: "Support your clients on the channels they already use.",
    sub: "The AI answers client questions first, day or night, and hands off to your team with a reason. Your team works every ticket in one helpdesk with the client's full history beside it.",
    plan: "AI Agent plan and AI CRM & Helpdesk",
    image: "helpdesk",
    capabilities: [
      {
        title: "AI answers first",
        body: "The AI replies to clients on your website, WhatsApp, Instagram and Messenger, in their language.",
        icon: "Bot",
      },
      {
        title: "Hand off with a reason",
        body: "When a person should step in, the AI passes the ticket to your team and says why.",
        icon: "Handshake",
      },
      {
        title: "Tickets with owners",
        body: "Ownership, assignments, internal notes, statuses, priorities and labels on every ticket.",
        icon: "ClipboardCheck",
      },
      {
        title: "Calls on the ticket",
        body: "WhatsApp and phone calls from the browser, with recordings and AI transcripts saved on the ticket.",
        icon: "Phone",
      },
      {
        title: "Client memory",
        body: "Each client's memory sits beside the ticket, so they do not have to explain twice.",
        icon: "HeartHandshake",
      },
      {
        title: "Resolution reports",
        body: "See performance and resolution reports for each person and team.",
        icon: "BarChart3",
      },
    ],
    steps: [
      {
        title: "A client gets in touch",
        body: "On chat, WhatsApp, social, email, SMS or a call.",
        bullets: ["Website chat and WhatsApp", "Instagram and Facebook", "Email, SMS and calls"],
      },
      {
        title: "The AI answers first",
        body: "It answers from what you taught it and hands off with a reason when a person should step in.",
        bullets: ["Replies in the client's language", "Trained and corrected by your team", "Hand off with a reason"],
      },
      {
        title: "Your team resolves it",
        body: "The ticket goes to the right person with a summary and the client's memory.",
        bullets: ["Routing by teams and shifts", "One click summaries", "Quick replies"],
      },
    ],
    faqs: [
      {
        q: "Can the AI answer support questions from existing clients?",
        a: "Yes. It answers from what you teach it about your services, and you can correct any answer. When a person should step in, it hands off with a reason.",
      },
      {
        q: "Which channels can clients use?",
        a: "Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls all land in one helpdesk inbox. Gmail and Outlook mailboxes connect directly.",
      },
      {
        q: "Does the client have to repeat themselves after a hand off?",
        a: "No. The conversation is on the ticket and the client's memory sits beside it. Your team can also get a one click summary.",
      },
      {
        q: "Can we call clients from the helpdesk?",
        a: "Yes. WhatsApp and phone calls run from the browser, with recordings and AI transcripts saved on the ticket. Knowlarity and DLT calling lines can be connected.",
      },
      {
        q: "Does it work with HubSpot or Zoho Desk?",
        a: "YourLio syncs with HubSpot and the tools you already use. Zoho Desk is available as an integration.",
      },
    ],
  },

  "send-promotions-and-newsletters": {
    title: "Promotions and Newsletters",
    eyebrow: "Retain",
    icon: "Megaphone",
    seoTitle: "WhatsApp, Email and SMS Campaigns | YourLio",
    seoDescription:
      "Send updates, offers and newsletters on WhatsApp, email, SMS and web push. Describe your audience in plain words and let the AI agent answer WhatsApp replies.",
    h1: "Keep leads and clients warm with campaigns that start conversations.",
    sub: "Send updates, offers and newsletters on WhatsApp, email, SMS and web push. Describe who should get them in plain words, and the AI agent picks up the WhatsApp replies.",
    plan: "Marketing Suite add on",
    image: "journeys",
    capabilities: [
      {
        title: "Four channels",
        body: "Campaigns on WhatsApp, email, SMS and web push, from one place.",
        icon: "Send",
      },
      {
        title: "AI segments in plain words",
        body: "Describe your audience in plain words, such as qualified leads who have not booked a call. Segments refresh daily.",
        icon: "Sparkles",
      },
      {
        title: "Drag and drop journeys",
        body: "Lay out a series of messages in a drag and drop journey.",
        icon: "Workflow",
      },
      {
        title: "Control groups",
        body: "Hold back a control group to see the real lift a campaign brings.",
        icon: "Target",
      },
      {
        title: "Replies handled",
        body: "When a lead replies on WhatsApp, the AI agent answers with the same memory and can book the call.",
        icon: "Bot",
      },
      {
        title: "No markup on WhatsApp",
        body: "You pay Meta directly for WhatsApp messaging fees. We add nothing on top.",
        icon: "ShieldCheck",
      },
    ],
    steps: [
      {
        title: "Pick your audience",
        body: "Describe who should get the message in plain words.",
        bullets: ["AI segments", "Refreshed daily", "Leads, clients or both"],
      },
      {
        title: "Write and send",
        body: "Choose the channel and send a campaign or build a journey.",
        bullets: ["WhatsApp and email", "SMS and web push", "Drag and drop journeys"],
      },
      {
        title: "Handle replies and measure",
        body: "Replies come back as conversations, and control groups show what the campaign changed.",
        bullets: ["AI agent answers WhatsApp replies", "Replies in the shared inbox", "Control groups"],
      },
    ],
    faqs: [
      {
        q: "Which channels can I send campaigns on?",
        a: "WhatsApp, email, SMS and web push, all from the Marketing Suite. It is a $199 a month add on.",
      },
      {
        q: "How do AI segments work?",
        a: "You describe the audience in plain words and the segment is built for you. Segments refresh daily, so new leads who match are included.",
      },
      {
        q: "Do you charge extra for WhatsApp messages?",
        a: "There is no markup on WhatsApp. You pay Meta directly for messaging fees.",
      },
      {
        q: "What happens when someone replies to a campaign?",
        a: "On WhatsApp, the AI agent answers with the same memory of the lead and can book the call. Replies also land in the shared inbox for your team.",
      },
      {
        q: "How do I know a campaign worked?",
        a: "Use a control group. Part of the audience is held back, so you can see the real lift the campaign brought.",
      },
    ],
  },

  "send-renewal-reminders": {
    title: "Renewal Reminders",
    eyebrow: "Retain",
    icon: "Bell",
    seoTitle: "Automated Follow Ups and Renewal Reminders | YourLio",
    seoDescription:
      "Send follow ups and renewal reminders on WhatsApp, email, SMS and web push with drag and drop journeys. The AI agent answers replies and books the call.",
    h1: "Follow ups and reminders that go out without anyone chasing.",
    sub: "Build follow ups and renewal reminders as drag and drop journeys on WhatsApp, email, SMS and web push. When a client replies on WhatsApp, the AI agent answers and can book the call.",
    plan: "Marketing Suite add on",
    image: "journeys",
    capabilities: [
      {
        title: "Drag and drop journeys",
        body: "Lay out each follow up step by step, from the first nudge to the last reminder.",
        icon: "Workflow",
      },
      {
        title: "Segments in plain words",
        body: "Describe who needs a reminder, such as clients whose plan renews next month. Segments refresh daily.",
        icon: "Sparkles",
      },
      {
        title: "Every channel",
        body: "Reminders on WhatsApp, email, SMS and web push.",
        icon: "Send",
      },
      {
        title: "Replies answered",
        body: "On WhatsApp, the AI agent picks up the reply with the client's memory and can book a call.",
        icon: "Bot",
      },
      {
        title: "Bring back quiet leads",
        body: "Follow up with leads who went quiet after a first chat, without anyone keeping a list by hand.",
        icon: "Users",
      },
      {
        title: "Control groups",
        body: "Hold back a control group and see the real lift your reminders bring.",
        icon: "Target",
      },
    ],
    steps: [
      {
        title: "Choose who to remind",
        body: "Describe the group in plain words and let the AI build the segment.",
        bullets: ["Leads who went quiet", "Clients due for renewal", "Segments refreshed daily"],
      },
      {
        title: "Build the journey",
        body: "Lay out the messages in the order you want them sent.",
        bullets: ["Drag and drop steps", "WhatsApp, email, SMS and web push", "One journey for each reminder"],
      },
      {
        title: "Let the agent handle replies",
        body: "Replies come back as conversations your team and the agent can pick up.",
        bullets: ["Answers on WhatsApp with full memory", "Books the call when the client is ready", "Replies in the shared inbox"],
      },
    ],
    faqs: [
      {
        q: "What kinds of follow ups can I send?",
        a: "Renewal reminders, check ins with leads who went quiet and any other follow up you want to run. You build each one as a drag and drop journey on WhatsApp, email, SMS or web push.",
      },
      {
        q: "How do I choose who gets each reminder?",
        a: "Describe the audience in plain words and the AI builds the segment. Segments refresh daily, so new people who match are picked up.",
      },
      {
        q: "What happens when a client replies?",
        a: "On WhatsApp, the AI agent answers with the client's memory and can book a call. Every reply also lands in the shared inbox for your team.",
      },
      {
        q: "Is there a markup on WhatsApp messages?",
        a: "No. You pay Meta directly for WhatsApp messaging fees.",
      },
      {
        q: "Which plan includes journeys?",
        a: "Journeys and campaigns are part of the Marketing Suite, a $199 a month add on. Add it when you need it.",
      },
    ],
  },

  surveys: {
    title: "Customer Feedback",
    eyebrow: "Retain",
    icon: "ClipboardCheck",
    seoTitle: "Collect Customer Feedback on WhatsApp and Email | YourLio",
    seoDescription:
      "Ask clients for feedback with a WhatsApp or email campaign. Replies land in your shared inbox and on each client's memory, ready for your team to act on.",
    h1: "Ask for feedback on WhatsApp and email, and act on every reply.",
    sub: "Send a feedback request as a WhatsApp or email campaign. Replies come back as conversations in your shared inbox and are saved on each client's memory.",
    plan: "Marketing Suite add on",
    image: "inbox",
    capabilities: [
      {
        title: "Ask on WhatsApp or email",
        body: "Send your feedback questions as a campaign from the Marketing Suite.",
        icon: "Send",
      },
      {
        title: "Pick who to ask",
        body: "Describe the group in plain words, such as clients who booked a call last month. Segments refresh daily.",
        icon: "Sparkles",
      },
      {
        title: "Replies in the shared inbox",
        body: "Every reply lands as a conversation your team can read, assign and answer.",
        icon: "Inbox",
      },
      {
        title: "Saved on the client's memory",
        body: "Feedback stays with the client, so the next person who talks to them knows what they said.",
        icon: "HeartHandshake",
      },
      {
        title: "Follow up on what you hear",
        body: "Reply to a concern from the same conversation, or call the client from the browser.",
        icon: "Headphones",
      },
      {
        title: "Part of a journey",
        body: "Add the feedback request as a step in a drag and drop journey.",
        icon: "Workflow",
      },
    ],
    steps: [
      {
        title: "Choose who to ask",
        body: "Describe the clients you want to hear from in plain words.",
        bullets: ["AI segments in plain words", "Refreshed daily", "Leads or clients"],
      },
      {
        title: "Send the question",
        body: "Ask on the channel your clients already use.",
        bullets: ["WhatsApp campaign", "Email campaign", "Or a step in a journey"],
      },
      {
        title: "Read and act on replies",
        body: "Every answer comes back as a conversation your team can pick up.",
        bullets: ["Replies in the shared inbox", "Saved on the client's memory", "Assign follow ups to your team"],
      },
    ],
    faqs: [
      {
        q: "Is there a separate survey tool?",
        a: "No. You ask for feedback with a WhatsApp or email campaign from the Marketing Suite, and replies come back as conversations. That keeps feedback next to everything else you know about the client.",
      },
      {
        q: "Can I ask a CSAT or NPS style question?",
        a: "Yes. A campaign can ask any question, including a rating question. Replies land in the shared inbox and on the client's memory, but YourLio does not calculate a score for you.",
      },
      {
        q: "Where do the replies go?",
        a: "Into the shared inbox, where your team can read, assign and answer them. Each reply is also saved on the client's memory.",
      },
      {
        q: "Can my team follow up on a concern?",
        a: "Yes. Replies are conversations, so your team can answer straight away, assign the follow up or call the client from the browser.",
      },
      {
        q: "What do I need to send feedback requests?",
        a: "The Marketing Suite, a $199 a month add on, for WhatsApp and email campaigns. You pay Meta directly for WhatsApp messaging fees, with no markup.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Platform and why us                                                */
  /* ------------------------------------------------------------------ */

  "omnichannel-ai-crm-conversation-platform": {
    title: "What is YourLio for business?",
    eyebrow: "Platform",
    icon: "Layers",
    seoTitle: "AI Agent, CRM and Helpdesk for Every Channel | YourLio",
    seoDescription:
      "YourLio for business answers, qualifies and books leads from chat, WhatsApp, social, ads and calls, with one memory, a shared inbox, a CRM and campaigns.",
    h1: "One AI agent, one memory and one inbox for every conversation.",
    sub: "YourLio for business answers leads from your website, WhatsApp, Instagram, Facebook, ads and calls, qualifies them and books the call. Your team works every lead and client from one inbox and CRM.",
    plan: "AI Agent plans, add ons and AI CRM & Helpdesk",
    image: "channels",
    capabilities: [
      {
        title: "AI Agent",
        body: "Answers on website chat, WhatsApp, Instagram and Messenger, asks your questions and books the call.",
        icon: "Sparkles",
      },
      {
        title: "AI calls",
        body: "An AI voice agent talks to leads on the phone and qualifies them the same way it does in chat.",
        icon: "Phone",
      },
      {
        title: "Meta ads",
        body: "Leads from Facebook and Instagram ads go straight into a conversation, with the ad that started it.",
        icon: "Target",
      },
      {
        title: "AI CRM & Helpdesk",
        body: "One inbox for every channel, with tickets, routing, CRM stages and calls from the browser.",
        icon: "Inbox",
      },
      {
        title: "Social Suite",
        body: "Comment to DM, story replies, mentions and ad comments on Instagram and Facebook.",
        icon: "MessagesSquare",
      },
      {
        title: "Marketing Suite",
        body: "Campaigns and journeys on WhatsApp, email, SMS and web push, with AI segments and control groups.",
        icon: "Megaphone",
      },
    ],
    steps: [
      {
        title: "Capture",
        body: "Every way a lead reaches you lands with the same agent.",
        bullets: ["Website chat and popups", "WhatsApp, Instagram and Facebook", "Meta ads, QR codes and calls"],
      },
      {
        title: "Convert",
        body: "The agent qualifies, your team routes and the call gets booked.",
        bullets: ["Your qualifying questions", "Routing by teams and shifts", "Calls booked with an email invite"],
      },
      {
        title: "Retain",
        body: "Support clients and keep in touch from the same platform.",
        bullets: ["AI first support with hand off", "Campaigns and journeys", "One memory of every client"],
      },
    ],
    faqs: [
      {
        q: "What is YourLio for business?",
        a: "An AI agent, shared inbox and CRM for businesses that sell through a conversation, a call, a quote or an appointment. It answers leads on every channel, qualifies them and books the call, then helps your team support them as clients.",
      },
      {
        q: "Is this the same YourLio that Shopify brands use?",
        a: "It is the same platform and the same AI agent. This site shows how it works for businesses that sell through calls, quotes, site visits and appointments.",
      },
      {
        q: "Which channels does YourLio cover?",
        a: "Website chat, WhatsApp, Instagram, Facebook Messenger, email, SMS and calls, plus leads from Meta ads. The AI agent answers on chat and messaging channels, and an AI voice agent talks to leads on the phone.",
      },
      {
        q: "Do I have to buy everything?",
        a: "No. Start with an AI Agent plan and add the Social Suite, the Marketing Suite or AI CRM & Helpdesk when you need them.",
      },
      {
        q: "Does it work with our current tools?",
        a: "Yes. YourLio syncs with HubSpot and the tools you already use. Integrations include Gmail, Outlook, Zoho Desk, Knowlarity, MSG91, Infobip, SendGrid, Razorpay and Klaviyo.",
      },
      {
        q: "Who is behind YourLio?",
        a: "YourLio AI, formerly Helio AI, is built by HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED in Bengaluru. YourLio for business is the same platform, set up for teams that sell through conversations.",
      },
    ],
  },

  "why-choose-us": {
    title: "Why YourLio",
    eyebrow: "Why us",
    icon: "Award",
    seoTitle: "Why YourLio: One Agent, One Memory, Every Channel",
    seoDescription:
      "One AI agent and one memory across every channel, no flow trees to draw, AI first with human hand off, a shared inbox and CRM. Add only the suites you need.",
    h1: "One agent that knows every lead, on every channel.",
    sub: "YourLio runs one AI agent with one memory across your website, WhatsApp, social, ads and calls. Your team works from one inbox and CRM, and you add only the suites you need.",
    plan: "The whole platform",
    image: "profiles",
    capabilities: [
      {
        title: "One agent, every channel",
        body: "The same agent answers on your website, WhatsApp, Instagram, Messenger and ads, with an AI voice agent on calls.",
        icon: "Layers",
      },
      {
        title: "One memory of every lead",
        body: "Answers from every channel are saved on the lead, so nobody is asked twice.",
        icon: "Users",
      },
      {
        title: "No flow trees to draw",
        body: "You set the questions and the goal. The agent runs the conversation and uses tap options where they help.",
        icon: "Workflow",
      },
      {
        title: "AI first, people when it matters",
        body: "The AI answers first and hands off with a reason. Your team can step into any chat live.",
        icon: "Handshake",
      },
      {
        title: "Shared inbox and CRM",
        body: "Every channel in one inbox, with ownership, routing and stages from new to booked.",
        icon: "Inbox",
      },
      {
        title: "Add only what you need",
        body: "Start with the AI agent. Add the Social Suite, Marketing Suite or AI CRM & Helpdesk when you are ready.",
        icon: "SlidersHorizontal",
      },
    ],
    steps: [
      {
        title: "Start with the agent",
        body: "Put the agent on your website and messaging channels with your questions and voice.",
        bullets: ["Any website, with our team's help", "WhatsApp, Instagram and Messenger", "Your questions and brand voice"],
      },
      {
        title: "Bring in your team",
        body: "Everyone works from the same conversations and the same memory.",
        bullets: ["Unlimited team seats", "Shared inbox and CRM", "Hand off with a reason"],
      },
      {
        title: "Grow when you are ready",
        body: "Add suites as your needs change, and keep the tools you already use.",
        bullets: ["Social Suite for comments and DMs", "Marketing Suite for campaigns", "Syncs with HubSpot"],
      },
    ],
    faqs: [
      {
        q: "How is YourLio different from a chatbot builder?",
        a: "There are no flow trees to draw. You set the questions and the goal, and the agent understands free text, then guides with tap options. It keeps one memory of each lead across every channel.",
      },
      {
        q: "Does the AI replace my team?",
        a: "No. The AI answers first and hands off to your team with a reason when a person should step in. Your team can join any chat live.",
      },
      {
        q: "Do I need to change my website or CRM?",
        a: "No. The agent works on custom built websites, WooCommerce, Magento, BigCommerce and Shopify, and our team helps you add it. YourLio syncs with HubSpot and the tools you already use.",
      },
      {
        q: "Can I start small?",
        a: "Yes. Start with an AI Agent plan and add the Social Suite, the Marketing Suite or AI CRM & Helpdesk only when you need them.",
      },
      {
        q: "How is YourLio priced?",
        a: "The Social Suite is $49 a month and the Marketing Suite is $199 a month, on top of an AI Agent plan. AI CRM & Helpdesk has its own flat team price, quoted on a call.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* WhatsApp                                                           */
  /* ------------------------------------------------------------------ */

  "whatsapp-business-api": {
    title: "WhatsApp Business API",
    eyebrow: "WhatsApp",
    icon: "MessageCircle",
    seoTitle: "WhatsApp Business API with an AI Agent | YourLio",
    seoDescription:
      "Connect your WhatsApp Business number to an AI agent that answers, qualifies and books calls, with a shared team inbox and campaigns at no markup.",
    h1: "Put an AI agent and your whole team on your WhatsApp number.",
    sub: "Connect your WhatsApp Business number and the AI agent answers enquiries there with the same memory it has on your website. Your team shares the number in one inbox.",
    plan: "AI Agent plan",
    image: "agent",
    capabilities: [
      {
        title: "AI agent on WhatsApp",
        body: "Answers enquiries, asks your questions and books the call, day or night.",
        icon: "Bot",
      },
      {
        title: "Same memory as your website",
        body: "A lead who chatted on your website is not asked the same questions again on WhatsApp.",
        icon: "Users",
      },
      {
        title: "One number, whole team",
        body: "Your team shares one WhatsApp number in one inbox and can step into any chat.",
        icon: "Inbox",
      },
      {
        title: "WhatsApp calls",
        body: "With AI CRM & Helpdesk, your team calls leads and clients on WhatsApp from the browser, with recordings and AI transcripts on the ticket.",
        icon: "Phone",
      },
      {
        title: "Campaigns",
        body: "Send WhatsApp campaigns from the Marketing Suite and let the agent handle the replies.",
        icon: "Megaphone",
      },
      {
        title: "No markup",
        body: "You pay Meta directly for WhatsApp messaging fees.",
        icon: "ShieldCheck",
      },
    ],
    steps: [
      {
        title: "Connect your number",
        body: "Connect your WhatsApp Business number and tell the agent about your business.",
        bullets: ["Your WhatsApp Business number", "Your brand voice and persona", "Your qualifying questions"],
      },
      {
        title: "Let the agent answer",
        body: "It replies to every enquiry, qualifies the lead and books the call.",
        bullets: ["Replies in the lead's language", "Contact details in the chat", "Calls booked with an email invite"],
      },
      {
        title: "Bring in your team",
        body: "Everyone works from the same number and the same history.",
        bullets: ["One shared inbox", "Hand off with a reason", "Unlimited team seats"],
      },
    ],
    faqs: [
      {
        q: "What is the WhatsApp Business API?",
        a: "It is how businesses connect a WhatsApp number to software, so an AI agent and a whole team can work from it. YourLio connects your WhatsApp Business number and puts the agent and your team on it.",
      },
      {
        q: "Who pays for WhatsApp messages?",
        a: "You pay Meta directly for WhatsApp messaging fees. YourLio adds no markup.",
      },
      {
        q: "Does the agent remember leads from my website?",
        a: "Yes. The agent keeps one memory of each lead across channels, so a lead who started on your website is not asked again on WhatsApp.",
      },
      {
        q: "Can several people reply from one number?",
        a: "Yes. Your team shares one WhatsApp number in one inbox, and anyone can step into a chat live.",
      },
      {
        q: "Can I send WhatsApp campaigns?",
        a: "Yes, with the Marketing Suite. Send campaigns to segments you describe in plain words, and the agent handles the replies.",
      },
      {
        q: "How do people find my WhatsApp number?",
        a: "Share a click to chat link or a QR code on your website, ads, flyers and event stands. You can make both with our free WhatsApp link and QR code generators.",
      },
    ],
  },

  "whatsapp-business-calling-api": {
    title: "WhatsApp Business Calling API",
    eyebrow: "WhatsApp",
    icon: "Phone",
    seoTitle: "WhatsApp Business Calling from Your Browser | YourLio",
    seoDescription:
      "Handle WhatsApp and phone calls from the browser, with recordings and AI transcripts on the ticket. Add AI calls that qualify leads on the phone.",
    h1: "WhatsApp and phone calls from the browser, saved on every ticket.",
    sub: "Your team talks to leads and clients on WhatsApp and phone lines from the browser, with recordings and AI transcripts saved on the ticket. AI calls qualify leads on the phone the same way the agent does in chat.",
    plan: "AI CRM & Helpdesk",
    image: "helpdesk",
    capabilities: [
      {
        title: "WhatsApp calls in the browser",
        body: "Your team talks to leads and clients on WhatsApp from the browser.",
        icon: "Phone",
      },
      {
        title: "Phone lines too",
        body: "Connect Knowlarity and DLT calling lines and handle phone calls from the same place.",
        icon: "Headphones",
      },
      {
        title: "Recordings on the ticket",
        body: "Call recordings are saved on the ticket, beside the rest of the conversation.",
        icon: "ClipboardCheck",
      },
      {
        title: "AI transcripts",
        body: "An AI transcript sits with each recording, so anyone can catch up without listening to the whole call.",
        icon: "Sparkles",
      },
      {
        title: "AI calls",
        body: "An AI voice agent talks to leads on the phone and qualifies them the same way it does in chat.",
        icon: "Bot",
      },
      {
        title: "One history",
        body: "Calls sit with chats, emails and the customer's memory, so the next conversation starts informed.",
        icon: "Users",
      },
    ],
    steps: [
      {
        title: "Connect your lines",
        body: "Bring your WhatsApp number and calling lines into AI CRM & Helpdesk.",
        bullets: ["Your WhatsApp Business number", "Knowlarity lines", "DLT calling lines"],
      },
      {
        title: "Call from the browser",
        body: "Your team calls from the same place they chat and email.",
        bullets: ["WhatsApp calls", "Phone calls", "From the same inbox as chat"],
      },
      {
        title: "Everything lands on the ticket",
        body: "Each call is saved where your team will look for it.",
        bullets: ["Recordings", "AI transcripts", "One click summaries"],
      },
    ],
    faqs: [
      {
        q: "Can my team make WhatsApp calls from YourLio?",
        a: "Yes. WhatsApp and phone calls run from the browser in AI CRM & Helpdesk. Recordings and AI transcripts are saved on the ticket.",
      },
      {
        q: "Which phone lines can I connect?",
        a: "Knowlarity and DLT calling lines can be connected, alongside your WhatsApp Business number. Calls on every line land on the ticket in the same way.",
      },
      {
        q: "What are AI calls?",
        a: "An AI voice agent talks to leads on the phone and qualifies them the same way the AI agent does in chat. It asks the questions you choose.",
      },
      {
        q: "Where do call recordings go?",
        a: "On the ticket, with an AI transcript. They sit beside the rest of the customer's conversations and memory, and a one click summary helps anyone catch up.",
      },
      {
        q: "How is calling priced?",
        a: "Browser calling is part of AI CRM & Helpdesk, which has its own flat team price quoted on a call. Ask us about AI calls on the same call.",
      },
    ],
  },

  "whatsapp-business-multiple-users": {
    title: "WhatsApp Business Multiple Users",
    eyebrow: "WhatsApp",
    icon: "Users",
    seoTitle: "WhatsApp Business for Multiple Users | YourLio",
    seoDescription:
      "Put your whole team on one WhatsApp Business number. Share one inbox, assign chats, add notes and let the AI agent answer first. Unlimited team seats.",
    h1: "One WhatsApp number, your whole team, one shared inbox.",
    sub: "Everyone on your team replies from the same WhatsApp Business number, with clear owners, internal notes and the full history of every chat. The AI agent answers first and hands off with a reason.",
    plan: "AI Agent plan and AI CRM & Helpdesk",
    image: "inbox",
    capabilities: [
      {
        title: "One number for everyone",
        body: "Your whole team works from one WhatsApp Business number, in one inbox.",
        icon: "MessageCircle",
      },
      {
        title: "Unlimited team seats",
        body: "Add everyone who talks to leads and clients. Every AI Agent plan includes unlimited seats.",
        icon: "Users",
      },
      {
        title: "Owners and assignments",
        body: "Each chat has an owner, so it is clear who replies.",
        icon: "Briefcase",
      },
      {
        title: "Internal notes",
        body: "Leave notes for colleagues on the chat. Only your team sees them.",
        icon: "ClipboardCheck",
      },
      {
        title: "Routing by shifts",
        body: "Send chats to people who are on shift and available.",
        icon: "Route",
      },
      {
        title: "AI answers first",
        body: "The agent replies first, day or night, and hands off with a reason.",
        icon: "Bot",
      },
    ],
    steps: [
      {
        title: "Connect your number",
        body: "Connect your WhatsApp Business number and invite your team.",
        bullets: ["Your WhatsApp Business number", "Same agent, same memory", "Unlimited team seats"],
      },
      {
        title: "Set up your team",
        body: "Decide who handles what, and when.",
        bullets: ["Teams and shifts", "Routing rules", "Quick replies"],
      },
      {
        title: "Work every chat together",
        body: "Everyone sees the same history and knows who owns each chat.",
        bullets: ["Ownership and assignments", "Internal notes", "One click summaries"],
      },
    ],
    faqs: [
      {
        q: "Can more than one person use the same WhatsApp Business number?",
        a: "Yes. Your team shares one WhatsApp number in one inbox, and each chat can be assigned to an owner.",
      },
      {
        q: "How many team members can I add?",
        a: "Every AI Agent plan includes unlimited team seats. AI CRM & Helpdesk has its own flat team price.",
      },
      {
        q: "How do we avoid two people replying to the same chat?",
        a: "Every chat has an owner and an assignment, and internal notes keep everyone on the same page. Routing by rules, teams, shifts and availability sends each chat to the right person.",
      },
      {
        q: "Does the AI agent still answer?",
        a: "Yes. The agent answers first with the same memory it has on every channel, and hands off to your team with a reason.",
      },
      {
        q: "Can we call from the shared number?",
        a: "Yes. WhatsApp calls run from the browser, with recordings and AI transcripts saved on the ticket.",
      },
    ],
  },

  "whatsapp-bulk-message": {
    title: "WhatsApp Bulk Message",
    eyebrow: "WhatsApp",
    icon: "Send",
    seoTitle: "Send WhatsApp Bulk Messages and Campaigns | YourLio",
    seoDescription:
      "Send WhatsApp campaigns to segments you describe in plain words. The AI agent handles replies and books calls, and you pay Meta directly with no markup.",
    h1: "Send WhatsApp campaigns that turn replies into booked calls.",
    sub: "Send WhatsApp campaigns from the Marketing Suite to segments you describe in plain words. When people reply, the AI agent answers with their full history and can book the call.",
    plan: "Marketing Suite add on",
    image: "journeys",
    capabilities: [
      {
        title: "Segments in plain words",
        body: "Describe who should get the message, and the AI builds the segment. Segments refresh daily.",
        icon: "Sparkles",
      },
      {
        title: "Campaigns and journeys",
        body: "Send a single campaign or a series of messages in a drag and drop journey.",
        icon: "Workflow",
      },
      {
        title: "Replies handled by the agent",
        body: "The AI agent answers replies with the same memory of each lead and can book the call.",
        icon: "Bot",
      },
      {
        title: "No markup",
        body: "You pay Meta directly for WhatsApp messaging fees. We add nothing on top.",
        icon: "ShieldCheck",
      },
      {
        title: "Control groups",
        body: "Hold back a control group to see the real lift each campaign brings.",
        icon: "Target",
      },
      {
        title: "More than WhatsApp",
        body: "Reach the same segment on email, SMS and web push from the same place.",
        icon: "Mail",
      },
    ],
    steps: [
      {
        title: "Describe your audience",
        body: "Say who should get the message in plain words.",
        bullets: ["AI segments", "Refreshed daily", "Leads, clients or both"],
      },
      {
        title: "Send the campaign",
        body: "Send it once or build it into a journey.",
        bullets: ["One message or a journey", "WhatsApp, email, SMS and web push", "A control group held back"],
      },
      {
        title: "Let the agent handle replies",
        body: "Every reply becomes a conversation the agent picks up.",
        bullets: ["Same memory of each lead", "Calls booked in the chat", "Hand off with a reason"],
      },
    ],
    faqs: [
      {
        q: "How do I send bulk WhatsApp messages with YourLio?",
        a: "Use the Marketing Suite to send WhatsApp campaigns to a segment or as part of a journey. The Marketing Suite is a $199 a month add on.",
      },
      {
        q: "Do you mark up WhatsApp message fees?",
        a: "No. You pay Meta directly for WhatsApp messaging fees, and YourLio adds nothing on top.",
      },
      {
        q: "Who replies when people answer a campaign?",
        a: "The AI agent answers with the same memory of each lead and can book the call. It hands off to your team with a reason when a person should step in.",
      },
      {
        q: "How do I choose who receives a campaign?",
        a: "Describe the audience in plain words and an AI segment is built for you. Segments refresh daily, so new people who match are included.",
      },
      {
        q: "How do I know if a campaign worked?",
        a: "Hold back a control group. Comparing the two groups shows the real lift the campaign brought.",
      },
    ],
  },

  "whatsapp-crm-integration": {
    title: "WhatsApp CRM Integration",
    eyebrow: "WhatsApp",
    icon: "Plug",
    seoTitle: "WhatsApp CRM with HubSpot Sync | YourLio",
    seoDescription:
      "Run WhatsApp leads through a CRM with stages, owners and notes, and sync with HubSpot and the tools you already use. The AI agent qualifies every chat.",
    h1: "A WhatsApp CRM where every chat becomes a lead you can track.",
    sub: "Every WhatsApp conversation lands in AI CRM & Helpdesk with the lead's answers, owner and stage. YourLio syncs with HubSpot and the tools you already use.",
    plan: "AI CRM & Helpdesk",
    image: "profiles",
    capabilities: [
      {
        title: "A lead from every chat",
        body: "Each WhatsApp conversation becomes a lead with its answers and full history.",
        icon: "Inbox",
      },
      {
        title: "Stages from new to booked",
        body: "Leads move from new to qualified to booked, and your team can see and change each stage.",
        icon: "Workflow",
      },
      {
        title: "Owners and notes",
        body: "Assign every lead, add internal notes and set statuses, priorities and labels.",
        icon: "Briefcase",
      },
      {
        title: "Customer memory",
        body: "Everything the lead said on WhatsApp, your website and social, in one memory beside the ticket.",
        icon: "Users",
      },
      {
        title: "Syncs with HubSpot",
        body: "YourLio syncs with HubSpot and the tools you already use. Zoho Desk is available as an integration.",
        icon: "Plug",
      },
      {
        title: "Source on every lead",
        body: "See which ad or post started each chat.",
        icon: "Search",
      },
    ],
    steps: [
      {
        title: "Connect WhatsApp",
        body: "Connect your WhatsApp Business number and let the agent answer first.",
        bullets: ["Your WhatsApp Business number", "AI agent answers first", "Same memory as other channels"],
      },
      {
        title: "Work leads in the CRM",
        body: "Your team owns, notes and moves every lead.",
        bullets: ["Stages from new to booked", "Owners and assignments", "Internal notes"],
      },
      {
        title: "Sync with your tools",
        body: "Keep the rest of your stack in the loop.",
        bullets: ["HubSpot", "Zoho Desk", "Gmail and Outlook"],
      },
    ],
    faqs: [
      {
        q: "Does YourLio include a WhatsApp CRM?",
        a: "Yes. AI CRM & Helpdesk puts every WhatsApp chat in one inbox, where leads move through stages your team can see and change. It also covers website chat, Instagram, Facebook, email, SMS and calls.",
      },
      {
        q: "Does it sync with HubSpot?",
        a: "Yes. YourLio syncs with HubSpot and the tools you already use. Tell us how your team works and we will show you the setup on a call.",
      },
      {
        q: "Can I use Zoho Desk?",
        a: "Zoho Desk is available as an integration. Ask on a call how it fits your setup.",
      },
      {
        q: "What does a WhatsApp lead look like in the CRM?",
        a: "Each lead shows the full conversation, their answers, the ad or post that started the chat and their memory from other channels. A one click summary helps anyone catch up.",
      },
      {
        q: "How is it priced?",
        a: "AI CRM & Helpdesk has its own flat team price, separate from the AI Agent plans. Book a call and we will quote for your team.",
      },
    ],
  },
};
