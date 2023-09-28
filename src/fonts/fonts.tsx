import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'UbuntuRegular';
        font-style: normal;
        src: url("./Ubuntu-Regular.ttf") format("truetype")
      }
      @font-face {
        font-family: 'FrozenCrystal';
        font-style: normal;
        src: url("./frozencrystal.ttf") format("truetype")
      }
      `}
  />
);

export default Fonts;
