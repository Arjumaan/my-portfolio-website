/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: "#1A1B1E",
          light: "#232428",
          dark: "#111214",
          text: "#E0E0E0",
          accent: "#4ade80",
          accentGlow: "rgba(74, 222, 128, 0.4)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neu-flat': '8px 8px 16px #111214, -8px -8px 16px #232428',
        'neu-flat-sm': '4px 4px 8px #111214, -4px -4px 8px #232428',
        'neu-flat-hover': '12px 12px 20px #111214, -12px -12px 20px #232428',
        'neu-pressed': 'inset 6px 6px 12px #111214, inset -6px -6px 12px #232428',
        'neu-pressed-sm': 'inset 3px 3px 6px #111214, inset -3px -3px 6px #232428',
        'neu-accent': '8px 8px 16px #111214, -8px -8px 16px #232428, 0 0 15px rgba(74,222,128,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}