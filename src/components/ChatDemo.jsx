import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { X, Check, Paperclip, LayoutGrid, Mic, SendHorizontal, MessageCircle, UserRound, CalendarDays, CircleCheck, RotateCcw } from 'lucide-react';
import { LOGO_SRC } from '../lib/site';
import { B2B_SAMPLE_LEAD as LEAD } from '../data/industries';

/* The YourLio chat widget as B2B sites run it, replayed as markup rather
   than video: the same navy sheet, plain agent replies, tap options,
   in-chat details card and booking sheet as the live product, so text stays
   crisp and crawlable and nothing heavier than this component loads.

   Each frame holds a conversation step plus transient state: `input` shows
   the visitor's message typed in the composer, `fill` is how many detail
   fields are filled in, and `press` highlights what the visitor is about to
   tap. The prerendered markup is frame 0, the widget's real opening state. */
const FRAMES = [
  { step: 0, delay: 1800 },
  { step: 0, input: true, delay: 1200 },
  { step: 1, delay: 900 },
  { step: 2, delay: 1700 },
  { step: 2, press: true, delay: 450 },
  { step: 3, delay: 900 },
  { step: 4, delay: 1700 },
  { step: 4, press: true, delay: 450 },
  { step: 5, delay: 900 },
  { step: 6, fill: 0, delay: 1000 },
  { step: 6, fill: 1, delay: 450 },
  { step: 6, fill: 2, delay: 450 },
  { step: 6, fill: 3, delay: 450 },
  { step: 6, fill: 4, delay: 800 },
  { step: 6, fill: 4, press: true, delay: 450 },
  { step: 7, delay: 1100 },
  { step: 8, delay: 1600 },
  { step: 8, press: true, delay: 450 },
  { step: 9, delay: 1300 },
  { step: 9, press: true, delay: 500 },
  { step: 10, delay: 2000 },
  { step: 10, press: true, delay: 450 },
  { step: 11, delay: 4500 },
];
const LAST_FRAME = FRAMES.length - 1;
const PICKED_SLOT = 2;

/* The next Wednesday at least two days out, so the booking sheet never shows
   a past date. Only rendered once the animation reaches the sheet, which is
   always on the client, so the prerendered markup never depends on it. */
function nextWednesday() {
  const day = new Date();
  day.setDate(day.getDate() + 2);
  while (day.getDay() !== 3) day.setDate(day.getDate() + 1);
  return {
    long: day.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
    short: day.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
  };
}

function Topics({ topics }) {
  return topics.map((topic, i) => <span key={topic}>{i > 0 && (i === topics.length - 1 ? ', or ' : ', ')}<em>{topic}</em></span>);
}

function Chips({ options, pick, pressing }) {
  return <div className="b2b-w-chips">{options.map((option, i) => <span key={option} data-picked={pressing && i === pick ? 'true' : undefined}>{option}</span>)}</div>;
}

function CardHead({ icon, title, sub, tone }) {
  return <div className="b2b-w-card-head"><span className="b2b-w-card-icon" data-tone={tone}>{icon}</span><div><strong>{title}</strong><small>{sub}</small></div></div>;
}

function DetailsForm({ company, fill, pressing }) {
  const fields = [['Name', LEAD.name], ['Company (optional)', company], ['Phone', LEAD.phone, true], ['Work email', LEAD.email]];
  return <div className="b2b-w-card b2b-w-form">
    <CardHead icon={<UserRound size={16} aria-hidden="true" />} title="Your details" sub="So the team can reach you" />
    <div className="b2b-w-fields">{fields.map(([label, value, phone], i) => <div key={label}>
      <small>{label}</small>
      <span data-active={i === fill && fill < 4 ? 'true' : undefined}>{phone && <i className="b2b-w-flag" aria-hidden="true">🇺🇸</i>}{i < fill ? value : phone ? '+1' : ''}</span>
    </div>)}</div>
    <span className="b2b-w-primary" data-pressed={pressing ? 'true' : undefined}>Send details</span>
  </div>;
}

function DoneCard({ title, children }) {
  return <div className="b2b-w-card b2b-w-done"><CardHead icon={<CircleCheck size={17} aria-hidden="true" />} tone="green" title={title} sub={children} /></div>;
}

function BookCard({ pressing }) {
  return <div className="b2b-w-card b2b-w-book">
    <CardHead icon={<CalendarDays size={16} aria-hidden="true" />} title="Book a free 15-minute call" sub="Choose a slot here, confirmed by email" />
    <span className="b2b-w-primary" data-pressed={pressing ? 'true' : undefined}><CalendarDays size={14} aria-hidden="true" />Pick a time</span>
  </div>;
}

