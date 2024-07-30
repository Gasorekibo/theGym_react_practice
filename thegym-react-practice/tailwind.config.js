/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:"#555",
        secondary:"#6372ff",
        primaryBold:"#333"
      },
      backgroundImage:{
        hero:"url('./public/intro-bg.jpg')",

      }
    },
  },
  plugins: [],
};
