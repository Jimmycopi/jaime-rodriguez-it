import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          900: "#0c4a6e",
          950: "#050b14",
        },
        slateDark: "#0a0f1c",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(14, 165, 233, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-size": "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
