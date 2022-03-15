import { styled, css } from "../../styles/stitches.config";

export const Container = css({
  display: "flex",
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
