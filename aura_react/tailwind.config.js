/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        card: '#111111',
        gold: '#D4AF37',
        'gold-hover': '#F3E5AB',
        'text-main': '#FFFFFF',
        'text-muted': '#A0A0A0'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
