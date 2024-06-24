/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#1e1f29",
        "dark-blue": "#191a24",
      },
    },
  },
  plugins: [],
};
