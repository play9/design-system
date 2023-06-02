import { styled } from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 40px;
  min-width: 120px;
  cursor: pointer;
  color: #fff;
  background: yellow;
  font-weight: 900;
  transition: filter 0.25s ease-in-out 50ms;

  &:hover {
    filter: opacity(0.8);
  }

  &[disabled]:hover {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`;
