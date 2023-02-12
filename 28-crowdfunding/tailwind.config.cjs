/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('./assets/image-hero-mobile.jpg')",
      },
      fontFamily: {
        sans: "Commissioner",
      },
    },
  },
  plugins: [],
};
