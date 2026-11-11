import type { Metadata } from "next";
import { SimpleHero, CtaBand } from "@/components/ui";
import { IntegrationsBrowser } from "@/components/IntegrationsBrowser";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Placeholder description for the integrations directory.",
};

export default function IntegrationsPage() {
  return (
    <>
      <SimpleHero title="Integrations" sub="Placeholder line describing the channels and tools you can connect." />
      <IntegrationsBrowser />
      <CtaBand />
    </>
  );
}
