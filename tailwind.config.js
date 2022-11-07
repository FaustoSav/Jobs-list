const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgColor: "hsl(180, 52%, 96%)",
        lightGray: "hsl(180, 31%, 95%)",
        darkGray: "hsl(180, 8%, 52%)",
        veryDarkGray: "hsl(180, 14%, 20%)",
        desaturedCyan: "hsl(180, 29%, 50%)",      
      },
      fontFamily: {
        customFont: "League Spartan, sans-serif",
      },
      minWidth: {
        phone: '280px',
        container: '216px',
      },
      fontSize:{
        custom: '13px'
      },
      backgroundImage: {
        'desktop': "url('../public/images/bg-header-desktop.svg')",
        'mobile': "url('../public/images/header-mobile.svg')",
      }
      
    },
  },
  plugins: [],
}
