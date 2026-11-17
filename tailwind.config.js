/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff003c',
        'neon-red-dark': '#b3002a',
        'neon-red-light': '#ff3363',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#121212',
        'dark-elevated': '#1a1a1a',
        'card-bg': 'rgba(20, 20, 20, 0.75)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(255, 0, 60, 0.5), 0 0 30px rgba(255, 0, 60, 0.25)',
        'neon-glow-lg': '0 0 25px rgba(255, 0, 60, 0.7), 0 0 50px rgba(255, 0, 60, 0.35)',
        'neon-button': '0 0 15px rgba(255, 0, 60, 0.4)',
        'neon-card': '0 0 20px rgba(255, 0, 60, 0.12)',
        'neon-card-hover': '0 0 30px rgba(255, 0, 60, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}
