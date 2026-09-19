"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import ImageGrain from "./components/ImageGrain";
import FadeUp from "./components/FadeUp";

/* ── Data ───────────────────────────────────────────────────────────────── */

const galleryImages = [
  { src: "/images/sauna-02-seated-side.jpg", alt: "Athlete in sauna" },
  { src: "/images/sauna-07-bearded-relaxed.jpg", alt: "Recovery session" },
  { src: "/images/sauna-13-portrait-necklace.png", alt: "Post-training recovery" },
  { src: "/images/sauna-03-portrait-a.jpg", alt: "Sauna recovery" },
  { src: "/images/sauna-14-flex-floral-shorts.png", alt: "Athlete flexing in sauna" },
  { src: "/images/sauna-08-rfc-shorts-a.jpg", alt: "RFC athlete in sauna" },
  { src: "/images/sauna-12-flex-ladle.png", alt: "Athlete in sauna" },
];

const benefits = [
  {
    stat: "7x",
    label: "More Effective",
    desc: "Accelerated lymphatic drainage and heavy metal elimination through deep infrared heat penetration.",
  },
  {
    stat: "155\u00b0",
    label: "Peak Temperature",
    desc: "Our dry sauna reaches optimal temperatures for deep tissue heat therapy and maximum recovery benefit.",
  },
  {
    stat: "45\u2033",
    label: "Cold Plunge",
    desc: "Contrast therapy — alternating sauna and ice-cold immersion — is one of the most effective recovery protocols.",
  },
  {
    stat: "100%",
    label: "Self-Service",
    desc: "No appointments, no schedules. Walk in after your session, use what you need, stay as long as you want.",
  },
];

const facilities = [
  {
    title: "Dry Sauna",
    desc: "Traditional high-heat sauna to loosen muscles, flush toxins, and accelerate recovery after training.",
    image: "/images/sauna-01-flex-tattoo.jpg",
  },
  {
    title: "Steam Room",
    desc: "Humid heat that opens airways, eases joint stiffness, and helps your body wind down post-session.",
    image: "/images/spa2.webp",
  },
  {
    title: "Cold Plunge",
    desc: "Ice-cold immersion to reduce inflammation, boost circulation, and sharpen mental focus.",
    image: "/images/spa3.webp",
  },
  {
    title: "Recovery Lounge",
    desc: "A quiet space to cool down, rehydrate, and let your body absorb the benefits of heat and cold.",
    image: "/images/sauna-05-flex-bearded.jpg",
  },
];

