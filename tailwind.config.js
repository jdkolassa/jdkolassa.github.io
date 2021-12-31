module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '192': '48rem'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'Helvetica', 'sans-serif'],
      'heading': ['Gruppo', 'Impact', 'sans-serif']
    }
  },
  plugins: [],
}