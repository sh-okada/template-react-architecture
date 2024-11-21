/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    data: {
      disabled: "disabled",
    },
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
    },
  },
  plugins: [],
};
