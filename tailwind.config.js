/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
        'blue01': '#231955',
        'blue02': '#1F4690',
        'blue03': '#E8AA42',
        'blue04': '#139487',
        'light-white': 'rgba(255,255,255,0.17)'
      },
    },
  },
  plugins: [],
}
