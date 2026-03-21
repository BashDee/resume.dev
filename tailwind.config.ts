import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#f0f4f8',
          100: '#d6e8f5',
          200: '#add2eb',
          300: '#7db3dc',
          400: '#4e8fcb',
          500: '#2e6bb8',
          600: '#1e4a8c',
          700: '#173a6f',
          800: '#122b52',
          900: '#0f1f3d',
          950: '#080f1a',
        }
      },
    },
  },
  plugins: [],
};

export default config;