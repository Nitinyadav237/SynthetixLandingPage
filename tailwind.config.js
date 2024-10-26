/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Arimo: ['Arimo', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
        keyframes: {
          spin: {
            '0%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(90deg)' },
            '50%': { transform: 'rotate(180deg)' },
            '75%': { transform: 'rotate(270deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        }
    },
  },
  plugins: [],
}

