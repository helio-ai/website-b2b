import type { Metadata } from "next";
import { CtaBand, SimpleHero } from "@/components/ui";
import { CustomersBrowser } from "@/components/CustomersBrowser";

export const metadata: Metadata = {
  title: "Customer stories",
  description: "Placeholder description for the customer stories index.",
};

export default function CustomersPage() {
  return (
    <>
      <SimpleHero title="Customer stories" sub="Placeholder line introducing customer stories." />
      <CustomersBrowser />
      <CtaBand />
    </>
  );
}
