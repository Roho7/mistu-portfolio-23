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
    backgroundImage: {
      "body-texture": "url('src/assets/texture-2.png')",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { min: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
