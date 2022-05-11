const defaultTailwindColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx,html}"],
  theme: {
    extend: {
      boxShadow: {
        ...defaultTheme.boxShadow,
        sm: "rgb(50 50 93 / 2%) 0px 2px 5px -1px, rgb(0 0 0 / 5%) 0px 1px 3px -1px",
      },
      colors: {
        ...defaultTailwindColors,
        background: "#f7f9fc",
        sideNav: "#233043",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        500: "31.25rem",
      },
    },
  },
  plugins: [],
};
