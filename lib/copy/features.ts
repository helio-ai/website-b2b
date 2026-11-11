// Copy for each feature on the landing page. Written from YourLio product
// facts only; no results, certifications or features YourLio does not have.
export type FeatureCopy = {
  title: string;
  icon: string;
  h1: string;
  sub: string;
  plan: string;
  points: { title: string; body: string }[];
};

export const FEATURE_COPY: Record<string, FeatureCopy> = {
  "capture-leads-from-ads": {
    title: "Capture from Ads",
    icon: "Target",
    h1: "Turn every ad lead into a conversation that books the call.",
    sub: "Leads from your Facebook and Instagram ads go straight into a chat with the AI agent. It asks your questions, collects contact details and books the call while the ad is still fresh in their mind.",
    plan: "AI Agent plan and Social Suite add on",
    points: [
      {
        title: "Click to message ads",
        body: "Ads that open a chat on WhatsApp, Instagram or Messenger reach the agent first. It replies straight away, day or night."
      },
      {
        title: "Lead ads",
        body: "Leads from your lead ads go straight into a conversation with the agent, so the follow up starts while interest is high."
      },
      {
        title: "Your qualifying questions",
        body: "The agent asks what your sales team needs to know, such as budget, team size, location or timeline. Leads answer in one tap or in their own words."
      },
      {
        title: "See which ad started it",
        body: "Every chat shows the ad or post that started it, so you know which campaigns bring in leads that book."
      }
    ]
  },
  "capture-leads": {
    title: "Capture from Social",
    icon: "Users",
    h1: "Turn Instagram and Facebook comments and DMs into qualified leads.",
    sub: "The AI agent answers Instagram and Facebook DMs, moves people who comment into a private chat, asks your qualifying questions and books the call.",
    plan: "AI Agent plan and Social Suite add on",
    points: [
      {
        title: "DMs answered day or night",
        body: "The agent replies to Instagram DMs and Facebook Messenger chats in the language the person writes in."
      },
      {
        title: "Comment to DM",
        body: "When someone comments on a post, Reel or ad, they get a DM that starts the conversation. Part of the Social Suite."
      },
      {
        title: "Story replies and mentions",
        body: "Replies to your stories and mentions of your account get an answer, so people who reach out are not left waiting."
      },
      {
        title: "Qualified in the chat",
        body: "The agent asks your questions and collects name, company, phone and work email without a separate form."
      }
    ]
  },
  "capture-website-leads": {
    title: "Capture from Website",
    icon: "Globe",
    h1: "Turn website visitors into qualified leads and booked calls.",
    sub: "The AI agent answers enquiries on your website, asks your qualifying questions, collects contact details in the chat and books the call. Lead capture popups help you collect details from more of your visitors.",
    plan: "Every AI Agent plan",
    points: [
      {
        title: "Every enquiry answered",
        body: "The agent replies to visitors day or night, in the language they write in."
      },
      {
        title: "Free text, then tap options",
        body: "It understands questions in the visitor's own words, then guides with tap options that answer in one tap."
      },
      {
        title: "Your qualifying questions",
        body: "Team size, budget, location, timeline or whatever your team needs to know before a call."
      },
      {
        title: "Details without a form",
        body: "Name, company, phone and work email, collected inside the chat. No separate form page."
      }
    ]
  },
  "capture-offline-leads": {
    title: "Capture from Offline",
    icon: "QrCode",
    h1: "Turn flyers, counters and event stands into WhatsApp conversations.",
    sub: "A QR code or click to chat link opens a WhatsApp chat with the AI agent. It asks your questions, collects contact details and books the call, even when nobody is at the stand.",
    plan: "AI Agent plan",
    points: [
      {
        title: "QR codes for print",
        body: "Put a QR code on a flyer, a shop counter, a site board or an event stand. A scan opens a WhatsApp chat with the agent."
      },
      {
        title: "Click to chat links",
        body: "Add a click to chat link to brochures, slides and messages. One tap starts the conversation."
      },
      {
        title: "Answered on the spot",
        body: "The agent replies straight away, day or night, so a lead who scans after hours still gets an answer."
      },
      {
        title: "Qualified in WhatsApp",
        body: "It asks your qualifying questions and collects name, company, phone and work email in the chat."
      }
    ]
  },
  "ai-agents": {
    title: "AI Agents",
    icon: "Sparkles",
    h1: "One AI agent that answers, qualifies and books on every channel.",
    sub: "The agent talks to leads and clients on your website, WhatsApp, Instagram and Facebook Messenger, in your brand voice. It remembers each person across channels and hands off when your team should step in.",
    plan: "Every AI Agent plan",
    points: [
      {
        title: "Every channel, one agent",
        body: "Website chat, WhatsApp, Instagram and Facebook Messenger, answered day or night in the language the visitor writes in."
      },
      {
        title: "Understands free text",
        body: "People ask in their own words. The agent understands, then guides with tap options where they help."
      },
      {
        title: "Your brand voice",
        body: "Set a custom voice and persona so the agent sounds like your business."
      },
      {
        title: "Training and corrections",
        body: "Teach the agent about your business and correct any answer it gets wrong."
      }
    ]
  },
  "lead-qualification": {
    title: "Qualify Leads",
    icon: "Filter",
    h1: "Know which leads are a fit before the first call.",
    sub: "Ask your qualifying questions on every channel, save every answer on the lead and move them from new to qualified to booked. Your sales team spends its time on the leads that fit.",
    plan: "AI Agent plan and AI CRM & Helpdesk",
    points: [
      {
        title: "Questions you choose",
        body: "Budget, team size, location, timeline or whatever decides a fit for your business."
      },
      {
        title: "Asked on every channel",
        body: "Website chat, WhatsApp, Instagram, Messenger and AI calls all ask the same questions."
      },
      {
        title: "Answers saved on the lead",
        body: "Every answer sits on the lead's memory, beside the full conversation."
      },
      {
        title: "Stages your team can see",
        body: "Leads move through CRM stages from new to qualified to booked, and your team can change them."
      }
    ]
  },
  "lead-distribution": {
    title: "Route Leads",
    icon: "Route",
    h1: "Send every lead to the right person, on shift and available.",
    sub: "Route conversations by rules, teams, shifts and availability, so leads go to someone who can reply. Every lead has an owner and a stage your team can see.",
    plan: "AI CRM & Helpdesk",
    points: [
      {
        title: "Routing rules",
        body: "Set rules that send each conversation to the right person or team."
      },
      {
        title: "Teams",
        body: "Group your people into teams, such as sales and support, and route to the team."
      },
      {
        title: "Shifts and availability",
        body: "Conversations go to people who are on shift and available, not to someone who is off."
      },
      {
        title: "Clear ownership",
        body: "Every ticket has an owner and an assignment, so it is always clear who follows up."
      }
    ]
  },
  "book-a-meeting": {
    title: "Book Appointments",
    icon: "Calendar",
    h1: "Book the call while the lead is still in the chat.",
    sub: "The AI agent collects contact details, offers open times and books the call or appointment. The lead gets a calendar invite by email and can reschedule from it.",
    plan: "Every AI Agent plan",
    points: [
      {
        title: "Open times in the chat",
        body: "The agent offers open times inside the conversation, so the lead picks one without leaving."
      },
      {
        title: "Invite by email",
        body: "The lead gets a calendar invite by email as soon as the call is booked."
      },
      {
        title: "Reschedule from the invite",
        body: "If plans change, the lead reschedules from the invite. No back and forth."
      },
      {
        title: "Qualified before booking",
        body: "The agent asks your questions first, so your team knows the brief before the call."
      }
    ]
  },
  "team-inbox": {
    title: "Team Inbox",
    icon: "Inbox",
    h1: "Every conversation from every channel, in one team inbox.",
    sub: "Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls land in one place. Your team assigns, replies and follows up with the full history beside every chat.",
    plan: "AI CRM & Helpdesk",
    points: [
      {
        title: "One inbox, every channel",
        body: "Website chat, WhatsApp, Instagram, Facebook, email, SMS and calls, side by side."
      },
      {
        title: "Gmail and Outlook connected",
        body: "Connect your team's Gmail and Outlook mailboxes, so email sits beside every other conversation."
      },
      {
        title: "Ownership and assignments",
        body: "Every conversation has an owner. Assign it to a person or a team and add internal notes."
      },
      {
        title: "Statuses, priorities and labels",
        body: "Sort the inbox the way your team works, and reply faster with quick replies."
      }
    ]
  },
  "whatsapp-crm-integration": {
    title: "WhatsApp CRM Integration",
    icon: "Plug",
    h1: "A WhatsApp CRM where every chat becomes a lead you can track.",
    sub: "Every WhatsApp conversation lands in AI CRM & Helpdesk with the lead's answers, owner and stage. YourLio syncs with HubSpot and the tools you already use.",
    plan: "AI CRM & Helpdesk",
    points: [
      {
        title: "A lead from every chat",
        body: "Each WhatsApp conversation becomes a lead with its answers and full history."
      },
      {
        title: "Stages from new to booked",
        body: "Leads move from new to qualified to booked, and your team can see and change each stage."
      },
      {
        title: "Owners and notes",
        body: "Assign every lead, add internal notes and set statuses, priorities and labels."
      },
      {
        title: "Customer memory",
        body: "Everything the lead said on WhatsApp, your website and social, in one memory beside the ticket."
      }
    ]
  },
  "conversational-support": {
    title: "Conversational Support",
    icon: "Headphones",
    h1: "Support your clients on the channels they already use.",
    sub: "The AI answers client questions first, day or night, and hands off to your team with a reason. Your team works every ticket in one helpdesk with the client's full history beside it.",
    plan: "AI Agent plan and AI CRM & Helpdesk",
    points: [
      {
        title: "AI answers first",
        body: "The AI replies to clients on your website, WhatsApp, Instagram and Messenger, in their language."
      },
      {
        title: "Hand off with a reason",
        body: "When a person should step in, the AI passes the ticket to your team and says why."
      },
      {
        title: "Tickets with owners",
        body: "Ownership, assignments, internal notes, statuses, priorities and labels on every ticket."
      },
      {
        title: "Calls on the ticket",
        body: "WhatsApp and phone calls from the browser, with recordings and AI transcripts saved on the ticket."
      }
    ]
  },
  "send-promotions-and-newsletters": {
    title: "Promotions and Newsletters",
    icon: "Megaphone",
    h1: "Keep leads and clients warm with campaigns that start conversations.",
    sub: "Send updates, offers and newsletters on WhatsApp, email, SMS and web push. Describe who should get them in plain words, and the AI agent picks up the WhatsApp replies.",
    plan: "Marketing Suite add on",
    points: [
      {
        title: "Four channels",
        body: "Campaigns on WhatsApp, email, SMS and web push, from one place."
      },
      {
        title: "AI segments in plain words",
        body: "Describe your audience in plain words, such as qualified leads who have not booked a call. Segments refresh daily."
      },
      {
        title: "Drag and drop journeys",
        body: "Lay out a series of messages in a drag and drop journey."
      },
      {
        title: "Control groups",
        body: "Hold back a control group to see the real lift a campaign brings."
      }
    ]
  },
  "send-renewal-reminders": {
    title: "Renewal Reminders",
    icon: "Bell",
    h1: "Follow ups and reminders that go out without anyone chasing.",
    sub: "Build follow ups and renewal reminders as drag and drop journeys on WhatsApp, email, SMS and web push. When a client replies on WhatsApp, the AI agent answers and can book the call.",
    plan: "Marketing Suite add on",
    points: [
      {
        title: "Drag and drop journeys",
        body: "Lay out each follow up step by step, from the first nudge to the last reminder."
      },
      {
        title: "Segments in plain words",
        body: "Describe who needs a reminder, such as clients whose plan renews next month. Segments refresh daily."
      },
      {
        title: "Every channel",
        body: "Reminders on WhatsApp, email, SMS and web push."
      },
      {
        title: "Replies answered",
        body: "On WhatsApp, the AI agent picks up the reply with the client's memory and can book a call."
      }
    ]
  },
  surveys: {
    title: "Customer Feedback",
    icon: "ClipboardCheck",
    h1: "Ask for feedback on WhatsApp and email, and act on every reply.",
    sub: "Send a feedback request as a WhatsApp or email campaign. Replies come back as conversations in your shared inbox and are saved on each client's memory.",
    plan: "Marketing Suite add on",
    points: [
      {
        title: "Ask on WhatsApp or email",
        body: "Send your feedback questions as a campaign from the Marketing Suite."
      },
      {
        title: "Pick who to ask",
        body: "Describe the group in plain words, such as clients who booked a call last month. Segments refresh daily."
      },
      {
        title: "Replies in the shared inbox",
        body: "Every reply lands as a conversation your team can read, assign and answer."
      },
      {
        title: "Saved on the client's memory",
        body: "Feedback stays with the client, so the next person who talks to them knows what they said."
      }
    ]
  },
  "whatsapp-business-api": {
    title: "WhatsApp Business API",
    icon: "MessageCircle",
    h1: "Put an AI agent and your whole team on your WhatsApp number.",
    sub: "Connect your WhatsApp Business number and the AI agent answers enquiries there with the same memory it has on your website. Your team shares the number in one inbox.",
    plan: "AI Agent plan",
    points: [
      {
        title: "AI agent on WhatsApp",
        body: "Answers enquiries, asks your questions and books the call, day or night."
      },
      {
        title: "Same memory as your website",
        body: "A lead who chatted on your website is not asked the same questions again on WhatsApp."
      },
      {
        title: "One number, whole team",
        body: "Your team shares one WhatsApp number in one inbox and can step into any chat."
      },
      {
        title: "WhatsApp calls",
        body: "With AI CRM & Helpdesk, your team calls leads and clients on WhatsApp from the browser, with recordings and AI transcripts on the ticket."
      }
    ]
  },
  "whatsapp-business-calling-api": {
    title: "WhatsApp Business Calling API",
    icon: "Phone",
    h1: "WhatsApp and phone calls from the browser, saved on every ticket.",
    sub: "Your team talks to leads and clients on WhatsApp and phone lines from the browser, with recordings and AI transcripts saved on the ticket. AI calls qualify leads on the phone the same way the agent does in chat.",
    plan: "AI CRM & Helpdesk",
    points: [
      {
        title: "WhatsApp calls in the browser",
        body: "Your team talks to leads and clients on WhatsApp from the browser."
      },
      {
        title: "Phone lines too",
        body: "Connect Knowlarity and DLT calling lines and handle phone calls from the same place."
      },
      {
        title: "Recordings on the ticket",
        body: "Call recordings are saved on the ticket, beside the rest of the conversation."
      },
      {
        title: "AI transcripts",
        body: "An AI transcript sits with each recording, so anyone can catch up without listening to the whole call."
      }
    ]
  },
  "whatsapp-business-multiple-users": {
    title: "WhatsApp Business Multiple Users",
    icon: "Users",
    h1: "One WhatsApp number, your whole team, one shared inbox.",
    sub: "Everyone on your team replies from the same WhatsApp Business number, with clear owners, internal notes and the full history of every chat. The AI agent answers first and hands off with a reason.",
    plan: "AI Agent plan and AI CRM & Helpdesk",
    points: [
      {
        title: "One number for everyone",
        body: "Your whole team works from one WhatsApp Business number, in one inbox."
      },
      {
        title: "Unlimited team seats",
        body: "Add everyone who talks to leads and clients. Every AI Agent plan includes unlimited seats."
      },
      {
        title: "Owners and assignments",
        body: "Each chat has an owner, so it is clear who replies."
      },
      {
        title: "Internal notes",
        body: "Leave notes for colleagues on the chat. Only your team sees them."
      }
    ]
  },
  "whatsapp-bulk-message": {
    title: "WhatsApp Bulk Message",
    icon: "Send",
    h1: "Send WhatsApp campaigns that turn replies into booked calls.",
    sub: "Send WhatsApp campaigns from the Marketing Suite to segments you describe in plain words. When people reply, the AI agent answers with their full history and can book the call.",
    plan: "Marketing Suite add on",
    points: [
      {
        title: "Segments in plain words",
        body: "Describe who should get the message, and the AI builds the segment. Segments refresh daily."
      },
      {
        title: "Campaigns and journeys",
        body: "Send a single campaign or a series of messages in a drag and drop journey."
      },
      {
        title: "Replies handled by the agent",
        body: "The AI agent answers replies with the same memory of each lead and can book the call."
      },
      {
        title: "No markup",
        body: "You pay Meta directly for WhatsApp messaging fees. We add nothing on top."
      }
    ]
  }
};
