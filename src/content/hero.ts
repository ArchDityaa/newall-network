// src/content/hero.ts
export const heroContent = {
  id: {
    badge: 'Baru: AI Agent untuk Bisnis Anda',
    headline: 'Mitra IT Jarak Jauh & Perlindungan Digital',
    subheadline: 'IT support, website, SEO, otomasi, bot, dan AI agent — dikerjakan jarak jauh oleh satu tim.',
    ctaPrimary: { label: 'Mulai Sekarang', href: 'mailto:it@newall.network' },
    ctaSecondary: { label: 'Lihat Layanan', href: '#layanan' },
    illustration: {
      alt: 'Ilustrasi tim kerja jarak jauh',
      src: '/img/hero-illustration.svg',
    },
  },
  en: {
    badge: 'New: AI Agent for Your Business',
    headline: 'Remote IT Partner & Digital Protection',
    subheadline: 'IT support, website, SEO, automation, bots, and AI agents — done remotely by one team.',
    ctaPrimary: { label: 'Get Started', href: 'mailto:it@newall.network' },
    ctaSecondary: { label: 'View Services', href: '#layanan' },
    illustration: {
      alt: 'Remote team work illustration',
      src: '/img/hero-illustration.svg',
    },
  },
};

export type HeroContent = typeof heroContent.id;