function Sheet({ industry, step, pressing }) {
  const date = nextWednesday();
  if (step === 9) return <div className="b2b-w-sheet">
    <div className="b2b-w-sheet-head"><CardHead icon={<CalendarDays size={16} aria-hidden="true" />} title="Book a call" sub="Pick a time that suits you" /><X size={18} aria-hidden="true" /></div>
    <div className="b2b-w-sheet-body"><p className="b2b-w-date">{date.long}</p>
      <div className="b2b-w-slots">{LEAD.slots.map((slot, i) => <span key={slot} data-picked={pressing && i === PICKED_SLOT ? 'true' : undefined}>{slot}</span>)}</div>
    </div>
  </div>;
  return <div className="b2b-w-sheet">
    <div className="b2b-w-sheet-head"><CardHead icon={<CircleCheck size={16} aria-hidden="true" />} title="Call booked" sub="The invite is on its way to your email" /><span className="b2b-w-done-btn" data-pressed={pressing ? 'true' : undefined}>Done</span></div>
    <div className="b2b-w-scheduled"><strong><Check size={20} strokeWidth={3} aria-hidden="true" />You are scheduled</strong><p>{industry.event} · {date.short} · {LEAD.slots[PICKED_SLOT]}</p><p>A calendar invitation has been sent to your email address.</p></div>
  </div>;
}

function Conversation({ industry, frame }) {
  const { step, fill = 0, press } = frame;
  const { q1, q2 } = industry;
  return <>
    <div className="b2b-w-agent"><p><span aria-hidden="true">👋 </span>Welcome! Tell me about your <Topics topics={industry.topics} />.</p><p>{industry.services}</p></div>
    {step >= 1 && <p className="b2b-w-visitor">{industry.visitor}</p>}
    {step >= 2 && <div className="b2b-w-agent"><p>{q1.text}</p>{step === 2 && <Chips options={q1.options} pick={q1.pick} pressing={press} />}</div>}
    {step >= 3 && <p className="b2b-w-visitor">{q1.options[q1.pick]}</p>}
    {step >= 4 && <div className="b2b-w-agent"><p>{q2.text}</p>{step === 4 && <Chips options={q2.options} pick={q2.pick} pressing={press} />}</div>}
    {step >= 5 && <p className="b2b-w-visitor">{q2.options[q2.pick]}</p>}
    {step >= 6 && <div className="b2b-w-agent"><p>{industry.ready} Add your details below so they can reach you.</p>
      {step === 6 ? <DetailsForm company={industry.company} fill={fill} pressing={press} /> : <DoneCard title="Details sent">{[LEAD.name, industry.company, LEAD.phone, LEAD.email].filter(Boolean).join(' · ')}</DoneCard>}
    </div>}
    {step >= 7 && <p className="b2b-w-visitor">I&apos;ve shared my details.</p>}
    {step >= 8 && <div className="b2b-w-agent"><p>Thanks, {LEAD.firstName}! The team has your details. You can pick a time for a free 15-minute call right here.</p>
      {step < 11 ? <BookCard pressing={step === 8 && press} /> : <DoneCard title="Call booked">The invite is in your email. You can reschedule from it.</DoneCard>}
    </div>}
    {step === 0 && <div className="b2b-w-quick" aria-hidden="true"><span><MessageCircle size={14} />Talk to an Expert</span><span><UserRound size={14} />Book a Consultation</span></div>}
  </>;
}

/* What the sales team receives, built from the same frame as the chat: each
   answer lands in the record the moment the visitor gives it, and contact
   details arrive together once they are sent. A value mounts when it is
   filled, so its highlight plays exactly once. */
function LeadRecord({ industry, frame }) {
  const { step } = frame;
  const { q1, q2 } = industry;
  const rows = [
    ['Source', 'Website chat', true],
    ['Enquiry', industry.visitor, step >= 1],
    [q1.field, q1.options[q1.pick], step >= 3],
    [q2.field, q2.options[q2.pick], step >= 5],
    ['Contact', [LEAD.name, industry.company].filter(Boolean).join(', '), step >= 7],
    ['Phone', LEAD.phone, step >= 7],
    ['Email', LEAD.email, step >= 7],
    ['Call', step >= 10 ? `${nextWednesday().short}, ${LEAD.slots[PICKED_SLOT]}` : '', step >= 10],
  ];
  const status = step >= 10 ? ['Call booked', 'ok'] : step >= 5 ? ['Qualified', 'ok'] : step >= 1 ? ['Qualifying', 'accent'] : ['Waiting', 'muted'];
  return <aside className="b2b-record" aria-label="Lead record built from the conversation">
    <div className="b2b-record-head"><strong>Lead record</strong><span className="b2b-record-status" data-tone={status[1]}><i />{status[0]}</span></div>
    <dl>{rows.map(([label, value, on], i) => <div key={i}>
      <dt>{label}</dt>
      <dd>{on ? <span key={`${industry.id}-${value}`} className="b2b-record-value">{value}</span> : <span className="b2b-record-empty" aria-hidden="true" />}</dd>
    </div>)}</dl>
  </aside>;
}

