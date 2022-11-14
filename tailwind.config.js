module.exports = {
  mode: 'jit',
  content: [
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.60rem',
        'xxxs': '.50rem'
      },
      fontFamily: {
        'icon': ['Montserrat']
      },
      colors: {
        'theme-purple': '#A97DEC',
        'theme-purple-dark': '#400A9E',
        'theme-sky': '#19BEE9',
        'theme-sky-dark': '#049DEC',
        'theme-pink': '#DB62AB',
        'theme-red': '#F4505F',
        'theme-gray-dark': '#333333',
        'theme-gray-light': '#666666',
        'theme-gray-1': '#1A1A1A',
        'theme-black-opacity-50': '#00000096',
        'theme-black-opacity-70': '#000000d4',
      },
      scale: {
        '120': '1.20',
      },
      screens: {
        '3xl': '1800px',
        'se': '380px',
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.2rem',
      },
      height: {
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-95': '95vh',
      }
    },
  },
  plugins: [],
  variants: {
    scale: ['group-hover'],
  }
};
