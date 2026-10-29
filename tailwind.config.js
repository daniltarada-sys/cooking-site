/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF5A1F',
        dark: '#1A1A1A',
        surface: '#F9F9F9',
      }
    },
  },
  plugins: [],
}