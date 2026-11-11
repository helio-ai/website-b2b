import NavBar from './NavBar';
import Footer from './Footer';
import Seo from './Seo';
import { Closing } from './Sections';
import { useBookDemo } from '../hooks/useBookDemo';
import './chrome.css';
import '../pages/site.css';

/* Every page: head tags and schema, the nav, the page's sections, the shared
   closing call to action and the footer. */
export default function Layout({ path, jsonLd, closing = true, children }) {
  const onCTA = useBookDemo();
  return <>
    <Seo path={path} jsonLd={jsonLd} />
    <NavBar onCTA={onCTA} />
    <main id="main" className="b2b-page">{children}{closing && <Closing onCTA={onCTA} />}</main>
    <Footer />
  </>;
}
