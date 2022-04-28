module.exports = {
  content: ["./src/**/*.{html,jsx}"],

  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        title: ["Mandatory"],
        primary: ["Inter-Light"],
        second: ["Inter-Bold"],
      },
      colors: {
        "primary-1": "#E85937",
        "secondary-1": "#FF8C70",
        "tertiary-1": "#2C2D3A",
        "main-1": "#0A0B0A",
        "main-2": "#FFF",
        "main-3": "#8C8C8C",
        "free-card-top": "#AE7641",
        "free-card-bot": "#BFBFBF",
        "mission-card-top": "#7F98AE",
        "mission-card-bot": "#BFBFBF",
      },
      boxShadow: {
        "5xl": "20px 20px 50px rgba(0, 0, 0, 0.5)",
      },
    },
  },
};
