import { styled } from "styled-components";
import { colors, fonts, fontSizes, radii } from "@playnest-ds/tokens";

export const TextArea = styled.textarea`
  font-family: ${fonts.default};
  color: ${colors["text-title"]};
  font-size: ${fontSizes.sm};
  border-radius: ${radii.xs};
  border: 1px solid ${colors.outline};
  min-height: 40px;
  min-width: 200px;
  padding: 8px 16px;

  &::placeholder {
    color: ${colors["text-placeholder"]};
  }
`;
