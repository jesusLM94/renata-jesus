module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#c9b7a4',
      secondary: '#A38464',
      gray: '#8e9295',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
