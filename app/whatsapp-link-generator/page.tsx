import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChatLinkTool } from "@/components/tools/ChatLinkTool";

export const metadata: Metadata = {
  title: "WhatsApp Link Generator",
  description: "Placeholder description for the WhatsApp link generator.",
};

export default function Page() {
  return (
    <ToolShell title="WhatsApp Link Generator" sub="Placeholder line: create a click-to-chat link in seconds.">
      <ChatLinkTool mode="link" />
    </ToolShell>
  );
}
