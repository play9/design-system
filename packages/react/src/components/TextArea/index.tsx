import { TextareaHTMLAttributes } from "react";

import * as S from "./styles";
import { InputWrapper, InputWrapperProps } from "../TextInput";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputWrapperProps & {};

export const TextArea = (props: TextAreaProps) => {
  return (
    <InputWrapper {...props}>
      <S.TextArea {...props} />
    </InputWrapper>
  );
};
