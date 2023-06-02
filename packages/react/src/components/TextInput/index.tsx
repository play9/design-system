import { InputHTMLAttributes, ReactNode, PropsWithChildren } from "react";

import * as S from "./styles";

export interface InputWrapperProps {
  label?: string;
  errorMsg?: string;
  help?: ReactNode;
}

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  InputWrapperProps & {};

export function InputWrapper({
  label,
  errorMsg,
  help,
  children,
  ...props
}: PropsWithChildren<InputWrapperProps>) {
  return (
    <S.Container {...props}>
      {label && <S.Label>{label}</S.Label>}
      {children}
      {help && <S.HelpContainer>{help}</S.HelpContainer>}
      {errorMsg && <S.ErrorContainer>{errorMsg}</S.ErrorContainer>}
    </S.Container>
  );
}

export function TextInput(props: TextInputProps) {
  return (
    <InputWrapper {...props}>
      <S.Input {...props} />
    </InputWrapper>
  );
}
