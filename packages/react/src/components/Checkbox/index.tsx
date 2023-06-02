import { HTMLAttributes } from "react";

import { InputWrapper, InputWrapperProps } from "../TextInput";

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {}

export function Checkbox(props: CheckboxProps) {
  return <div {...props} />;
}
