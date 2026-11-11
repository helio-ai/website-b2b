/* eslint-disable @next/next/no-img-element */
import { Calendar, CircleCheck, MessageCircle } from "lucide-react";
import type { IndustryCopy } from "@/lib/copy/industries";

function Bubble({ from, children }: { from: "agent" | "visitor"; children: React.ReactNode }) {
  return (
    <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${from === "agent" ? "rounded-tl-sm bg-muted text-text" : "ml-auto rounded-tr-sm bg-brand-500 text-white"}`}>
      {children}
    </div>
  );
}

function Options({ q }: { q: IndustryCopy["q1"] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {q.options.map((o, i) => (
        <span key={o} className={`rounded-full px-3 py-1 text-xs ring-1 ${i === q.pick ? "bg-brand-500 text-white ring-brand-500" : "bg-white text-brand-700 ring-brand-200"}`}>
          {o}
        </span>
      ))}
    </div>
  );
}

/**
 * The sample conversation for an industry: the visitor asks, the agent asks
 * two qualifying questions with tap options, collects details and books the
 * call, then the WhatsApp follow up shows the shared memory. Sample lead only.
 */
export function ChatDemo({ ind }: { ind: IndustryCopy }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-line" aria-label={`Sample ${ind.name} conversation`}>
        <div className="flex items-center gap-3 border-b border-line bg-ink px-4 py-3 text-white">
          <img src="/brand/mark-dark-bg.png" alt="" className="h-8 w-8 object-contain" />
          <div>
            <p className="text-sm font-semibold">{ind.agentName} assistant</p>
            <p className="text-xs text-white/60">Replies instantly</p>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <Bubble from="visitor">{ind.visitor}</Bubble>
          <Bubble from="agent">{ind.q1.text}</Bubble>
          <Options q={ind.q1} />
          <Bubble from="agent">{ind.q2.text}</Bubble>
          <Options q={ind.q2} />
          <Bubble from="agent">Thanks. Can I get your name, phone and work email so the team can prepare?</Bubble>
          <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm text-emerald-800 ring-1 ring-emerald-200">
            <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
            {ind.booked} booked: Wed, 2:00 pm. Invite sent to alex@example.com
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-white p-5 ring-1 ring-line">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-3">Lead record</p>
          <p className="mt-2 font-semibold">Alex Morgan</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-text-2">{ind.q1.field}</dt>
              <dd className="text-right font-medium">{ind.q1.options[ind.q1.pick]}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-text-2">{ind.q2.field}</dt>
              <dd className="text-right font-medium">{ind.q2.options[ind.q2.pick]}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-text-2">Stage</dt>
              <dd className="font-medium text-emerald-700">Call booked</dd>
            </div>
          </dl>
          <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
            {ind.asks.map((a) => (
              <li key={a} className="flex gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-[#e9f7ef] p-5 ring-1 ring-emerald-200">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Later, on WhatsApp
          </p>
          <div className="mt-3 space-y-2 text-sm">
            <p className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2">{ind.followUp.ask}</p>
            <p className="w-fit max-w-[95%] rounded-2xl rounded-tl-sm bg-white px-3 py-2">{ind.followUp.reply}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
