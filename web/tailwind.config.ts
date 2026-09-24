import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#0284c7',
        mint: '#10b981',
        cyan: '#0ea5e9',
        amber: '#f59e0b',
        satnavy: '#070d1e',
        satblue: '#0f172a',
        satcobalt: '#2563eb',
        satindigo: '#4f46e5',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        editorial: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        lift: '0 20px 35px -15px rgba(37, 99, 235, 0.18)',
        glow: '0 0 35px -5px rgba(37, 99, 235, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
