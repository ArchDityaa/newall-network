// src/components/layout/Footer.tsx
import { Link } from '@components/ui';
import { siteConfig } from '@content/config';
import { useLocale } from '@hooks/useLocale';

export function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-paper/10 bg-ink" role="contentinfo">
      <div className="wrap py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Link
              href={locale === 'id' ? '/' : `/${locale}/`}
              className="flex items-center gap-2 text-paper font-display font-bold text-2xl"
              aria-label={`${siteConfig.name} - Home`}
            >
              <span className="text-orange font-extrabold">N</span>
              <span>ewall</span>
              <span className="text-orange font-extrabold">N</span>
              <span>etwork</span>
            </Link>
            <p className="t-body text-paper-muted max-w-[320px]">
              {siteConfig.description[locale]}
            </p>
            <div className="flex items-center gap-4 text-paper-muted text-sm font-mono">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <nav className="grid grid-cols-2 gap-6" aria-label="Footer navigation">
            <div className="space-y-4">
              <h4 className="t-label text-paper">Layanan</h4>
              <ul className="space-y-3" role="list">
                <li><Link href="#layanan" variant="underline" className="text-paper-muted hover:text-lime text-sm">IT Support Jarak Jauh</Link></li>
                <li><Link href="#layanan" variant="underline" className="text-paper-muted hover:text-lime text-sm">Website & Server</Link></li>
                <li><Link href="#layanan" variant="underline" className="text-paper-muted hover:text-lime text-sm">SEO</Link></li>
                <li><Link href="#layanan" variant="underline" className="text-paper-muted hover:text-lime text-sm">Otomasi & Bot</Link></li>
                <li><Link href="#layanan" variant="underline" className="text-paper-muted hover:text-lime text-sm">AI Agent</Link></li>
                <li><Link href="#layanan" variant="underline" className="text-paper-muted hover:text-lime text-sm">Aplikasi & Data</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="t-label text-paper">Perusahaan</h4>
              <ul className="space-y-3" role="list">
                <li><Link href="#tentang" variant="underline" className="text-paper-muted hover:text-lime text-sm">Tentang Kami</Link></li>
                <li><Link href="#karir" variant="underline" className="text-paper-muted hover:text-lime text-sm">Karir</Link></li>
                <li><Link href="#blog" variant="underline" className="text-paper-muted hover:text-lime text-sm">Blog</Link></li>
                <li><Link href="#kontak" variant="underline" className="text-paper-muted hover:text-lime text-sm">Kontak</Link></li>
              </ul>
            </div>
          </nav>
          
          <div className="space-y-6">
            <h4 className="t-label text-paper">Kontak</h4>
            <address className="not-italic space-y-3 text-paper-muted text-sm font-mono">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-lime transition-colors">{siteConfig.email}</a>
              <div>{siteConfig.address.city}, {siteConfig.address.country.toUpperCase()}</div>
            </address>
            <Link
              href={`mailto:${siteConfig.email}`}
              variant="pill-solid"
              className="w-full sm:w-auto justify-center"
            >
              {locale === 'id' ? 'Mulai Proyek' : 'Start a Project'}
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-paper-muted text-sm font-mono">
            © {currentYear} {siteConfig.legalName}. {locale === 'id' ? 'Hak cipta dilindungi.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-6 text-paper-muted text-xs font-mono">
            <Link href="/privacy" variant="underline" className="hover:text-lime">Privacy</Link>
            <Link href="/terms" variant="underline" className="hover:text-lime">Terms</Link>
            <Link href="/cookies" variant="underline" className="hover:text-lime">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}