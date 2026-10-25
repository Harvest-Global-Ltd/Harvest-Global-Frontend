<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Harvest Global (HG Systems) marketing site

Next.js 16.3 App Router + React 19 + Tailwind v4 + shadcn/ui (base-nova) + bun. Ships as a standalone Docker image to Google Cloud Run (port 8080); `vercel.json` also exists.

## Commands
- `bun run dev` / `bun run build` / `bun run start` / `bun run lint`. Use bun, not npm/yarn/pnpm.
- No tests and no `typecheck` script. Verify with `bun run lint` then `bunx tsc --noEmit`; `bun run build` is the full check (tsc + lint) and CI runs lint → build on PRs to `main`.
- `bun run build` currently fails on this machine: `@next/swc-darwin-arm64` in `node_modules` has no native binary, Next tries to download it via `npm`, and `npm`/`node` are not installed (`Failed to get registry from "npm"`). Use `bunx tsc --noEmit` + lint for verification, or install Node/npm first.
- ESLint is flat config (`eslint.config.mjs`) and exits 0 with tolerated warnings (raw `<img>`, unused vars, `exhaustive-deps`). Don't chase them.

## Routing and layout
- Routes: `/` (`app/page.tsx`), `/team`, `/credentials`, `/connect` under `app/(main)`, plus `app/api/contact/route.ts`, `app/sitemap.ts`, `app/robots.ts`.
- `app/(main)/layout.tsx` renders only `Navbar`; each page adds its own `Footer` (home and `/credentials` only).
- Nav links are hardcoded in two places — `components/Navbar.tsx` and `components/footer/Footer.tsx`. Update both.
- `Navbar` still special-cases a removed `/about-us` route (dark-on-light styling); that branch is dead code.
- Adding a route also means adding it to `app/sitemap.ts` and giving the page a `metadata` export with its canonical URL, matching existing pages.

## Content
- Most copy is hardcoded where it renders. Team members live in an array inside `app/(main)/team/page.tsx`; credentials/recognitions in `app/(main)/credentials/page.tsx`.
- `data/data.json` + `data/index.ts` are consumed only by `components/sections/FinalCta.tsx` (`data.cta`), even though the file contains site/nav/hero/team/etc. Editing `data.json` changes almost nothing — grep for `@/data` before assuming.
- `data/index.ts` annotates (not casts) the JSON as strict `SiteData` and runtime-guards `accent`/`visual` unions, so shape drift fails the build on purpose.

## Home page composition
- `app/page.tsx` composes sections; everything except `Hero`, `HeroReveal`, and `Vision` is loaded through `components/ui/LazySection.tsx`, which maps an id to a `dynamic(..., { ssr: false })` import in `REGISTRY`. A new lazy section must be registered there; `/#technology` deep links depend on that map.
- Motion stack: GSAP + `@gsap/react` (`useGSAP`) and `components/ui/reveal/Reveal.tsx`. `Starbackground` is seeded CSS, `Topography` is inline SVG (`ogl` is a dependency but unused). Reveals must respect `prefers-reduced-motion` and never leave content hidden — `lib/useInView.ts` is the reference pattern (currently unused).
- `next.config.ts` defines no `images.remotePatterns`; every rendered asset is local under `public/`. A remote `next/image` src needs that config added first (the unsplash URLs left in `data.json` are not rendered).

## Contact form
- UI is `app/(main)/connect/_component/Contactform.tsx` → server action `action/contact.ts` (nodemailer), validated by `models/contact.ts` (zod) through `hooks/useFetch.ts`.
- `app/api/contact/route.ts` is a separate, presence-check-only duplicate endpoint that the UI does not call. Change the server action, not the route, unless you intend to migrate.
- Needs `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASSWORD`, `MAIL_TO`. `.env.example` only lists unused `BACKEND_URL`, so copy the `MAIL_*` keys from an existing `.env`.

## Tailwind, assets, deploy
- Tailwind v4 is CSS-first: no `tailwind.config`; theme tokens live in `app/globals.css`. Manrope is loaded via `next/font` as `--font-manrope` in `app/layout.tsx`.
- `next.config.ts` serves `/images`, `/videos`, `/svg` as `immutable`. Never overwrite an asset in place — use a new filename so browsers don't keep stale bytes.
- `output: "standalone"` in `next.config.ts` matches the multi-stage `Dockerfile` (bun build → `node server.js` on `:8080`). README documents Cloud Run cold-start settings.
- `plans/` holds `.pptx`/`.docx` design sources and is gitignored, so it may be absent in a fresh clone.
- `CLAUDE.md` just re-exports this file.
