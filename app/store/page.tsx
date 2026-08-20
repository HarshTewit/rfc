"use client";

import { useState } from "react";
import Image from "next/image";
import ImageGrain from "@/app/components/ImageGrain";
import FadeUp from "@/app/components/FadeUp";
import { store, STORE_CATEGORIES, wa, waLink, type StoreCategory } from "@/content/site";

export default function StorePage() {
  const [active, setActive] = useState<StoreCategory>("All");

  const filtered =
    active === "All"
      ? store.products
      : store.products.filter((p) => p.category === active);

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/bagwork-punch.webp"
          alt="Boxer throwing a powerful punch at a heavy bag at RFC gym"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <ImageGrain />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-[3]" />
        <div className="relative z-[4] max-w-7xl mx-auto px-4 py-20 md:px-10 md:py-24">
          <h1 className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-none text-off-white">
            {store.hero.headline}
          </h1>
          <p className="mt-4 font-body text-base text-off-white/60 max-w-lg">
            {store.hero.sub}
          </p>
        </div>
      </section>

      {/* ── 2. Category filter ──────────────────────────────────────────── */}
      <section className="bg-base border-b border-white/10 sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {STORE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`shrink-0 min-h-[44px] px-5 py-2 font-body text-xs uppercase tracking-widest transition-colors ${
                active === cat
                  ? "bg-accent text-off-white"
                  : "bg-surface text-off-white/50 hover:text-off-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── 3. Product grid ─────────────────────────────────────────────── */}
      <FadeUp>
        <section id="products" className="bg-base py-10 md:py-12 px-4 md:px-10 min-h-[60vh]">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <p className="py-20 text-center font-body text-sm text-off-white/30">
                No products in this category yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.08]">
                {filtered.map((product) => (
                  <div key={product.name} className="bg-base flex flex-col group">
                    <div className="aspect-square relative overflow-hidden bg-[#F5F3EF]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-contain p-4 md:p-6 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    <div className="px-3 md:px-4 pt-4 pb-5 flex flex-col flex-1">
                      <p className="font-body text-[10px] md:text-xs text-off-white/40 uppercase tracking-widest">
                        {product.category}
                      </p>
                      <p className="font-body text-sm md:text-base text-off-white/90 mt-1 font-medium leading-snug flex-1">
                        {product.name}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="font-display text-lg md:text-xl text-off-white">
                          {product.price}
                        </span>
                        <a
                          href={waLink(wa.messages.order(product.name))}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 bg-accent px-3 md:px-4 py-2.5 font-body text-[10px] uppercase tracking-widest text-off-white hover:bg-accent-hover transition-colors min-h-[40px] flex items-center"
                        >
                          Order
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </FadeUp>

      {/* ── 4. Note block ───────────────────────────────────────────────── */}
      <section className="bg-surface border-t border-white/10 py-7 md:py-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-accent text-lg shrink-0" aria-hidden>↗</span>
          <p className="font-body text-sm text-off-white/50">{store.note}</p>
        </div>
      </section>
    </>
  );
}
