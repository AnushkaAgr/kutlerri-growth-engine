import type { Config } from "tailwindcss";

export default {
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
        "3xl": "1920px",
        "4k": "2560px", 
        "5k": "3840px", 
      },
    },
    extend: {
      screens: {
        "3xl": "1920px", 
        "4k": "2560px", 
        "5k": "3840px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        onlygraphic: ["Onlygraphic", "sans-serif"],
        gotham: ["Gotham", "sans-serif"],
        garnett: ["Garnett", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
