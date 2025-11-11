/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue-950': '#000814',
        'blue-900': '#001d3d',
        'blue-800': '#003566',
        'yellow-500': '#ffc300',
        'yellow-400': '#ffb608',
        'yellow-300': '#ffe345',
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px,0px) scale(1)' },
          '33%': { transform: 'translate(30px,-50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.9)' },
          '100%': { transform: 'translate(0px,0px) scale(1)' },
        },
      },
      animation: {
        blob: 'blob 8s infinite',
      },
    },
  },
  plugins: [],
}
