# SJD Elite Football Academy

A marketing site for SJD Elite Football Academy, built with **React 19 + Vite + TypeScript + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/                 Images used across the site
├── components/
│   ├── common/              Small reusable primitives (ShieldLogo, FadeIn, Counter, Field, SectionEyebrow)
│   ├── layout/               Navbar, Footer
│   ├── sections/            One component per landing-page section (Hero, About, Programs, ...)
│   └── ui/                  shadcn/ui primitives (button, card, dialog, etc.)
├── data/                    Static content (nav links, programs, coaches, testimonials, ...)
│                             kept separate from markup so copy can be edited without touching JSX
├── hooks/                   Custom hooks (use-mobile)
├── lib/                     Utilities (`cn` class merge helper)
├── pages/
│   └── Home.tsx              Composes all sections into the landing page
├── App.tsx                  App root
├── main.tsx                 Vite entry point
└── index.css                Tailwind v4 theme + design tokens (black & gold theme)
```

## Notes

- Path alias `@/*` maps to `src/*` (configured in `tsconfig.app.json` and `vite.config.ts`).
- Styling uses Tailwind CSS v4's CSS-based configuration (see `@theme` block in `src/index.css`) plus shadcn/ui components.
- Navigation is a single-page layout using in-page anchor links (`#about`, `#programs`, etc.) — no router is needed.
