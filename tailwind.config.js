const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#E1DDDB",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#C9974E",

        "primary-dark": "#171539",
        "secondary-dark": "#BD7877",
        "ternary-dark": "#6A7B73",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: ["@tailwindcss/forms"],
};
