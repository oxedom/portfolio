/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        fadebluepurple: "linear-gradient(0deg, rgba(164, 54, 253, 0.3), rgba(61, 164, 200, 0.5))",
        sunset: "linear-gradient(0deg,#F7987F,rgba(169,166, 235,.1)), url(../public/backgrounds/sunset.svg),linear-gradient(180deg,#A9A7EB,#A9A7EB)",
        sunsetMobile: "linear-gradient(0deg,#F7987F,rgba(169,166, 235,.1)), url(../public/backgrounds/sunset_mobile.svg),linear-gradient(180deg,#A9A7EB,#A9A7EB)",

      },
   
    


    },

    animation: {   fade: "fadeOut 1s ease-in-out",},
    keyframes: (opacity) => ({
      fadeOut: {
        "0%": { opacity: 0 },
        // '100%': {color: theme('') },
      },
    }),
    
  },
  plugins: [],
}
