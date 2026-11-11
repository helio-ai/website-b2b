/* Where this site and its parent live. The B2B site is its own origin; the
   company, legal and ecommerce pages stay on the main YourLio site. */
export const SITE_URL = 'https://business.yourlio.com';
export const MAIN_SITE_URL = 'https://yourlio.com';

export const LOGO_SRC = '/favicon.png';
export const CONTACT_EMAIL = 'prakash@helioai.tech';

// Demo booking opens Cal.com as an on-site modal; DEMO_URL is the plain link
// fallback if the embed script cannot load.
export const DEMO_URL = 'https://cal.com/prakash-singh-vcyfti/demo-request-yourlioai';
export const DEMO_CAL_NAMESPACE = 'demo-request-yourlioai';
export const DEMO_CAL_LINK = 'prakash-singh-vcyfti/demo-request-yourlioai';

export const MAIN_LINKS = {
  home: MAIN_SITE_URL,
  about: `${MAIN_SITE_URL}/about`,
  contact: `${MAIN_SITE_URL}/contact`,
  integrations: `${MAIN_SITE_URL}/integrations`,
  privacy: `${MAIN_SITE_URL}/privacy`,
  terms: `${MAIN_SITE_URL}/terms`,
  security: `${MAIN_SITE_URL}/security`,
  blog: `${MAIN_SITE_URL}/blog`,
};
