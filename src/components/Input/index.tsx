import React, { FC, useEffect, useState } from "react";

import * as s from "./styles";

export interface IProps {
  type: string;
  placeholder: string;
}

const Input: FC<IProps> = (props) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={s.Container()}>
      <div className={s.InputDiv()}>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={s.InputDiv({ type: true })}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
