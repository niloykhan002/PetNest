/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(14, 122, 129)",
        secondary: "rgba(14, 122, 129, 0.2)",
        dark1: "rgb(19 19 19)",
        dark2: "rgba(19, 19, 19, 0.7)",
        dark3: "rgba(19, 19, 19, 0.6)",
      },
    },
  },
  plugins: [require("daisyui")],
};
