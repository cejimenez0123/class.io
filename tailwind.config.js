/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'offwhite':"#F9F8F8",
      'backtoblack':"#0C0A0F"
    },
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

