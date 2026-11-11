import type { Metadata } from "next";
import { CtaBand, FeatureGrid, PageHero, Section, SectionHeading, Button } from "@/components/ui";
import { CONTACT_EMAIL } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers at YourLio: Build AI Agents for Business | YourLio",
  description: "Work with the YourLio team in Bengaluru on AI agents, a shared inbox and CRM used by 100+ brands. Send us your profile.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        icon="Briefcase"
        title="Build the AI that answers every enquiry"
        sub="A small team in Bengaluru shipping AI agents, a shared inbox and CRM that real businesses run their conversations on every day."
        art="shot"
        shot="agent"
        ctas={
          <Button href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Careers at YourLio")}`} size="lg">
            Send us your profile
          </Button>
        }
      />
      <Section>
        <SectionHeading title="How we work" />
        <FeatureGrid
          items={[
            { title: "Outcome over output", body: "Every feature ships against one question: did it help a customer get an answer, a booking or a sale?", icon: "Target" },
            { title: "Close to customers", body: "Engineers read real conversations and talk to the businesses using the product.", icon: "Users" },
            { title: "Small team, real ownership", body: "You own a part of the product end to end, from the first idea to what customers see.", icon: "Award" },
          ]}
        />
      </Section>
      <Section tone="muted">
        <SectionHeading
          title="Open roles"
          sub={`We hire through referrals and direct applications. If you would like to work with us, email ${CONTACT_EMAIL} with your profile and what you would like to build.`}
        />
        <div className="flex justify-center">
          <Button href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Careers at YourLio")}`}>Email the team</Button>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
