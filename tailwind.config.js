/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Adjust the path according to your project structure
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage:{
        'custom-radial': 'radial-gradient(92.18% 99.11% at 26.56% 107.7%, #FFDD55 0%, #FFDD55 10%, #FF543E 50%, #C837AB 100%)'
      }
    },
  },
  plugins: [],
};

