import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:       "#1F3A5F",
          "blue-mid": "#2B5080",
          "blue-nav": "#162D4A",
          "blue-bg":  "#EAF0F6",
          gold:       "#D4A11E",
          "gold-lt":  "#F0C84E",
          "gold-dk":  "#A8810F",
        },
        ink: {
          DEFAULT:   "#0E0E0E",
          secondary: "#4A4A4A",
          muted:     "#7A8694",
        },
        wa: {
          DEFAULT: "#25D366",
          dark:    "#1EBE5A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.1", fontWeight: "800" }],
        "h2":      ["clamp(1.6rem, 3vw, 2.4rem)",   { lineHeight: "1.2", fontWeight: "700" }],
        "h3":      ["clamp(1.1rem, 2vw, 1.35rem)",  { lineHeight: "1.3", fontWeight: "700" }],
      },
      boxShadow: {
        "sm2":   "0 1px 4px rgba(0,0,0,0.06)",
        "card":  "0 2px 12px rgba(31,58,95,0.08)",
        "card-hover": "0 8px 32px rgba(31,58,95,0.16)",
        "blue":  "0 6px 24px rgba(31,58,95,0.3)",
        "gold":  "0 4px 16px rgba(212,161,30,0.35)",
        "wa":    "0 4px 14px rgba(37,211,102,0.4)",
        "wa-lg": "0 6px 24px rgba(37,211,102,0.5)",
        "inner-gold": "inset 0 0 0 2px #D4A11E",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #162D4A 0%, #1F3A5F 50%, #2B5080 100%)",
        "blue-gradient": "linear-gradient(180deg, #1F3A5F 0%, #162D4A 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4A11E 0%, #F0C84E 100%)",
        "card-shine":    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%":      { transform: "scale(1.08)", opacity: "0.85" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease forwards",
        "pulse-ring": "pulse-ring 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
