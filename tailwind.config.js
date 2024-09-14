/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["Barlow", 'sans-serif'],
        'barlow-condensed': ["Barlow Condensed", 'sans-serif'],
        'bellefair': ["Bellefair", 'serif']
      },
      colors: {
        'black-russian': 'rgb(27, 27, 29)',
        'lightblue': '#D0D6F9',
        'black': '#0B0D17',
        'lightgray': 'rgba(11, 13, 23, 0.15)',
        'second-lightgray': 'rgba(255, 255, 255, 0.05)'
      },
      backgroundImage: {
        'home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/assets/home/background-home-tablet.jpg')",
        'home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'destination-mobile': "url('/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-desktop': "url('/assets/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'technology-mobile': "url('/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/assets/technology/background-technology-tablet.jpg')",
        'technology-desktop': "url('/assets/technology/background-technology-desktop.jpg')",
      },
      boxShadow: {
        button: '0 0 0 88px rgb(255 255 255 / 10%)'
      }
    },
  },
  plugins: [],
}