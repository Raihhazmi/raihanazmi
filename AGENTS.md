# AGENTS.md

Single-page Vite + React 19 + TypeScript portfolio for `raihanazmi.dev` (package name is still `cli`). No backend, no router, no state library, no CMS. All app code is in `src/`; `src/main.tsx` is the only entrypoint and mounts inside `<StrictMode>`.

## Commands

- `npm run dev` — dev server with HMR
- `npm run build` — `tsc -b && vite build` (this is the real gate: typecheck **and** bundle)
- `npm run lint` — `eslint .`
- `npm run preview` — serve `dist/`
- Typecheck only: `npx tsc -b`. There is no `typecheck` npm script.

There is **no test runner and no test script**. Don't look for or invent one — verify changes with `npx tsc -b` and `npm run lint`.

`npm run build` covers both `vite.config.ts` (via `tsconfig.node.json`) and `src/` (via `tsconfig.app.json`). Run it, not just `tsc -b`, when touching build config.

## Structure

- `src/main.tsx` — sole entrypoint, mounts `App` in `<StrictMode>`
- `src/App.tsx` — page assembly only: skip link + `Header` + `<main>` (Hero, About, Experience, Education, Skills, Work, Contact) + `Footer`. No section markup lives here.
- `src/components/layout/` — page chrome: `Container`, `Section`, `Header`, `Footer`
- `src/components/motion/` — GSAP helpers, currently just `Reveal`
- `src/components/ui/` — small shared presentational pieces (e.g. `SectionHeading`)
- `src/sections/` — one file per homepage section: `Hero`, `About`, `Experience` (also renders `recognition`), `Education`, `Skills`, `Work`, `Contact`
- `src/lib/` — framework-free modules: `motion.ts` (easing, durations, reduced-motion), `content.ts` (single source of truth for all portfolio copy and structured data — site, person, about, experience, education, projects, recognition, skills, socials), `nav.ts` (primary nav labels/anchors, shared by Header and Footer). Components read facts from these; never hard-code them in JSX.
- Section ids are `about`, `experience`, `education`, `skills`, `work`, `contact` — they are the nav's anchor targets, so renaming one breaks the header.

## TypeScript gotchas

- **No `"strict"` in either tsconfig.** Null/implicit-any errors are not caught. Do not assume strict mode; be deliberate about types.
- `verbatimModuleSyntax: true` — type-only imports must be `import type { X } from '...'`.
- `erasableSyntaxOnly: true` — no `enum`, no `namespace`, no constructor parameter properties. Use union types + `const` objects.
- `noUnusedLocals` and `noUnusedParameters` are on, so an unused variable **fails the build**.
- `allowImportingTsExtensions: true` — extensioned imports like `./App.tsx` are used in `src/main.tsx`; match the surrounding file rather than mixing styles.

## Styling

- Tailwind CSS v4 is active through the `@tailwindcss/vite` plugin registered in `vite.config.ts`. There is deliberately **no `tailwind.config.js`** and no PostCSS config — v4 is configured in CSS.
- **Design tokens live in an `@theme` block in `src/index.css`**, not a plain `:root` rule. `@theme` emits every token as a real CSS custom property on `:root` (so `var(--color-bg)` works) *and* registers it as a Tailwind utility (`bg-bg`, `text-accent`, `max-w-page`, `text-display`). One source of truth, no duplicated CSS. Never hardcode a color in a component.
- Token namespaces: `--color-*`, `--font-*`, `--text-*` (paired values use `--text-<name>--line-height` / `--text-<name>--letter-spacing`), `--spacing-*`, `--container-*`.
- Dark mode overrides tokens in an **unlayered** `@media (prefers-color-scheme: dark) { :root { … } }` block placed *after* `@theme`, so it wins on cascade order. Don't move it inside a `@layer`.
- There are deliberately **three accent tokens**, each with an accessibility job: `--color-accent` (fills, borders, large display text), `--color-accent-strong` (accent-coloured **small** text — the bright accent is only ~3.1:1 on `--color-bg` and fails WCAG AA), and `--color-accent-ink` (text placed **on** an accent fill). Picking the wrong one silently breaks contrast.
- Component styling is Tailwind utility classes inline in the JSX. There are no per-component CSS files, and no CSS modules, so nothing is scoped — be careful with one-off class names.
- Utility classes are detected by scanning source files, so they must appear as complete literal strings. Classes assembled dynamically or from variables will not be generated.

