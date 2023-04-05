/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        fadebluepurple:
          "linear-gradient(0deg, rgba(164, 54, 253, 0.3), rgba(61, 164, 200, 0.5))",
        purpleSun: "linear-gradient(0deg, #A9A7EB, rgba(169,166,235,.5))",
        orangeSun: "linear-gradient(90deg, #fc8803, #f79263)",
        orangerSun: "linear-gradient(90deg, #e6800b, #fa7a3e)",
        sunset:
          "linear-gradient(0deg,#F7987F,rgba(169,166, 235,.1)), url(../public/backgrounds/sunset.svg),linear-gradient(180deg,#A9A7EB,#A9A7EB)",
        sunsetMobile:
          "linear-gradient(0deg,#F7987F,rgba(169,166, 235,.1)), url(../public/backgrounds/sunset_mobile.svg),linear-gradient(180deg,#A9A7EB,#A9A7EB)",
      },
      textColor: {
        sunsetText:
          "linear-gradient(0deg,#F7987F,rgba(169,166, 235,.1)),linear-gradient(180deg,#A9A7EB,#A9A7EB)",
      },

      boxShadow: {
        neo: "0px 0px 0 black, 5px 4px 0 black",
      },
    },

    animation: {
      fade: "fadeOut 1s ease-in-out",
      mover: "floater 2s infinite alternate",
    },
    keyframes: () => ({
      fadeOut: { "0%": { opacity: 0 } },
      floater: {
        "0%": { transform: "translateY(0px)" },
        "100%": { transform: "translatey(20px)" },
      },
    }),
  },
  plugins: [],
};
