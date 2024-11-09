/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "card-bg":"#dee2e6",
        "main-bg":"#0093d0",
        "donnet-btn":"#73bc8c",
        'navBar-bg':'#093765',
        'form-bg':'#ebf3ff',
      }
    },
  },
  plugins: [],
}