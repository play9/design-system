import { HTMLAttributes } from "react";
import { styled } from "styled-components";
import { colors, radii } from "@playnest-ds/tokens";

import { Text } from "../Text";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export const Box = styled(Text).attrs({ as: "div" })`
  background: ${colors["bg-0"]};
  border-radius: ${radii.md};
  padding: 1rem;
  width: fit-content;
  color: ${colors["text-title"]};
`;
