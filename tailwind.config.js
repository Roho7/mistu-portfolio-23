/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Sathosi", "sans-serif"],
      fancy: ["Cabinet Grotesk", "sans-serif"],
    },
    colors: {
      skin: {
        100: "#FFFFE3",
        200: "#B2B29F",
        500: "#59594F",
        800: "#262622",
      },
    },
  },
  plugins: [],
};
