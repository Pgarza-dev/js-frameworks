import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/main1.jpg')",
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        bodyColor: "#0b0e0f",
        primary: "#493b4e",
        secondary: "#1a1514",
        accent: "#778e6b",
        darkText: "#242424",
        lightText: "#e5eaeb",
      },
    },
  },
  plugins: [],
};
export default config;
