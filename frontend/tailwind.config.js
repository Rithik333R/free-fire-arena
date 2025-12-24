export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        spotify: "#1DB954",
        surface: "#121212",
        card: "#181818",
        border: "#282828",
        muted: "#b3b3b3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};