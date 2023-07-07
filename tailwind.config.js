/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Climate Crisis',],
        sand: [ 'Nunito', "Poppins"],
        sanv: [ "DynaPuff" ]
      },
    },
  },
  plugins: [],
}