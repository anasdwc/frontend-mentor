import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
`;
