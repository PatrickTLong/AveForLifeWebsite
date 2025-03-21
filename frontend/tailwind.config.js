/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/main.jsx",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cairoPlay: ["Cairo Play", "sans-serif"],
        codystar: ["Codystar", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
        playfair: ["Playfair Display", "serif"],
        volkhov: ["Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
