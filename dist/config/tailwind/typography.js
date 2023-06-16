const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.heading-xl': {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    '.heading-xl-medium': {
      fontSize: '1.25rem',
      fontWeight: '500',
      lineHeight: '1.75rem',
    },
    '.heading-2xl': {
      fontSize: '1.625rem',
      lineHeight: '2.275rem',
    },
    '.heading-2xl-medium': {
      fontSize: '1.625rem',
      fontWeight: '500',
      lineHeight: '2.275rem',
    },
    '.heading-3xl': {
      fontSize: '2rem',
      lineHeight: '2.8rem',
    },
    '.heading-3xl-medium': {
      fontSize: '2rem',
      fontWeight: '500',
      lineHeight: '2.8rem',
    },
    '.heading-4xl': {
      fontSize: '2.5rem',
      fontWeight: '200',
      lineHeight: '3rem',
    },
    '.heading-4xl-regular': {
      fontSize: '2.5rem',
      lineHeight: '3rem',
    },
    '.heading-5xl': {
      fontSize: '3.25rem',
      fontWeight: '200',
      lineHeight: '3.575rem',
    },
    '.heading-5xl-light': {
      fontSize: '3.25rem',
      lineHeight: '3.575rem',
    },
    '.heading-6xl': {
      fontSize: '4rem',
      fontWeight: '200',
      lineHeight: '4.4rem',
    },
    '.heading-6xl-light': {
      fontSize: '4rem',
      lineHeight: '4.4rem',
    },
    '.heading-7xl': {
      fontSize: '5rem',
      fontWeight: '200',
      lineHeight: '5.5rem',
    },
    '.heading-7xl-light': {
      fontSize: '5rem',
      lineHeight: '5.5rem',
    },
    '.paragraph-xs': {
      fontSize: '0.75rem',
      lineHeight: '1.05rem',
    },
    '.paragraph-xs-bold': {
      fontSize: '0.75rem',
      fontWeight: '700',
      lineHeight: '1.05rem',
    },
    '.paragraph-sm': {
      fontSize: '0.875rem',
      lineHeight: '1.225rem',
    },
    '.paragraph-sm-bold': {
      fontSize: '0.875rem',
      fontWeight: '700',
      lineHeight: '1.225rem',
    },
    '.paragraph-sm-caps': {
      fontSize: '0.875rem',
      fontWeight: '600',
      lineHeight: '1.225rem',
      TextTransform: 'uppercase',
    },
    '.paragraph-base': {
      fontSize: '1rem',
      lineHeight: '1.4rem',
    },
    '.paragraph-base-bold': {
      fontSize: '1rem',
      fontWeight: '700',
      lineHeight: '1.4rem',
    },
    '.paragraph-lg': {
      fontSize: '1.125rem',
      lineHeight: '1.575rem',
    },
    '.paragraph-lg-bold': {
      fontSize: '1.125rem',
      fontWeight: '700',
      lineHeight: '1.575rem',
    },
  })
})
