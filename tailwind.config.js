/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        surface: "#0A0A0A",
        surfaceLight: "#111111",

        primary: "#FAFAFA",
        secondary: "#A1A1A1",
        tertiary: "#525252",

        // Vibrant accent colors
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        pink: {
          DEFAULT: "#ec4899",
          light: "#f472b6",
          dark: "#db2777",
        },
        purple: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        cyan: {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
          dark: "#0891b2",
        },

        // Legacy support
        muted: "#717171",
        light: "#e0e0e0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left': 'slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right': 'slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(236, 72, 153, 0.5), 0 0 60px rgba(99, 102, 241, 0.3)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-vibrant': 'linear-gradient(135deg, #6366f1, #ec4899, #8b5cf6)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(228, 89%, 62%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(328, 83%, 67%, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(262, 83%, 66%, 0.2) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(99, 102, 241, 0.3)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.3)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.4), 0 0 120px rgba(236, 72, 153, 0.2)',
        'inner-glow': 'inset 0 0 30px rgba(99, 102, 241, 0.2)',
      },
      dropShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
      },
    },
  },
  plugins: [],
}