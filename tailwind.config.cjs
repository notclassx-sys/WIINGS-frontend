/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass-dark': 'rgba(12,14,20,0.6)',
        'glass-light': 'rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg,#0f172a 0%,#111827 60%, #ffffff10 100%)'
      }
    }
  },
  plugins: [],
}
