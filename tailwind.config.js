/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky blue
        secondary: "#6366f1", // Indigo
        dark: "#1e293b", // Slate dark
        light: "#f8fafc", // Slate light
        accent: "#f97316", // Orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
