import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#FB5761",
        utility: {
          info: "#100B7D7",
          "info-light": "#E6FBFE",
          warning: "#FDA900",
          "warning-light": "#FEFAE5",
          purple: "#6352C2",
          "purple-light": "#EAE5FE",
          success: "#39B37E",
          "success-light": "#E2FBEE",
          error: "#FB5761",
          "error-light": "#FEECEC",
        },
      },
      keyframes: {
        // Accordion
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        // Accordion
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-radix")()],
};
export default config;
