/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // primary vibrant emerald
          600: '#059669', // core brand
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        dhoondo: {
          orange: '#ff6b35',
          amber: '#f59e0b',
          blue: '#2563eb',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          slate: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        wave: {
          '0%, 100%': { height: '8px' },
          '50%': { height: '32px' },
        }
      },
      animation: {
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'wave-bar': 'wave 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
