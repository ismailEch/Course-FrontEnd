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
        "rich-purple": "#524870"
      }
    },
  },
  plugins: [],
}

