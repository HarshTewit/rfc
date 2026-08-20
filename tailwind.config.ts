import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--color-base)",
        surface: "var(--color-surface)",
        "off-white": "var(--color-off-white)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        // spa
        "spa-bg": "var(--color-spa-bg)",
        "spa-ink": "var(--color-spa-ink)",
        "spa-accent": "var(--color-spa-accent)",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "11xl": ["12rem", { lineHeight: "0.85" }],
      },
    },
  },
  plugins: [],
};

export default config;
