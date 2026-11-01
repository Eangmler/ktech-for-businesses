/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#000000',
          'bg-secondary': '#0b0b0e',
          'card': 'rgba(24, 24, 28, 0.72)',
          'card-hover': 'rgba(34, 34, 40, 0.88)',
          'border': 'rgba(255, 255, 255, 0.1)',
          'border-light': 'rgba(255, 255, 255, 0.2)',
          'accent': '#2997ff',         /* Apple signature electric blue */
          'accent-hover': '#0071e3',
          'amber': '#f5a623',          /* Apple Home warm amber */
          'gold': '#e3a857',
          'emerald': '#30d158',        /* Apple Home active green */
          'text': '#f5f5f7',
          'text-dim': '#86868b',
          'text-faint': '#424245',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          '"Space Mono"',
          'Menlo',
          'monospace',
        ],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wide: '0.08em',
        widest: '0.15em',
      },
      boxShadow: {
        'apple-card': '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
        'apple-glow': '0 0 60px -10px rgba(41, 151, 255, 0.3)',
        'apple-gold-glow': '0 0 60px -10px rgba(227, 168, 87, 0.3)',
        'apple-inner': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.18)',
      },
      borderRadius: {
        'apple': '28px',
        'apple-lg': '36px',
      }
    },
  },
  plugins: [],
}
