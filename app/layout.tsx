import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revivedfightclub.in"),
  title: "Revive Fight Club | Bangalore Combat Sports",
  description:
    "Boxing, Muay Thai, BJJ and MMA training in Bangalore. Join RFC — the city's premier combat-sports gym.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Revive Fight Club",
    description: "Bangalore's premier combat-sports gym.",
    images: [{ url: "/images/sparring-hero.webp" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="font-body flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
