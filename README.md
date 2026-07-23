# SJD Elite Football Academy

A premium, animated marketing website for SJD Elite Football Academy — built to showcase the academy's programs, coaching staff, facilities, and story, and to convert visitors into enrolled players.

![Tech](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![Tech](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)
![Tech](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=white)
![Tech](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)

---

## Overview

This is a single-page site built with a component-per-section architecture, so each part of the page (hero, programs, coaches, testimonials, contact form, etc.) is self-contained, easy to find, and easy to edit without touching unrelated code.

**Highlights**

- Animated hero, scroll-triggered reveals, and an auto-advancing testimonial carousel (powered by [Motion](https://motion.dev))
- Animated stat counters, image gallery, and coach/program grids
- Fully responsive, mobile-first layout with a slide-out mobile nav
- Accessible form components and interactive UI built on [Radix UI](https://www.radix-ui.com/) primitives via [shadcn/ui](https://ui.shadcn.com/)
- Dark, black-and-gold design system defined with Tailwind CSS v4's CSS-based theme tokens

## Tech Stack

| Layer              | Technology                       |
| ------------------ | --------------------------------- |
| Framework           | React 19 + Vite 7                 |
| Language            | TypeScript (strict mode)          |
| Styling             | Tailwind CSS v4                    |
| Animation           | Motion (Framer Motion successor)   |
| UI primitives       | Radix UI / shadcn/ui               |
| Forms               | React Hook Form + Zod              |
| Icons               | Lucide React                       |
| Linting/Formatting  | ESLint + Prettier                  |

## Getting Started

### Prerequisites

- Node.js 18+ (Node 22 recommended)
- npm (or pnpm/yarn/bun if you prefer — just adjust the commands below)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module reloading, typically at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Type-checks the project and produces an optimized build in `dist/`.

### Preview the Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
sjd-elite-football-academy/
├── public/                    Static assets served as-is (favicon, icons)
├── src/
│   ├── assets/                 Images used throughout the site
│   ├── components/
│   │   ├── common/              Small reusable primitives
│   │   │                         (ShieldLogo, SectionEyebrow, FadeIn, Counter, Field)
│   │   ├── layout/               Page chrome — Navbar, Footer
│   │   ├── sections/            One component per landing-page section
│   │   │                         (Hero, Features, About, Programs, Stats, Gallery,
│   │   │                          Coaches, News, Testimonials, JoinBanner, Contact)
│   │   └── ui/                  shadcn/ui primitives (button, card, dialog, form, ...)
│   ├── data/                    Static content, kept separate from markup
│   │                             (navigation, features, programs, stats, gallery,
│   │                              coaches, news, testimonials)
│   ├── hooks/                   Custom hooks (use-mobile)
│   ├── lib/                     Utilities (`cn` class-merge helper)
│   ├── pages/
│   │   └── Home.tsx              Composes all sections into the landing page
│   ├── App.tsx                  Application root
│   ├── main.tsx                 Vite/React entry point
│   └── index.css                Tailwind v4 theme tokens + global styles
├── index.html                 HTML entry point
├── vite.config.ts             Vite config (React + Tailwind plugins, `@` alias)
├── tsconfig*.json              TypeScript project configuration
├── eslint.config.js            ESLint configuration
└── components.json             shadcn/ui configuration
```

### Why this structure?

- **`data/` is separate from `components/`** — editing site copy (coach names, program descriptions, contact details, stats) never requires touching JSX or component logic.
- **`sections/` mirrors the page, top to bottom** — the file list reads like the page itself, making it fast to locate and edit any part of the site.
- **`common/`** holds the small pieces reused across multiple sections (the animated fade-in wrapper, the section label, the logo) so there's a single source of truth for each.
- **`ui/`** is left as generated shadcn/ui primitives — safe to extend via the shadcn CLI without touching site-specific code.

## Customization Guide

| I want to...                              | Edit this                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| Change program names/descriptions           | `src/data/programs.ts`                                                        |
| Update coach bios                            | `src/data/coaches.ts`                                                          |
| Update contact info (address/phone/email)     | `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`     |
| Swap hero/gallery/news images                 | Replace files in `src/assets/` and update the corresponding import               |
| Change colors / theme                         | `src/index.css` (`:root` custom properties and `@theme` block)                   |
| Add a navigation link                         | `src/data/navigation.ts`                                                        |
| Add a new page section                        | Create a component in `src/components/sections/`, then add it to `src/pages/Home.tsx` |

## Path Aliases

The `@/*` alias resolves to `src/*`, configured in both `tsconfig.app.json` and `vite.config.ts`:

```ts
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
```

## Deployment

This is a static site after `npm run build` — the contents of `dist/` can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3/CloudFront, etc.). No server runtime is required.
