import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050509",
          panel: "#0A0A12",
          red: "#ff2257",
          gold: "#ffb648",
          border: "#1b1b2a",
        },
      },
      boxShadow: {
        "neon-red": "0 0 25px rgba(255, 34, 87, 0.55)",
        "neon-gold": "0 0 25px rgba(255, 182, 72, 0.45)",
      },
      fontFamily: {
        futur: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

