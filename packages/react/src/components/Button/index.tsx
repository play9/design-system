import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: ButtonProps) {
  return <S.Button {...props} />;
}
