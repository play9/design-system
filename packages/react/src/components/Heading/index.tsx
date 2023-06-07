import { HTMLAttributes } from "react";

import { styled } from "styled-components";
import { colors, fontWeights, fontSizes } from "@playnest-ds/tokens";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Heading = styled.h1`
  @font-face {
    font-family: "Aeonik";
    src: url("/fonts/Aeonik/Aeonik-Regular.otf");
    font-display: fallback;
  }

  @font-face {
    font-family: "Aeonik-Bold";
    src: url("/fonts/Aeonik/Aeonik-Bold.otf");
    font-display: fallback;
  }

  @font-face {
    font-family: "Aeonik-Semibold";
    src: url("/fonts/Aeonik/Aeonik-Medium.otf");
    font-display: fallback;
  }

  @font-face {
    font-family: "Aeonik-Light";
    src: url("/fonts/Aeonik/Aeonik-Light.otf");
    font-display: fallback;
  }

  @font-face {
    font-family: "Aeonik-Italic";
    src: url("/fonts/Aeonik/Aeonik-RegularItalic.otf");
    font-display: fallback;
  }

  color: ${colors.white};
  font-size: ${fontSizes["4xl"]};
  font-family: "Aeonik", sans-serif;
  font-weight: ${fontWeights.bold};
`;
