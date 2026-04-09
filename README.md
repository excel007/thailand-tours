# Sawasdee Voyages — Thailand Tour Agency

A single-page application for a Thailand tour agency, built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. The design follows the warm, editorial aesthetic defined in the [DESIGN.md](../DESIGN.md) design system — parchment backgrounds, terracotta accents, serif headlines, and alternating light/dark sections.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind + design tokens (colors, fonts)
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # SPA shell — assembles all sections
└── components/
    ├── Navigation.tsx       # Sticky nav, mobile hamburger, anchor links
    ├── Hero.tsx             # Full-viewport hero with stats and CTAs
    ├── Destinations.tsx     # 6-card destination grid (dark section)
    ├── Packages.tsx         # 3-tier tour pricing cards
    ├── About.tsx            # Company story + feature cards
    ├── Testimonials.tsx     # Interactive review carousel
    ├── Contact.tsx          # Contact form with submission state
    └── Footer.tsx           # 4-column footer with links
```

## Design Tokens

All colors and typography are defined as Tailwind theme tokens in `globals.css`:

| Token | Color | Usage |
|-------|-------|-------|
| `parchment` | `#f5f4ed` | Page background |
| `ivory` | `#faf9f5` | Card surfaces |
| `terracotta` | `#c96442` | Brand accent, CTAs |
| `near-black` | `#141413` | Primary text, dark sections |
| `olive-gray` | `#5e5d59` | Secondary text |
| `stone-gray` | `#87867f` | Tertiary text |
| `warm-sand` | `#e8e6dc` | Button backgrounds |
| `border-cream` | `#f0eee6` | Light borders |
| `dark-surface` | `#30302e` | Dark theme cards, borders |

Typography: **Georgia** (serif) for headlines at weight 500, **Arial** (sans) for body/UI.

## How to Create a Similar Website

### The Prompt

Use this prompt with an AI coding agent to generate a similar site based on the design system:

```
Create a [BUSINESS TYPE] single-page website using Next.js (App Router), TypeScript,
and Tailwind CSS. Use SPA-style navigation with smooth-scrolling anchor links.

Follow these design rules from DESIGN.md:
- Page background: Parchment (#f5f4ed). Never use pure white (#ffffff) as page background.
- All neutrals must be warm-toned (yellow-brown undertone). No cool blue-grays.
- Brand accent: Terracotta (#c96442) — use sparingly for primary CTAs only.
- Dark section background: Near Black (#141413), dark surfaces: (#30302e).
- Borders (light): (#f0eee6), borders (dark): (#30302e).

Typography:
- Headlines: serif font (Georgia), weight 500 only. Never bold (700+).
- Body/UI: sans-serif font (Arial).
- Body line-height: 1.60. Headline line-height: 1.10–1.30.

Components:
- Border radius minimum: 6px. Prefer 8–12px for buttons/cards, 16–32px for hero containers.
- Shadows: use ring shadows (0px 0px 0px 1px) instead of drop shadows.
- Drop shadows when needed: extremely soft (rgba(0,0,0,0.05) 0px 4px 24px).
- Buttons: minimum 44x44px touch target.

Layout:
- Base spacing unit: 8px. Max container width: ~1200px, centered.
- Section spacing: generous (80–120px between major sections).
- Alternate between light (Parchment) and dark (Near Black) sections for rhythm.

Include these sections:
1. Sticky navigation with mobile hamburger menu
2. Hero section with headline, subtitle, CTAs, and stats
3. [CONTENT SECTION 1] — dark background
4. [CONTENT SECTION 2] — light background
5. About / features section
6. Testimonials with interactive carousel
7. Contact form with validation and success state
8. Footer with link columns and social icons

Define all colors as Tailwind theme tokens in globals.css using @theme inline.
No comments in code. TypeScript strict mode. Named exports only.
```

### Customization Checklist

When adapting this template for a different business:

1. **Colors** — Update `@theme inline` in `globals.css` with brand colors while keeping the warm-neutral philosophy
2. **Content** — Replace destination/package data in each component's constants array
3. **Images** — Swap Unsplash URLs for the business's own imagery
4. **Copy** — Update all text content, company name, and contact details
5. **Sections** — Add or remove sections to match the business's needs
6. **Metadata** — Update `title` and `description` in `layout.tsx`

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Fonts**: System font stack (Georgia / Arial)
- **Images**: External URLs via Unsplash

## Deploy

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
npx vercel
```

Or see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.
