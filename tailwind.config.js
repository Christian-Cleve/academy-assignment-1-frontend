/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-brand': '#202124',
        'brand-grey': '#34363c',
        'brand-light-grey': '#EAEAEA',
        'cozy-brown':'#e48500',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
  plugins: [],
};
