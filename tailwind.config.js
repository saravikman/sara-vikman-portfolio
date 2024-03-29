
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ['Inconsolata', 'monospace'],
      sans: ['Inter', 'sans-serif'],
      heading: ['Manrope', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}