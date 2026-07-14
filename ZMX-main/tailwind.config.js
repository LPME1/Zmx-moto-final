/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zmx-black': '#0A0A0A',
        'zmx-gold': '#E4B136',
        'zmx-yellow': '#FFC235',
        'zmx-gray': '#C8C8C8',
      },
      fontFamily: {
        'display': ['Anton', 'Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
