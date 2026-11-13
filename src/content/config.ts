// src/content/config.ts
export const siteConfig = {
  name: 'Newall Network',
  legalName: 'PT New All Network',
  tagline: {
    id: 'Mitra IT Jarak Jauh & Perlindungan Digital',
    en: 'Remote IT Partner & Digital Protection',
  },
  description: {
    id: 'Newall Network membantu bisnis di bagian IT secara jarak jauh (IT support, website, SEO, otomasi, bot, AI agent) dan mendampingi perorangan saat data bocor, diteror penagih, atau kena tipu. Berbasis di Jakarta.',
    en: 'Newall Network helps businesses with IT remotely (IT support, website, SEO, automation, bots, AI agents) and assists individuals when data leaks, debt collector harassment, or fraud occurs. Based in Jakarta.',
  },
  url: 'https://newall.network',
  devUrl: 'https://dev.newall.network',
  email: 'it@newall.network',
  phone: '',
  address: {
    city: 'Jakarta',
    country: 'ID',
  },
  founded: 2026,
  social: {
    linkedin: 'https://www.linkedin.com/company/newallnetwork',
    github: '',
    twitter: '',
  },
  locales: ['id', 'en'] as const,
  defaultLocale: 'id' as const,
};

export type Locale = (typeof siteConfig.locales)[number];
export type SiteConfig = typeof siteConfig;