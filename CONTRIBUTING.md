# Contributing to Newall Network Website

Thank you for contributing! This document outlines the process for contributing to the Newall Network website rebuild.

## 🚀 Quick Start

```bash
# 1. Fork and clone
git clone https://github.com/your-username/newall-network.git
cd newall-network

# 2. Install dependencies
bun install

# 3. Start development
bun run dev

# 4. Make changes, then validate
bun run content:validate && bun run typecheck && bun run lint

# 5. Commit and push
git add .
git commit -m "feat: your descriptive message"
git push origin feature/your-feature-name

# 6. Open Pull Request
```

## 📋 Development Workflow

### Branch Naming
- `feature/description` — New features
- `fix/description` — Bug fixes
- `content/description` — Content updates (copy, FAQ, services)
- `docs/description` — Documentation updates
- `refactor/description` — Code refactoring
- `chore/description` — Maintenance tasks

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new service "Cloud Migration"
fix: resolve FAQ accordion animation glitch
content: update hero headline for Indonesian locale
docs: add deployment guide for Vercel
refactor: extract Button component variants
chore: update dependencies
```

### Content Changes
**All content changes go in `src/content/`:**

| File | What to Edit |
|------|--------------|
| `config.ts` | Site name, email, social links, SEO |
| `navigation.ts` | Nav items, CTA text, language labels |
| `hero.ts` | Hero badge, headline, subheadline, CTAs |
| `services.ts` | Service names, descriptions, features, icons |
| `faq.ts` | FAQ questions and answers |
| `schema.ts` | JSON-LD structured data (auto-generated) |

**After content changes:**
```bash
bun run content:validate  # Validates all locales, IDs, required fields
```

## 🧪 Testing Checklist

Before submitting PR, run:

```bash
# Type checking
bun run typecheck

# Linting
bun run lint

# Unit tests
bun run test

# Content validation
bun run content:validate

# Build verification
bun run build
```

## 📝 Pull Request Template

When opening a PR, include:

1. **Description**: What changes and why
2. **Type**: `feat` | `fix` | `content` | `docs` | `refactor` | `chore`
3. **Testing**: How you tested the changes
4. **Screenshots**: For UI changes (before/after)
5. **Checklist**:
   - [ ] `bun run typecheck` passes
   - [ ] `bun run lint` passes
   - [ ] `bun run test` passes
   - [ ] `bun run content:validate` passes (if content changed)
   - [ ] `bun run build` succeeds
   - [ ] Works in both ID and EN locales
   - [ ] Mobile responsive
   - [ ] No console errors

## 🎯 Code Style

### TypeScript
- Strict mode enabled
- No `any` types (use proper interfaces)
- Explicit return types for public functions
- Prefer `type` over `interface` for unions

### React
- Functional components with hooks
- Colocate components with their styles/logic
- Use `React.memo` for pure components
- Prefer composition over inheritance

### Styling (Tailwind v4)
- Use design tokens from `globals.css` (`--color-ink`, `--color-orange`, etc.)
- Avoid arbitrary values; extend theme in `tailwind.config.ts`
- Mobile-first responsive design

### Content
- Indonesian first, then English
- Keep IDs consistent across locales
- Use semantic, accessible copy
- Validate with `bun run content:validate`

## 🐛 Bug Reports

Include:
- **Environment**: OS, browser, Bun version
- **Steps to reproduce**: Clear, numbered steps
- **Expected vs actual behavior**
- **Screenshots/videos** if applicable
- **Console errors** (if any)

## 💡 Feature Requests

Describe:
- **Problem**: What problem does this solve?
- **Solution**: Proposed approach
- **Alternatives considered**
- **Impact**: Content, UI, performance, SEO

## 📚 Resources

- [React 19 Docs](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [i18next](https://www.i18next.com/)
- [Bun](https://bun.sh/)
- [Vercel](https://vercel.com/docs)

---

**Questions?** Open a discussion or contact the maintainers.