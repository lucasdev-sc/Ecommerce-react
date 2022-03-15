import { styled, css } from "../../styles/stitches.config";

export const Container = css({
  position: "fixed",
  width: 72,
  height: "calc(100vh - 72px)",
  background: "$white",
  py: "9px",
  borderRadius: 8,
  userSelect: "none",
});

export const MenuIcon = css({
  display: "flex",
  center: "center",
  flexDirection: "column",
  listStyle: 'none',
});

export const Logo = css({
  my: 32,
});

export const Icons = css({
  cursor: "pointer",

  variants: {
    type: {
      logout: {
        color: "$white",
        fontSize: 24,
      },
      normal: {
        color: "$dark",
        fontSize: 32,
      },
    },
  },

  defaultVariants: {
    type: "normal",
  },
});

export const divIcon = css({
  size: 40,
  display: "flex",
  center: "center",
  borderRadius: 10,
  cursor: "pointer",
  transition: '0.5s',

  variants: {
    type: {
      logoutDiv: {
        backgroundColor: "$danger",
        borderRadius: 10,
        position: "absolute",
        bottom: 32,
      },
      hiddenDiv: {
        backgroundColor: "transparent",
        my: 25,
      },
    },
  },

  "&.active": {
    backgroundColor: "$dark",
    my: 25,
    svg: {
      color: "$white",
      fontSize: 20,
    },
  },

  '&:hover':{
    backgroundColor: "$dark",
    my: 25,
    svg: {
      color: "$white",
      fontSize: 20,
    },
  },
  

  defaultVariants: {
    type: "hiddenDiv",
  },
});
