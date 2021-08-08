module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
      borderRadius: ["hover", "group-hover"],
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
