const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        125: { raw: "(-webkit-min-device-pixel-ratio: 1.25)" },
      },
      fontFamily: {
        quicksand: ["var(--font-quicksand)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        "dark-bg-color": "#1D1A1A",
        "darker-white": "#EFEFEF",
        "darker-gray": "#ADADAD",
        "linear-pink-1": "#EE8AFB",
        "linear-pink-2": "#F5A8FF",
        "Linear-pink-3": "#FAD3FF",
        "linear-purple-1": "#B875FC",
        "linear-purple-2": "#DFDFDF",
        "linear-blue-1": "#8176FF",
        "linear-blue-2": "#DFDFDF",
        "linear-t4y-1": "#FBDAFF",
        "linear-t4y-2": "#EA66FC1A",
      },
      gridTemplateColumns: {
        mainLayout: "repeat(12, minmax(0, 6.25rem))",
        t4yScroll: "repeat(3, 1fr)",
        competitors: "minmax(0, 9rem) minmax(0, 1fr)",
        graphCaption: "minmax(0, 1rem) minmax(0, 1fr)",
        timeline: "minmax(0, 5rem) minmax(0, 1fr)",
        empathyMap: "minmax(0, 21rem) minmax(0, 1fr)",
        highWireframe: "repeat(3, minmax(0, 15rem))",
        letsPracticeHero: "minmax(0, 35rem) minmax(0, 1fr)",
        lpEmpathyMap: "minmax(0, 4rem) minmax(0, 1fr)",
      },

      spacing: {
        100: "26rem",
        101: "28rem",
        102: "35rem",
        104: "42rem",
        500: "31rem",
      },
      backgroundImage: {
        t4y: "url('../public/images/there4you/t4ycover.svg')",
        letsPractice:
          "url('../public/images/lets-practice/letspractice-cover.svg')",
      },
      borderRadius: {
        "3xl": "3rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
