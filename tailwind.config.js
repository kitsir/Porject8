/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        thai: ['Inter', '"Bai Jamjuree"', 'sans-serif'],
        body: ['Inter', 'Sarabun', 'sans-serif'],
      },
      colors: {
        cream: '#F8F1E4',
        ivory: '#FBFAF6',
        gold: '#C8860A',
        burgundy: '#6B2018',
        ink: '#1A1410',
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}

