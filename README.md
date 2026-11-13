# 🚀 Newall Network — Website Rebuild

Modern, performant website for **Newall Network** — Remote IT Partner & Digital Protection.

**Live Demo**: https://newall.network (Vercel)  
**Repository**: https://github.com/ArchDityaa/newall-network

---

## 📋 Overview

Complete rebuild of https://dev.newall.network/ with:
- **Modular content** — All copy/data in TypeScript files (hot-reloadable, type-safe)
- **i18n** — Indonesian (default) + English with locale-aware routing
- **Performance** — Lighthouse 90+ targets, Bun bundler, code splitting
- **SEO** — JSON-LD structured data, Open Graph, hreflang
- **Accessibility** — WCAG AA, semantic HTML, focus management
- **Animation** — Motion + View Transitions API, custom cursor
- **CI/CD** — GitHub Actions → Vercel preview/production

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 + Vite 4 |
| **Routing** | TanStack Router (type-safe, file-based) |
| **Styling** | Tailwind CSS v4 (CSS-first, design tokens) |
| **Animations** | Motion (Framer Motion) + View Transitions API |
| **Internationalization** | i18next + react-i18next |
| **Fonts** | Self-hosted WOFF2 (Bricolage Grotesque, Geist, Geist Mono, Doto) |
| **Package Manager** | Bun (10-100x faster than npm/yarn) |
| **Deployment** | Vercel (edge network, preview deployments) |
| **CI/CD** | GitHub Actions |

---

## 📦 Project Structure

```
newall-network/
├── public/                    # Static assets
│   ├── fonts/                # WOFF2 font files (add real fonts)
│   ├── img/                  # OG image, favicons, illustrations
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/               # Button, Card, Link, Container, Grid
│   │   ├── layout/           # Header, Footer, Layout wrapper
│   │   ├── hero/             # Hero section with cursor animation
│   │   ├── services/         # Services grid with icons
│   │   ├── faq/              # Accordion FAQ with schema.org
│   │   └── cursor/           # Custom cursor effect
│   ├── content/              # 🔑 MODULAR CONTENT LAYER
│   │   ├── config.ts         # Site config (name, email, social, locales)
│   │   ├── navigation.ts     # Nav items, CTA, language switcher
│   │   ├── hero.ts           # Hero badge, headline, subheadline, CTAs
│   │   ├── services.ts       # 6 services with features, icons, descriptions
│   │   ├── faq.ts            # 7 FAQ items with schema.org markup
│   │   └── schema.ts         # JSON-LD generators (Organization, Service, FAQ)
│   ├── hooks/                # useLocale, useCursor, useViewTransition
│   ├── lib/                  # i18n, schema, utils
│   ├── routes.tsx            # TanStack Router configuration
│   ├── main.tsx              # Entry point
│   └── styles/globals.css    # Tailwind v4 + design tokens
├── scripts/
│   ├── build.ts              # Bun production build
│   ├── dev.ts                # Development server
│   ├── verify-content.ts     # Content validation
│   ├── generate-schema.ts    # JSON-LD generation
│   └── optimize-fonts.ts     # Font optimization guide
├── .github/workflows/ci.yml  # CI/CD pipeline
├── vercel.json               # Vercel deployment config
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Bun** (recommended) or Node.js 22+
- Git

### Installation
```bash
# Clone
git clone https://github.com/ArchDityaa/newall-network.git
cd newall-network

# Install dependencies (Bun - fastest)
bun install

# Or with npm/pnpm
npm install
# pnpm install
```

### Development
```bash
# Start dev server (hot reload via Bun rebuild)
bun run dev
# Open http://localhost:3000
```

### Building
```bash
# Production build (type-check + Bun bundle)
bun run build

# Preview production build
bun run preview
```

### Testing & Quality
```bash
# Unit tests
bun run test

# E2E tests (requires build first)
bun run build && bunx playwright test

# Type checking
bun run typecheck

# Linting
bun run lint

