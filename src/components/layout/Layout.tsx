// src/components/layout/Layout.tsx
import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cursor } from '@components/cursor/Cursor';

export function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[var(--header-h)]" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <Cursor />
    </div>
  );
}