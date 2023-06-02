import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

export const Text = styled.p`
  margin: 0;
`;
