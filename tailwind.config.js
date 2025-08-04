/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./**/id/*.{html,js}", "./js/*.{html,js}", "./**/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          "0%": { transform: "scale(0, 1)" },
          "100%": { transform: "scale(1, 1)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
          slideInRight: "slideInRight 100ms ease-in-out",
          slideInUp: "slideInUp 500ms ease-in-out",
      },
      maxWidth: {
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "900": "900px",
        "1000": "1000px",
        "1100": "1100px",
        "1200": "1200px",
        "10xl": "1200px",
        "20%": "20%",
        "40%": "40%",
        "60%": "60%",
        "80%": "80%",
        "90%": "90%",
      },
      width: {
        "500": "500px",
        "600": "600px",
        "700": "700px",
        "800": "800px",
        "900": "900px",
        "1000": "1000px",
        "1100": "1100px",
        "1200": "1200px"
      },
      maxHeight: {
        "20vh": "20vh",
        "40vh": "40vh",
        "60vh": "60vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "70vh": "70vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "75vh": "75vh",
      },
      height: {
        "20vh": "20vh",
        "40vh": "40vh",
        "60vh": "60vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      backdropBlur: {
        "xs": "2px",
        "xxs": "1px",
      },
      fontFamily: {
        "glowna": "Great Vibes"
      },
      colors: {
        "gray-800": "rgb(13, 39, 100)"
      },
      aspectRatio: {
        "3/2": "3 / 2"
      }

      

    },
  },
  plugins: [],

}

