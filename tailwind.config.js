module.exports = {
  theme: {
    extend: {
      inset:{
        '0': 0,
        auto: 'auto',
        '1/2': '50%',
        '-1/2': '-50%',
        'full': '100%',
        '-full': '-100%'
      },
      spacing:{
        '72': '18rem',
        '96': '24rem',
        '128': '32rem',
      },
      minHeight: theme => ({
        '0': '0',
        '96': '24rem',
        '128': '32rem',
      }),
      maxHeight: theme => ({
        '0': '0',
        '96': '24rem',
        '128': '32rem',
        'screen-1/2': '50vh'
      }),
    },
    minWidth: theme => ({
      '0': '0',
      ...theme('spacing'),
      ...theme('width'),
    }),
    transformOrigin: { // defaults to these values
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
    },
    translate: {
      '1/2': '50%',
      'full': '100%',
      '-1/2': '-50%',
      '-full': '-100%',
    },
    scale: { // defaults to {}
      '70': '0.7',
      '90': '0.9',
      '100': '1',
      '110': '1.1'
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
      'ease-out-quad': 'ease-out-quad',
      'ease-in-quad': 'ease-in-quad'
    },
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'group-hover'],
    inset: ['responsive'],
    translate: ['responsive'],
    scale: ['responsive'],
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    textColor: ['hover', 'group-hover']
  },
  plugins: [
    require('tailwindcss-transforms')(),
    require('tailwindcss-transitions')(),
    require('tailwindcss-filters')(),
    require('@tailwindcss/custom-forms'),
  ],
}
