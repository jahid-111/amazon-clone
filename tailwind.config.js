/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232f3e",
        black: "#000000",
        white: "#f2f2f2",
        yellow: "#ff9900",
        blue: "#146eb4",
        firstClass: "#141717",
      },
    },
  },
  plugins: [],
};
