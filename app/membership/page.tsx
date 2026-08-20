"use client";

import { useState } from "react";
import Image from "next/image";
import ImageGrain from "@/app/components/ImageGrain";
import FadeUp from "@/app/components/FadeUp";
import { membership, wa, waLink } from "@/content/site";

export default function MembershipPage() {
  const [openDay, setOpenDay] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── 1. Page Hero ────────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden border-b border-white/10">
        <Image
          src="/images/rfc-logo-wall.webp"
          alt="RFC logo on the gym wall with members training in the background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <ImageGrain />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-[3]" />
        <div className="relative z-[4] max-w-7xl mx-auto px-4 py-20 md:px-10 md:py-28">
          <h1 className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-none text-off-white">
            {membership.hero.headline}
          </h1>
          <p className="mt-5 font-body text-base text-off-white/60 max-w-xl leading-relaxed">
            {membership.hero.body}
          </p>
        </div>
      </section>

      {/* ── 2. Schedule ─────────────────────────────────────────────────── */}
      <FadeUp>
        <section id="schedule" className="bg-base py-14 md:py-16 px-4 md:px-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-off-white mb-10">
              Class Schedule
            </h2>

            {/* Desktop: 7-col grid */}
            <div className="hidden md:grid md:grid-cols-7 gap-px bg-white/10">
              {membership.schedule.map((day) => (
                <div key={day.day} className="bg-base">
                  <div className="bg-surface px-3 py-3 border-b border-white/10">
                    <span className="font-display text-sm text-accent uppercase tracking-widest">
                      {day.short}
                    </span>
                  </div>
                  <div className="divide-y divide-white/5">
                    {day.classes.map((cls, i) => (
                      <div key={i} className="px-3 py-3">
                        <p className="font-display text-[10px] text-accent/80 tracking-widest">
                          {cls.time}
                        </p>
                        <p className="font-body text-xs text-off-white/90 mt-1 leading-snug font-medium">
                          {cls.name}
                        </p>
                        <p className="font-body text-[10px] text-off-white/35 mt-1">
                          {cls.coach} · {cls.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: day-by-day accordion */}
            <div className="md:hidden divide-y divide-white/10 border-t border-white/10">
              {membership.schedule.map((day) => {
                const isOpen = openDay === day.day;
                return (
                  <div key={day.day}>
                    <button
                      onClick={() => setOpenDay(isOpen ? null : day.day)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between py-4 text-left min-h-[48px]"
                    >
                      <span className="font-display text-xl text-off-white uppercase">
                        {day.day}
                      </span>
                      <span className="font-body text-off-white/40 text-lg" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-4 space-y-2">
                        {day.classes.map((cls, i) => (
                          <div key={i} className="bg-surface px-4 py-3 border-l-2 border-accent">
                            <p className="font-display text-xs text-accent tracking-widest">
                              {cls.time} · {cls.duration}
                            </p>
                            <p className="font-body text-sm text-off-white/90 mt-1">
                              {cls.name}
                            </p>
                            <p className="font-body text-xs text-off-white/40 mt-0.5">
                              {cls.coach}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 3. Pricing ──────────────────────────────────────────────────── */}
      <FadeUp>
        <section id="pricing" className="bg-surface py-14 md:py-16 px-4 md:px-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-off-white mb-10">
              Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {membership.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col px-6 md:px-7 py-8 ${
                    plan.featured ? "bg-accent" : "bg-surface"
                  }`}
                >
                  <p className={`font-display text-sm uppercase tracking-widest ${plan.featured ? "text-off-white/70" : "text-off-white/40"}`}>
                    {plan.name}
                  </p>
                  <div className="mt-4 mb-1">
                    <span className="font-display text-5xl leading-none text-off-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className={`font-body text-xs uppercase tracking-widest mb-8 ${plan.featured ? "text-off-white/60" : "text-off-white/35"}`}>
                    {plan.period}
                  </p>
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className={`mt-0.5 shrink-0 ${plan.featured ? "text-off-white" : "text-accent"}`}>
                          ✓
                        </span>
                        <span className={`font-body text-sm leading-snug ${plan.featured ? "text-off-white/80" : "text-off-white/60"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(wa.messages.membership)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-block text-center py-3.5 font-body text-sm uppercase tracking-widest transition-colors ${
                      plan.featured
                        ? "bg-off-white text-[#0A0A0B] hover:bg-off-white/90"
                        : "border border-white/20 text-off-white hover:border-white/50 hover:bg-white/5"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 4. Coaches ──────────────────────────────────────────────────── */}
      <FadeUp>
        <section id="coaches" className="bg-base py-14 md:py-16 px-4 md:px-10 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-off-white mb-10">
              Coaches
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
              {membership.coaches.map((coach) => (
                <div key={coach.name} className="bg-base">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={coach.image}
                      alt={coach.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-4 py-4 md:py-5">
                    <p className="font-display text-base md:text-lg text-off-white uppercase leading-none">
                      {coach.name}
                    </p>
                    <p className="font-body text-xs text-accent uppercase tracking-widest mt-1">
                      {coach.discipline}
                    </p>
                    <p className="font-body text-xs text-off-white/45 mt-3 leading-relaxed">
                      {coach.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 5. FAQ ──────────────────────────────────────────────────────── */}
      <FadeUp>
        <section id="faq" className="bg-surface py-14 md:py-16 px-4 md:px-10 border-b border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl text-off-white mb-10">
              FAQ
            </h2>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {membership.faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 py-5 text-left min-h-[56px]"
                    >
                      <span className="font-body text-sm md:text-base text-off-white/90 font-medium">
                        {faq.q}
                      </span>
                      <span className="shrink-0 font-body text-off-white/40 text-xl mt-0.5" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-5 font-body text-sm text-off-white/55 leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── 6. CTA Band ─────────────────────────────────────────────────── */}
      <section id="join" className="bg-accent py-16 md:py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] text-off-white leading-none">
              {membership.ctaBand.headline}
            </h2>
            <p className="font-body text-sm text-off-white/70 mt-3">
              {membership.ctaBand.sub}
            </p>
          </div>
          <a
            href={waLink(wa.messages.firstSession)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-off-white text-[#0A0A0B] px-8 py-4 font-body text-sm uppercase tracking-widest hover:bg-off-white/90 transition-colors"
          >
            {membership.ctaBand.cta}
          </a>
        </div>
      </section>
    </>
  );
}
