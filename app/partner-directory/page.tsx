import type { Metadata } from "next";
import { CtaBand, SimpleHero } from "@/components/ui";
import { PartnerDirectory } from "@/components/PartnerDirectory";

export const metadata: Metadata = {
  title: "Partner directory",
  description: "Placeholder description for the partner directory.",
};

export default function PartnerDirectoryPage() {
  return (
    <>
      <SimpleHero title="Partner directory" sub="Placeholder line about finding a certified partner." />
      <PartnerDirectory />
      <CtaBand />
    </>
  );
}
