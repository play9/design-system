import { InputHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMsg?: string;
  help?: ReactNode;
}

export function TextInput({ label, errorMsg, help, ...props }: TextInputProps) {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Input {...props} />
      {help && <S.HelpContainer>{help}</S.HelpContainer>}
      {errorMsg && <S.ErrorContainer>{errorMsg}</S.ErrorContainer>}
    </S.Container>
  );
}
