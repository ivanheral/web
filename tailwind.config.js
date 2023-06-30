module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        kenji: 'rgba(181,54,14,1)',
        bluelight: 'rgba(225,191,77,0.8)',
        bluedark: 'rgba(225,191,77,1)',
      },
      maxWidth: {
        '7xl': '1600px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
