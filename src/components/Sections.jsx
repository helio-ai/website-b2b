import { Link } from 'react-router-dom';
import { Check, X, Inbox, Handshake, Languages, Plug, Play, Plus } from 'lucide-react';
import { B2B_STEPS, B2B_SWITCH } from '../data/industries';
import { MAIN_LINKS } from '../lib/site';

/* The sections every page is built from, in one order, so the home page and
   each industry page read the same way and only the business changes. */

export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Hero({ onCTA, title, lead, children }) {
  return <section className="b2b-hero" aria-labelledby="b2b-title">
    <div className="b2b-hero-inner">
      <div className="b2b-hero-copy">
        <h1 id="b2b-title">{title}</h1>
        <p>{lead}</p>
        <div className="b2b-actions">
          <button type="button" className="b2b-btn b2b-btn-primary" onClick={onCTA}>Book a demo</button>
          <a className="b2b-btn b2b-btn-ghost" href="#how-it-works">See how it works</a>
        </div>
        <p className="b2b-hero-fine">Runs on the website you already have, alongside your WhatsApp Business number.</p>
      </div>
      <div id="demo" className="b2b-hero-demo">{children}</div>
    </div>
  </section>;
}

export function Steps() {
  return <section id="how-it-works" className="b2b-section b2b-wrap" aria-labelledby="b2b-steps-title">
    <div className="b2b-heading"><h2 id="b2b-steps-title">From first message to booked call</h2><p>The agent handles the first touch the way a good sales rep would, for every visitor, at any hour.</p></div>
    <ol className="b2b-steps">{B2B_STEPS.map((step, i) => <li key={step.id}>
      <span className="b2b-steps-node" aria-hidden="true">{i + 1}</span>
      <h3>{step.title}</h3><p>{step.text}</p>
    </li>)}</ol>
  </section>;
}

function WhatsAppThread({ industry }) {
  return <div className="b2b-wa" role="region" aria-label="Example WhatsApp follow up">
    <div className="b2b-wa-head"><span className="b2b-wa-avatar"><WhatsAppIcon size={18} /></span><div><strong>Your business</strong><small>Business account</small></div></div>
    <div className="b2b-wa-body">
      <p className="b2b-wa-day">Today</p>
      <p className="b2b-wa-msg" data-from="lead">{industry.whatsapp.ask}<small>10:42</small></p>
      <div className="b2b-wa-msg" data-from="business"><p>{industry.whatsapp.reply}</p><small>10:42</small></div>
      <div className="b2b-wa-actions" aria-hidden="true"><span>Talk to the team</span><span>Add more details</span></div>
    </div>
  </div>;
}

