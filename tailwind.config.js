/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#000000',
        'black-bg': '#0A0A0A',
        'dark-bg': '#121212',
        'dark-gray': '#1A1A1A',
        'medium-gray': '#2A2A2A',
        'light-gray': '#3A3A3A',
        'red-accent': '#B91C1C',
        'red-hover': '#DC2626',
      },
      fontFamily: {
        'oswald': ['var(--font-oswald)'],
        'roboto': ['var(--font-roboto)'],
        'special': ['var(--font-special-elite)'],
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(220, 38, 38, 0.5)',
      },
    },
  },
  plugins: [],
} 