// tailwind.config.js (CORRIGIDO)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        
        // =======================================================
        // AQUI ESTÁ A CORREÇÃO
        // =======================================================
        slideUp: {
          '0%': { transform: 'translateY(0%)' },      // Mostra Item 1
          '25%': { transform: 'translateY(0%)' },     // Pausa no Item 1
          
          '33.33%': { transform: 'translateY(-100%)' }, // Transição para Item 2
          '58.33%': { transform: 'translateY(-100%)' },// Pausa no Item 2
          
          '66.66%': { transform: 'translateY(-200%)' }, // Transição para Item 3
          '91.66%': { transform: 'translateY(-200%)' },// Pausa no Item 3
          
          '100%': { transform: 'translateY(-300%)' }, // Transição para Item 4 (que é a cópia do 1)
        },
        // Ao chegar em 100%, a propriedade 'infinite'
        // instantaneamente volta para 0%, o que é
        // visualmente perfeito, pois Item 4 == Item 1.
      pulseGlow: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 7px rgba(52, 211, 153, 0.5))' // Brilho médio
          },
          '50%': { 
            filter: 'drop-shadow(0 0 15px rgba(52, 211, 153, 0.8))' // Brilho máximo
          }
        },
      pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }, // Estica
          '100%': { transform: 'scale(1)' }, // Volta
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out 0.5s forwards',
        'float': 'float 3s ease-in-out infinite',
        
        // A duração (9s) e o 'infinite' continuam os mesmos
        'slide-up': 'slideUp 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'pop': 'pop 0.3s ease-out',
      }
    },
  },
  plugins: [],
}