import React, { FC } from "react";

import * as s from "./styles";

interface Props {
  type?: boolean;
}

const ColumnLeft: FC<Props> = (props) => {
  return <div className={s.Left({ type: props.type })}>{props.children}</div>;
};

export default ColumnLeft;
