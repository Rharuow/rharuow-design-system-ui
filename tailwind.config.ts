import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "secondary-dark": {
          DEFAULT: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "secondary-ligth": {
          DEFAULT: "hsl(var(--secondary-ligth))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "label-focus": {
          from: {
            fontSize: "16px",
          },
          to: {
            top: "0",
            fontSize: "12px",
            zIndex: "1",
            color: "var(--primary)",
            background: "white",
            padding: "0 16px",
            fontWeight: "bold",
            borderRadius: "100%",
          },
        },
        "label-blur": {
          from: {
            top: "0",
            fontSize: "12px",
            zIndex: "1",
            color: "var(--primary)",
            background: "white",
            padding: "0 16px",
            fontWeight: "bold",
            borderRadius: "100%",
          },
          to: {
            fontSize: "16px",
          },
        },
        shake: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "rotate(-30deg)" },
          "20%, 40%, 60%, 80%": { transform: "rotate(30deg)" },
        },
        fadeOutLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        fadeOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out forwards",
        shake: "shake 3s ease-in-out infinite",
        fadeOutLeft: "fadeOutLeft 0.5s ease-out forwards",
        fadeOutRight: "fadeOutRight 0.5s ease-out forwards",
        "accordion-up": "accordion-up 0.2s ease-out forwards",
        "label-focus": "label-focus 0.2s ease-out forwards",
        "label-blur": "label-blur 0.2s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }: PluginAPI) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
} satisfies Config;

export default config;
