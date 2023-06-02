import { InputHTMLAttributes } from "react";

import * as S from "./styles";
import type { InputWrapperProps } from "../TextInput";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> &
  InputWrapperProps & {};

export function Switch(props: SwitchProps) {
  return (
    <S.Container>
      <S.Switch {...props} type="checkbox" />
      <S.Span />
    </S.Container>
  );
}
