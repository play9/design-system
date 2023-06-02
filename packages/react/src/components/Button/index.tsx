import { ButtonHTMLAttributes } from "react";
import { colors } from "@playnest-ui/tokens";

import * as S from "./styles";
import { Loading } from "../Loading";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinternary"
  | "transparent"
  | "dashed";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

export function Button({
  variant = "primary",
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <S.Button variant={variant} loading={loading} {...props}>
      {loading ? <Loading color={colors.white} /> : props.children}
    </S.Button>
  );
}
