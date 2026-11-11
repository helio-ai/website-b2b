import { useCallback, useEffect, useRef, useState } from 'react';
import { PhoneCall, CalendarCheck, BadgeCheck } from 'lucide-react';
import { B2B_CALLS } from '../data/calls';
import { useReducedMotion } from '../hooks/useReducedMotion';

/* A sample AI call, played as a transcript beside a talking orb. Lines appear
   one at a time, paced by their length; the orb speaks on the agent's lines
   and listens on the lead's. When the call ends the outcome lands in the CRM.
   It cycles through the sample calls until the visitor picks one, then
   repeats that one. Reduced motion shows each call complete. */
const pace = (text) => Math.min(3200, Math.max(1300, text.length * 38));
const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export function CallDemo() {
  const reduceMotion = useReducedMotion();
  const [callId, setCallId] = useState(B2B_CALLS[0].id);
  const [autoCycle, setAutoCycle] = useState(true);
  const [shown, setShown] = useState(1);
  const [seconds, setSeconds] = useState(3);
  const [inView, setInView] = useState(false);
  const rootRef = useRef(null);
  const logRef = useRef(null);
  const pickRef = useRef(null);
  const call = B2B_CALLS.find(item => item.id === callId) || B2B_CALLS[0];
  const total = call.lines.length;
  const count = reduceMotion ? total : shown;
  const done = count >= total;

  const start = useCallback((id, manual) => {
    if (manual) setAutoCycle(false);
    setCallId(id);
    setShown(1);
    setSeconds(3);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !('IntersectionObserver' in window)) { setInView(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Next line, or the next call once this one has ended.
  useEffect(() => {
    if (reduceMotion || !inView) return undefined;
    if (done) {
      const next = autoCycle ? B2B_CALLS[(B2B_CALLS.findIndex(item => item.id === callId) + 1) % B2B_CALLS.length].id : callId;
      const id = window.setTimeout(() => start(next, false), 5000);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => setShown(n => n + 1), pace(call.lines[shown - 1][1]));
    return () => window.clearTimeout(id);
  }, [shown, done, inView, reduceMotion, autoCycle, callId, call, start]);

  // The call timer runs while the call is live.
  useEffect(() => {
    if (reduceMotion || !inView || done) return undefined;
    const id = window.setInterval(() => setSeconds(s => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [inView, done, reduceMotion]);

  // Keep the newest line in view inside the transcript, never scrolling the page.
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [count, callId]);

  // On a phone the call picker is a scrolling row; keep the playing call visible in it.
  useEffect(() => {
    const row = pickRef.current;
    const button = row && row.querySelector('[aria-pressed="true"]');
    if (!button || row.scrollWidth <= row.clientWidth) return;
    row.scrollLeft += button.getBoundingClientRect().left - row.getBoundingClientRect().left - (row.clientWidth - button.offsetWidth) / 2;
  }, [callId]);

  const speaker = done ? 'ended' : call.lines[count - 1][0];
  const status = done ? `Call ended, ${mmss(reduceMotion ? 58 : seconds)}` : `On call with ${call.lead}, ${mmss(seconds)}`;

  return <div className="b2b-call" ref={rootRef}>
    <div className="b2b-call-pick" role="group" aria-label="Choose a sample call" ref={pickRef}>
      <p>Sample calls</p>
      {B2B_CALLS.map(item => <button key={item.id} type="button" aria-pressed={item.id === call.id} onClick={() => start(item.id, true)}>
        <strong>{item.label}</strong><small>{item.channel}</small>
      </button>)}
    </div>

    <div className="b2b-call-stage" data-speaker={speaker}>
      <span className="b2b-call-orb" aria-hidden="true"><i /><PhoneCall size={22} /></span>
      <p className="b2b-call-agent">{call.agent}<small>AI agent for {call.business}</small></p>
      <p className="b2b-call-status">{status}</p>
      <span className="b2b-call-wave" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ animationDelay: `${(i % 6) * 0.09}s` }} />)}</span>
      <p className="b2b-call-who" aria-hidden="true">{speaker === 'agent' ? `${call.agent} is speaking` : speaker === 'lead' ? `${call.lead} is speaking` : 'Saved to the CRM'}</p>
    </div>

    <div className="b2b-call-transcript">
      <div className="b2b-call-transcript-head"><strong>Illustrative transcript</strong><span>Sample call</span></div>
      <ol className="b2b-call-lines" ref={logRef}>
        {call.lines.slice(0, count).map(([who, text], i) => <li key={`${call.id}-${i}`} data-from={who}><small>{who === 'agent' ? call.agent : call.lead}</small><p>{text}</p></li>)}
        {done && <li className="b2b-call-outcome" key={`${call.id}-done`}>
          <span><CalendarCheck size={15} aria-hidden="true" />{call.outcome.booked}</span>
          <span><BadgeCheck size={15} aria-hidden="true" />Added to CRM: {call.outcome.stage}</span>
        </li>}
      </ol>
    </div>
  </div>;
}

export function CallSection() {
  return <section id="ai-calls" className="b2b-section b2b-wrap" aria-labelledby="b2b-calls-title">
    <div className="b2b-heading"><h2 id="b2b-calls-title">Watch an AI call qualify a lead</h2><p>The same agent that chats on your website can call new leads and existing clients, ask your questions and book the meeting. Every call lands in the CRM with its answers.</p></div>
    <CallDemo />
  </section>;
}
