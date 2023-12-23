/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'orange-background': "url('../BG.png')"
      },
      fontFamily: {
        quickSand: ['Quicksand', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
        jura: ['Jura', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'heading': '#473525'
      }
    },
  },
  plugins: [],
}
