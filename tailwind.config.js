module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({ beige: '#F7F6F2', ...theme }),
    textColor: (theme) => ({ lightblack: '#15151580', ...theme }),
    extend: {
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
