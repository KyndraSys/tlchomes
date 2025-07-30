/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        brown: '#48372A',
        green: '#639E4E',
        'dark-green': '#004F33',
        'light-brown': '#D2B48C',
        'light-green': '#90EE90',
        // Adding black and white for completeness
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'garamond': ['EB Garamond', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}