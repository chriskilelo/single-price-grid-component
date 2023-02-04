/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/css/**/*.{html,js}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        darkTeal: '#2BB3B1',
        lightTeal: '#4ABEBD',
        ripeLime: '#BFDF32',
      }
    },
  },
  plugins: [],
}