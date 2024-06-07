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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-purple": "#6150EB",
        "custom-black": "#141318",
        "custom-yellow": "#BDFF02",
        "custom-gray": "#767676",
        "custom-white": "#F7F9FA",
      },
      fontFamily: {
        liu: "Liu Jian Mao Cao, cursive",
        lexend: "Lexend, sans-serif",
      },
      screens: {
        xsm: "360px"
      }
    },
    
  },
  plugins: [],
};
export default config;
