import { css } from "../../../styles/stitches.config";

export const Left = css({
  px: 15,
  display: "flex",
  flexWrap: "wrap",
  variants: {
    type: {
      true: {
        justifyContent: "space-between",
      },
      false: {
        justifyContent: "flex-start",
      },
    },
  },
  width: "100%",
  defaultVariants: {
    type: true,
  },
});
