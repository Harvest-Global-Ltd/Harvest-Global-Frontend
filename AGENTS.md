<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Harvest Global website

Marketing site for HG Systems: Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui (base-nova) + bun. Deploys on Vercel.

## Commands — use `bun`, not npm/yarn
- `bun run dev` / `bun run build` / `bun run start` / `bun run lint`
- No `typecheck` or test scripts. `bun run build` (`next build`) is the full verification — it runs tsc + lint. Run it before finishing.
- ESLint is flat config (`eslint.config.mjs`). It exits 0 with tolerated warnings (raw `<img>`, unused imports) — don't chase them.

## Architecture
- Home (`app/page.tsx`) composes sections directly in one file: `components/Navbar`, `components/Hero`, `components/ui/HeroReveal`, `components/sections/*`, `components/footer/Footer`.
- Sub-pages live in the `app/(main)/` route group — `/about-us`, `/connect`, `/credentials` — each rendering Navbar via `app/(main)/layout.tsx`.
- Sub-page sections live in the route's own folder (e.g. `about-us` uses `_component/TeamCard.tsx`). Page-level composition happens in `page.tsx`, not layouts.
- Navbar switches to dark-on-light styling (`text-black`) on `/about-us` via `usePathname` in `components/Navbar.tsx`.
- Path alias `@/*` → repo root.

## Content lives in `data/`, not components
- Copy lives in `data/data.json`, exposed through a strictly-typed `SiteData` in `data/index.ts` (annotated, not cast — shape drift fails the build on purpose). `accent` values are runtime-guarded unions. Edit copy in `data.json`; keep components presentation-only.

## Design & motion
- Tailwind v4 is CSS-first and config-less (`app/globals.css`; no `tailwind.config`). Manrope via `next/font/google`, CSS variable `--font-manrope`, set in `app/layout.tsx`.
- Motion stack: GSAP + `@gsap/react` (`useGSAP`), ogl. Scroll/animation primitives live in `components/ui/` (`HeroReveal`, `reveal/Reveal`, `Starbackground`, `AccordinGallery`, `ApplicationTabs`, `Topography`).
- Respect `prefers-reduced-motion`: reveals must never leave content hidden — `lib/useInView.ts` models the pattern.

## Planning docs
- `plans/` holds source design files (`.pptx`, `.docx`). Check current file state before assuming what's implemented.

## Images
- `next/image` remotePatterns allow `images.unsplash.com` and `cdn.pixabay.com`; other assets are local under `public/`. Raw `<img>` still appears in several components (accepted for now).