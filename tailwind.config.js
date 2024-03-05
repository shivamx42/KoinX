/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg": "#FFEFF",
        "button-bg": "#1B4AEF",
      },

    },
  },
  plugins: [],
}

