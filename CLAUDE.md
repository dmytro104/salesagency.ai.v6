# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SalesAgency.ai - A marketing website for an AI-powered sales development platform. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router, React Server Components, Turbopack)
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 with OKLCH color space
- **UI Components**: shadcn/ui (New York style) + Kibo UI + Aceternity UI registries
- **Icons**: Phosphor Icons + Lucide React
- **Animation**: Motion (Framer Motion)
- **Theming**: next-themes with light/dark mode support
- **TypeScript**: Strict mode enabled

## Development Commands

```bash
# Development server (default port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Component Architecture

### UI Component System

The project uses a dual-component registry system:

1. **shadcn/ui components** (`components/ui/`)
   - Base components: Button, Card, Badge
   - Style: "new-york" variant
   - Uses class-variance-authority for variant management

2. **Kibo UI components** (`components/kibo-ui/`)
   - Enhanced components: ThemeSwitcher, Marquee, Announcement
   - Registry URL: https://www.kibo-ui.com/r/{name}.json
   - Add new components: `npx shadcn@latest add @kibo-ui/<component-name>`

3. **Aceternity UI components**
   - Modern UI components and effects
   - Registry URL: https://ui.aceternity.com/r/{name}.json
   - Add new components: `npx shadcn@latest add @aceternity/<component-name>`

### Theme System

**Theme Provider** (`components/theme-provider.tsx`):
- Wraps entire app in `app/layout.tsx`
- Uses next-themes with `attribute="class"` and `enableSystem`
- Supports light/dark/system preferences

**Color System** (`app/globals.css`):
- Primary brand color: `#8A30EF` (purple) - oklch(60% 0.25 290)
- Uses OKLCH color space for perceptually uniform colors
- Tailwind 4 `@theme` directive for CSS variable definitions
- Dark mode handled via `.dark` class selector
- 8px baseline grid spacing system for visual consistency

**Special Effects** (`app/globals.css`):
- Gradient mesh backgrounds (`.gradient-mesh`)
- Glassmorphism effects (`.glass`)
- Card elevation system (`.card-elevated`)
- Icon float animations (`.icon-float`)

### Path Aliases

Defined in `tsconfig.json`:
```typescript
"@/*": ["./*"]
```

Usage:
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Design System Principles

**Brand Colors**:
- Primary: Purple (#8A30EF / oklch(60% 0.25 290))
- Use `text-primary`, `bg-primary`, `border-primary` utilities
- Special effects: `.gradient-mesh`, `.glass`, `.card-elevated`

**Spacing System**:
- 8px baseline grid for all spacing (gap-4, gap-8, gap-16, etc.)
- Hero sections: py-24 sm:py-32 lg:py-40
- Regular sections: py-16 sm:py-24
- Separators: my-16 sm:my-24

**Component Conventions**:
- Follow shadcn/ui patterns (composition, variants, className merging)
- Use `cn()` utility from `@/lib/utils` for className merging
- Prefer semantic color tokens over hardcoded colors
- Mobile-first responsive design

**Typography**:
- Font: Geist Sans (variable: `--font-geist-sans`)
- Monospace: Geist Mono (variable: `--font-geist-mono`)
- Automatically optimized with `next/font`

## File Structure

```
app/
├── layout.tsx          # Root layout with ThemeProvider
├── page.tsx            # Homepage (landing page)
└── globals.css         # Global styles, theme colors

components/
├── ui/                 # shadcn/ui base components
├── kibo-ui/           # Kibo UI enhanced components
└── theme-provider.tsx # Theme context wrapper

lib/
└── utils.ts           # Utility functions (cn, etc.)
```

## Adding New Components

**From shadcn/ui**:
```bash
npx shadcn@latest add <component-name>
```

**From Kibo UI**:
```bash
npx shadcn@latest add @kibo-ui/<component-name>
```

**From Aceternity UI**:
```bash
npx shadcn@latest add @aceternity/<component-name>
```

Components are automatically added to the correct directory based on their registry.

## Styling Guidelines

1. **Use Tailwind utilities first** - avoid custom CSS when possible
2. **Semantic color tokens** - use `bg-background`, `text-foreground`, etc.
3. **Responsive design** - mobile-first with sm:, md:, lg:, xl: breakpoints
4. **Dark mode** - use semantic tokens that automatically adapt
5. **Animations** - use Tailwind's built-in transition utilities

## Important Notes

- Next.js 16 uses Turbopack by default (faster than Webpack)
- React Server Components are default (mark client components with `"use client"`)
- Tailwind CSS 4 uses `@theme` instead of traditional config files
- Color system uses OKLCH for better perceptual uniformity
- Theme switching is client-side only (ThemeProvider needs `"use client"`)
- Dark mode removes borders on accordions and badges for cleaner appearance

## Remote Image Domains

Allowed domains in `next.config.ts`:
- `images.unsplash.com` - Stock images
- `api.dicebear.com` - Avatar generation
- `shadcnblocks.com` - Component examples

## Metadata & SEO

- Dynamic base URL configuration (`getBaseUrl()` in `app/layout.tsx`)
- Supports Vercel auto-deployment URLs and local development
- Comprehensive Open Graph and Twitter Card metadata
- PWA-ready with manifest and icon configuration
- Favicon system: `favicon.ico`, `icon.svg`, `apple-icon.png`