## Motion

- GSAP is the only animation library. `src/components/motion/Reveal.tsx` holds the canonical pattern: create the tween inside `gsap.context()` scoped to the element's ref, inside `useLayoutEffect`, and `return () => ctx.revert()`.
- `ctx.revert()` is what makes this StrictMode-safe — it kills the tween *and* strips the inline styles GSAP wrote. Don't downgrade to a bare `gsap.to()`/`gsap.from()`.
- `Reveal` takes `when?: 'load' | 'scroll'` (default `'load'`). `'load'` plays as soon as the effect runs — correct for above-the-fold content (Header, Hero). `'scroll'` creates the tween **paused** and releases it once from an `IntersectionObserver`, so below-the-fold sections hold their hidden state instead of animating off-screen. Deliberately an observer + paused tween rather than ScrollTrigger: no plugin, no `ScrollTrigger.refresh()`, no bundle growth. Not wrapping this in a `gsap.from()` outside a context would break StrictMode safety.
- Read the motion preference with `prefersReducedMotion()` from `src/lib/motion.ts`, called **inside** the effect, never at module load.
- Easing and durations are centralized in `src/lib/motion.ts` (`EASE`, `DURATION`). Add motion values there rather than inventing them inline.
- A global `@media (prefers-reduced-motion: reduce)` block in `index.css` already neutralizes CSS animations/transitions; GSAP animations are skipped separately at runtime.

## Assets

- `public/**` — served at the root path, never bundled. Reference with a leading `/` (e.g. `/favicon.svg` in `index.html`); a relative path breaks the production build. Today the only file here is `favicon.svg`, an **RA monogram** in the accent palette.
- `src/assets/**` — for images imported as ES modules so Vite hashes and bundles them. The directory is intentionally absent until something needs it; create it on demand.
- Don't reintroduce `src/assets/hero.png` or `public/icons.svg` — they were unreferenced Vite-starter leftovers and have been deleted.

## Lint gotchas

- `eslint .` only matches `**/*.{ts,tsx}` (`eslint.config.js`). CSS and `index.html` are unlinted.
- `react-refresh/only-export-components` is configured at **`error`** severity. Exporting a helper function alongside a component fails lint — move helpers to a separate file. `export const` values are allowed (`allowConstantExport`).
- The config uses `tseslint.configs.recommended`, **not** `recommendedTypeChecked`, so lint will not surface type errors. See `README.md` for how to opt into type-aware rules.
- React Compiler is intentionally disabled, so there is no automatic memoization.

## Environment

- **This is not a git repository.** No branches, commits, diffs, or history. Don't run `git` commands. (`git status` reports `fatal: not a git repository`; do not `git init`.)
- `node_modules` is present and `package-lock.json` exists; use `npm ci` for a clean install.
- Verified working on Node v25 / npm 11.

## Deploy

- Target is Vercel. `vercel.json` pins `framework: vite`, `npm run build`, output `dist` — Vercel would auto-detect the same thing, but the file keeps it explicit.
- No environment variables, no secrets, no serverless functions. Nothing to configure in the dashboard for the build itself.
- The custom domain `raihanazmi.dev` is added **in the Vercel dashboard only**. Never invent DNS records in docs or code; the real records come from Vercel.
- `vercel` CLI is installed and authenticated as `raihhazmi`, but **deploying is an explicit user action** — don't run `vercel deploy` / `vercel prod` unless asked.
