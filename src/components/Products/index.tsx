import React, { FC } from "react";
import ColumnLeft from "./ColumnLeft";
import ColumnRight from "./ColumnRight";

import * as s from "./styles";

interface Props {}

const Products: FC<Props> = (props) => {
  return <div className={s.ContainerProducts()}>{props.children}</div>;
};

export default Products;
