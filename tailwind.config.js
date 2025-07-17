/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
      lg: "860px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        "gilroy-bold": ["Gilroy Bold", "sans-serif"],
        "gilroy-black": ["Gilroy Black", "sans-serif"],
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [],
};
