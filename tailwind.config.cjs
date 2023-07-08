/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'pomodoro-green': '#32a852',
        'pomodoro-red': '#ff6347',
        // 'pomodoro-red': '#a8422d',
      }
    },
  },
  plugins: [],
}