function placeholderFor(step) {
  if (step === 0) return 'Ask me anything...';
  return step < 6 ? 'Type your message here...' : 'Talk to me in any language!';
}

/* `autoCycle` moves to the next industry when a conversation ends, until
   the visitor picks one themselves; then the conversation stops at the end
   with a replay control. `loop` (an industry page, one business only)
   replays the same conversation instead, and hides the business picker.
   `pickerIds` limits the picker to some businesses while any of
   `industries` can still be played (the home page list plays all of them). */
export default function ChatDemo({ industries, industryId, pickerIds, autoCycle, loop = false, onSelect, onFinished }) {
  const reduceMotion = useReducedMotion();
  const industry = industries.find(item => item.id === industryId) || industries[0];
  const picker = pickerIds ? industries.filter(item => pickerIds.includes(item.id)) : industries;
  const rootRef = useRef(null);
  const logRef = useRef(null);
  const mounted = useRef(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [run, setRun] = useState(0);
  // Reduced motion shows the finished conversation and never animates.
  const shownIndex = reduceMotion ? LAST_FRAME : frameIndex;

  // A new industry or a replay starts the conversation from the top.
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    setFrameIndex(0);
  }, [industryId, run]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node || !('IntersectionObserver' in window)) { setInView(true); return undefined; }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return undefined;
    if (frameIndex >= LAST_FRAME) {
      if (!autoCycle && !loop) return undefined;
      const id = window.setTimeout(loop ? () => setRun(r => r + 1) : onFinished, FRAMES[LAST_FRAME].delay);
      return () => window.clearTimeout(id);
    }
    const id = window.setTimeout(() => setFrameIndex(f => f + 1), FRAMES[frameIndex].delay);
    return () => window.clearTimeout(id);
  }, [frameIndex, inView, autoCycle, loop, reduceMotion, onFinished]);

  /* Scroll the chat log itself, never the page, and instantly: Chrome can
     cancel a smooth page scroll (an anchor link, the wheel) when another
     element starts a smooth scroll, and this one fires about every second.
     The fade in on each new message carries the motion instead. The opening
     frame stays at the top so the welcome message reads first. */
  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = shownIndex === 0 ? 0 : log.scrollHeight;
  }, [shownIndex]);

  const frame = FRAMES[shownIndex];
  const typed = frame.step === 0 && frame.input;
  const finished = shownIndex >= LAST_FRAME;
  return <div className="b2b-demo" ref={rootRef}>
    {picker.length > 1 && <div className="b2b-demo-pick">
      <p id="b2b-demo-pick-label">Example business</p>
      <div className="b2b-demo-industries" role="group" aria-labelledby="b2b-demo-pick-label">
        {picker.map(item => <button key={item.id} type="button" aria-pressed={item.id === industry.id} onClick={() => onSelect(item.id)}>{item.label}</button>)}
      </div>
    </div>}
    <div className="b2b-stage">
    <div className="b2b-w" role="region" aria-label={`Example conversation: ${industry.name}`}>
      <div className="b2b-w-head">
        <span className="b2b-w-handle" aria-hidden="true" />
        <span className="b2b-w-avatar"><img src={LOGO_SRC} width="35" height="35" alt="" /></span>
        <strong>{industry.agent} Agent</strong>
        <span className="b2b-w-close" aria-hidden="true"><X size={12} strokeWidth={2.5} /></span>
      </div>
      <div className="b2b-w-log" ref={logRef}><Conversation industry={industry} frame={frame} /></div>
      <div className="b2b-w-compose" aria-hidden="true">
        <span className="b2b-w-attach"><Paperclip size={17} /></span>
        <div className="b2b-w-field">
          <LayoutGrid size={18} />
          <p data-typed={typed ? 'true' : undefined}>{typed ? industry.visitor : placeholderFor(frame.step)}</p>
          <span className="b2b-w-mic">{typed ? <SendHorizontal size={15} /> : <Mic size={15} />}</span>
        </div>
      </div>
      <p className="b2b-w-powered">Powered by <img src={LOGO_SRC} width="12" height="12" alt="" /><strong>YourLio AI</strong></p>
      {(frame.step === 9 || frame.step === 10) && <Sheet industry={industry} step={frame.step} pressing={frame.press} />}
      {finished && !autoCycle && !loop && !reduceMotion && <button type="button" className="b2b-w-replay" onClick={() => setRun(r => r + 1)}><RotateCcw size={13} aria-hidden="true" />Replay</button>}
    </div>
    <LeadRecord industry={industry} frame={frame} />
    </div>
    <p className="b2b-demo-note">A sample conversation with sample details.</p>
  </div>;
}
