/* Build-only server entry for scripts/prerender.mjs. */
import { Writable } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

// Re-exported so the prerender script reads them from this Vite-built bundle.
export { getSeo, getAllRoutes, getLlmDocuments } from './lib/seo';

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = '';
    const collector = new Writable({
      write(chunk, _enc, cb) { html += chunk.toString(); cb(); },
      final(cb) { cb(); resolve(html); },
    });
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}><App /></StaticRouter>,
      { onAllReady: () => pipe(collector), onError: reject },
    );
  });
}
