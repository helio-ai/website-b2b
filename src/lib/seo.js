/* Per-route head (title, description, canonical, share image), structured
   data, the route list the prerender walks, and the llms.txt documents.
   One source for both the prerendered HTML and client-side navigation. */
import { SITE_URL, MAIN_SITE_URL, CONTACT_EMAIL, LOGO_SRC } from './site';
import { B2B_INDUSTRIES, B2B_PAGES, B2B_FAQS, B2B_HUB, HOME_SEO, getB2BIndustryPage } from '../data/industries';

const ORG_ID = `${MAIN_SITE_URL}/#organization`;
const SOFTWARE_ID = `${MAIN_SITE_URL}/#software`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const absolute = (src) => (src.startsWith('http') ? src : `${SITE_URL}${src}`);

const NOT_FOUND = {
  title: 'Page not found · YourLio for business',
  description: 'This page could not be found. See how YourLio qualifies leads and books sales calls, or pick your industry.',
  robots: 'noindex, follow',
};

export function getSeo(pathname) {
  const path = (pathname || '/').replace(/\/+$/, '') || '/';
  if (path === '/') {
    return finalize('/', { ...HOME_SEO, image: B2B_HUB.og, imageAlt: B2B_HUB.photo.alt });
  }
  const match = path.match(/^\/industries\/([^/]+)$/);
  const page = match && getB2BIndustryPage(match[1]);
  if (page) return finalize(path, { title: page.title, description: page.description, image: page.og, imageAlt: page.photo.alt });
  return finalize(path, { ...NOT_FOUND, image: B2B_HUB.og, imageAlt: B2B_HUB.photo.alt });
}

function finalize(path, meta) {
  return {
    title: meta.title,
    description: meta.description,
    canonical: `${SITE_URL}${path === '/' ? '/' : path}`,
    image: absolute(meta.image),
    imageAlt: meta.imageAlt,
    type: 'website',
    robots: meta.robots || 'index, follow, max-image-preview:large',
  };
}

export function getAllRoutes() {
  return ['/', ...B2B_INDUSTRIES.map((i) => `/industries/${i.slug}`)];
}

/* Structured data. The organisation and the software are the same entities
   the main YourLio site describes, referenced by the same @id, so search and
   answer engines join the two sites into one company. */
export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'YourLio AI',
  alternateName: 'YourLio',
  legalName: 'HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED',
  url: MAIN_SITE_URL,
  logo: { '@type': 'ImageObject', url: `${MAIN_SITE_URL}${LOGO_SRC}`, width: 192, height: 192 },
  email: CONTACT_EMAIL,
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: CONTACT_EMAIL, availableLanguage: ['en'] },
};

export const SOFTWARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': SOFTWARE_ID,
  name: 'YourLio AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'An AI agent for websites and WhatsApp that answers enquiries, asks qualifying questions, collects contact details and books sales calls, with a shared inbox for the team.',
  publisher: { '@id': ORG_ID },
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'YourLio for business',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export function pageSchema({ path, name, description, audience, image, imageAlt }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${path === '/' ? '/' : path}#webpage`,
    url: `${SITE_URL}${path === '/' ? '/' : path}`,
    name, description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
    about: { '@id': SOFTWARE_ID },
    inLanguage: 'en',
    audience: { '@type': 'BusinessAudience', audienceType: audience },
    primaryImageOfPage: { '@type': 'ImageObject', url: absolute(image), caption: imageAlt },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function getLlmDocuments() {
  const pages = B2B_INDUSTRIES.map((i) => `- [${B2B_PAGES[i.id].title}](${SITE_URL}/industries/${i.slug}): ${B2B_PAGES[i.id].description}`).join('\n');
  const brief = `# YourLio for business

> YourLio is an AI agent for a business's website and WhatsApp. It answers enquiries, asks the business's qualifying questions with tap options, collects contact details in the chat and books the sales call. Website chat and WhatsApp share one memory of each lead, and every conversation lands in a shared inbox where the team can take over.

This site (${SITE_URL}) covers businesses that sell through a call, a quote or a site visit. YourLio for Shopify brands lives at ${MAIN_SITE_URL}. YourLio is developed by HELIOAI AGENTIC SYSTEMS PRIVATE LIMITED.

## Pages
- [${HOME_SEO.title}](${SITE_URL}/): ${HOME_SEO.description}
${pages}

## Optional
- [Full answers by industry](${SITE_URL}/llms-full.txt)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
  const general = B2B_FAQS.map(({ q, a }) => `### ${q}\n${a}`).join('\n\n');
  const byIndustry = B2B_INDUSTRIES.map((i) => `### For ${B2B_PAGES[i.id].audience}\nAlso published at ${SITE_URL}/industries/${i.slug}.\n\n${B2B_PAGES[i.id].faqs.map(({ q, a }) => `#### ${q}\n${a}`).join('\n\n')}`).join('\n\n');
  const full = `${brief}
## Common questions
These answers are also published at ${SITE_URL}/#faq.

${general}

## Questions by industry
${byIndustry}
`;
  return { 'llms.txt': brief, 'llms-full.txt': full };
}
