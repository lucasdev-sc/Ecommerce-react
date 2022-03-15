import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      primary: "#105E46",
      accent: "#12805D",
      success: "#02D693",
      light: "#BFD1E5",
      tertiary: "#60695C",
      dark: "#1A1F16",
      placeholder: "#1A1F1680",
      white: "#fff",
      danger: "#E5252C",
      warning: "#E6D117",
      bgColor: "#EDEDED",
    },
  },
  utils: {
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    center: (value: string) => ({
      justifyContent: value,
      alignItems: value,
    }),
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
  },
});
