/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
      },
      keyframes: {
        scrollLine: {
          '0%': { transform: 'translateY(0%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        blobFloat: {
          '0%': { transform: 'translate(0%, 0%) scale(1, 1)' },
          '20%': { transform: 'translate(100%, 0%) scale(1.2, 0.8)' },
          '40%': { transform: 'translate(100%, 100%) scale(0.9, 1.2)' },
          '60%': { transform: 'translate(0%, 100%) scale(1.3, 0.7)' },
          '80%': { transform: 'translate(0%, 0%) scale(0.8, 1.2)' },
          '100%': { transform: 'translate(0%, 0%) scale(1, 1)' },
        },
      },
      animation: {
        scrollLine: 'scrollLine 1.5s infinite',
        blobFloat: 'blobFloat 20s ease-in-out infinite',
        'spin-slower': 'spin 6s linear infinite', // ✅ corrigé
      },
    },
  },
  plugins: [
    // Plugin pour ajouter l'effet de scroll fluide globalement
    function ({ addUtilities }) {
      addUtilities({
        '.scroll-smooth': {
          scrollBehavior: 'smooth',
        },
      })
    }
  ],
}
