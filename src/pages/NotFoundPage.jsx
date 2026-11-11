import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { B2B_INDUSTRIES } from '../data/industries';

/* Served as 404.html for any missing URL, with noindex from getSeo. */
export default function NotFoundPage() {
  const { pathname } = useLocation();
  return <Layout path={pathname === '/' ? '/404' : pathname} closing={false}>
    <section className="b2b-section b2b-wrap notfound" aria-labelledby="nf-title">
      <h1 id="nf-title">This page does not exist</h1>
      <p>The link may be old or mistyped. Start from the home page, or go straight to your industry.</p>
      <div className="b2b-actions"><Link className="b2b-btn b2b-btn-primary" to="/">Go to the home page</Link></div>
      <ul className="notfound-links">{B2B_INDUSTRIES.map(item => <li key={item.id}><Link to={`/industries/${item.slug}`}>{item.name}</Link></li>)}</ul>
    </section>
  </Layout>;
}
