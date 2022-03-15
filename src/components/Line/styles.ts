import { css } from "../../styles/stitches.config";

export const Line = css({
  border: "2px solid $placeholder",
  variants: {
    type: {
      horizontal: {
        width: 0,
        height: 400,
      },
      vertical: {
        width: "100%",
        height: 0,
      },
    },
  },
  borderRadius: 8,
});
