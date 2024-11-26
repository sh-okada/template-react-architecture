/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // https://uicolors.app/create #f7f7ed
    colors: {
      primary: {
        50: "#f7f7ed",
        100: "#ededd8",
        200: "#dadaad",
        300: "#c6c383",
        400: "#b9b366",
        500: "#ad9e53",
        600: "#988247",
        700: "#7f673e",
        800: "#695437",
        900: "#58462f",
        950: "#312517",
      },
      carmine: {
        50: "#ffeff2",
        100: "#ffdae0",
        200: "#ffbbc6",
        300: "#ff8c9f",
        400: "#ff4a68",
        500: "#ff133a",
        600: "#ff002a",
        700: "#e60026",
        800: "#bd001f",
        900: "#98011a",
        950: "#56000e",
      },
    },
  },
  plugins: [],
};
