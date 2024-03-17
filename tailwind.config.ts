import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      darkMode: "selector",
      fontFamily: {
        sans: ["Poppins"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        bodyColor: "#0b0e0f",
        primary: "#493b4e",
        secondary: "#1a1514",
        accent: "#778e6b",
        darkText: "#242424",
        lightText: "#e5eaeb",
        lightModeText: "#14191a",
        lightModeBody: "#f0f3f4",
        lightModePrimary: "#bfb1c4",
        lightModeSecondary: "#ebe6e5",
        lightModeAccent: "#4B5B48",
      },
    },
  },
  plugins: [],
};
export default config;
