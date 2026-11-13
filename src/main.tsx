// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './routes.tsx';
import './styles/globals.css';
import './lib/i18n';

if (import.meta.env.DEV) {
  console.log('[Newall Network] Development mode');
  console.log('[Newall Network] Build time:', import.meta.env.VITE_BUILD_TIME);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);

// Register service worker for production
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // SW registration failed silently
    });
  });
}