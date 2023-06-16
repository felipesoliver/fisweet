const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.container': {
      width: '100%',
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      '@screen md': {
        paddingRight: '4.375rem',
        paddingLeft: '4.375rem',
      },
    },
  }

  addUtilities(newUtilities, {
    variants: ['responsive'],
  })
})
