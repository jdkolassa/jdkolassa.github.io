const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
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
      colors: {
        "or_orange": "#FF6C11",
        "or_salmon1": "#FF3864",
        "or_cyan": "#2DE2E6",
        "or_bluemag": "#261447",
        "or_midnight": "#0D0221",
        "or_nightpurple": "#241734",
        "or_darklav": "#2E2157",
        "or_softpink": "#fd3777",
        "or_pink": "#F706CF",
        "or_cherry": "#FD1D53",
        "or_blue": "#023788",
        "or_purple": "#650D89",
        "or_burgundy": "#920075",
        "or_bubblegum": "#F6019D",
        "or_pinkmag": "#d40078",
        "or_yellow": "#F9C80E",
        "or_salmon2": "#FF4365",
        "or_purple2": "#540D6E",
        "or_lightlav": "#791E94",
        "or_purple3": "#541388",
      }
    },
    
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),
    require('flowbite/plugin')
  ],
}