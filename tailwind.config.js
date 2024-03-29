/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'lightspot': "0 0 20vh white"
      },
      colors: {
        'darkgrey' : '#1A1A1A',
        'lightgrey': '#d3d3d3'
      },
      height: {
        'screen/2': "50vh"
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
