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
        primary: {
          DEFAULT: "#91472b",
          container: "#af5f41",
          fixed: "#ffdbcf",
        },
        secondary: {
          DEFAULT: "#416374",
          container: "#c2e5f9",
        },
        surface: {
          DEFAULT: "#faf9f8",
          low: "#f4f3f2",
          container: "#eeeeed",
        },
        text: {
          primary: "#1a1c1c",
          variant: "#54433d",
        }
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
