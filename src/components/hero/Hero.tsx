// src/components/hero/Hero.tsx
import { Link } from '@components/ui';
import { heroContent } from '@content/hero';
import { useLocale } from '@hooks/useLocale';
import { motion } from 'motion/react';

export function Hero() {
  const locale = useLocale();
  const content = heroContent[locale];
  
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-graphite)_0%,_var(--color-ink)_70%)]" aria-hidden="true" />
      
      <div className="wrap relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <span className="inline-block sticker bg-lime text-ink">
              {content.badge}
            </span>
            
            <h1
              id="hero-title"
              className="t-hero text-paper leading-[0.88] text-balance"
              style={{ fontStretch: '88%' }}
            >
              {content.headline.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            
            <p className="t-lede text-paper-muted max-w-[480px]">
              {content.subheadline}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={content.ctaPrimary.href}
                variant="pill-solid"
                className="pill-block"
              >
                {content.ctaPrimary.label}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={content.ctaSecondary.href}
                variant="pill"
                className="pill-block"
              >
                {content.ctaSecondary.label}
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-paper-muted text-sm font-mono pt-4 border-t border-paper/10">
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Remote-first
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Jakarta-based
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Global reach
              </span>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div
              className="relative aspect-[4/3] max-w-[520px] mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ perspective: '1000px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 via-transparent to-lime/20 rounded-3xl blur-3xl" aria-hidden="true" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-paper/10 bg-graphite/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="gridGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ff5b1f" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#c8f03c" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <rect width="200" height="200" fill="url(#gridGradient)" />
                    <g stroke="#ff5b1f" strokeWidth="0.5" strokeOpacity="0.2">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="200" />
                      ))}
                      {Array.from({ length: 10 }).map((_, i) => (
                        <line key={i} x1="0" y1={i * 20} x2="200" y2={i * 20} />
                      ))}
                    </g>
                    <circle cx="100" cy="100" r="60" stroke="#c8f03c" strokeWidth="2" fill="none" strokeOpacity="0.5" />
                    <circle cx="100" cy="100" r="40" stroke="#ff5b1f" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
                    <circle cx="100" cy="100" r="20" fill="#c8f03c" fillOpacity="0.3" />
                  </svg>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-paper-muted text-xs font-mono">
                  <span>newall.network</span>
                  <span>v2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper-muted text-xs font-mono animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        <span>Scroll</span>
      </div>
    </section>
  );
}