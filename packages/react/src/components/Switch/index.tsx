import { InputHTMLAttributes } from "react";

import * as S from "./styles";
import { InputWrapper, InputWrapperProps } from "../TextInput";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> &
  InputWrapperProps & {};

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <InputWrapper {...props}>
      <S.Wrapper>
        <S.Container>
          <S.Switch {...props} type="checkbox" />
          <S.Span />
        </S.Container>
        {typeof children === "string" ? (
          <S.Content>{children}</S.Content>
        ) : (
          <>{children}</>
        )}
      </S.Wrapper>
    </InputWrapper>
  );
}
