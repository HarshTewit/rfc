import Link from "next/link";
import ImagePlaceholder from "./components/ImagePlaceholder";
import { home, wa, waLink } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-end">
        {/* background image slot */}
        <ImagePlaceholder fill label="HERO PHOTO" />

        {/* grain */}
        <div className="grain absolute inset-0 z-[2] pointer-events-none" />

        {/* top vignette */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent z-[3]" />

        {/* bottom vignette — text lives here */}
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black via-black/80 to-transparent z-[3]" />

        {/* content */}
        <div className="relative z-10 w-full px-4 pb-12 md:pb-20 md:px-10 max-w-7xl mx-auto">
          <h1 className="font-display text-[clamp(4.5rem,18vw,10rem)] leading-[0.88] text-off-white whitespace-pre-line">
            {home.hero.headline}
          </h1>
          <p className="mt-5 font-body text-base md:text-lg text-off-white/70 max-w-md">
            {home.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={home.hero.cta1.href}
              className="inline-block bg-accent px-7 py-3 font-body text-sm uppercase tracking-widest text-off-white hover:bg-accent-hover transition-colors"
            >
              {home.hero.cta1.label}
            </Link>
            <Link
              href={home.hero.cta2.href}
              className="inline-block border border-off-white/40 px-7 py-3 font-body text-sm uppercase tracking-widest text-off-white hover:border-off-white hover:bg-white/5 transition-colors"
            >
              {home.hero.cta2.label}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Pillars ──────────────────────────────────────────────────── */}
      <section className="bg-base py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
          {home.pillars.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="group relative bg-base overflow-hidden block"
            >
              <ImagePlaceholder
                label={p.imageLabel}
                aspectRatio="aspect-[3/2]"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-display text-xl text-off-white uppercase tracking-wide">
                      {p.label}
                    </p>
                    <p className="font-body text-xs text-off-white/55 mt-1 max-w-[200px]">
                      {p.line}
                    </p>
                  </div>
                  <span className="font-display text-accent text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 3. Disciplines ──────────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-base py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-off-white/35 mb-10">
            What we train
          </p>
          <ul className="space-y-0 divide-y divide-white/8">
            {home.disciplines.map((d) => (
              <li key={d}>
                <span className="block font-display text-[clamp(2.5rem,8vw,6rem)] leading-none text-off-white/90 py-3 md:py-4 hover:text-accent transition-colors duration-150 cursor-default select-none">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Stats ────────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-surface py-14 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {home.stats.map((s) => (
            <div key={s.label} className="bg-surface py-10 px-6 text-center">
              <span className="block font-display text-[3.5rem] md:text-[4.5rem] leading-none text-accent">
                {s.value}
              </span>
              <span className="block font-body text-xs uppercase tracking-widest text-off-white/40 mt-3">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. CTA Band ─────────────────────────────────────────────────── */}
      <section className="bg-accent py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-off-white leading-none">
              {home.ctaBand.headline}
            </h2>
            <p className="font-body text-sm text-off-white/70 mt-3">
              {home.ctaBand.sub}
            </p>
          </div>
          <a
            href={waLink(wa.messages.firstSession)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-off-white text-base px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-off-white/90 transition-colors"
          >
            {home.ctaBand.cta}
          </a>
        </div>
      </section>
    </>
  );
}
