import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: "#0A0A0B",
        surface: "#111113",
        "off-white": "#F5F3EF",
        accent: "#C1121F",
        "accent-hover": "#A00E19",
        // spa
        "spa-bg": "#EDE7DD",
        "spa-ink": "#1C1A17",
        "spa-accent": "#C8922B",
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
