module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // ### Primary

        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",

        // ### Secondary

        red: "hsl(0, 87%, 67%)",

        // ### Neutral

        gray: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      spacing: {
        180: '32rem'
      }
    },
  },
  plugins: [],
};
