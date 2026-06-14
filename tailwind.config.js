/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        navy: "#2A3B47",
        terracotta: "#C9614A",
        mustard: "#E9C46A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      borderWidth: {
        "3": "3px",
        "4": "4px",
      },
      boxShadow: {
        brutal: "6px 6px 0px 0px #2A3B47",
        "brutal-hover": "8px 8px 0px 0px #2A3B47",
        "brutal-sm": "4px 4px 0px 0px #2A3B47",
      },
    },
  },
  plugins: [],
}