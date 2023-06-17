const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.heading-xl': {
      fontSize: '1.5rem',
      lineHeight: '1.5975rem',
    },
    '.heading-2xl': {
      fontSize: '1.625rem',
      lineHeight: '2.275rem',
    },
    '.heading-3xl': {
      fontSize: '2rem',
      lineHeight: '2.8rem',
    },
    '.heading-4xl': {
      fontSize: '36px',
      fontWeight: '200',
      lineHeight: '3rem',
    },
    '.heading-5xl': {
      fontSize: '2.25rem',
      fontWeight: '600',
      lineHeight: '2.75rem',
    },
    '.heading-6xl': {
      fontSize: '3rem',
      fontWeight: '600',
      lineHeight: '3.5rem',
    },
    '.heading-7xl': {
      fontSize: '4rem',
      fontWeight: '600',
      lineHeight: '4.5rem',
    },
  });
});
