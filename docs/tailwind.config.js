/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './public/content/**/*.md'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
