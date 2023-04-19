/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pinkShade": '#FF00FF',
        "blueShade": '#03FFFF',
        "greenShade": '#caf4b0',
        "darkGreenShade": '#507A37',
        "deepPurpleShade": '#301854' 
      }
    },
  },
  plugins: [],
}