# Content validation
bun run content:validate
```

---

## 🔑 Content Management

All content lives in `src/content/` as **TypeScript files**:

| File | Purpose |
|------|---------|
| `config.ts` | Site metadata, SEO, social links |
| `navigation.ts` | Nav items, CTA, language switcher |
| `hero.ts` | Hero badge, headline, subheadline, CTAs |
| `services.ts` | 6 services with features, icons, descriptions |
| `faq.ts` | 7 FAQ items with schema.org markup |
| `schema.ts` | JSON-LD generators |

### Adding a New Service
```typescript
// src/content/services.ts
export const services = {
  id: [
    {
      id: 'new-service',
      name: 'New Service',
      description: 'Description here',
      icon: 'shield', // or monitor, globe, search, zap, bot, database, server, code, users
      features: ['Feature 1', 'Feature 2'],
    },
    // ... existing services
  ],
  en: [
    {
      id: 'new-service',
      name: 'New Service',
      description: 'Description here',
      icon: 'shield',
      features: ['Feature 1', 'Feature 2'],
    },
    // ... existing services
  ],
};
```

### Adding a New FAQ
```typescript
// src/content/faq.ts
export const faq = {
  id: [
    { id: 'new-question', question: 'Pertanyaan baru?', answer: 'Jawabannya.' },
    // ... existing FAQs
  ],
  en: [
    { id: 'new-question', question: 'New question?', answer: 'The answer.' },
    // ... existing FAQs
  ],
};
```

### Validation
```bash
bun run content:validate
# ✅ Validates all locales, IDs match, required fields present
```

---

## 🌐 Internationalization

- **Default**: Indonesian (`/`)
- **English**: `/en/`
- **Language switcher** in header
- **All content** typed per locale
- **hreflang** tags auto-generated

---

## 🎨 Design System (from original)

### Colors
```css
--color-ink: #0f1013;           /* Primary dark */
--color-paper: #f3efe7;         /* Primary light */
--color-orange: #ff5b1f;        /* Accent */
--color-lime: #c8f03c;          /* Highlight */
--color-cobalt: #2e46ff;        /* Secondary */
--color-graphite: #24262b;      /* Card dark */
--color-ink-muted: #4a4c52;     /* Muted text */
--color-paper-muted: #a9a59c;   /* Muted light */
```

### Typography
- **Display**: Bricolage Grotesque (variable 600-800)
- **Sans**: Geist (variable 400-700)
- **Mono**: Geist Mono (variable 400-700)
- **Dot**: Doto (800)

### Spacing
- **Gutter**: `clamp(16px, 4vw, 48px)`
- **Container**: `max-width: 1440px`

---

## 📦 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Add environment variables:
   ```env
   VITE_SITE_URL=https://newall.network
   VITE_PLAUSIBLE_DOMAIN=newall.network  # optional
   VITE_GA_ID=G-XXXXXXXXXX               # optional
   ```
3. Deploy — zero config needed

### Manual Build
```bash
bun run build
# Output in ./dist
```

### Docker
```dockerfile
FROM oven/bun:1 AS builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ⚡ Linux Optimization

Optimized for multi-core Linux machines:

```bash
# Environment variables (auto-set in CI)
export UV_THREADPOOL_SIZE=$(nproc)
export NODE_OPTIONS="--max-old-space-size=8192"
export MAKEFLAGS="-j$(nproc)"

# Parallel operations
bun install          # Uses all cores
bun run build        # Parallel bundling
bun run test         # Parallel test workers
```

**CI/CD** uses all available CPU cores:
```yaml
# .github/workflows/ci.yml
UV_THREADPOOL_SIZE: ${{ runner.cpu_count }}
NODE_OPTIONS: --max-old-space-size=8192
```

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 100ms |
| CLS | < 0.1 |
| Lighthouse Performance | > 90 |
| Lighthouse Accessibility | > 95 |
| Lighthouse SEO | > 95 |
| JS Bundle (gzipped) | < 100KB |
| CSS Bundle (gzipped) | < 20KB |

---

## 🧪 Testing

```bash
# Unit tests (Vitest)
bun run test

# E2E tests (Playwright)
bun run build && bunx playwright test

# Type checking
bun run typecheck

# Linting
bun run lint
```

---

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `dev` | Start dev server with auto-rebuild |
| `build` | Type-check + production build |
| `preview` | Preview production build |
| `lint` | ESLint (zero warnings) |
| `typecheck` | TypeScript strict check |
| `test` | Vitest unit tests |
| `content:validate` | Validate all content files |
| `schema:generate` | Generate JSON-LD schemas |
| `fonts:optimize` | Font optimization guide |

---

## 🔒 Environment Variables

Create `.env.local` from `.env.example`:
```env
VITE_SITE_URL=https://newall.network
VITE_PLAUSIBLE_DOMAIN=newall.network
VITE_GA_ID=G-XXXXXXXXXX
CONTENTFUL_SPACE_ID=xxx        # optional
CONTENTFUL_ACCESS_TOKEN=xxx    # optional
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes (content in `src/content/`, components in `src/components/`)
4. Run validation: `bun run content:validate && bun run typecheck && bun run lint`
5. Commit: `git commit -m 'feat: add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open Pull Request

---

## 📄 License

MIT License — Built for **Newall Network**

---

## 🙏 Acknowledgments

- Original design: https://dev.newall.network/
- Fonts: Bricolage Grotesque, Geist, Geist Mono, Doto
- Icons: Custom SVG (inline)
- Inspiration: Modern web best practices