/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#ff6347', // Sample primary color (coral red)
        secondary: '#4169e1', // Sample secondary color (royal blue)
      },
    },
  },
  plugins: [],
}

