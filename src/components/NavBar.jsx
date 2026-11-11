import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { B2B_INDUSTRIES } from '../data/industries';
import { LOGO_SRC, MAIN_LINKS } from '../lib/site';

const GROUPS = [
  { title: 'B2B sales teams', items: B2B_INDUSTRIES.filter(item => item.group === 'b2b') },
  { title: 'Service businesses', items: B2B_INDUSTRIES.filter(item => item.group === 'services') },
];

function IndustryLinks({ pathname }) {
  return GROUPS.map(group => <div key={group.title} className="nav-group">
    <p>{group.title}</p>
    <ul>{group.items.map(item => { const to = `/industries/${item.slug}`; return <li key={item.id}>
      <Link to={to} aria-current={pathname === to ? 'page' : undefined}><strong>{item.name}</strong><small>{item.who}</small></Link>
    </li>; })}</ul>
  </div>);
}

/* One open thing at a time: the Industries menu on desktop or the whole menu
   on phones. Closes on navigation, Escape and a click outside. */
export default function NavBar({ onCTA }) {
  const [open, setOpen] = useState(null);
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = event => { if (!ref.current?.contains(event.target)) setOpen(null); };
    const onKey = event => { if (event.key === 'Escape') setOpen(null); };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggle = name => setOpen(current => (current === name ? null : name));

  return <header className="nav" ref={ref}>
    <nav className="nav-inner" aria-label="Main navigation">
      <Link to="/" className="nav-brand"><img src={LOGO_SRC} width="28" height="28" alt="" /><span>YourLio <em>for business</em></span></Link>
      <div className="nav-links">
        <div className="nav-menu">
          <button type="button" aria-expanded={open === 'industries'} aria-controls="nav-industries" onClick={() => toggle('industries')}>Industries<ChevronDown size={14} aria-hidden="true" /></button>
          {open === 'industries' && <div id="nav-industries" className="nav-panel"><IndustryLinks pathname={pathname} /></div>}
        </div>
        <a href="#how-it-works">How it works</a>
        <a href="#faq">FAQ</a>
        <a href={MAIN_LINKS.home}>For Shopify brands<ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <button type="button" className="b2b-btn b2b-btn-primary nav-cta" onClick={onCTA}>Book a demo</button>
      <button type="button" className="nav-toggle" aria-label={open === 'mobile' ? 'Close menu' : 'Open menu'} aria-expanded={open === 'mobile'} aria-controls="nav-mobile" onClick={() => toggle('mobile')}>
        {open === 'mobile' ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
    </nav>
    {open === 'mobile' && <div id="nav-mobile" className="nav-mobile">
      <IndustryLinks pathname={pathname} />
      <div className="nav-mobile-links">
        <a href="#how-it-works" onClick={() => setOpen(null)}>How it works</a>
        <a href="#faq" onClick={() => setOpen(null)}>FAQ</a>
        <a href={MAIN_LINKS.home}>YourLio for Shopify brands<ArrowUpRight size={14} aria-hidden="true" /></a>
      </div>
      <button type="button" className="b2b-btn b2b-btn-primary" onClick={() => { setOpen(null); onCTA(); }}>Book a demo</button>
    </div>}
  </header>;
}
