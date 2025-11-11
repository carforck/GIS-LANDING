/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0E1A2B", // azul oscuro profundo
          800: "#1C2C4A",
          700: "#2F4B7C",
          500: "#7AA9E9",
          300: "#DCE6F7",
        },
        secondary: "#FFFFFF", // blanco
      },
    },
  },
  plugins: [],
};
