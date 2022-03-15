import { FC } from "react";

import * as s from './styles'

interface Props {
  type: any;
}

const Line: FC<Props> = (props) => {
  return <div className={s.Line({ type: props.type })} />;
};

export default Line;
