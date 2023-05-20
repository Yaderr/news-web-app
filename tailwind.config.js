/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx, css}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'red-ribbon': '#FF2950',
      'blue-vogue': '#192E51',
      'lynch': '#607698',
      'athens-gray': '#E9EBF0'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

