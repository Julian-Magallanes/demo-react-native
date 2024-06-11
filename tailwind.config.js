/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  },
  plugins: [],
  postcss: {
    plugins: [
      require('postcss-import'), // o cualquier otro plugin asíncrono que uses
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('nativewind/postcss'),
    ],
},
}

