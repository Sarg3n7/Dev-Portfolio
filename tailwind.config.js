import { defineConfig } from "tailwindcss"; // 🔁 ensures proper v4 config syntax

export default defineConfig({
  theme: {
    extend: {
      // 🎨 Design tokens mapped to CSS variables
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        cream: "hsl(var(--cream) / <alpha-value>)",
        "off-white": "hsl(var(--off-white) / <alpha-value>)",
        "orange-gold": "hsl(var(--orange-gold) / <alpha-value>)",
        charcoal: "hsl(var(--charcoal) / <alpha-value>)",
        "soft-accent": "hsl(var(--soft-accent) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },

      // 🆕 Retain your original boxShadow, radius, and animation system
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "var(--shadow-glow)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "draw-line": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },

      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-scale": "fade-in-scale 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        float: "float 3s ease-in-out infinite",
        "draw-line": "draw-line 1s ease-out forwards",
      },
    },
  },
});