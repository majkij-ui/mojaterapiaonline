# CLAUDE.md — Karolina Stronka V2.5

## Project Context

This is a personal therapist website for Karolina (Michal's wife). It's a fresh remake that merges the best of two previous versions:

- **Version A** — Next.js app (the primary/production codebase, retained as the base)
- **Version B** — Vite/React prototype (used as UI/design reference for the Header and Hero)

The merge is complete. Version A is now the single source of truth. Version B lives in `version-b/` as a reference artifact only — do not modify it.

The working directory is `version-a/`.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Package Manager | pnpm |
| Deployment | Vercel |

---

## Project Structure (`version-a/`)

```
app/
  layout.tsx       # Root layout (fonts, theme provider)
  page.tsx         # Main page — assembles all sections
  globals.css      # Global styles / Tailwind base

src/components/    # Section-level components
  Header.tsx
  Hero.tsx
  About.tsx
  AreasOfSupport.tsx
  Offer.tsx
  Testimonials.tsx
  Contact.tsx
  Footer.tsx

components/
  ui/              # shadcn/ui primitives (do not hand-edit)
  theme-provider.tsx
```

---

## Design Notes

- **Colour palette:** Beige / warm neutrals as primary, orange accent (from Version B), muted green tints in Hero (kept subtle).
- **Header behaviour:** Transparent on initial load → beige frosted glass on scroll.
- **Typography:** Brand name uses a larger size than nav links; CTA button in header.
- **Hero:** Left-aligned layout (matching Version B reference). Therapist's original headline and subcopy from Version A must be preserved.
- **Mobile:** Hamburger menu in Header; Hero must be tested at mobile breakpoints.

---

## Component Status

| Component | Status | Notes |
| :--- | :---: | :--- |
| Header | ✅ Done | Transparent → frosted scroll; Version B UI |
| Hero | ✅ Done | Version B layout; Version A copy |
| About | ✅ Done | Version A — untouched |
| Testimonials | ✅ Done | Version A — untouched |
| Offer | ✅ Done | Version A — untouched |
| AreasOfSupport | ✅ Done | Version A — untouched |
| Contact | ✅ Done | Version A — untouched |
| Footer | ✅ Done | Version A — untouched |

---

## Git Conventions

- Use **Conventional Commits** format: `feat:`, `fix:`, `chore:`, `refactor:`.
- Keep subject lines **under 72 characters**.
- Always run `npm test` (or `pnpm test`) before committing. If tests fail, do not commit.
- **Never push directly to `main`** — always create a feature branch first.

---

## Working in This Repo

- All active development happens inside `version-a/`. Run `pnpm dev` from there.
- `version-b/` is read-only reference — do not modify or add dependencies to it.
- The `merge-plan.md` and `merge-status.md` files in the root document the completed merge work.
- shadcn/ui components in `components/ui/` are generated — prefer extending over modifying them directly.
