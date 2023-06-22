const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        light: '#5B5B5B',
        medium: '#394149',
        dark: '#1D3444',
      },
      blue: {
        light: '#DCEAF5',
        dark: '#063255',
      },
      green: {
        alert: '#00AB27',
      },
      yellow: {
        warning: '#FFD600',
      },
      orange: {
        DEFAULT: '#F58A07',
      },
      red: {
        danger: '#E90016',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      fontSize: {
        0: '0px',
      },
      transitionDelay: {
        0: '0ms',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./config/tailwind/container.js'),
    require('./config/tailwind/typography.js'),
    plugin(function ({ addVariant }) {
      addVariant('group-active', () => {
        return `:merge(.group).active &`;
      });
    }),
  ],
};
