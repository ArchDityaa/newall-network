# Newall Network Website

Modern, performant website for Newall Network — Remote IT Partner & Digital Protection.

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Routing**: TanStack Router (type-safe, file-based)
- **Styling**: Tailwind CSS v4 (CSS-first)
- **Animations**: Motion (Framer Motion) + View Transitions API
- **Internationalization**: i18next + react-i18next
- **Fonts**: Self-hosted WOFF2 (Bricolage Grotesque, Geist, Geist Mono, Doto)
- **Package Manager**: Bun
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Bun 1.0+ (recommended) or Node.js 22+
- Git

### Installation

```bash
# Clone and install
git clone <repo-url>
cd newall-network
bun install

# Or with npm/pnpm
npm install
# pnpm install
```

### Development

```bash
# Start dev server (all cores utilized)
bun run dev

# Or with npm/pnpm
npm run dev
```

Open http://localhost:3000

### Building

```bash
# Production build
bun run build

# Preview production build
bun run preview
```

### Testing

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

## Project Structure

```
newall-network/
├── public/                 # Static assets
│   ├── fonts/             # WOFF2 font files
│   ├── img/               # Images (OG, favicons, etc.)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/           # Base components (Button, Card, Link, etc.)
│   │   ├── layout/       # Header, Footer, Layout
│   │   ├── hero/         # Hero section
│   │   ├── services/     # Services grid & cards
│   │   ├── faq/          # FAQ accordion
│   │   └── cursor/       # Custom cursor effect
│   ├── content/          # 🔑 MODULAR CONTENT LAYER
│   │   ├── config.ts     # Site config
│   │   ├── navigation.ts # Navigation items
│   │   ├── hero.ts       # Hero copy per locale
│   │   ├── services.ts   # Services data per locale
│   │   ├── faq.ts        # FAQ data per locale
│   │   └── schema.ts     # JSON-LD generators
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilities (i18n, schema, utils)
│   ├── routes/           # TanStack Router routes
│   ├── styles/           # Global styles, Tailwind
│   ├── types/            # TypeScript interfaces
│   ├── main.tsx          # Entry point
│   └── routes.ts         # Router config
├── scripts/              # Build/util scripts
├── e2e/                  # Playwright tests
├── .github/workflows/    # CI/CD
├── vercel.json           # Vercel config
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## Content Management

All content lives in `src/content/` as TypeScript files:

- **Hero**: `hero.ts` - badge, headline, subheadline, CTAs
- **Services**: `services.ts` - 6 services with features, icons, descriptions
- **FAQ**: `faq.ts` - 7 FAQ items with schema.org markup
- **Navigation**: `navigation.ts` - nav items, CTA, language switcher
- **Config**: `config.ts` - site metadata, SEO, social links

Each locale (`id`, `en`) has its own content object. TypeScript ensures consistency across locales.

### Adding a New Service

1. Add service to `services.id` and `services.en` in `src/content/services.ts`
2. Run `bun run content:validate` to verify
3. Content automatically appears in Services grid

### Adding a New FAQ

1. Add FAQ item to `faq.id` and `faq.en` in `src/content/faq.ts`
2. Run `bun run content:validate` to verify
3. Automatically appears in FAQ section with JSON-LD

## Internationalization

- Default locale: Indonesian (`id`)
- Secondary: English (`en`)
- URLs: `/` (Indonesian), `/en/` (English)
- Language switcher in header
- All content typed per locale

## Performance

- **Lighthouse targets**: Performance >90, Accessibility >95, SEO >95
- **Bundle**: <100KB JS, <20KB CSS (gzipped)
- **Fonts**: Self-hosted WOFF2 with `font-display: swap`
- **Images**: Optimized, proper sizing, lazy loading
- **Caching**: Long-term for assets, no-cache for HTML

## Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Add environment variables from `.env.example`
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
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Linux Optimization

This project is optimized for Linux development machines:

- **Parallel builds**: Uses all CPU cores via `os.cpus().length`
- **Fast tooling**: Bun, esbuild, lightningcss
- **Memory**: `--max-old-space-size=8192` for large builds
- **Thread pool**: `UV_THREADPOOL_SIZE` set to core count

```bash
# Optimal environment variables (auto-set in CI)
export UV_THREADPOOL_SIZE=$(nproc)
export NODE_OPTIONS="--max-old-space-size=8192"
export MAKEFLAGS="-j$(nproc)"
```

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start dev server on 0.0.0.0:3000 |
| `build` | Type-check + production build |
| `preview` | Preview production build |
| `test` | Run unit tests |
| `test:ui` | Test UI |
| `lint` | ESLint with zero warnings |
| `typecheck` | TypeScript check |
| `content:validate` | Validate all content |
| `schema:generate` | Generate JSON-LD schemas |
| `fonts:optimize` | Font optimization guide |

## License

MIT — Built for Newall Network