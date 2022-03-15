import { styled, css } from "../../styles/stitches.config";

export const Container = css({
  width: "100%",
  height: "100%",

  backgroundColor: "$bgColor",
  display: "flex",
});

export const Back = css({
  display: "flex",
  marginLeft: 15,
  cursor: "pointer",
  alignItems: "center",
  span: {
    marginLeft: 10,
    color: "$dark",
    fontSize: 20,
  },
  svg: {
    fontSize: 20,
  },
  a: {
    textDecoration: "none",
    listStyle: "none",
  },
});

export const Preview = css({
  display: "flex",
  width: "100%",
  justifyContent: "flex-start",
  marginTop: 32,
});

export const ImagePreview = css({
  display: "flex",
  flexDirection: "column",
  marginRight: 15,
});

export const Images = css({
  display: "flex",
  justifyContent: "start",
});

export const bgImage = css({
  width: "100%",

  borderRadius: 22,
  backgroundColor: "$white",
  display: "flex",
  justifyContent: "center",

  variants: {
    size: {
      small: {
        width: 40,
        height: 60,
        img: {
          width: "100%",
          height: "100%",
        },
        borderRadius: 13,
        my: 5,
      },
      normal: {
        height: 320,
      },
    },
  },

  defaultVariants: {
    size: "normal",
  },
});

export const ColumnDiv = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const TextDiv = css({
  mx: 40,
});

export const Text = css({
  variants: {
    text: {
      description: {
        color: "$placeholder",
        fontSize: 32,
        my: 15,
      },
      price: {
        color: "$dark",
        fontSize: 32,
        my: 15,
      },
      title: {
        fontWeight: 700,
        color: "$dark",
        fontSize: 62,
      },
      text: {
        color: "$dark",
        fontSize: 20,
      },
    },
  },
});

export const BtnAdd = css({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  mx: 40,
  transition: "transform 1s",

  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const DescriptionDiv = css({
  width: "100%",
  my: 50,

  p: {
    color: "$placeholder",
    fontSize: 20,
  },
});
