import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChatLinkTool } from "@/components/tools/ChatLinkTool";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Free WhatsApp QR Code Generator for Business | YourLio",
  description: "Make a free WhatsApp QR code that opens a chat with your business. Download a PNG for flyers, shop counters, site boards and event stands.",
  path: "/whatsapp-qr-code-generator",
});

const steps = [
  { title: "Enter your number", body: "Pick the country code and type your WhatsApp Business number." },
  { title: "Add a first message", body: "Optional. Use a different message for each place you print the code." },
  { title: "Download the PNG", body: "Print it on flyers, shop counters, site boards, menus and event stands." },
];

const faqs = [
  { q: "How does a WhatsApp QR code work?", a: "Scanning the code with a phone camera opens a WhatsApp chat with your number, with your pre-filled message ready to send." },
  { q: "Is the QR code generator free?", a: "Yes. The code is created in your browser, needs no sign up and never expires because it points to a standard wa.me link." },
  { q: "How do I know where an offline lead came from?", a: "Use a different pre-filled message for each flyer, board or event. With YourLio, that first message is saved on the lead in your inbox and CRM." },
  { q: "Who replies when someone scans the code?", a: "Connect your WhatsApp Business number to YourLio and the AI agent replies, qualifies the lead and books the call, even out of hours." },
];

export default function Page() {
  return (
    <ToolShell title="WhatsApp QR Code Generator" sub="Turn a click to chat link into a QR code for anything you print." steps={steps} faqs={faqs}>
      <ChatLinkTool mode="qr" />
    </ToolShell>
  );
}
