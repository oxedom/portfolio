/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        fadebluepurple: "linear-gradient(0deg, rgba(164, 54, 253, 0.3), rgba(61, 164, 200, 0.5))"
      }
    


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
