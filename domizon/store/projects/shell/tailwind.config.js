/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/products/src/app/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"']
      }
    },
  },
  plugins: [],
}
