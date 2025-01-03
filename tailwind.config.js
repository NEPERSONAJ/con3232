/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          light: '#34D399', // Более свежий зелёный
          DEFAULT: '#00A884', // Официальный цвет WhatsApp
          dark: '#008C70'
        },
        accent: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dots-pattern': 'radial-gradient(circle, #34D399 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};