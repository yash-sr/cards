/** @type {import('tailwindcss').Config} */
const colors = require('./src/css_variables/colors.js');
module.exports = {
  content: ["./src.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}