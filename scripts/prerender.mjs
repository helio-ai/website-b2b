/* Prerenders every route to static HTML so crawlers and answer engines get
   real markup, headings, links, structured data and a route-specific <head>.
   Builds the client bundle, then a Node SSR bundle, renders each route into
   the index.html template, and writes sitemap.xml, a custom 404.html and the
   llms.txt documents. */
import { build } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, '.prerender');

const escapeHtml = (v) => String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (v) => escapeHtml(v).replace(/"/g, '&quot;');

// Callback replacement so "$1" style text in a value is never read as a backreference.
const setMeta = (html, key, value) =>
  html.replace(new RegExp(`(<meta\\s+${key}\\s+content=")[^"]*(")`, 'i'), (_, p1, p2) => `${p1}${escapeAttr(value)}${p2}`);

function applyHead(template, seo) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(seo.title)}</title>`);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/i, (_, p1, p2) => `${p1}${escapeAttr(seo.canonical)}${p2}`);
  html = setMeta(html, 'name="description"', seo.description);
  html = setMeta(html, 'name="robots"', seo.robots);
  html = setMeta(html, 'property="og:type"', seo.type);
  html = setMeta(html, 'property="og:title"', seo.title);
  html = setMeta(html, 'property="og:description"', seo.description);
  html = setMeta(html, 'property="og:url"', seo.canonical);
  html = setMeta(html, 'property="og:image"', seo.image);
  html = setMeta(html, 'property="og:image:alt"', seo.imageAlt);
  html = setMeta(html, 'name="twitter:title"', seo.title);
  html = setMeta(html, 'name="twitter:description"', seo.description);
  html = setMeta(html, 'name="twitter:image"', seo.image);
  html = setMeta(html, 'name="twitter:image:alt"', seo.imageAlt);
  return html;
}

const sitemapMeta = (url) => (url === '/' ? { changefreq: 'weekly', priority: '1.0' } : { changefreq: 'monthly', priority: '0.8' });

async function run() {
  await build();
  await build({
    logLevel: 'warn',
    build: {
      ssr: path.join(root, 'src/entry-server.jsx'),
      outDir: ssrDir,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
    },
  });

  const { render, getSeo, getAllRoutes, getLlmDocuments } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
  const page = async (url) => applyHead(template.replace('<div id="root"></div>', `<div id="root">${await render(url)}</div>`), getSeo(url));

  const routes = getAllRoutes();
  const entries = [];
  for (const url of routes) {
    const outFile = url === '/' ? path.join(distDir, 'index.html') : path.join(distDir, url, 'index.html');
    await fs.mkdir(path.dirname(outFile), { recursive: true });
    await fs.writeFile(outFile, await page(url), 'utf-8');
    entries.push({ loc: getSeo(url).canonical, ...sitemapMeta(url) });
  }

  await fs.writeFile(path.join(distDir, '404.html'), await page('/404'), 'utf-8');

  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + entries.map((e) => `  <url><loc>${e.loc}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`).join('\n')
    + '\n</urlset>\n';
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');
  await Promise.all(Object.entries(getLlmDocuments()).map(([name, text]) => fs.writeFile(path.join(distDir, name), text, 'utf-8')));

  await fs.rm(ssrDir, { recursive: true, force: true });
  console.log(`[prerender] ${routes.length} routes, sitemap ${entries.length} urls, custom 404 page`);
}

run().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
