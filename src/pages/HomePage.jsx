import { useCallback, useState } from 'react';
import Layout from '../components/Layout';
import ChatDemo from '../components/ChatDemo';
import { Hero, Steps, Platform, WhatsAppSection, Industries, Team, Faqs } from '../components/Sections';
import { CallSection } from '../components/CallDemo';
import { useBookDemo } from '../hooks/useBookDemo';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ORG_SCHEMA, SOFTWARE_SCHEMA, WEBSITE_SCHEMA, pageSchema, faqSchema } from '../lib/seo';
import { B2B_INDUSTRIES, B2B_HUB_INDUSTRIES, B2B_FAQS, B2B_HUB, HOME_SEO } from '../data/industries';

const PICKER_IDS = B2B_HUB_INDUSTRIES.map(item => item.id);

/* The demo cycles through the B2B businesses until the visitor picks one.
   Every industry in the list below can be played in it. */
export default function HomePage() {
  const onCTA = useBookDemo();
  const reduceMotion = useReducedMotion();
  const [industryId, setIndustryId] = useState(PICKER_IDS[0]);
  const [autoCycle, setAutoCycle] = useState(true);
  const industry = B2B_INDUSTRIES.find(item => item.id === industryId) || B2B_INDUSTRIES[0];

  const select = useCallback((id) => { setAutoCycle(false); setIndustryId(id); }, []);
  const next = useCallback(() => setIndustryId(id => PICKER_IDS[(PICKER_IDS.indexOf(id) + 1) % PICKER_IDS.length]), []);
  const play = useCallback((id) => {
    select(id);
    document.getElementById('demo')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  }, [select, reduceMotion]);

  const jsonLd = [
    ORG_SCHEMA, SOFTWARE_SCHEMA, WEBSITE_SCHEMA,
    pageSchema({ path: '/', name: HOME_SEO.title, description: HOME_SEO.description, audience: 'Businesses that sell through a conversation', image: B2B_HUB.photo.src, imageAlt: B2B_HUB.photo.alt }),
    faqSchema(B2B_FAQS),
  ];
  return <Layout path="/" jsonLd={jsonLd}>
    <Hero onCTA={onCTA} title="Turn every enquiry into a booked sales call." lead="One AI agent across your website, calls, WhatsApp, social and email asks your qualifying questions, collects contact details and books the call. Every lead lands in one CRM, ready for your team.">
      <ChatDemo industries={B2B_INDUSTRIES} pickerIds={PICKER_IDS} industryId={industryId} autoCycle={autoCycle && !reduceMotion} onSelect={select} onFinished={next} />
    </Hero>
    <Steps />
    <Platform />
    <CallSection />
    <WhatsAppSection industry={industry} />
    <Industries items={B2B_INDUSTRIES} activeId={industryId} onPlay={play} title="Built for businesses that sell through a conversation" intro="If a sale starts with a question and ends with a call, a quote or a site visit, the agent fits. Play one in the demo, or open its page." />
    <Team photo={B2B_HUB.photo} />
    <Faqs title="Questions from business teams" faqs={B2B_FAQS} />
  </Layout>;
}
