/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0D1117",
        secondary: "#FF4C29",
        gray: "#F1F4F5",
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"], 
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
