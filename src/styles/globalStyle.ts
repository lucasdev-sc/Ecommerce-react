import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  html: {
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#1A1F1680",
      borderRadius: 50,
    },
  },
});

export default globalStyles;
