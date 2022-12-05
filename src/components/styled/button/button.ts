import styled from "styled-components";

const Button = styled.button`
  display: block;
  position: relative;

  padding: 0;

  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.color.blackBlueHEX}`};
  border-radius: 50%;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  outline: none;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.white};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
