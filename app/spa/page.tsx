import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/app/components/FadeUp";
import { spa, wa, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Recovery Spa | Revive Fight Club",
  description:
    "Sports massage, ice bath, sauna, steam, physio, cupping. Recovery at RFC, Bangalore.",
  openGraph: {
    title: "Recovery Spa | Revive Fight Club",
    description: "Rest is training. Treat it that way — RFC Recovery Spa, Bangalore.",
  },
};

// ── Inline SVG icons — thin amber strokes, no library ────────────────────────
function WaveIcon() {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      stroke="#C8922B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 18 C5 6, 10 6, 15 18 C20 30, 25 30, 30 18 C32 12, 34 9, 35 9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="30"
      height="36"
      viewBox="0 0 30 36"
      fill="none"
      stroke="#C8922B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 1 L29 6 V17 C29 25 23 30 15 34 C7 30 1 25 1 17 V6 Z" />
      <polyline points="9,17 13,22 22,11" />
    </svg>
  );
}

function CycleIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="#C8922B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M25 3 L31 9 L25 15" />
      <path d="M5 18 C5 11 11 4 18 4 L31 4" />
      <path d="M11 33 L5 27 L11 21" />
      <path d="M31 18 C31 25 25 32 18 32 L5 32" />
    </svg>
  );
}

const ICONS = { wave: WaveIcon, shield: ShieldIcon, cycle: CycleIcon };

export default function SpaPage() {
  return (
    /*
     * Spa theme: sand bg #EDE7DD, ink #1C1A17, amber accent #C8922B.
     * Scoped via .spa-theme — does not affect any other route.
     * This page is intentionally type-led; no photography.
     * All photo TODO markers are clearly commented below.
     */
    <div className="spa-theme">

      {/* ── 1. Hero ── full-bleed image fading into sand ───────────────── */}
      <section id="hero">
        {/* Hero photo — gradient fades into the sand background below */}
        <div className="relative h-[52vh] min-h-[300px] overflow-hidden">
          <Image
            src="/images/spa1.webp"
            alt="RFC recovery spa — warm treatment room"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#EDE7DD]/10 via-transparent to-[#EDE7DD]" />
        </div>

        <div className="px-4 pt-8 pb-14 md:pt-10 md:pb-20 md:px-10 max-w-7xl mx-auto">
        <p className="font-body text-xs uppercase tracking-[0.35em] text-[#1C1A17]/35 mb-8">
          Revive Fight Club
        </p>
        <h1 className="font-display text-[clamp(4rem,16vw,10rem)] leading-[0.86] text-[#1C1A17] whitespace-pre-line">
          {spa.hero.headline}
        </h1>

        {/* Thin amber rule */}
        <div className="h-px bg-[#C8922B]/40 mt-10 mb-8 max-w-xs" />

        <p className="font-body text-sm md:text-base text-[#1C1A17]/55 max-w-md leading-relaxed">
          {spa.hero.sub}
        </p>
        <p className="mt-4 font-body text-xs text-[#1C1A17]/35 uppercase tracking-widest">
          {spa.hero.rule}
        </p>
        </div>
      </section>

      {/* ── 2. Services ─────────────────────────────────────────────────── */}
      <FadeUp>
        <section id="services" className="border-t border-[#1C1A17]/10 px-4 md:px-10 py-14 md:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-[#1C1A17] mb-10">Services</h2>

            <div className="relative aspect-video mb-10 overflow-hidden">
              <Image
                src="/images/spa2.webp"
                alt="RFC spa — therapy session in progress"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>

            <ul className="border-t border-[#1C1A17]/10">
              {spa.services.map((svc) => (
                <li
                  key={svc.name}
                  className="group relative border-b border-[#1C1A17]/10 py-5 pl-5 pr-4 transition-colors duration-200 hover:bg-[#1C1A17]/[0.03]"
                >
                  {/* Amber left border — scales in on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C8922B] scale-y-0 group-hover:scale-y-100 transition-transform duration-250 origin-bottom"
                    aria-hidden
                  />
                  <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
                    <div>
                      <h3 className="font-display text-lg md:text-2xl text-[#1C1A17] leading-none">
                        {svc.name}
                      </h3>
                      <p className="font-body text-sm text-[#1C1A17]/45 mt-2 leading-relaxed max-w-xl">
                        {svc.line}
                      </p>
                    </div>
                    <div className="text-right shrink-0 pt-0.5">
                      <p className="font-display text-xl md:text-2xl text-[#C8922B] leading-none">
                        {svc.price}
                      </p>
                      <p className="font-body text-[10px] uppercase tracking-widest text-[#1C1A17]/35 mt-1.5">
                        {svc.duration}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeUp>

      {/* ── 3. Why recovery ─────────────────────────────────────────────── */}
      <FadeUp>
        <section id="why" className="border-t border-[#1C1A17]/10 px-4 md:px-10 py-14 md:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-[#1C1A17] mb-12">Why recover?</h2>

            <div className="grid grid-cols-3 gap-px mb-12 bg-[#1C1A17]/10">
              {[
                { src: "/images/spa1.webp", alt: "Recovery treatment at RFC spa" },
                { src: "/images/spa2.webp", alt: "Massage in progress at RFC spa" },
                { src: "/images/spa3.webp", alt: "Post-session recovery at RFC spa" },
              ].map((img) => (
                <div key={img.src} className="aspect-square relative overflow-hidden bg-[#EDE7DD]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {spa.whyRecover.map((point) => {
                const Icon = ICONS[point.icon];
                return (
                  <div key={point.headline}>
                    <div className="mb-5">
                      <Icon />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-[#1C1A17] leading-none mb-3">
                      {point.headline}
                    </h3>
                    <p className="font-body text-sm text-[#1C1A17]/50 leading-relaxed">{point.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 4. Quiet amber band ─────────────────────────────────────────── */}
      <section className="bg-[#C8922B] py-10 md:py-14 px-4 md:px-10 text-center">
        {/*
         * TODO: A subtle background texture or image could work here with
         * mix-blend-mode: multiply. Keep it very understated — the copy
         * should be the focal point. Suggested: linen or grain texture at ~5%.
         */}
        <p className="font-display text-[clamp(1.4rem,3.5vw,2.25rem)] text-[#1C1A17] max-w-3xl mx-auto leading-tight">
          {spa.band.copy}
        </p>
      </section>

      {/* ── 5. Booking CTA ──────────────────────────────────────────────── */}
      <FadeUp>
        <section id="book" className="border-t border-[#1C1A17]/10 px-4 md:px-10 py-16 md:py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-[#1C1A17] leading-none">
                {spa.cta.headline}
              </h2>
              <p className="font-body text-sm text-[#1C1A17]/45 mt-3">{spa.cta.sub}</p>
            </div>
            <a
              href={waLink(wa.messages.spa)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-block bg-[#1C1A17] text-[#EDE7DD] px-8 py-4 font-body text-xs uppercase tracking-widest hover:bg-[#1C1A17]/85 transition-colors"
            >
              {spa.cta.ctaLabel}
            </a>
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
