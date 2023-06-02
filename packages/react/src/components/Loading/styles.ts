import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.svg`
  display: inline-block;
  animation: ${rotate} 1.2s linear infinite;
`;
