const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '192': '48rem'
      },
      fontFamily: {
        'sans': ['Montserrat', 'Helvetica', 'sans-serif'],
        'heading': ['Squarish Sans CT', 'Impact', 'sans-serif']
      },
      fontSize: {
        '10xl': ['10rem', '15rem'],
        '11xl': ['12rem', '18rem'],
        '12xl': ['14rem', '21rem'],
        '13xl': ['16rem', '24rem'],
      },
    },
    
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}