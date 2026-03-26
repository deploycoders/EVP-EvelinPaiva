/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        evp: {
          bg: "#f6f3f2",
          section: "#f0ebe7",
          accent: "#876247",
          "accent-deep": "#6b4d38",
          gold: "#ffe08f",
          sand: "#e5c09d",
          title: "#2a1f17",
          body: "#5c4a3b",
          border: "#e5c09d"
        }
      },
      fontFamily: {
        /* Tipografía Principal — TAN Aegean (self-hosted) / Playfair Display fallback */
        title: ["TAN Aegean", "Playfair Display", "Georgia", "serif"],
        /* Tipografía Secundaria — Glacial Indifference */
        secondary: ["Glacial Indifference", "Helvetica Neue", "sans-serif"],
        /* Tipografía Cuerpo — Open Sauce One */
        body: ["Open Sauce One", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgb(42 31 23 / 10%)"
      }
    }
  },
  plugins: []
};
