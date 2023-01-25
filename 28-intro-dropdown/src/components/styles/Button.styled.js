import styled from "styled-components";

export const BurgerButton = styled.button`
  background-color: transparent;
  border: none;

  & > img {
    height: 24px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 0.8rem;
  margin: auto;
  cursor: pointer;
  margin-top: 1rem;
`;
