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
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
};
