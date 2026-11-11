import { useEffect } from 'react';
import { getSeo } from '../lib/seo';

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/* Head tags are written into the prerendered HTML by scripts/prerender.mjs
   and kept in step here on client navigation. JSON-LD renders into the page
   itself, so crawlers that never run JavaScript still read it. */
export default function Seo({ path, jsonLd = [] }) {
  const seo = getSeo(path);
  useEffect(() => {
    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.robots);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:image', seo.image);
    upsertMeta('property', 'og:image:alt', seo.imageAlt);
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', seo.image);
    upsertMeta('name', 'twitter:image:alt', seo.imageAlt);
    let canon = document.head.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement('link');
      canon.setAttribute('rel', 'canonical');
      document.head.appendChild(canon);
    }
    canon.setAttribute('href', seo.canonical);
  }, [seo.title, seo.description, seo.robots, seo.canonical, seo.image, seo.imageAlt]);

  return jsonLd.map((block, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, '\\u003c') }} />);
}
