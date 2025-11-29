# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SalesAgency.ai - A marketing website for a Scalable Sales Systems platform. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16.0.5 (App Router, React Server Components, Turbopack)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 with OKLCH color space
- **UI Components**: shadcn/ui (New York style) + Kibo UI + Aceternity UI registries
- **Icons**: Lucide React (default) + Phosphor Icons
- **Theming**: next-themes with light/dark mode support
- **TypeScript**: Strict mode enabled

## Development Commands

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build (suppresses baseline-browser-mapping warnings)
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Page Composition

The homepage (`app/page.tsx`) composes these section components:
- `Navbar` - Navigation with theme switcher and mobile sheet menu
- `Hero` - Main landing section with CTA
- `ServicesSection` - Service offerings grid
- `SolutionsSection` - Solutions overview
- `CaseStudy` - Client results/testimonials
- `Founder` - About section
- `CTASection` - Call-to-action
- `Footer` - Site footer with links

### UI Component System

Three component registries configured in `components.json`:

1. **shadcn/ui** (`components/ui/`) - Base components (Button, Badge, Sheet)
2. **Kibo UI** (`components/kibo-ui/`) - Enhanced components (ThemeSwitcher)
3. **Aceternity UI** - Modern effects and animations

Add components:
```bash
npx shadcn@latest add <component>           # shadcn/ui
npx shadcn@latest add @kibo-ui/<component>  # Kibo UI
npx shadcn@latest add @aceternity/<component>  # Aceternity UI
```

### Theme System

**Color System** (`app/globals.css`):
- Primary: Purple `oklch(60% 0.25 290)` / `#8A30EF`
- Uses Tailwind 4 `@theme` directive with OKLCH colors
- Dark mode via `.dark` class selector
- Custom effects: `.gradient-mesh`, `.glass`, `.card-elevated`

**Spacing**: 8px baseline grid (see CSS comments for section spacing guidelines)

### SEO & Performance

- **Structured Data**: JSON-LD in `components/structured-data.tsx`
- **Web Vitals**: Performance monitoring in `app/web-vitals.tsx`
- **Security Headers**: Configured in `next.config.ts` (HSTS, X-Frame-Options, CSP hints)
- **Image Optimization**: AVIF/WebP formats, configured remote patterns

### Path Aliases

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Important Notes

- React Server Components are default; use `"use client"` for client components
- ThemeProvider requires `"use client"` and `suppressHydrationWarning` on `<html>`
- Only `images.unsplash.com` is configured for remote images in next.config.ts
- Tailwind 4 uses `@theme` directive instead of traditional tailwind.config.js
