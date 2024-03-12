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
        lightModeAccent: "#7d9471",
      },
    },
  },
  plugins: [],
};
export default config;
