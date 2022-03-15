import React, { FC } from "react";

import * as s from "./styles";

interface Props {
  title?: string;
  isTitle: boolean;
  className?: any;
  onClick?: any;
}

const ButtonComponent: FC<Props> = (props) => {
  return (
    <div className={s.Container()}>
      <s.Button className={props.className} onClick={props.onClick}>
        {props.children}
        {props.isTitle && <label className={s.Title()}>{props.title}</label>}
      </s.Button>
    </div>
  );
};

export default ButtonComponent;