/* ── Header ─────────────────────────────────────────────────────────────── */

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "The Sauna", href: "#sauna" },
    { label: "Benefits", href: "#benefits" },
    { label: "Book Now", href: "#visit" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#0c0c0c]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="font-display text-xl md:text-2xl text-[#e8dcc8] tracking-[0.15em] uppercase"
        >
          Revive
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href + i}
              href={link.href}
              className={`font-body text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                i === 0
                  ? "text-[#c9a96e]"
                  : "text-[#e8dcc8]/50 hover:text-[#c9a96e]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 min-h-[44px] min-w-[44px] items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block h-[1.5px] w-5 bg-[#e8dcc8]/80 transition-all duration-300 ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-[#e8dcc8]/80 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-[#e8dcc8]/80 transition-all duration-300 ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0c0c0c]/98 backdrop-blur-md border-t border-white/5">
          {links.map((link, i) => (
            <a
              key={link.href + i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-body text-[12px] uppercase tracking-[0.2em] text-[#e8dcc8]/70 hover:text-[#c9a96e] border-b border-white/[0.03] last:border-b-0 min-h-[44px]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ── Footer ─────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <span className="font-display text-3xl text-[#c9a96e] tracking-[0.1em] uppercase">
            Revive
          </span>
          <p className="mt-4 font-body text-[13px] text-[#e8dcc8]/30 leading-relaxed max-w-[280px]">
            The recovery floor at Revive Fight Club.
            Train hard, recover smarter.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]/40 mb-4">
            Find Us
          </h4>
          <p className="font-body text-[13px] text-[#e8dcc8]/45 leading-relaxed">
            Revive Fight Club, 2nd Floor<br />
            Bangalore, Karnataka
          </p>
          <p className="font-body text-[13px] text-[#e8dcc8]/45 mt-3">+91 98765 43210</p>
          <p className="font-body text-[13px] text-[#c9a96e]/60 mt-1">hello@revivefightclub.in</p>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]/40 mb-4">
            Sauna Hours
          </h4>
          <p className="font-body text-[13px] text-[#e8dcc8]/45 leading-relaxed">
            Mon &ndash; Sat: 6am &ndash; 10pm<br />
            Sunday: 8am &ndash; 8pm
          </p>
          <p className="font-body text-[11px] text-[#e8dcc8]/20 mt-4">
            Open to all gym members. Day passes at reception.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.03] py-5 text-center">
        <p className="font-body text-[11px] text-[#e8dcc8]/15">
          &copy; {new Date().getFullYear()} Revive Wellness Spa &mdash; Bangalore
        </p>
      </div>
    </footer>
  );
}

/* ── Horizontal Gallery ─────────────────────────────────────────────────── */

function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative group/gallery">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0a0a0a]/70 border border-white/10 flex items-center justify-center text-[#e8dcc8]/60 hover:text-[#c9a96e] hover:border-[#c9a96e]/30 transition-all duration-300 backdrop-blur-sm ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll left"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button
        onClick={() => scroll("right")}
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0a0a0a]/70 border border-white/10 flex items-center justify-center text-[#e8dcc8]/60 hover:text-[#c9a96e] hover:border-[#c9a96e]/30 transition-all duration-300 backdrop-blur-sm ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-none px-6 md:px-12 py-4"
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="320px"
            />
            {/* Bottom gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8dcc8]">
      <Header />

      {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[100dvh] overflow-hidden flex flex-col">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/sauna-07-bearded-relaxed.jpg"
          >
            <source src="/images/sauna-video-02.mp4" type="video/mp4" />
          </video>
        </div>
        <ImageGrain opacity={0.04} />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55 z-[2]" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-[3]" />

        {/* Hero content */}
        <div className="relative z-[4] flex-1 flex flex-col justify-center items-center text-center px-6 pt-20">
          <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight font-normal">
            <span className="block italic font-bold">Deep Tissue Heat.</span>
            <span className="block text-[#c9a96e] italic font-bold">Cellular Reset.</span>
          </h1>
          <p className="mt-5 font-body text-[clamp(0.8rem,1.4vw,1rem)] text-[#e8dcc8]/50 tracking-[0.08em] max-w-[500px]">
            Precision Infrared Recovery for Athletes.
          </p>

          <a
            href="#visit"
            className="mt-10 inline-flex items-center justify-center border-2 border-[#c9a96e] px-10 py-4 font-body text-[12px] uppercase tracking-[0.3em] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-400 min-h-[52px]"
          >
            Reserve Private Suite
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-[4] pb-8 flex justify-center">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#c9a96e]/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ━━ ATHLETE GALLERY CAROUSEL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section className="bg-[#0a0a0a] py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto mb-10 px-6 md:px-12">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/50">
              Our Athletes
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.6rem,3.5vw,2.8rem)] italic leading-[1.1]">
              Built for fighters.{" "}
              <span className="text-[#c9a96e]">Made for recovery.</span>
            </h2>
          </div>
          <HorizontalGallery />
        </section>
      </FadeUp>

      {/* ━━ THE SAUNA — SPLIT SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="sauna" className="bg-[#0a0a0a]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 md:min-h-[700px]">
            {/* Text side */}
            <div className="px-6 md:px-12 lg:px-16 flex flex-col justify-center py-16 md:py-20">
              <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/50 mb-4">
                The Recovery Floor
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.1]">
                Mind.{" "}
                <span className="italic text-[#c9a96e]">Body.</span>{" "}
                <span className="italic">Recovery.</span>
              </h2>
              <p className="mt-6 font-body text-[14px] text-[#e8dcc8]/40 leading-[1.85] max-w-[440px]">
                Revive Wellness sits on the top floor of Revive Fight Club.
                After you&apos;re done on the mats or in the ring, take the stairs
                up and let the heat do the rest.
              </p>
              <p className="mt-4 font-body text-[14px] text-[#e8dcc8]/40 leading-[1.85] max-w-[440px]">
                Sauna, steam, cold plunge — use one or cycle through all three.
                It&apos;s self-service and included with your gym membership.
                Non-members can grab a day pass at the front desk.
              </p>
              <a
                href="#visit"
                className="mt-8 inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.2em] text-[#c9a96e] hover:text-[#d4b87a] transition-colors duration-300 group w-fit"
              >
                Book Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Image side — stacked duo */}
            <div className="relative min-h-[500px] md:min-h-0">
              <div className="absolute inset-0 grid grid-rows-2 gap-[2px]">
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sauna-06-bearded-front.jpg"
                    alt="Athlete in sauna"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/30" />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src="/images/sauna-04-portrait-a-side.jpg"
                    alt="Recovery session"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ BENEFITS STATS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="benefits" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/spa1.webp" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[#0a0a0a]/85" />
          <ImageGrain opacity={0.03} />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/50 mb-4">
              The Science
            </p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] italic leading-[1.1] mb-16 max-w-[500px]">
              Recovery backed by{" "}
              <span className="text-[#c9a96e]">results.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {benefits.map((b) => (
                <div
                  key={b.label}
                  className="border border-white/[0.06] bg-[#0a0a0a]/40 backdrop-blur-sm p-8 hover:border-[#c9a96e]/20 transition-colors duration-500"
                >
                  <p className="font-display text-[clamp(2.5rem,4vw,3.5rem)] text-[#c9a96e] italic leading-none">
                    {b.stat}
                  </p>
                  <p className="mt-2 font-body text-[11px] uppercase tracking-[0.25em] text-[#e8dcc8]/60">
                    {b.label}
                  </p>
                  <p className="mt-4 font-body text-[13px] text-[#e8dcc8]/30 leading-[1.7]">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ FULL-WIDTH VIDEO BREAK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/sauna-02-seated-side.jpg"
        >
          <source src="/images/sauna-video-04.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <ImageGrain opacity={0.025} />

        {/* Centered text overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] italic text-[#e8dcc8] leading-[1.05]">
              Train Hard.
              <br />
              <span className="text-[#c9a96e]">Recover Harder.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* ━━ FACILITY DETAILS — ALTERNATING LAYOUT ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="details" className="bg-[#0a0a0a] py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/50 mb-3">
              What&apos;s Inside
            </p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] italic leading-[1.1] mb-14">
              Four pillars of recovery.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
              {facilities.map((f) => (
                <div key={f.title} className="group relative overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

                    {/* Text overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                      <h3 className="font-display text-[22px] md:text-[26px] text-[#e8dcc8] italic">
                        {f.title}
                      </h3>
                      <p className="mt-2 font-body text-[13px] text-[#e8dcc8]/40 leading-[1.7] max-w-[360px]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ ATHLETE MOSAIC — FULL WIDTH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section className="bg-[#0a0a0a]">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-[2px]">
            {[
              "/images/sauna-09-rfc-shorts-b.jpg",
              "/images/sauna-03-portrait-a.jpg",
              "/images/sauna-12-flex-ladle.png",
              "/images/sauna-13-portrait-necklace.png",
              "/images/sauna-10-rfc-shorts-c.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src={src}
                  alt="Athlete in sauna"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* ━━ VISIT CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="visit" className="relative py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/sauna-11-rfc-shorts-d.jpg"
              alt=""
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          <ImageGrain opacity={0.03} />

          <div className="relative z-10 max-w-[600px] mx-auto text-center px-6">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/60">
              Ready to Recover?
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] text-[#e8dcc8] italic leading-[1.1]">
              Just walk in.
            </h2>
            <p className="mt-5 font-body text-[14px] text-[#e8dcc8]/35 leading-[1.8] max-w-[420px] mx-auto">
              No bookings, no fuss. Members head straight up
              after training. Non-members grab a day pass at reception.
              Towels are on us.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-[#c9a96e] px-9 py-4 font-body text-[12px] uppercase tracking-[0.25em] text-[#0a0a0a] font-medium hover:bg-[#d4b87a] transition-colors duration-300 min-h-[52px]"
              >
                Call Us
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20about%20the%20sauna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-[#e8dcc8]/15 px-9 py-4 font-body text-[12px] uppercase tracking-[0.25em] text-[#e8dcc8]/50 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 min-h-[52px]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </FadeUp>

      <Footer />
    </div>
  );
}
