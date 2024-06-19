/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f7f6f1",
        gray1: {
          "100": "#919293",
          "200": "#002308",
          "300": "rgba(18, 31, 62, 0.07)",
          "400": "rgba(18, 31, 62, 0.54)",
          "500": "rgba(23, 35, 39, 0.2)",
          "600": "rgba(0, 0, 0, 0.1)",
          "700": "rgba(255, 255, 255, 0.6)",
          "800": "rgba(255, 255, 255, 0.25)",
          "900": "rgba(255, 255, 255, 0.3)",
        },
        forestgreen: "#048f25",
        "coolgray-60": "#697077",
        "default-white": "#fff",
        black: "#000",
        darkslategray: "#354e3b",
        "coolgray-30": "#c1c7cd",
        "primary-60": "#0f62fe",
        "coolgray-10": "#f2f4f8",
        floralwhite: "#fefbf4",
        darksalmon: "#c5895f",
        "secondary-outline": "rgba(23, 35, 39, 0.3)",
        "primary-dark": "#172327",
        teal: "#028186",
        seagreen: "#387943",
        antiquewhite: "#fcf1dc",
        "gray-100": "#f9f9f9",
        "green-100": "#e0f0e4",
        "green-300": "#377e36",
        "base-black": "#242424",
        "gray-400": "#7a7a7a",
        "gray-500": "#464646",
        chocolate: {
          "100": "#e3803b",
          "200": "#e26d01",
          "300": "rgba(226, 109, 1, 0.48)",
        },
        linen: "#efede6",
        "grey-grey-70": "#545454",
        "text-primary": "#121f3e",
      },
      spacing: {},
      fontFamily: {
        "body-md-12": "Inter",
        "body-xs": "Roboto",
        "open-sans": "'Open Sans'",
        "averia-serif-libre": "'Averia Serif Libre'",
        "body-regular": "'Noto Serif'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        mini: "15px",
        "xs-9": "11.9px",
        "8xs-6": "4.6px",
        "5xs-1": "7.1px",
        "4xs-9": "8.9px",
        "7xs-7": "5.7px",
        "10xs-8": "2.8px",
        "xl-6": "20.6px",
        "4xs-1": "8.1px",
        "6xs-4": "6.4px",
        "10xs-5": "2.5px",
        "9xs-9": "3.9px",
        "8xs-5": "4.5px",
        "10xs-9": "2.9px",
        "11xs-5": "1.5px",
        "2xs-5": "10.5px",
        "12xs": "1px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      "4xs-4": "8.4px",
      "7xl": "26px",
      "2xl": "21px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "3xl": "22px",
      "17xl": "36px",
      "11xl": "30px",
      "39xl": "58px",
      "27xl": "46px",
      "16xl": "35px",
      "lg-2": "18.2px",
      "xs-4": "11.4px",
      "4xs": "9px",
      "5xs-1": "7.1px",
      "7xs-6": "5.6px",
      "xl-6": "20.6px",
      "8xl": "27px",
      "35xl": "54px",
      "24xl": "43px",
      "13xl": "32px",
      "53xl": "72px",
      "9xl": "28px",
      "3xs-9": "9.9px",
      "6xs-2": "6.2px",
      "8xs-9": "4.9px",
      "6xs-1": "6.1px",
      "7xs-8": "5.8px",
      "9xs-6": "3.6px",
      "10xs-8": "2.8px",
      "2xs-5": "10.5px",
      "sm-8": "13.8px",
      "lg-7": "18.7px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq182: {
        raw: "screen and (max-width: 182px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
