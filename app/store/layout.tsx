import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store | Revive Fight Club",
  description:
    "Boxing gloves, wraps, apparel, and gear. WhatsApp ordering — pickup at the gym or delivery across Bangalore.",
  openGraph: {
    title: "Store | Revive Fight Club",
    description: "Combat-sports gear and apparel. Order on WhatsApp, Bangalore delivery.",
    images: [{ url: "/images/bagwork-punch.webp" }],
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
