/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // bool or 'media' (system setting) or 'class' (toggle manually)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
        vinyl: ["Rubik Vinyl", "Rubik", "sans-serif"],
        glitch: ["Rubik Glitch", "Rubik", "sans-serif"],
      },
      colors: {
        theme: {
          primary: "#D52941",
          primaryVariant: "#F7B2AD",
          secondary: "#E7D27C",
          // secondaryVariant: "",
          background: "#191919",
          surface: "#262626",
          // error: "",
          onPrimary: "#EAFDF8",
          onSecondary: "#191919",
          onBackground: "#EAFDF8",
          onSurface: "#EAFDF8",
          // onError: ""
        }
      },
    },
  },
  plugins: [],
}
