import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ImageGrain from "./components/ImageGrain";
import FadeUp from "./components/FadeUp";
import { home, wa, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Revive Fight Club | Bangalore Combat Sports",
  description: "Bangalore's home of boxing, Muay Thai, BJJ, and MMA. First session free.",
  openGraph: {
    title: "Revive Fight Club",
    description: "Bangalore's premier combat-sports gym.",
    images: [{ url: "/images/sparring-hero.webp" }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-end">
        {/* Ken Burns animation makes image feel cinematic, not static */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/sparring-hero.webp"
            alt="Two RFC fighters sparring in the ring with the RFC gym banner in the background"
            fill
            className="object-cover object-center animate-ken-burns"
            priority
            sizes="100vw"
          />
        </div>

        {/* Grain adds texture — never looks like stock blurry background */}
        <ImageGrain opacity={0.05} />

        {/* Precise composition gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent z-[3]" />
        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black via-black/80 to-transparent z-[3]" />

        {/* Hero content */}
        <div className="relative z-[4] w-full px-4 pb-12 md:pb-20 md:px-10 max-w-7xl mx-auto">
          <h1 className="font-display text-[clamp(4.5rem,20vw,11rem)] leading-[0.86] text-off-white whitespace-pre-line tracking-tight">
            {home.hero.headline}
          </h1>
          <p className="mt-5 font-body text-sm md:text-base text-off-white max-w-sm md:max-w-md leading-relaxed">
            {home.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={home.hero.cta1.href}
              className="inline-block bg-accent px-6 py-3.5 font-body text-xs uppercase tracking-widest text-off-white hover:bg-accent-hover transition-colors min-h-[44px] flex items-center"
            >
              {home.hero.cta1.label}
            </Link>
            <Link
              href={home.hero.cta2.href}
              className="inline-block border border-off-white/40 px-6 py-3.5 font-body text-xs uppercase tracking-widest text-off-white hover:border-off-white hover:bg-white/5 transition-colors min-h-[44px] flex items-center"
            >
              {home.hero.cta2.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Three-pillar row ─────────────────────────────────────────── */}
      <FadeUp>
        <section id="pillars" className="bg-base px-4 md:px-10 pt-10 md:pt-14">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {home.pillars.map((p) =>
              p.solid ? (
                /* Spa pillar — photo with amber overlay */
                <Link
                  key={p.key}
                  href={p.href}
                  className="group relative bg-[#C8922B] overflow-hidden flex flex-col aspect-[3/4]"
                >
                  {/* Spa photo underneath amber tint */}
                  <Image
                    src="/images/spa2.webp"
                    alt="RFC recovery spa"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {/* Amber colour overlay — gives branded feel while letting photo breathe */}
                  <div className="absolute inset-0 bg-[#C8922B]/80" />
                  <div className="relative z-10 flex-1 p-6 md:p-8 flex flex-col justify-end">
                    <p className="font-display text-[clamp(2rem,5vw,3.5rem)] text-[#1C1A17] leading-none">
                      Recovery<br />Spa
                    </p>
                    <p className="font-body text-xs text-[#1C1A17]/70 mt-3 max-w-[200px] leading-relaxed">
                      {p.line}
                    </p>
                  </div>
                  <span className="absolute top-5 right-5 z-10 font-display text-[#1C1A17]/60 text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              ) : (
                /* Photo pillars */
                <Link
                  key={p.key}
                  href={p.href}
                  className="group relative bg-base overflow-hidden block aspect-[3/4]"
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-display text-xl md:text-2xl text-off-white uppercase leading-none">
                          {p.label}
                        </p>
                        <p className="font-body text-xs text-off-white/55 mt-2 max-w-[180px] leading-relaxed">
                          {p.line}
                        </p>
                      </div>
                      <span className="font-display text-accent text-xl group-hover:translate-x-1 transition-transform shrink-0 ml-3">
                        →
                      </span>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 font-body text-xs uppercase tracking-widest text-off-white/40 group-hover:text-off-white/70 transition-colors">
                    {p.label}
                  </span>
                </Link>
              )
            )}
          </div>
        </section>
      </FadeUp>

      {/* ── 3. Disciplines strip ────────────────────────────────────────── */}
      <FadeUp>
        <section id="disciplines" className="bg-base border-t border-white/10 py-10 md:py-14 px-4 md:px-10 mt-10 md:mt-14">
          <div className="max-w-7xl mx-auto">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-off-white/30 mb-6">
              What we train
            </p>
            <ul className="divide-y divide-white/[0.08]">
              {home.disciplines.map((d) => (
                <li key={d} className="discipline-row">
                  <span className="discipline-label block font-display text-[clamp(2.8rem,9vw,7rem)] leading-none text-off-white py-2 md:py-3">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeUp>

      {/* ── 4. Split section ────────────────────────────────────────────── */}
      <FadeUp>
        <section id="about" className="border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
              <Image
                src={home.split.image}
                alt={home.split.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <ImageGrain opacity={0.04} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 hidden md:block" />
            </div>
            {/* Copy */}
            <div className="bg-surface px-6 py-12 md:px-12 md:py-20 flex flex-col justify-center">
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-off-white leading-none">
                {home.split.headline}
              </h2>
              <p className="mt-5 font-body text-sm md:text-base text-off-white/55 max-w-md leading-relaxed">
                {home.split.body}
              </p>
              <Link
                href="/membership"
                className="mt-8 self-start inline-block border border-white/20 px-6 py-3.5 font-body text-xs uppercase tracking-widest text-off-white hover:border-white/50 hover:bg-white/5 transition-colors"
              >
                See membership
              </Link>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 5. Community band ───────────────────────────────────────────── */}
      <FadeUp>
        <section id="community" className="bg-base py-10 md:py-14 px-4 md:px-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto mb-8">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-off-white leading-none">
              {home.community.headline}
            </h2>
            <p className="font-body text-sm text-off-white/45 mt-2">
              {home.community.sub}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/10">
            {home.community.images.map((img) => (
              <div key={img.src} className="aspect-video relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ── 6. CTA Band ─────────────────────────────────────────────────── */}
      <section id="cta" className="bg-accent py-16 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-off-white leading-none">
              {home.ctaBand.headline}
            </h2>
            <p className="font-body text-sm text-off-white/70 mt-3">{home.ctaBand.sub}</p>
          </div>
          <a
            href={waLink(wa.messages.firstSession)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-off-white text-[#0A0A0B] px-8 py-4 font-body text-xs uppercase tracking-widest hover:bg-off-white/90 transition-colors"
          >
            {home.ctaBand.cta}
          </a>
        </div>
      </section>
    </>
  );
}
