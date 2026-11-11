import { Link } from 'react-router-dom';
import { B2B_INDUSTRIES } from '../data/industries';
import { CONTACT_EMAIL, LOGO_SRC, MAIN_LINKS } from '../lib/site';

const COMPANY = [
  { label: 'YourLio for Shopify brands', href: MAIN_LINKS.home },
  { label: 'About', href: MAIN_LINKS.about },
  { label: 'Contact', href: MAIN_LINKS.contact },
  { label: 'Integrations', href: MAIN_LINKS.integrations },
  { label: 'Blog', href: MAIN_LINKS.blog },
];
const LEGAL = [
  { label: 'Privacy', href: MAIN_LINKS.privacy },
  { label: 'Terms', href: MAIN_LINKS.terms },
  { label: 'Security', href: MAIN_LINKS.security },
];

/* Every industry page is linked from here, so each one is two clicks or
   fewer from anywhere and crawlers find all of them from any page. */
export default function Footer() {
  const industries = group => B2B_INDUSTRIES.filter(item => item.group === group);
  return <footer className="foot">
    <div className="foot-inner">
      <div className="foot-brand">
        <Link to="/"><img src={LOGO_SRC} width="28" height="28" alt="" />YourLio for business</Link>
        <p>An AI agent that qualifies leads and books sales calls on your website and WhatsApp.</p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
      <div><h2>B2B industries</h2><ul>{industries('b2b').map(item => <li key={item.id}><Link to={`/industries/${item.slug}`}>{item.name}</Link></li>)}</ul></div>
      <div><h2>More industries</h2><ul>{industries('services').map(item => <li key={item.id}><Link to={`/industries/${item.slug}`}>{item.name}</Link></li>)}</ul></div>
      <div><h2>YourLio</h2><ul>{COMPANY.map(link => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul></div>
      <div><h2>Legal</h2><ul>{LEGAL.map(link => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul></div>
    </div>
    <p className="foot-legal">© {new Date().getFullYear()} HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED</p>
  </footer>;
}
