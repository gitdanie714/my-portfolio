export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#f5f8f8",
        surface: "#ffffff",
        primary: "#102a32",
        secondary: "#49616a",
        muted: "#73868d",
        line: "#d9e2e4",
        accent: "#087e6b",
      },
    },
  },
  plugins: [],
}
