"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-base/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-2xl tracking-widest text-accent uppercase leading-none"
        >
          {nav.wordmark}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm uppercase tracking-widest text-off-white/70 hover:text-off-white transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[2px] w-6 bg-off-white transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-off-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-6 bg-off-white transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/10 bg-base">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-4 font-body text-sm uppercase tracking-widest text-off-white/70 hover:text-off-white hover:bg-white/5 transition-colors duration-150 border-b border-white/5 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
