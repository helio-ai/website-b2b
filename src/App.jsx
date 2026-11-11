import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IndustryPage from './pages/IndustryPage';
import NotFoundPage from './pages/NotFoundPage';

/* New pages open at the top; links to a section on the same page (#faq,
   #how-it-works) are left to the browser. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/industries/:slug" element={<IndustryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>;
}
