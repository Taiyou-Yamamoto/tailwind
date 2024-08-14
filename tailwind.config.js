/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#bff8ff',
          300: '#90cdf4',
          500: '#4299e1',
        },
      },
      fontFamily: {
        Bungee: ['Bungee Tint', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
