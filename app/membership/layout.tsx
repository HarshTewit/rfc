import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership | Revive Fight Club",
  description:
    "Classes, pricing, and coaches at RFC Bangalore. Boxing, Muay Thai, BJJ, MMA — all levels, all schedules.",
  openGraph: {
    title: "Membership | Revive Fight Club",
    description: "Classes, pricing, and coaches at RFC — Bangalore's premier combat-sports gym.",
    images: [{ url: "/images/rfc-logo-wall.webp" }],
  },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
