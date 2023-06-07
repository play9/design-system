import { styled } from "styled-components";
import { colors, radii } from "@playnest-ds/tokens";

import { Text } from "../Text";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
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
  border-radius: ${radii.lg};

  &:before {
    position: absolute;
    content: "";
    border-radius: 50%;
    height: 24px;
    width: 24px;
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
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
`;

export const Content = styled(Text)`
  margin-left: 8px;
`;
