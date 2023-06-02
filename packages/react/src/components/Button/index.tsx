import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinternary"
  | "sixternary"
  | "sixternary_outline"
  | "septenary"
  | "octonary"
  | "transparent"
  | "dashed";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return <S.Button variant={variant} {...props} />;
}
