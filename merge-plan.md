# Website Merge Execution Plan

## Phase 1: Preparation
- [ ] Open the Version A (Next.js) project as the primary workspace in Cursor.
- [ ] Create a temporary folder inside Version A called `_version-b-reference` and place the Vite Header and Hero files there for Cursor to read easily.

## Phase 2: Header Component Merge
- [ ] Open Version A's `Header.tsx` (or `.jsx`).
- [ ] Prompt Cursor: Replace the UI and styling of this Header with the design from `_version-b-reference/Header`. Keep Next.js `<Link>` components intact.

## Phase 3: Hero Component Merge
- [ ] Open Version A's `Hero.tsx`.
- [ ] Prompt Cursor: Replace the layout and styling of this Hero with the design from `_version-b-reference/Hero`. Ensure the therapist's specific headline and subcopy from Version A remain unchanged.

## Phase 4: Assembly & Polish
- [ ] Review `app/page.tsx` (or `pages/index.js`) to ensure the newly styled Header and Hero render correctly above the Version A components.
- [ ] Check for global CSS or Tailwind class conflicts between the newly imported Version B styles and the existing Version A site.
- [ ] Test mobile responsiveness for the new Header (hamburger menu) and Hero.