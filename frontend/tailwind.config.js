/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        surface: {
          0: "#0a0a0f",
          1: "#111118",
          2: "#1a1a24",
          3: "#22222f",
          4: "#2a2a3a",
        },
        accent: {
          DEFAULT: "#7c6af7",
          light: "#a89cf9",
          dark: "#5b4de0",
        },
        success: "#34d399",
        warning: "#fbbf24",
        danger: "#f87171",
        muted: "#6b7280",
        border: "#2e2e42",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(124,106,247,0.08), 0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 0 0 1px rgba(124,106,247,0.25), 0 8px 32px rgba(0,0,0,0.5)",
        glow: "0 0 20px rgba(124,106,247,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-up": "slideUp 0.25s ease-out",
        spin: "spin 0.8s linear infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: "translateY(12px)" }, to: { opacity: 1, transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};
