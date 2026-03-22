/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        evp: {
          bg: "#F7F3F0",
          section: "#EFE9E4",
          accent: "#AD5D43",
          "accent-deep": "#8A4833",
          title: "#1A1A1A",
          body: "#575757",
          border: "#D9C5B2"
        }
      },
      fontFamily: {
        title: ["Cormorant Garamond", "Times New Roman", "serif"],
        body: ["Montserrat", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgb(26 26 26 / 8%)"
      }
    }
  },
  plugins: []
};
