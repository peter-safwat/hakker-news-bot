module.exports = {
  content: [
    "./pages/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  configureWebpack: {
    resolve: {
      mainFields: ['main', 'browser']
    }
  }
};
