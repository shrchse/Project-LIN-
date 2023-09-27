/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#2F2F2F',
        'secondary' : '#F6F6F6',
        'accent' : '#C8C6C4',
        'accent-2' : '#FFCB74',
        'accent-3' : '#696969',
      },
      animation:{
        blob: "blob 5s infinite"
      },
      keyframes: {
        blob:{
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(30px, 50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(20px, -20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}
