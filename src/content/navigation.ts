// src/content/navigation.ts
import { siteConfig } from './config';

export const navigation = {
  main: [
    { href: '/', label: { id: 'Beranda', en: 'Home' } },
    { href: '/#layanan', label: { id: 'Layanan', en: 'Services' } },
    { href: '/#faq', label: { id: 'FAQ', en: 'FAQ' } },
    { href: '/#kontak', label: { id: 'Kontak', en: 'Contact' } },
  ],
  cta: {
    href: `mailto:${siteConfig.email}`,
    label: { id: 'Mulai Sekarang', en: 'Get Started' },
  },
  languageSwitcher: siteConfig.locales.map((locale) => ({
    locale,
    label: locale === 'id' ? 'ID' : 'EN',
    href: locale === 'id' ? '/' : `/${locale}/`,
  })),
};