<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Harvest Global website

Marketing site for HG Systems: Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui (base-nova) + bun. Deploys on Vercel.

## Commands — use `bun`, not npm/yarn
- `bun run dev` / `bun run build` / `bun run start` / `bun run lint`
- There is no `typecheck` script. `bun run build` (`next build`) is the full verification — it runs tsc + lint-in-build. Run it before finishing.
- `lint` is flat-config ESLint. It currently exits 0 with a handful of tolerated warnings (raw `<img>`, unused imports) — warnings are accepted, don't chase them.

## Architecture
- Home (`app/page.tsx`) composes shared components under `components/` (Navbar, Hero, `sections/`, `footer/`, `ui/`).
- Sub-pages live in the `app/(main)/` route group — `/about-us`, `/connect`, `/credentials`. The single shared `components/Navbar.tsx` renders on every page: home renders it in `app/page.tsx`, sub-pages render it via the `(main)` layout. It switches to dark-on-light styling (`text-black`, `button--dark`) on `/about-us` based on `usePathname`.
- Sub-page sections live in `app/(main)/<route>/_components/` (plural). The `about-us` route uses `_component` (singular) for its `TeamCard.tsx`. Page-level section composition happens in the page files, not in layouts.
- Path alias `@/*` → repo root.

## Content lives in `data/`, not components
- All copy is in `data/data.json`, read through a strictly-typed `SiteData` in `data/index.ts`. Shape drift or an unknown stage `accent` fails the build on purpose. Edit copy in `data.json`; keep components presentation-only.
- `data/images.ts` holds image-path constants separately.

## Design & motion
- Tailwind v4 is config-less (CSS-first in `app/globals.css`; no `tailwind.config`). Font: Manrope via `next/font/google` with CSS variable `--font-manrope` set in `app/layout.tsx`.
- Motion stack: GSAP + `@gsap/react` (`useGSAP`), Lenis (wrapped globally by `components/SmoothScroll`), framer-motion, ogl. Scroll-choreography primitives live in `components/ui/` (`ScrollExpand`, `ScrollStack`, `HeroReveal`, `Starbackground`, `AnimateButton`).
- Respect `prefers-reduced-motion`: reveals must never leave content hidden (`lib/useInView.ts` models the pattern).

## Planning docs
- `plans/` holds source design files (`.pptx`, `.docx`). Check current file state before assuming what's implemented.

## Images
- `next/image` remotePatterns allow `images.unsplash.com` and `cdn.pixabay.com`; other assets are local under `public/`. Raw `<img>` still appears in several components (accepted for now).
