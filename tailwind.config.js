module.exports = {
  content: ["./src/**/*.{html,jsx}"],

  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xs: { min: "1023px" },
<<<<<<< HEAD
      // => @media (min-width: 769px) { ... }
=======
      // => @media (min-width: 1023px) { ... }
>>>>>>> 64f9c1ce8936ea783e499a1f1213dcfb290348e8

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
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

      backgroundImage: {
        freeHome: "url('/assets/images/FreelanceMainPic3.png')",
        recruitHome: "url('/assets/images/recruiterMainPic.png')",
        recruitPage: "url('/assets/images/recruiterBackground.png')",
        freePage: "url('/assets/images/freelanceBackground.png')",
        goldenTicket: "url('/assets/images/goldenTicketBg.png')",
        astronaut: "url('/assets/images/astronautAboutUs.png')"
      },
    },
  },
};
