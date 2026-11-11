import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CtaBand, Section, SimpleHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Placeholder description for the contact page.",
};

const channels = [
  { name: "WhatsApp", icon: "MessageCircle" },
  { name: "Messenger", icon: "MessagesSquare" },
  { name: "Instagram", icon: "MessageCircle" },
  { name: "Telegram", icon: "Send" },
  { name: "LINE", icon: "MessageCircle" },
  { name: "WeChat", icon: "MessagesSquare" },
];

export default function ContactPage() {
  return (
    <>
      <SimpleHero title="We're here to help" sub="Placeholder line about support hours and response times." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-muted p-6 ring-1 ring-line sm:p-8">
            <h2 className="text-2xl font-semibold">Chat with support</h2>
            <p className="mt-2 text-sm text-text-2">Placeholder: pick the app you already use. Replace each link with your channel URL.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.name}
                  href={`#${c.name.toLowerCase()}`}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 text-sm font-medium ring-1 ring-line hover:ring-brand-300"
                >
                  <Icon name={c.icon} className="h-6 w-6 text-brand-600" />
                  {c.name}
                </a>
              ))}
            </div>
            <a href="mailto:hello@example.com" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white p-4 text-sm font-medium ring-1 ring-line hover:ring-brand-300">
              <Icon name="Mail" className="h-5 w-5 text-brand-600" /> Email us
            </a>
          </div>
          <div className="flex flex-col rounded-3xl bg-ink p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold">Talk to Sales</h2>
            <p className="mt-2 text-sm text-white/70">Placeholder line about the sales team and what they can help with.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {["Placeholder topic one", "Placeholder topic two", "Placeholder topic three"].map((t) => (
                <li key={t} className="flex gap-2">
                  <Icon name="CircleCheck" className="h-5 w-5 text-accent-400" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2 pt-8 sm:flex-row">
              <Link href="/demo" className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-brand-500 text-sm font-medium hover:bg-brand-600">
                Talk to Sales
              </Link>
              <Link href="#signup" className="inline-flex h-11 flex-1 items-center justify-center rounded-lg bg-white/10 text-sm font-medium ring-1 ring-white/20 hover:bg-white/20">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ["MapPin", "Office", "Placeholder address"],
            ["Briefcase", "Partnerships", "partners@example.com"],
            ["Newspaper", "Press", "press@example.com"],
          ].map(([ic, t, d]) => (
            <div key={t} className="flex items-start gap-3 rounded-2xl p-5 ring-1 ring-line">
              <Icon name={ic} className="mt-0.5 h-5 w-5 text-brand-600" />
              <div>
                <p className="font-semibold">{t}</p>
                <p className="text-sm text-text-2">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
