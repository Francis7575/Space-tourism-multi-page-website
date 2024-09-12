/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-mobile': "url('/assets/home/background-home-mobile.jpg')"
      }
    },
  },
  plugins: [],
}