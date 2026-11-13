// src/components/layout/Header.tsx
import { Link } from '@components/ui';
import { navigation } from '@content/navigation';
import { useLocale } from '@hooks/useLocale';
import { siteConfig } from '@content/config';
import { useState, useEffect } from 'react';

export function Header() {
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-paper/10' : 'bg-transparent'
      }`}
      style={{ height: 'var(--header-h)' }}
      role="banner"
    >
      <div className="wrap flex items-center justify-between h-full">
        <Link
          href={locale === 'id' ? '/' : `/${locale}/`}
          className="flex items-center gap-2 text-paper font-display font-bold text-xl z-10"
          aria-label={`${siteConfig.name} - Home`}
        >
          <span className="text-orange font-extrabold">N</span>
          <span>ewall</span>
          <span className="text-orange font-extrabold">N</span>
          <span>etwork</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              variant="underline"
              className="text-paper-muted hover:text-lime text-sm font-mono transition-colors"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2" role="group" aria-label="Language">
            {navigation.languageSwitcher.map((lang) => (
              <Link
                key={lang.locale}
                href={lang.href}
                variant={locale === lang.locale ? 'pill-solid' : 'pill'}
                className="text-xs min-h-[36px] px-3"
                aria-current={locale === lang.locale ? 'page' : undefined}
              >
                {lang.label}
              </Link>
            ))}
          </div>
          
          <Link
            href={navigation.cta.href}
            variant="pill-solid"
            className="text-sm min-h-[44px]"
          >
            {navigation.cta.label[locale]}
          </Link>
        </div>
        
        <button
          className="md:hidden p-2 text-paper hover:text-lime transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-ink border-t border-paper/10 animate-slide-down" role="navigation" aria-label="Mobile navigation">
          <div className="wrap py-6 space-y-4">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-paper hover:text-lime text-base font-mono transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label[locale]}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-paper/10">
              {navigation.languageSwitcher.map((lang) => (
                <Link
                  key={lang.locale}
                  href={lang.href}
                  variant={locale === lang.locale ? 'pill-solid' : 'pill'}
                  className="text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={locale === lang.locale ? 'page' : undefined}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
            <Link
              href={navigation.cta.href}
              variant="pill-solid"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navigation.cta.label[locale]}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}