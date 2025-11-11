# SalesAgency.ai

Marketing website for an AI-powered sales development platform. Build autonomous AI SDRs for outbound sales at 90% lower cost than human sales development representatives.

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **React**: 19 with TypeScript
- **Styling**: Tailwind CSS 4, OKLCH color space
- **Components**: shadcn/ui
- **Theme**: next-themes (light/dark/system)
- **Icons**: Phosphor Icons

## Project Structure

```
app/              → Pages & layouts
components/       → Reusable UI components & page sections
lib/             → Utilities & helpers
public/          → Static assets, robots.txt, sitemap
```

## Key Features

- Multi-channel automation (LinkedIn, Email, Phone/Voice)
- RapidClose methodology framework
- Dollar-per-lead (DPL) optimization
- Fractional CRO services
- Sales team buildout & coaching
- SEO optimized (68+ keywords, JSON-LD structured data)
- Performance monitoring (Web Vitals)
- Security headers & best practices

## Development

- Edit `app/page.tsx` to update the homepage
- Components are in `components/` with page sections organized by feature
- Styling uses Tailwind utilities and global CSS variables in `app/globals.css`
- Add new shadcn components: `npx shadcn@latest add <component-name>`
