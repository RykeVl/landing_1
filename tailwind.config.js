/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      robotoBlack: ["Roboto Black", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          100: "#E7ECFF",
          300: "#929ecc",
          400: "#6F7CB2",
          500: "#505f98",
          600: "#37447e",
          700: "#222f65",
          800: "#111b47",
          900: "#091133",
        },
        grey: {
          200: "#CDD1D4",
          400: "#939ea4",
          600: "#5d6970",
        }
      }
    },
  },
  plugins: [],
}

