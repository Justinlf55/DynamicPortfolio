import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070709",
          900: "#0A0A0B",
          850: "#101013",
          800: "#16161A",
          700: "#1F1F24",
          600: "#2A2A30",
        },
        chalk: {
          50: "#FAFAFA",
          100: "#EDEDED",
          200: "#D4D4D8",
          300: "#A1A1AA",
          400: "#71717A",
          500: "#52525B",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
          glow: "#C4B5FD",
          deep: "#6D28D9",
        },
        line: "rgba(255,255,255,0.08)",
        "line-strong": "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      fontSize: {
        display: ["clamp(2.25rem, 6vw + 1rem, 5.75rem)", { lineHeight: "1.04", letterSpacing: "-0.04em" }],
        hero: ["clamp(1.875rem, 4vw + 1rem, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      boxShadow: {
        hairline: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        "hairline-strong": "inset 0 0 0 1px rgba(255,255,255,0.14)",
        glow: "0 0 0 1px rgba(139,92,246,0.4), 0 8px 40px -8px rgba(139,92,246,0.45)",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        aurora:
          "radial-gradient(60% 60% at 20% 0%, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0) 60%), radial-gradient(50% 50% at 90% 30%, rgba(56,189,248,0.10) 0%, rgba(56,189,248,0) 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "shimmer": "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

export default config;
