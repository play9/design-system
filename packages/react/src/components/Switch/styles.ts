import { styled } from "styled-components";
import { colors } from "@playnest-ui/tokens";

import { InputWrapper } from "../TextInput";

export const Container = styled(InputWrapper)`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.outline};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: ${colors.white};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

export const Switch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Span} {
    background: ${colors["main-yellow"]};
  }

  &:focus + ${Span} {
    box-shadow: 0 0 1px ${colors["main-yellow"]};
  }

  &:checked + ${Span}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
