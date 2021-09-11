const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
    "./resources/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "gray-bg": "#f7f8fc",
        accent: "#2977f5",
        "accent-dark": "#1e5abb",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
