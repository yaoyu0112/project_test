/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3490dc',
        'custom-green': '#38c172',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // 啟用表單插件
    require('@tailwindcss/typography'), // 啟用排版插件
  ],
}

