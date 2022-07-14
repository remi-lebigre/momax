module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#F7F6F2',
        lightblack: '#15151580',
        brown: '#78716c'
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
