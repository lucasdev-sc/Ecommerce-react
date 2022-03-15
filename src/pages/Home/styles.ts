import { styled, css } from "../../styles/stitches.config";

export const Container = css({
  size: "100%",
  backgroundColor: "$bgColor",
});

export const SearchDiv = css({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  center: "center",
  marginBottom: 18,
});

export const ContainerProducts = css({
  display: "grid",
  gridTemplateColumns: "5fr 1fr",
  my: 24,
});

export const Products = css({
  my: 24,
  cursor: "pointer",
  mx: 24,

  a: {
    textDecoration: "none",
  },
});

export const bgImage = css({
  width: "100%",
  height: 235,
  borderRadius: 22,
  backgroundColor: "$white",
  display: "flex",
  justifyContent: "center",
  transition: "transform 1s",

  "&:hover": {
    transform: "scale(1.05)",
  },
  variants: {
    size: {
      small: {
        width: 40,
        height: 60,
        img: {
          width: "100%",
          height: "100%",
        },
        mx: 10,
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

export const TextDiv = css({
  my: 10,
});

export const TitleProduct = css({
  color: "$dark",
  fontSize: 20,
  fontWeight: "bold",
});

export const DescriptionProduct = css({
  color: "$tertiary",
  fontSize: 16,
  letterSpacing: "-0.02em",
  fontWeight: 500,
  my: 8,
});

export const PriceDiv = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Price = css({
  fontSize: 20,
  color: "$dark",
  fontWeight: "bold",
});

export const IconPriceDiv = css({
  transition: "transform 1s",

  "&:hover": {
    transform: "scale(1.3)",
  },
});

export const Title = css({
  color: "$tertiary",
  padding: 8,
  letterSpacing: "-0.02em",
  fontWeight: 700,
});

export const InputDiv = css({
  width: 500,
  height: 56,
  borderRadius: 13,
  backgroundColor: "$white",
  border: "none",
  outline: "none",
  fontSize: 16,
  boxShadow: "0px 4px 16px rgba(26, 31, 22, 0.15)",

  variants: {
    type: {
      true: {
        "&::placeholder": {
          color: "$placeholder",
          fontWeight: 100,
        },
        color: "$placeholder",
        fontWeight: 600,

        px: 24,
      },
    },
  },

  defaultVariants: {
    type: false,
  },
});
