/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Latar Belakang
        'dark': '#060010',

        // Warna Primer
        'violet': {
          DEFAULT: '#7f22fe', // 'DEFAULT' membuat Anda bisa memanggilnya dengan 'bg-violet'
          light: '#996aff',
        },
        
        // Warna Sekunder & Aksen
        'dark-purple': 'oklch(0.457 0.24 277.023)',

        // Teks & Netral
        'text': {
          'light': '#f1f4f5',
          'main': '#C9D1D9',
          'muted': '#8B949E',
        }
      },
      fontFamily: {
        poetsen: ["Poetsen One", "sans-serif"], 
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
