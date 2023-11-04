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
    highlightBlue: "#85b8ff",
    document: "#727688"
  }
});

export default theme;
