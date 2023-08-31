/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "primary-light-cyan":'hsl(193, 38%, 86%)',
        "primar-neon-green":"hsl(150, 100%, 66%)",
        "neutral-grayish-blue":"hsl(217, 19%, 38%)",
        "neutral-dark-blue":"hsl(218, 23%, 16%)",
        "n-dark-grayish-blue":"hsl(217, 19%, 24%)",
      },
      fontFamily:{
        'monrope': ['Manrope', 'sans-serif'],
      },
      fontSize:{
        'md':'28px',
      },
      screens:{
        "xs":"375px",
        "x-lg":"1440px",
        
      }

    },
  },
  plugins: [],
}


