export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#08090d",
        surface: "#11131a",
        primary: "#f8fafc",
        secondary: "#b7bfcc",
        muted: "#778195",
        line: "#242936",
      },
    },
  },
  plugins: [],
}
