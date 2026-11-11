import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Video Guides" };

// Blog and article content was left out of this build on purpose.
export default function Page() {
  return <ComingSoon title="Video Guides" />;
}
