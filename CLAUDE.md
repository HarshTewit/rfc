## Project
Marketing site for Revive Fight Club (RFC), a Bangalore combat-sports gym.
Four routes: / (home), /membership, /store, /spa
Static site. No database, no auth, no CMS, no checkout in v1.

## Content
All copy, pricing, product data and class data lives in /content/site.ts as
typed exported objects. Pages import from there. Never hardcode copy in JSX.

## Design system
- Base: near-black #0A0A0B, off-white #F5F3EF
- Primary accent (sitewide, incl. /store): blood red #C1121F
- Spa route: warm sand bg #EDE7DD, ink #1C1A17, amber accent #C8922B
- Display type: Anton (uppercase, tight tracking, very large) via next/font/google
- Body type: Inter
- Aesthetic: gritty, heavy, high-contrast. Big type, full-bleed image blocks,
  hard dark gradient overlays (top + bottom), grain/noise on hero images,
  hard edges, no rounded corners beyond 2px, no drop shadows,
  no gradients except dark image overlays.
  Feel: boxing-gym poster / Gymshark campaign. NOT a Webflow SaaS template.
- All colors as CSS variables in globals.css and Tailwind theme extensions.
- WhatsApp CTA links use wa.me with prefilled messages — config in /content/site.ts.

## Images
<ImagePlaceholder> renders a dark hatched block with a label.
Every image slot uses it. Swap to real <Image> in one line.
Never use external image URLs or lorem-picsum.

## Mobile
- EVERYTHING must look great at 375px width first. Mobile is the primary target.
- Every section must be tested at 375px before shipping.
- Use clamp() for type sizes so they scale fluidly.
- Touch targets must be ≥44px tall.
- Nav hamburger menu must work correctly on all mobile sizes.
- No horizontal overflow allowed on mobile.
- Sticky filter bar on /store must not create layout shift on mobile.

## Constraints
- Mobile-first. Test every layout at 375px.
- No component libraries beyond Tailwind. No shadcn, no framer-motion in v1.
- Keep it to as few files as possible.
