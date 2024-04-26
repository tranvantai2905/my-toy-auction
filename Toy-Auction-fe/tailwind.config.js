/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e94560", // Primary color
          50: "#f9f2f5", // Lightest variant
          100: "#f4e7ec", // Lighter variant
          200: "#e9d5df", // Light variant
          300: "#d3aeb4", // Medium variant
          400: "#b37e87", // Darker variant
          500: "#e94560", // Default color
          600: "#c0394b", // Darker variant
          700: "#912c35", // Darkest variant
          800: "#621c26", // Darkest variant
          900: "#331117", // Darkest variant
        },
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
