/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lightgreen': '#39DB4A',
        'green': '#C1F1C6'
      },
      boxShadow :{
        'catagories-shadow' : '2px 10px 30px 0px #0000001A;'
      }
      
    },
  },
  plugins: [],
}