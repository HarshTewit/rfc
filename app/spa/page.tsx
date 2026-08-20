import type { Metadata } from "next";
import Image from "next/image";
import ImageGrain from "@/app/components/ImageGrain";
import FadeUp from "@/app/components/FadeUp";
import { spa, wa, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Recovery Spa | Revived Fight Club",
  description:
    "Sports massage, ice bath, infrared sauna, physio, cupping, and compression boots. Recovery at RFC, Bangalore.",
  openGraph: {
    title: "Recovery Spa | Revived Fight Club",
    description: "Rest is training. Treat it that way — RFC Recovery Spa, Bangalore.",
    images: [{ url: "/images/spa2.webp" }],
  },
};

// ── Inline SVG icons (no icon library) ───────────────────────────────────────
function WaveIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 16 C5 6, 9 6, 13 16 C17 26, 21 26, 25 16 C27 11, 29 8, 31 8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 1 L27 6 V16 C27 23 21 28 14 31 C7 28 1 23 1 16 V6 Z" />
      <polyline points="8,15 12,20 20,10" />
    </svg>
  );
}

function CycleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 3 L27 8 L22 13" />
      <path d="M5 16 C5 10 10 4 16 4 L27 4" />
      <path d="M10 29 L5 24 L10 19" />
      <path d="M27 16 C27 22 22 28 16 28 L5 28" />
    </svg>
  );
}

const ICONS = { wave: WaveIcon, shield: ShieldIcon, cycle: CycleIcon };

export default function SpaPage() {
  return (
    <div className="spa-theme">
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative h-[75vh] min-h-[520px] overflow-hidden flex items-end"
      >
        <Image
          src="/images/spa2.webp"
          alt="Calm recovery spa room at RFC — ambient lighting, treatment table"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <ImageGrain opacity={0.04} />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1C1A17]/40 to-transparent z-[3]" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1C1A17] via-[#1C1A17]/75 to-transparent z-[3]" />
        <div className="relative z-[4] w-full px-4 pb-14 md:pb-20 md:px-10 max-w-7xl mx-auto">
          <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] leading-[0.88] text-[#EDE7DD] whitespace-pre-line">
            {spa.hero.headline}
          </h1>
          <p className="mt-4 font-body text-base md:text-lg text-[#EDE7DD]/65 max-w-md">
            {spa.hero.sub}
          </p>
        </div>
      </section>

      {/* ── 2. Services ─────────────────────────────────────────────────── */}
      <FadeUp>
        <section id="services" className="px-4 md:px-10 py-14 md:py-20 border-b border-[#1C1A17]/10 max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-[#1C1A17] mb-10">
            Services
          </h2>
          <div className="divide-y divide-[#1C1A17]/10 border-t border-[#1C1A17]/10">
            {spa.services.map((svc) => (
              <div
                key={svc.name}
                className="grid grid-cols-[1fr_auto] gap-4 md:gap-8 py-5 md:py-6 items-start"
              >
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-[#1C1A17] leading-none">
                    {svc.name}
                  </h3>
                  <p className="font-body text-sm text-[#1C1A17]/50 mt-2 leading-relaxed max-w-xl">
                    {svc.line}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-display text-xl md:text-2xl text-[#C8922B] leading-none">
                    {svc.price}
                  </p>
                  <p className="font-body text-xs uppercase tracking-widest text-[#1C1A17]/40 mt-1.5">
                    {svc.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── Image break ─────────────────────────────────────────────────── */}
      <FadeUp>
        <div className="relative h-64 md:h-96 overflow-hidden">
          <Image
            src="/images/spa3.webp"
            alt="RFC spa therapist performing a sports massage treatment"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <ImageGrain opacity={0.04} />
          <div className="absolute inset-0 bg-[#1C1A17]/20" />
        </div>
      </FadeUp>

      {/* ── 3. Why recovery ─────────────────────────────────────────────── */}
      <FadeUp>
        <section id="why" className="px-4 md:px-10 py-14 md:py-20 border-b border-[#1C1A17]/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-[#1C1A17] mb-12">
              Why Recover?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {spa.whyRecover.map((point) => {
                const Icon = ICONS[point.icon];
                return (
                  <div key={point.headline}>
                    <div className="text-[#C8922B] mb-4">
                      <Icon />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-[#1C1A17] leading-none mb-3">
                      {point.headline}
                    </h3>
                    <p className="font-body text-sm text-[#1C1A17]/55 leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 4. Booking CTA ──────────────────────────────────────────────── */}
      <section id="book" className="py-16 md:py-20 px-4 md:px-10 bg-[#C8922B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-[#EDE7DD] leading-none">
              {spa.cta.headline}
            </h2>
            <p className="font-body text-sm text-[#EDE7DD]/70 mt-3">
              {spa.cta.sub}
            </p>
          </div>
          <a
            href={waLink(wa.messages.spa)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-[#1C1A17] text-[#EDE7DD] px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-[#1C1A17]/85 transition-colors"
          >
            {spa.cta.ctaLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
