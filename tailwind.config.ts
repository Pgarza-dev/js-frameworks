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
        bodyColor: "#fbfaf7",
        bglight: "1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5",
      },
    },
  },
  plugins: [],
};
export default config;
