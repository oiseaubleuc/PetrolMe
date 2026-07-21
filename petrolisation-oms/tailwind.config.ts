import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces — graphite / deep navy
        ink: {
          950: "#070A0F",
          900: "#0B0F17",
          850: "#0F1420",
          800: "#131A28",
          700: "#1A2333",
          600: "#22304a",
          500: "#2E3E5C",
        },
        // Petroleum blue
        petro: {
          50: "#e9f4f7",
          100: "#c9e4ec",
          200: "#8fc6d6",
          300: "#4f9fb8",
          400: "#2b7f9c",
          500: "#166783",
          600: "#0f4f66",
          700: "#0c3e50",
          800: "#0a3140",
          900: "#082530",
        },
        // Orange accent
        flare: {
          50: "#fff2e9",
          100: "#ffdcc2",
          200: "#ffb888",
          300: "#ff934d",
          400: "#ff7a26",
          500: "#f96412",
          600: "#e04e00",
          700: "#b83f00",
          800: "#8f3200",
          900: "#6b2600",
        },
        line: {
          soft: "rgba(148,169,201,0.08)",
          DEFAULT: "rgba(148,169,201,0.12)",
          strong: "rgba(148,169,201,0.22)",
        },
        status: {
          ok: "#2fbf83",
          warn: "#f5b13d",
          crit: "#ef4d5a",
          info: "#48a7d6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 20px 40px -24px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(249,100,18,0.35), 0 8px 30px -8px rgba(249,100,18,0.45)",
        ring: "0 0 0 1px rgba(148,169,201,0.12)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(148,169,201,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,169,201,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(120% 120% at 50% 0%, rgba(22,103,131,0.18) 0%, rgba(11,15,23,0) 55%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
