module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        mountains: "url('/src/img/mountains.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
