import { styled } from "styled-components";
import {
  fonts,
  colors,
  fontSizes,
  fontWeights,
  radii,
} from "@playnest-ui/tokens";

import { Text } from "../Text";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const Label = styled(Text).attrs({ as: "label" })`
  margin-bottom: 5px;
  font-size: ${fontSizes.md};
  font-weight: ${fontWeights.bold};
`;

export const Input = styled.input`
  border: 1px solid ${colors.outline};
  padding: 8px 16px;
  background: ${colors["bg-0"]};
  color: ${colors["text-title"]};
  font-size: ${fontSizes.sm};
  border-radius: ${radii.xs};
  font-family: ${fonts.default};

  &::placeholder {
    color: ${colors["text-placeholder"]};
  }
`;

export const HelpContainer = styled.div``;

export const ErrorContainer = styled(Text)`
  margin-top: 5px;
  font-size: ${fontSizes.sm};
  color: ${colors.error};
`;
