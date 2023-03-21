import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  display: inherit;
  margin: 1.5rem auto;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 1.5rem 0 3rem;
  }
`;
