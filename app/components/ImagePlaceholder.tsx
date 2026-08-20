"use client";

interface ImagePlaceholderProps {
  label?: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-video", "aspect-square", "aspect-[4/3]" */
  aspectRatio?: string;
  className?: string;
  /** When true, renders absolute inset-0 (fills a relative parent) instead of a block */
  fill?: boolean;
}

export default function ImagePlaceholder({
  label = "IMAGE",
  aspectRatio = "aspect-video",
  className = "",
  fill = false,
}: ImagePlaceholderProps) {
  const base = fill
    ? `absolute inset-0`
    : `${aspectRatio} w-full`;

  return (
    <div
      className={`${base} ${className} relative overflow-hidden bg-surface`}
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(255,255,255,0.018) 0px,
          rgba(255,255,255,0.018) 1px,
          transparent 1px,
          transparent 10px
        )`,
      }}
    >
      <span className="absolute inset-0 flex items-center justify-center font-display text-[10px] tracking-[0.35em] text-off-white/15 uppercase select-none">
        {label}
      </span>
    </div>
  );
}
