/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        'blob-shape1': '33% 67% 64% 36% / 50% 28% 72% 50%',
        'blob-shape2': '60% 40% 33% 67% / 46% 25% 75% 54%   ',
      }
    },
  },
  plugins: [],
}