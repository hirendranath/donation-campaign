/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-rose": "#FF444A",
        "color-gray": "#0b0b0bb3"
      }
    },
  },
  plugins: [],
}

