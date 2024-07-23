// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': {'max': '1144px'},
        'mobiel': {'max': '580px'},
      },
      keyframes: {
        credit: {
          '0%, 100%': { transform: 'scale(1)', color: 'inherit' },
          '50%': { transform: 'scale(1.2)', color: '#ca8a04' },
        },
      },
      animation: {
        credit: 'credit 0.5s ease-in-out',
      },    
    },
  },
  plugins: [],
};
