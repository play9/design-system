import { css, styled } from "styled-components";
import { colors, fontWeights } from "@playnest-ds/tokens";

import { ButtonVariant } from "./index";

type ButtonProps = {
  variant: ButtonVariant;
  loading: boolean;
};

const bgVariant = {
  primary: colors["main-yellow"],
  secondary: colors["main-orange"],
  tertiary: colors["main-pink"],
  quaternary: colors["main-purple"],
  quinternary: colors["main-green"],
  transparent: "transparent",
  dashed: "transparent",
};

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  padding: 8px 40px;
  min-width: 120px;
  cursor: pointer;
  color: ${colors.white};
  background: ${(props) => bgVariant[props.variant]};
  font-weight: ${fontWeights.bold};
  transition: filter 0.25s ease-in-out 50ms;

  &:hover {
    filter: opacity(0.8);
  }

  &:disabled {
    filter: grayscale(1);
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === "dashed" &&
    css`
      border: 1px dashed ${colors["outline"]};
    `}

  ${(props) =>
    props.loading &&
    css`
      cursor: wait;
    `}
`;
