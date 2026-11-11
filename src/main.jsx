import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

// createRoot, not hydrateRoot: the prerendered HTML is for crawlers and
// first paint, and the app renders fresh over it.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
