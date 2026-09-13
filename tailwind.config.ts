import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0A0A0A",
        surface: "#111111",
        "surface-light": "#1A1A1A",
        cream: "#F5F0E8",
        "cream-dim": "#C4B99A",
        copper: "#C8922B",
        "copper-light": "#D4A84A",
        "copper-dark": "#A87720",
        warm: "#2A2018",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
