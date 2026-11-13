# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project structure with React 19, TanStack Router, Tailwind CSS v4
- Modular content system in `src/content/` (TypeScript, hot-reloadable)
- Internationalization (Indonesian/English) with locale-aware routing
- JSON-LD structured data generators (Organization, ProfessionalService, FAQPage)
- Component library: Button, Card, Link, Container, Grid
- Layout components: Header, Footer, Language switcher
- Hero section with custom cursor animation
- Services grid with icons and feature lists
- FAQ accordion with schema.org markup
- Custom cursor effect (desktop only, respects reduced motion)
- View Transitions API integration
- Bun-based build system with production optimizations
- Vercel deployment configuration
- GitHub Actions CI/CD pipeline
- Content validation script
- Comprehensive documentation (README, CONTRIBUTING)

### Content
- Site configuration (name, email, social, locales)
- Navigation items and CTAs for both locales
- Hero content (badge, headline, subheadline, CTAs)
- 6 services: IT Support, Website & Server, SEO, Automation & Bots, AI Agent, Applications & Data
- 7 FAQ items with structured data
- Design tokens from original website (colors, typography, spacing)

### Performance
- Code splitting with manual chunks (vendor, motion, utils)
- Parallel builds using all CPU cores
- ESBuild + LightningCSS for minification
- Self-hosted WOFF2 fonts with `font-display: swap`
- Long-term caching headers for static assets

## [1.0.0] - 2026-11-13

### Added
- Initial release
- Complete rebuild of https://dev.newall.network/
- Production-ready for Vercel deployment