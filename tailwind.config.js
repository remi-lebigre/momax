module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({ beige: '#E9E4DE', ...theme }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
