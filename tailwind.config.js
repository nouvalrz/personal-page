module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        righteous: ['Righteous'],
        manrope: ['Manrope'],
      },
      colors: {
      'primary-dark': '#2F3442', 
      'main-blue-dark': '#00C4FF',
      'main-blue-light': '#01E6F8',
      'gradient-bg-dark': '#E2F1FF',
      'gradient-bg-light': '#FFFFFF'
      }
    },
  },
  plugins: [],
}
