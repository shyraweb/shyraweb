import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;