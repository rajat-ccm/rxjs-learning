/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     '.escape-div': {
    //       '*': 'initial',
    //       'h1': 'initial',
    //     },
    //   };

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
  ],
}