// Builds every page's imagery from the source photos in content/photos.
//
//   npm run images
//
// For every page in src/data/industries.js that has a `photo`, it looks for
// the source named after the photo's file (b2b-sales-team-lead-qualification.jpg
// and so on), then writes:
//   public/images/<name>.webp      the team section picture (cwebp -q 82)
//   public/images/<name>-og.jpg    a 1200 x 630 share card: the photo, the
//                                 page headline over its empty left third,
//                                 the YourLio mark and the domain
// Share cards are rendered in headless Chrome so they use the site's fonts
// (Bricolage Grotesque, Geist). Needs cwebp, ImageMagick and Google Chrome.
// See content/IMAGES.md for the brief the photos were made from.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { B2B_HUB, B2B_INDUSTRIES, B2B_PAGES } from '../src/data/industries.js';

const sourceDir = process.argv[2] && resolve(process.argv[2]);
if (!sourceDir) {
  console.error('Usage: node scripts/build-images.mjs <folder of source photos>');
  process.exit(1);
}

const ROOT = resolve(import.meta.dirname, '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const HUB_HEADLINE = 'Turn every enquiry into a booked sales call.';
const esc = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const jobs = [
  { photo: B2B_HUB.photo, og: B2B_HUB.og, headline: HUB_HEADLINE },
  ...B2B_INDUSTRIES.map((i) => ({ photo: B2B_PAGES[i.id].photo, og: B2B_PAGES[i.id].og, headline: B2B_PAGES[i.id].h1 })),
].filter((job) => job.photo && job.og);

function findSource(name) {
  for (const ext of ['jpg', 'jpeg', 'png']) {
    const file = join(sourceDir, `${name}.${ext}`);
    if (existsSync(file)) return file;
  }
  return null;
}

function card({ source, headline }) {
  const logo = join(ROOT, 'public/favicon.png');
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600&family=Geist:wght@500&display=block">
<style>
html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#070d24}
.card{position:relative;width:1200px;height:630px;background:url('file://${source}') right center/cover no-repeat}
.card::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#070d24 0%,#070d24f2 34%,#070d2499 52%,transparent 72%)}
.copy{position:absolute;left:64px;top:56px;bottom:56px;width:560px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;align-items:center;gap:14px;color:#fff;font:500 26px Geist,sans-serif}
.brand img{width:44px;height:44px;border-radius:12px}
h1{margin:0;color:#fff;font:600 58px/1.02 'Bricolage Grotesque',sans-serif;letter-spacing:-.04em}
.url{color:#a9b3d6;font:500 22px Geist,sans-serif}
</style></head><body><div class="card"><div class="copy">
<div class="brand"><img src="file://${logo}">YourLio AI</div>
<h1>${esc(headline)}</h1>
<div class="url">yourlio.com</div>
</div></div></body></html>`;
}

const work = mkdtempSync(join(tmpdir(), 'industry-images-'));
let missing = 0;
try {
  for (const job of jobs) {
    const name = basename(job.photo.src, '.webp');
    const source = findSource(name);
    if (!source) { console.warn(`[industry-images] no source photo for ${name}`); missing += 1; continue; }

    execFileSync('cwebp', ['-quiet', '-q', '82', '-metadata', 'none', source, '-o', join(ROOT, 'public', job.photo.src)]);

    const html = join(work, `${name}.html`);
    const png = join(work, `${name}.png`);
    const profile = join(work, `chrome-${name}`);
    writeFileSync(html, card({ source, headline: job.headline }));
    execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--use-mock-keychain', '--password-store=basic', '--disable-extensions', '--allow-file-access-from-files', `--user-data-dir=${profile}`, '--window-size=1200,630', '--virtual-time-budget=8000', `--screenshot=${png}`, `file://${html}`], { stdio: 'ignore', timeout: 60000 });
    execFileSync('magick', [png, '-resize', '1200x630!', '-strip', '-quality', '84', '-sampling-factor', '4:2:0', '-interlace', 'JPEG', join(ROOT, 'public', job.og)]);
    console.log(`[industry-images] ${name}`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
if (missing) process.exitCode = 1;
