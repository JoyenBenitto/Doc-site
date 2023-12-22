/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      site_back:'#10151D',
      background: '#10151D',
      link:'#00CCB4',
      quote:'#00CCB4',
      button_pink:'#00CCB4'
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'play': ['Play', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
        'inter':['Inter']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
],
};