import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ChatDemo from '../components/ChatDemo';
import { Hero, Steps, WhatsAppSection, Industries, Team, Faqs } from '../components/Sections';
import NotFoundPage from './NotFoundPage';
import { useBookDemo } from '../hooks/useBookDemo';
import { ORG_SCHEMA, SOFTWARE_SCHEMA, WEBSITE_SCHEMA, pageSchema, breadcrumbSchema, faqSchema } from '../lib/seo';
import { B2B_INDUSTRIES, getB2BIndustryPage } from '../data/industries';

const noop = () => {};

function IndustryContent({ page }) {
  const onCTA = useBookDemo();
  const { industry } = page;
  const jsonLd = [
    ORG_SCHEMA, SOFTWARE_SCHEMA, WEBSITE_SCHEMA,
    breadcrumbSchema([{ name: 'YourLio for business', path: '/' }, { name: industry.name, path: page.path }]),
    pageSchema({ path: page.path, name: page.title, description: page.description, audience: industry.name, image: page.photo.src, imageAlt: page.photo.alt }),
    faqSchema(page.faqs),
  ];
  return <Layout path={page.path} jsonLd={jsonLd}>
    <Hero onCTA={onCTA} title={page.h1} lead={page.lead}>
      <ChatDemo industries={[industry]} industryId={industry.id} autoCycle={false} loop onSelect={noop} onFinished={noop} />
    </Hero>
    <Steps />
    <WhatsAppSection industry={industry} />
    <Industries items={B2B_INDUSTRIES.filter(item => item.group === industry.group && item.id !== industry.id)} title="Also built for these businesses" intro="The same agent qualifies leads for other businesses that sell through a call, a quote or a site visit." />
    <Team photo={page.photo} />
    <Faqs title={`Questions from ${page.audience}`} faqs={page.faqs} />
  </Layout>;
}

/* Keyed by slug so moving between industries starts a fresh demo. */
export default function IndustryPage() {
  const { slug } = useParams();
  const page = getB2BIndustryPage(slug);
  return page ? <IndustryContent key={slug} page={page} /> : <NotFoundPage />;
}
