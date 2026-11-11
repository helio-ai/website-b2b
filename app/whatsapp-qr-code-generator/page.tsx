import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChatLinkTool } from "@/components/tools/ChatLinkTool";

export const metadata: Metadata = {
  title: "WhatsApp QR Code Generator",
  description: "Placeholder description for the WhatsApp QR code generator.",
};

export default function Page() {
  return (
    <ToolShell title="WhatsApp QR Code Generator" sub="Placeholder line: turn a chat link into a scannable QR code.">
      <ChatLinkTool mode="qr" />
    </ToolShell>
  );
}
