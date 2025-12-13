/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        hybits: {
          dark: 'var(--hybits-dark)',
          green: 'var(--hybits-green)',
          surface: 'var(--hybits-surface)',
          bg: 'var(--hybits-bg)',
          grey: 'var(--hybits-grey)',
          'green-20': 'var(--hybits-green-20)',
          'green-50': 'var(--hybits-green-50)',
          'surface-70': 'var(--hybits-surface-70)',
        },
      },
    },
  },
  plugins: [],
}

