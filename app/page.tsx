"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ImageGrain from "./components/ImageGrain";
import FadeUp from "./components/FadeUp";

/* ── Data ───────────────────────────────────────────────────────────────── */

const offerings = [
  { title: "Dry Sauna", image: "/images/spa1.webp" },
  { title: "Steam Room", image: "/images/spa2.webp" },
  { title: "Cold Plunge", image: "/images/spa3.webp" },
  { title: "Recovery Lounge", image: "/images/spa4.webp" },
  { title: "Contrast Therapy", image: "/images/spa5.webp" },
];

const facilities = [
  {
    title: "Dry Sauna",
    desc: "Traditional high-heat sauna to loosen muscles, flush toxins, and accelerate recovery after training.",
    image: "/images/spa1.webp",
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
    image: "/images/spa4.webp",
  },
];

const values = [
  {
    label: "Value One",
    title: "Built for Athletes",
    desc: "This isn't a day spa. It's a recovery floor designed around the demands of combat sports and serious training.",
  },
  {
    label: "Value Two",
    title: "Self-Service, Your Pace",
    desc: "Walk in, use what you need, stay as long as you want. No appointments, no schedules — just you and the recovery.",
  },
  {
    label: "Value Three",
    title: "Heat & Cold Science",
    desc: "Contrast therapy — alternating sauna and cold plunge — is one of the most effective ways to reduce soreness and speed up recovery.",
  },
  {
    label: "Value Four",
    title: "Part of the Gym",
    desc: "Located right upstairs from the training floor. Finish your rounds, head up, and recover before you leave.",
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
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Visit", href: "#visit" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#0c0c0c]/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-6 md:px-12">
        <a
          href="#"
          className="font-display text-lg text-[#e8dcc8] tracking-[0.08em]"
        >
          Revive
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[11px] uppercase tracking-[0.25em] text-[#e8dcc8]/60 hover:text-[#c9a96e] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-[4px] p-2 min-h-[44px] min-w-[44px] items-center"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block h-[1px] w-5 bg-[#e8dcc8]/80 transition-all duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
          <span className={`block h-[1px] w-5 bg-[#e8dcc8]/80 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1px] w-5 bg-[#e8dcc8]/80 transition-all duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0c0c0c]/98 backdrop-blur-md border-t border-white/5">
          {links.map((link) => (
            <a
              key={link.href}
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
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <span className="font-display text-2xl text-[#c9a96e] tracking-wide">
            Revive
          </span>
          <p className="mt-3 font-body text-[13px] text-[#e8dcc8]/35 leading-relaxed max-w-[260px]">
            The recovery floor at Revive Fight Club. Train hard, recover smarter.
          </p>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#e8dcc8]/25 mb-4">
            Find Us
          </h4>
          <p className="font-body text-[13px] text-[#e8dcc8]/50 leading-relaxed">
            Revive Fight Club, 2nd Floor<br />
            Bangalore, Karnataka
          </p>
          <p className="font-body text-[13px] text-[#e8dcc8]/50 mt-3">+91 98765 43210</p>
          <p className="font-body text-[13px] text-[#c9a96e]/70 mt-1">hello@revivefightclub.in</p>
        </div>

        <div>
          <h4 className="font-body text-[10px] uppercase tracking-[0.3em] text-[#e8dcc8]/25 mb-4">
            Sauna Hours
          </h4>
          <p className="font-body text-[13px] text-[#e8dcc8]/50 leading-relaxed">
            Mon - Sat: 6am - 10pm<br />
            Sunday: 8am - 8pm
          </p>
          <p className="font-body text-[11px] text-[#e8dcc8]/25 mt-4">
            Open to all gym members. Day passes at reception.
          </p>
        </div>
      </div>

      <div className="border-t border-white/[0.03] py-5 text-center">
        <p className="font-body text-[11px] text-[#e8dcc8]/20">
          &copy; {new Date().getFullYear()} Revive Wellness Spa
        </p>
      </div>
    </footer>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-[#0a0a0a] text-[#e8dcc8]">
      <Header />

      {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[100dvh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpeg"
            alt="Revive sauna"
            fill
            className="object-cover object-center animate-ken-burns"
            priority
            sizes="100vw"
          />
        </div>
        <ImageGrain opacity={0.035} />

        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-black/40 z-[2]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-[3]" />
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-[3]" />

        {/* Hero text — right aligned, refined sizing matching mockup */}
        <div className="absolute inset-0 z-[4] flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="md:ml-auto md:max-w-[520px] md:text-right">
              <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] text-[#e8dcc8] leading-[1.15] tracking-tight font-normal">
                Train hard.{" "}
                <span className="italic text-[#c9a96e]">Recover harder.</span>
              </h1>
              <p className="mt-4 font-body text-[13px] md:text-[14px] text-[#e8dcc8]/55 leading-[1.7] max-w-[380px] md:ml-auto">
                Sauna, steam, and cold plunge — right above
                the gym floor. Walk in after your session,
                no appointment needed.
              </p>
              <a
                href="#facilities"
                className="mt-7 inline-block border border-[#c9a96e]/50 px-7 py-3 font-body text-[11px] uppercase tracking-[0.25em] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-[#0a0a0a] transition-all duration-400 min-h-[44px] flex items-center justify-center"
              >
                See the Facilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ SERVICES CIRCLES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="facilities" className="bg-[#0a0a0a] pt-24 pb-20 md:pt-32 md:pb-28 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#e8dcc8]/30 text-center">
              The Recovery Floor
            </p>
            <p className="mt-4 font-body text-[13px] text-[#e8dcc8]/40 text-center max-w-[460px] mx-auto leading-[1.7]">
              Everything you need to recover, all self-service.
              Towels provided, bring your own pace.
            </p>

            {/* Circles row — matching mockup exactly */}
            <div className="mt-16 flex justify-center items-end gap-4 md:gap-8 overflow-x-auto scrollbar-none pb-4">
              {offerings.map((s, i) => {
                const isCenter = i === 2;
                return (
                  <div key={s.title} className="flex flex-col items-center gap-3 shrink-0 group">
                    <div
                      className={`relative rounded-full overflow-hidden border border-white/[0.08] group-hover:border-[#c9a96e]/40 transition-all duration-500 ${
                        isCenter
                          ? "w-28 h-28 md:w-40 md:h-40"
                          : "w-20 h-20 md:w-28 md:h-28"
                      }`}
                    >
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="160px"
                      />
                    </div>
                    {isCenter && (
                      <p className="font-display text-[14px] text-[#e8dcc8]/80 italic mt-1">
                        {s.title}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <a
                href="#details"
                className="inline-block border border-[#e8dcc8]/15 px-6 py-2.5 font-body text-[10px] uppercase tracking-[0.3em] text-[#e8dcc8]/40 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-400 min-h-[44px] flex items-center justify-center mx-auto w-fit"
              >
                View All Facilities
              </a>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ FULL-WIDTH IMAGE BREAK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/spa2.webp"
          alt="Steam and recovery"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      {/* ━━ VALUES — IMAGE MOSAIC GRID ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="about" className="bg-[#0a0a0a] relative">
          {/* Image mosaic behind the values — matching mockup's grid layout */}
          <div className="relative">
            {/* Mosaic grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 min-h-[600px] md:min-h-[700px]">
              {/* Row 1 */}
              <div className="relative overflow-hidden col-span-1">
                <Image src="/images/spa3.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" />
              </div>
              <div className="relative overflow-hidden col-span-1">
                <Image src="/images/spa4.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" />
              </div>
              <div className="relative overflow-hidden col-span-1 hidden md:block">
                <Image src="/images/spa5.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/50" />
              </div>
              <div className="relative overflow-hidden col-span-1 hidden md:block">
                <Image src="/images/spa1.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" />
              </div>
              {/* Row 2 */}
              <div className="relative overflow-hidden col-span-1">
                <Image src="/images/spa5.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/55" />
              </div>
              <div className="relative overflow-hidden col-span-1">
                <Image src="/images/spa2.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/60" />
              </div>
              <div className="relative overflow-hidden col-span-1 hidden md:block">
                <Image src="/images/spa1.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/65" />
              </div>
              <div className="relative overflow-hidden col-span-1 hidden md:block">
                <Image src="/images/spa3.webp" alt="" fill className="object-cover" sizes="25vw" />
                <div className="absolute inset-0 bg-[#0a0a0a]/55" />
              </div>
            </div>

            {/* Values text overlaid on the mosaic */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12">
              <div className="max-w-[1400px] mx-auto w-full">
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#e8dcc8] italic leading-[1.1] mb-10">
                  Why Recover Here
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  {values.map((v) => (
                    <div key={v.title}>
                      <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#c9a96e]/70 mb-2">
                        {v.label}
                      </p>
                      <p className="font-body text-[13px] text-[#e8dcc8]/50 leading-[1.75] max-w-[360px]">
                        {v.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ JOURNEY SECTION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section className="bg-[#0a0a0a] py-20 md:py-0">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
            {/* Text */}
            <div className="px-6 md:px-12 flex flex-col justify-center py-10 md:py-20">
              <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#e8dcc8] leading-[1.15]">
                Our <span className="italic text-[#c9a96e]">journey</span> to<br />
                recovery...
              </h2>
              <p className="mt-5 font-body text-[13px] text-[#e8dcc8]/40 leading-[1.8] max-w-[400px]">
                Revive Wellness sits on the top floor of Revive Fight Club.
                After you&apos;re done on the mats or in the ring, take the stairs
                up and let the heat do the rest. Sauna, steam, cold plunge —
                use one or cycle through all three.
              </p>
              <p className="mt-3 font-body text-[13px] text-[#e8dcc8]/40 leading-[1.8] max-w-[400px]">
                It&apos;s self-service and included with your gym membership.
                Non-members can grab a day pass at the front desk.
                Towels are on us.
              </p>
            </div>

            {/* Image with circle overlay — matching mockup */}
            <div className="relative overflow-hidden min-h-[400px] md:min-h-0">
              {/* Circle image element */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[30%] w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/[0.06] z-10">
                <Image
                  src="/images/spa4.webp"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
              {/* Main image */}
              <Image
                src="/images/spa5.webp"
                alt="Recovery space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ FACILITY DETAILS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="details" className="bg-[#0e0e0e] py-20 md:py-28 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/50 mb-12">
              What&apos;s Inside
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/[0.04]">
              {facilities.map((f) => (
                <div key={f.title} className="bg-[#0a0a0a] group">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  </div>
                  <div className="px-6 py-6 md:px-8 md:py-7">
                    <h3 className="font-display text-[18px] text-[#e8dcc8] italic">
                      {f.title}
                    </h3>
                    <p className="mt-2 font-body text-[13px] text-[#e8dcc8]/35 leading-[1.7]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ━━ VISIT CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <FadeUp>
        <section id="visit" className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/spa3.webp" alt="" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          <ImageGrain opacity={0.03} />

          <div className="relative z-10 max-w-[600px] mx-auto text-center px-6">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-[#c9a96e]/60">
              Ready to Recover?
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] text-[#e8dcc8] italic leading-[1.15]">
              Just walk in
            </h2>
            <p className="mt-4 font-body text-[13px] text-[#e8dcc8]/35 leading-[1.7] max-w-[400px] mx-auto">
              No bookings, no fuss. Members head straight up
              after training. Non-members grab a day pass at reception.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center bg-[#c9a96e] px-7 py-3 font-body text-[11px] uppercase tracking-[0.25em] text-[#0a0a0a] hover:bg-[#d4b87a] transition-colors duration-300 min-h-[44px]"
              >
                Call Us
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20about%20the%20sauna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#e8dcc8]/15 px-7 py-3 font-body text-[11px] uppercase tracking-[0.25em] text-[#e8dcc8]/50 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 min-h-[44px]"
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
