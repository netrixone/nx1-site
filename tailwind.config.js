const _ = require("lodash");

module.exports = {
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px"
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        arvo: ["Arvo", "serif"]
      },
      fontSize: {
        tiny: "15px",
        base: "1rem",
        lg: "1.375rem",
        xl: "1.5rem",
        "2xl": "2.5rem"
      },
      borderWidth: theme => ({
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "18": "4.5rem",
        "20": "5rem",
        "22": "5.5rem",
        "24": "6rem",
        "28": "7rem",
        "30": "7.5rem",
        "32": "8rem",
        "36": "9rem",
        "40": "10rem",
        "44": "11rem",
        "48": "12rem",
        "52": "13rem",
        "56": "14rem",
        "60": "15rem",
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "screen-110": "110vw",
        "screen-105": "105vw",
        screen: "100vw",
        "screen-90": "90vw",
        "screen-86": "86vw",
        "screen-85": "85vw",
        "screen-83": "83vw",
        "screen-80": "80vw",
        "screen-75": "75vw",
        "screen-70": "70vw",
        "screen-60": "60vw",
        "screen-50": "50vw",
        "screen-45": "45vw",
        "screen-40": "40vw",
        "screen-35": "35vw",
        "screen-31": "31vw",
        "screen-30": "30vw",
        "screen-28": "28vw",
        "screen-27": "27vw",
        "screen-26": "26vw",
        "screen-25": "25vw",
        "screen-24": "24vw",
        "screen-21": "21vw",
        "screen-20": "20vw",
        "screen-18": "18vw"
      }),
      width: {
        max: "9999px"
      },
      inset: theme => ({
        ...theme("spacing"),
        ...theme("width")
      }),
      colors: {
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        blue: {
          100: "#76f6ff",
          200: "#62e2ff",
          300: "#4eceff",
          400: "#3abaff",
          500: "#00a7ff",
          600: "#1292e6",
          700: "#007ed2",
          800: "#006abe",
          900: "#0056aa"
        },
        pink: {
          100: "#ff8cff",
          200: "#ff78fe",
          300: "#ff64ea",
          400: "#ff50d6",
          500: "#fa3dc7",
          600: "#e328ae",
          700: "#cf149a",
          800: "#bb0086",
          900: "#a70072"
        },

        gray: {
          100: "#cccccc",

          300: "#707070",

          500: "#7e7e7e",

          700: "#2e2e2e",
          800: "#141414",
          900: "#212121"
        }
      },
      spacing: {
        "9": "2.25rem",
        "18": "4.5rem",
        "26": "6.5rem",
        "28": "7rem",
        "30": "7.5rem",
        "72": "18rem",
        "96": "24rem",
        "128": "32rem",
        screen: "100vh"
      },
      minHeight: theme => ({
        "0": "0",
        "96": "24rem",
        "128": "32rem",
        "screen-90": "90vh"
      }),
      maxHeight: theme => ({
        ...theme("spacing"),
        ...theme("width"),
        "0": "0",
        "96": "24rem",
        "128": "32rem",
        "screen-1/2": "50vh"
      }),
      maxWidth: theme => ({
        ...theme("spacing"),
        ...theme("width"),
        "4xl": "52.5rem"
      }),
      borderRadius: {
        lg: "21px"
      }
    },
    minWidth: theme => ({
      ...theme("spacing"),
      ...theme("width")
    }),
    transform: {
      "y-x": "translateY(50%) translateX(-50%)",
      "-y-x": "translateY(-50%) translateX(-50%)"
    },
    transformOrigin: {
      // defaults to these values
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left",
      cc: "center center"
    },
    translate: {
      "1/2": "50%",
      full: "100%",
      "-1/2": "-50%",
      "-full": "-100%",
      "100": "100px",
      "-100": "-100px"
    },
    rotate: {
      "0": "0deg",
      "5": "5deg",
      "10": "10deg",
      "12": "12deg",
      "13": "13deg",
      "15": "15deg",
      "20": "20deg",
      "25": "25deg",
      "28": "28deg",
      "30": "30deg",
      "35": "35deg",
      "40": "40deg",
      "45": "45deg",
      "50": "50deg",
      "55": "55deg",
      "65": "65deg",
      "70": "70deg",
      "75": "75deg",
      "80": "80deg",
      "85": "85deg",
      "90": "90deg",
      "100": "100deg",
      "120": "120deg",
      "135": "135deg",
      "140": "140deg",
      "150": "150deg",
      "160": "160deg",
      "165": "165deg",
      "170": "170deg",
      "175": "175deg",
      "180": "180deg",
      "270": "270deg",
      "360": "360deg",
      "375": "375deg"
    },
    scale: {
      // defaults to {}
      "70": "0.7",
      "90": "0.9",
      "100": "1",
      "110": "1.1"
    },
    transitionDuration: {
      // defaults to these values
      default: "250ms",
      "0": "0ms",
      "100": "100ms",
      "250": "250ms",
      "500": "500ms",
      "750": "750ms",
      "1000": "1000ms"
    },
    transitionProperty: {
      // defaults to these values
      none: "none",
      all: "all",
      color: "color",
      bg: "background-color",
      border: "border-color",
      colors: ["color", "background-color", "border-color"],
      opacity: "opacity",
      transform: "transform"
    },
    transitionTimingFunction: {
      // defaults to these values
      default: "ease",
      linear: "linear",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
      "ease-out-quad": "ease-out-quad",
      "ease-in-quad": "ease-in-quad"
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)"
    },
    borderSideColors: theme => ({
      ...theme("colors")
    })
  },
  variants: {
    backgroundColor: ["responsive", "hover", "group-hover"],
    inset: ["responsive"],
    translate: ["responsive"],
    scale: ["responsive"],
    transitionProperty: ["responsive"],
    transitionDuration: ["responsive"],
    transitionTimingFunction: ["responsive"],
    transitionDelay: ["responsive"],
    textColor: ["hover", "group-hover"]
  },
  plugins: [
    require("tailwindcss-aspect-ratio")(),
    require("tailwindcss-transforms")(),
    require("tailwindcss-transitions")(),
    require("tailwindcss-pseudo")(),
    function({ addUtilities, e, theme, config }) {
      const borderUtilities = [];
      _.map(theme("borderSideColors"), (value, key) => {
        if (_.isObject(value)) {
          _.map(value, (childValue, childKey) => {
            borderUtilities.push({
              [`.${e(`border-t-${key}-${childKey}`)}`]: {
                "border-top-color": childValue
              },
              [`.${e(`border-r-${key}-${childKey}`)}`]: {
                "border-right-color": childValue
              },
              [`.${e(`border-b-${key}-${childKey}`)}`]: {
                "border-bottom-color": childValue
              },
              [`.${e(`border-l-${key}-${childKey}`)}`]: {
                "border-left-color": childValue
              }
            });
          });
        } else {
          borderUtilities.push({
            [`.${e(`border-t-${key}`)}`]: {
              "border-top-color": value
            },
            [`.${e(`border-r-${key}`)}`]: {
              "border-right-color": value
            },
            [`.${e(`border-b-${key}`)}`]: {
              "border-bottom-color": value
            },
            [`.${e(`border-l-${key}`)}`]: {
              "border-left-color": value
            }
          });
        }
      });

      addUtilities(borderUtilities, config("variants.borderSideColors"));
    }
  ]
};
