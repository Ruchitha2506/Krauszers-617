import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FullscreenApp from './components/FullscreenApp.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <FullscreenApp />
    </StrictMode>
  );
}
