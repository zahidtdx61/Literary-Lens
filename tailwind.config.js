/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#23BE0A",
        "light-ash": "#131313CC",
        "secondary-sky": "#59C6D2",
      },
    },
  },
  plugins: [require("daisyui")],
};
