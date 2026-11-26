import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        desk: {
          void: "#0D1015",
          panel: "#0F151B",
          inset: "#0B1015",
          border: "#1F2A33",
          "border-strong": "#232E38",
          text: "#E6EAF0",
          muted: "#8B95A5",
          faint: "#56606E",
          info: "#7AB8FF",
          "info-bg": "#101827",
        },
        connect: {
          50: "#e8fff4",
          100: "#c9fde3",
          200: "#95f9c8",
          300: "#5febab",
          400: "#3DDC97",
          500: "#2ec482",
          600: "#2C6B50",
          700: "#1f4d3a",
          800: "#143526",
          900: "#10261D",
        },
        ink: {
          950: "#0D1015",
          900: "#0F151B",
          850: "#131922",
          800: "#1A2430",
          700: "#232E38",
          600: "#2E3E5C",
          500: "#3A4A62",
        },
        petro: {
          300: "#7AB8FF",
          400: "#5fa0f0",
          500: "#4a8ee0",
        },
        flare: {
          300: "#3DDC97",
          400: "#3DDC97",
          500: "#2ec482",
        },
        line: {
          soft: "rgba(148, 169, 201, 0.06)",
          DEFAULT: "#1F2A33",
          strong: "#232E38",
        },
        status: {
          ok: "#3DDC97",
          warn: "#f5b13d",
          crit: "#ef4d5a",
          info: "#7AB8FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        panel:
          "inset 0 1px 0 0 rgba(255,255,255,0.03), 0 20px 40px -24px rgba(0,0,0,0.75)",
        "glow-connect": "0 0 22px rgba(61,220,151,0.14)",
        rail: "inset 0 1px 0 rgba(255,255,255,.04), 0 0 0 1px rgba(61,220,151,.05), 0 24px 60px rgba(0,0,0,.45)",
        ring: "0 0 0 1px rgba(31,42,51,0.9)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(61,220,151,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(61,220,151,0.03) 1px, transparent 1px)",
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
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;