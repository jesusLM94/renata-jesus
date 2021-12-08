module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#c9b7a4',
      secondary: '#A38464',
      hover: '#B89E83',
      custom: '#f1efe8',
      blue: '#2A9BE0',
      custom: '#e5e5e5',
      olive: '#a5a58d',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
