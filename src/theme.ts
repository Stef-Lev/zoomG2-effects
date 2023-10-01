import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    main: `'UbuntuRegular', sans-serif`,
    pedalCode: `'FrozenCrystal', sans-serif`
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: `'UbuntuRegular', sans-serif`,
        background: "#1b2029"
      }
    }
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c"
    },
    icon: {
      100: "#ad3e3e",
      200: "#d74e4e"
    },
    dark: { bg: "#171923", color: "#fafafa" },
    light: { bg: "#fafafa", color: "#171923" },
    gray: { 400: "#919394", 700: "#575757", 800: "#474747" },
    pedalRed: {
      100: "#f4645d",
      200: "#ef3e36",
      900: "#1d0002"
    },
    orange: {
      100: "#e3812b"
    },
    green: {
      100: "#35f57f",
      300: "#10c455"
    },
    teal: {
      200: "#0ad6b4",
      300: "#1bc3a7",
      600: "#097970"
    },
    blue: {
      850: "#1c1e26",
      900: "#171923"
    }
  }
});

export default theme;
