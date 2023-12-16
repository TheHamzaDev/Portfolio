/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sequelLight: ["SequelLight", "sans-serif"],
        sequelBold: ["SequelBold", "sans-serif"]
      },
      colors: {
        light: "#f4f1ea",
        grey: "#787874"
      }
    },
  },
  plugins: [],
}

