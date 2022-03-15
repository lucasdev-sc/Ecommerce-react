import { styled, css } from "../../styles/stitches.config";

export const Button = styled("button", {
  width: "100%",
  maxWidth: "180px",
  height: 40,
  backgroundColor: "$dark",
  color: "$white",
  outline: "none",
  border: "none",
  padding: "8px 10px",
  borderRadius: 15,
  display: "flex",
  center: "center",
  cursor: "pointer",

  svg: {
    color: "$white",
    fontSize: 20,
  },
});

export const Container = css({
  display: "flex",
});

export const Title = css({
  color: "$white",
  fontSize: 16,
  marginLeft: 5,
  cursor: "pointer",
  fontWeight: "bold",
});
