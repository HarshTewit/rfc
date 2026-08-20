"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps children in a div that fades up on scroll via IntersectionObserver.
 * The 'fade-up' class is added client-side so SSR renders content fully visible.
 */
export default function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    el.classList.add("fade-up");

    const t = setTimeout(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
            obs.unobserve(el);
          }
        },
        { threshold: 0.07, rootMargin: "0px 0px -20px 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, delay);

    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
