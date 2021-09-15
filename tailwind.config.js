module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
      },

      colors: {
        profitColor: "#8AC9FE",
        lossColor: "#F07281",
        dark: "var(--color-dark)",
        darker: "var(--color-darker)",
        light: "var(--color-light)",
      },

      height: {
        screenHalf: "50vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
