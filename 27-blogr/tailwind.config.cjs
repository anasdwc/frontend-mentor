/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        dropdown: "dropdown ease-in-out .5s both",
      },
      fontFamily: {
        sans: "Ubuntu",
        overpass: "Overpass",
      },
      colors: {
        "light-red": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "very-dark-blue": "hsl(208, 49%, 24%)",
        "grayish-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": " hsl(207, 13%, 34%)",
        "very-dark-black-blue": "hsl(240, 10%, 16%)",
        "gradient-very-light-red": "hsl(13, 100%, 72%)",
        "gradient-light-red": "hsl(353, 100%, 62%)",
        "very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        "hero-pattern-mobile": "url('./images/bg-pattern-intro-mobile.svg')",
        "hero-pattern-desktop": "url('./images/bg-pattern-intro-desktop.svg')",
      },
    },
  },
  plugins: [],
};
