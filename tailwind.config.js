/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./blog.html",
    "./contact-us.html",
    "./disclaimer.html",
    "./privacy-policy.html",
    "./terms-of-service.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./script.js",
    "./quotes.js",
    "./*.js"
  ],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
    },
  },
  plugins: [],
}
