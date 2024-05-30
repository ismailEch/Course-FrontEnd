/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2C1F4A",
        "secondary": "#7F56D9",
        "tartiary": "#707070",
        "pink": "#EE9AE5",
        "light-gray": "#C2BEBE",
        "rich-purple": "#524870",
        "red": "#FF5156",
        "deep-red": "#A20308",
        "Vibrant-Purple": "#AF5CD1"
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        500: '#a0aec0',
        700: '#4a5568',
      },
      teal: {
        100: '#e6fffa',
        500: '#38b2ac',
      },
      purple: {
        100: '#faf5ff',
        500: '#9f7aea',
      },
      blue: {
        100: '#ebf8ff',
        500: '#4299e1',
      }
    },
  },
  plugins: [],
}

