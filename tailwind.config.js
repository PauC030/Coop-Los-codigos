/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  
  theme: {
    extend: {
      colors:{
       "darkblue": "#005EA2",
       "lightblue": "#0B8CE8",
       "blueclear": "#A1BACA",
       "bluecielo": "#DCE9F1",
       "azulclaro": "#EBF7FF",
      
      
      }
    },
  },
  plugins: [],
}

