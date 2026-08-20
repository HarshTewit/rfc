"use client";

import { useId } from "react";

/**
 * Full-bleed noise overlay using inline SVG feTurbulence.
 * Unique filter ID per instance avoids SVG namespace conflicts.
 * Place inside a relative parent; it fills absolute inset-0.
 */
export default function ImageGrain({ opacity = 0.06 }: { opacity?: number }) {
  const rawId = useId();
  const filterId = `rfc-grain-${rawId.replace(/\W/g, "")}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity, mixBlendMode: "overlay", zIndex: 2 }}
    >
      <filter id={filterId}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}
