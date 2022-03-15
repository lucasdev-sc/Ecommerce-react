import React, { FC } from "react";

import * as s from "./styles";

interface Props{}

const ColumnRight: FC<Props> = (props) => {
  return <div className={s.Right()}>{props.children}</div>;
};

export default ColumnRight;
