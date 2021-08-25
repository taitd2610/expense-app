module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
      },

      colors: {
        profitColor: "#8AC9FE",
        lossColor: "#F07281",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
