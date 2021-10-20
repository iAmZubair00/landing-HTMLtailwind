module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footerBG: "#041a35",
        customGreen: "#5DB05A",
        customYellow: "#F5E74F",
        customBlue: "#315CA4",
        grayBG: "#F1F1F1",
        hrLineColor: "#C1C6CD",
      },
      backgroundImage: {
        webAppBg: "url('./images/streetBoy.png')",
        hambrgr: "url('./images/icon-hamburger.svg')",
        close: "url('./images/icon-close.svg')",
      },
      screens: {
        lg1200: "1200px",
        lg1150: "1150px",
        md861: "861px",
      },
      spacing: {
        "25vw": "25vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
