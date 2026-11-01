/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0a',
          'bg-2': '#111111',
          'bg-3': '#181818',
          card: '#131313',
          'card-hover': '#1a1a1a',
          accent: '#c8933a',
          'accent-dim': '#9a6e27',
          'accent-light': '#deb368',
          text: '#e8e4de',
          'text-dim': '#8a857e',
          'text-faint': '#3d3a36',
          border: '#2a2724',
          'border-light': '#3d3a36',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.15em',
        ultra: '0.22em',
      },
      boxShadow: {
        'gold-subtle': '0 0 35px -5px rgba(200, 147, 58, 0.15)',
        'gold-glow': '0 0 50px -10px rgba(200, 147, 58, 0.3)',
      }
    },
  },
  plugins: [],
}
