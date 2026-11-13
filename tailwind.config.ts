import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        dot: ['var(--font-dot)', 'var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: 'var(--color-ink)',
        'ink-muted': 'var(--color-ink-muted)',
        paper: 'var(--color-paper)',
        'paper-muted': 'var(--color-paper-muted)',
        graphite: 'var(--color-graphite)',
        orange: 'var(--color-orange)',
        cobalt: 'var(--color-cobalt)',
        lime: 'var(--color-lime)',
        lilac: 'var(--color-lilac)',
        amber: 'var(--color-amber)',
        mint: 'var(--color-mint)',
      },
      spacing: {
        gutter: 'var(--gutter)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        hero: 'var(--text-hero)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        snug: 'var(--leading-snug)',
        relaxed: 'var(--leading-relaxed)',
      },
      transitionDuration: {
        DEFAULT: 'var(--default-transition-duration)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--default-transition-timing-function)',
        'ease-out': 'var(--ease-out)',
      },
      animation: {
        pulse: 'var(--animate-pulse)',
      },
    },
  },
  plugins: [],
} satisfies Config;