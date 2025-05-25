/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'mid': '1173px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Use CSS variables from variables.css
        'primary-dark': 'var(--color-primary-dark)',
        'primary': 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'accent': 'var(--color-accent)',
        'background': 'var(--color-background)',
        'text': 'var(--color-text)',
        'text-light': 'var(--color-text-light)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        heading: ['var(--font-vollkorn-sc)', 'serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'fadeOut': 'fadeOut 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