export function WhatsAppSection({ industry }) {
  return <section id="whatsapp" className="b2b-section b2b-raised" aria-labelledby="b2b-wa-title">
    <div className="b2b-wrap b2b-split">
      <div className="b2b-heading">
        <h2 id="b2b-wa-title">One agent for your website chat and WhatsApp</h2>
        <p>Most teams run a website chatbot and separate WhatsApp flows, and each one asks the same questions again. YourLio runs both with one memory of every lead.</p>
        <ul className="b2b-checks">
          <li><Check size={16} aria-hidden="true" />Answers enquiries on your WhatsApp Business number, day or night.</li>
          <li><Check size={16} aria-hidden="true" />Picks up where the website chat left off, so leads never repeat themselves.</li>
          <li><Check size={16} aria-hidden="true" />Sends WhatsApp campaigns to your contacts and handles every reply.</li>
          <li><Check size={16} aria-hidden="true" />Hands the conversation to your sales team when it matters.</li>
        </ul>
      </div>
      <WhatsAppThread industry={industry} />
    </div>
    <div className="b2b-wrap">
      <table className="b2b-compare">
        <caption>How YourLio compares with flow builders</caption>
        <thead><tr><th scope="col">Flow builders</th><th scope="col">YourLio</th></tr></thead>
        <tbody>{B2B_SWITCH.map(row => <tr key={row.after}>
          <td data-label="Flow builders"><X size={15} aria-hidden="true" />{row.before}</td>
          <td data-label="YourLio"><Check size={15} aria-hidden="true" />{row.after}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </section>;
}

/* On the home page each row plays its conversation in the hero demo. On an
   industry page the list shows related businesses, each linking to its page. */
export function Industries({ items, title, intro, activeId, onPlay }) {
  return <section id="industries" className="b2b-section b2b-wrap" aria-labelledby="b2b-ind-title">
    <div className="b2b-heading"><h2 id="b2b-ind-title">{title}</h2><p>{intro}</p></div>
    <ul className="b2b-rows">{items.map(item => <li key={item.id} data-active={item.id === activeId ? 'true' : undefined}>
      <div className="b2b-row-name"><h3><Link to={`/industries/${item.slug}`}>{item.name}</Link></h3><p>{item.who}</p></div>
      <div className="b2b-row-asks"><span className="b2b-visually-hidden">Qualifies on: </span>{item.asks.map(ask => <span key={ask}>{ask}</span>)}</div>
      {onPlay
        ? <button type="button" onClick={() => onPlay(item.id)} aria-label={`Play the ${item.name.toLowerCase()} conversation`}><Play size={13} aria-hidden="true" />{item.id === activeId ? 'Playing' : 'Play'}</button>
        : <Link className="b2b-row-link" to={`/industries/${item.slug}`} aria-label={`See the page for ${item.name.toLowerCase()}`}>See page</Link>}
    </li>)}</ul>
  </section>;
}

const TEAM_POINTS = [
  { Icon: Inbox, title: 'One place for every lead', text: 'Contact details, answers and the full chat land in the shared inbox.' },
  { Icon: Handshake, title: 'Step in at any point', text: 'A rep can take over a live conversation, and visitors can ask for an expert.' },
  { Icon: Languages, title: 'Their language, not yours', text: 'Visitors write in their own language and get replies in it.' },
  { Icon: Plug, title: 'Fits your stack', text: 'Connects with HubSpot and the other tools you already use.', link: { href: MAIN_LINKS.integrations, label: 'See integrations' } },
];

export function Team({ photo }) {
  return <section className="b2b-section b2b-wrap b2b-team" data-photo={photo ? 'true' : undefined} aria-labelledby="b2b-team-title">
    {photo && <figure className="b2b-team-photo"><img src={photo.src} alt={photo.alt} width="1536" height="1024" loading="lazy" decoding="async" /></figure>}
    <div>
      <div className="b2b-heading"><h2 id="b2b-team-title">Every lead arrives ready for the call</h2><p>No first calls spent on basic questions. Your team knows who they are speaking to, what they need and when.</p></div>
      <ul>{TEAM_POINTS.map(point => { const Icon = point.Icon; return <li key={point.title}>
        <Icon size={20} aria-hidden="true" />
        <h3>{point.title}</h3>
        <p>{point.text}{point.link && <> <a href={point.link.href}>{point.link.label}</a></>}</p>
      </li>; })}</ul>
    </div>
  </section>;
}

/* Native disclosure: every answer is in the HTML, open or not, so crawlers
   and answer engines read them without running any script. */
export function Faqs({ title, faqs }) {
  return <section id="faq" className="b2b-section b2b-wrap b2b-faq" aria-labelledby="b2b-faq-title">
    <div className="b2b-heading"><h2 id="b2b-faq-title">{title}</h2></div>
    <div className="b2b-faq-list">{faqs.map(faq => <details key={faq.q}>
      <summary><span>{faq.q}</span><Plus size={16} aria-hidden="true" /></summary>
      <p>{faq.a}</p>
    </details>)}</div>
  </section>;
}

export function Closing({ onCTA }) {
  return <section className="b2b-section b2b-wrap" aria-labelledby="b2b-close-title">
    <div className="b2b-closing">
      <div><h2 id="b2b-close-title">Bring the questions your sales team asks today</h2><p>On a short call we will set the agent up to ask them, and show it running on your website and WhatsApp.</p></div>
      <div className="b2b-actions">
        <button type="button" className="b2b-btn b2b-btn-primary" onClick={onCTA}>Book a demo</button>
        <a className="b2b-btn b2b-btn-ghost" href={MAIN_LINKS.contact}>Talk to our team</a>
      </div>
    </div>
  </section>;
}
