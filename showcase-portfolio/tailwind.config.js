/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: "#7B5BF9",
          600: "#5C2CFA",
          700: "#4A12D8",
        },
        orange: {
          400: "#FF8A3D",
          600: "#FD6007",
          700: "#D94A00",
        },
        yellow: {
          400: "#FDFD96",
          600: "#F9F930",
          700: "#E7E700",
        },
        purple: {
          400: "#E366FF",
          600: "#C103F1",
          700: "#A202D0",
        },
      },
    },
  },
  plugins: [],
};
