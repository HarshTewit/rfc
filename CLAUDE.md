## Project
Single-page marketing site for Revive Wellness Spa, Bangalore.
One route: / (home) — all sections on one page with anchor links.
Static site. No database, no auth, no CMS.

## Design system
- Base: near-black #0A0A0A, cream #F5F0E8
- Accent: copper/gold #C8922B
- Display type: Playfair Display (italic, elegant) via next/font/google
- Body type: Inter
- Aesthetic: dark, luxurious, calm. Elegant serif headings, warm copper accents,
  full-bleed image blocks with dark overlays, grain texture on hero images.
  Feel: high-end spa / wellness brand. Sporty but calm.
- All colors in Tailwind theme extensions.

## Images
All images in /public/images/ (spa1-5.webp plus existing gym images as placeholders).
Uses next/image with proper sizes attributes.

## Mobile
- Mobile-first. clamp() for type sizes.
- Touch targets >= 44px.
- Hamburger menu on mobile.
- No horizontal overflow.

## Constraints
- No component libraries beyond Tailwind.
- Single page.tsx with inlined Header/Footer.
- FadeUp and ImageGrain as shared components.
