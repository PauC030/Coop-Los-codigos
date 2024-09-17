/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
    "./PEDIDOS/pedidos.html",
    "./Configuración/configuracion.html"
    
  ], 
  
  theme: {
    extend: {
      colors:{
       'darkblue': "#005EA2",
       'lightblue': "#0077FF",   /*color de los botones azul intenso */
       'blueclear': "#A1BACA", 
       'bluecielo': "#DCE9F1", 
       'azulclaro': "#EBF7FF",
       'BTverde': "#cff6c8", /*COLOR PARA los botones de entrega verde*/ 
       'BTrojo': "#ffbeae"
      
      },
    },
  },
  plugins: [],
}

