/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#202124',
        'brand-grey': '#34363c',
        'brand-light-grey': '#EAEAEA',
        'cozy-brown':'#c4846a',
        'h-green':'#428029'
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
  plugins: [],
};
