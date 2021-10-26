module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sitebackground: '#282c34',
        cardhover: '#9CA3AF',
        card: '#4B5563',
        cardbanner: '#10B981',
        searchbar: '#111827',
        buttons: '#6D28D9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
