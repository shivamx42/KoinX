/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button-bg": "#1B4AEF",
        "symbol-bg": "#5C677B"
      },

    },
  },
  plugins: [],
}

