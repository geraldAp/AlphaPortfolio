/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#121212',
        'secondary-color': '#252525',
        'complemetary-color': '#191919',
        'grey-color': '#D9D9D9',
        'grey-color-two': '#2F2F2F',
        'grey-color-three': '#171717'
      },
    },
  },
  plugins: [],
}
