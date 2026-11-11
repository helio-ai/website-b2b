import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChatLinkTool } from "@/components/tools/ChatLinkTool";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Free WhatsApp Link Generator: Click to Chat Links | YourLio",
  description: "Create a free wa.me click to chat link with a pre-filled message. Use it on your website, ads, email signature, flyers and social bios.",
  path: "/whatsapp-link-generator",
});

const steps = [
  { title: "Enter your number", body: "Pick the country code and type your WhatsApp Business number." },
  { title: "Add a first message", body: "Optional. Pre-fill what the customer sends, such as which flyer or ad they came from." },
  { title: "Copy and share", body: "Use the link on your website, ads, email signature or social bio." },
];

const faqs = [
  { q: "What is a WhatsApp click to chat link?", a: "It is a wa.me link that opens a WhatsApp chat with your number when someone taps it. It can also pre-fill the first message for them." },
  { q: "Is the WhatsApp link generator free?", a: "Yes. It runs in your browser, needs no sign up and does not store your number." },
  { q: "Can I tell which link a lead came from?", a: "Yes. Give each link its own pre-filled message, such as the flyer or event name. With YourLio, the agent replies and the message is saved on the lead." },
  { q: "Who answers the chats the link brings in?", a: "Connect your WhatsApp Business number to YourLio and the AI agent answers, asks your qualifying questions and books the call, day or night." },
];

export default function Page() {
  return (
    <ToolShell title="WhatsApp Link Generator" sub="Create a free click to chat link with a pre-filled message, in seconds." steps={steps} faqs={faqs}>
      <ChatLinkTool mode="link" />
    </ToolShell>
  );
}
