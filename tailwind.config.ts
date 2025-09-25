import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          200: '#fde68a', // light gold
          300: '#fcd34d', // gold-300
          400: '#f59e0b', // gold-400
          500: '#fbbf24', // gold-500
        },
      },
    },
  },
  plugins: [],
};
export default config;
