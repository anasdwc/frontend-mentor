import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    text-align: left;
    max-width: 500px;
    font-size: 4.7rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};

  @media (min-width: 768px) {
    max-width: 400px;
    text-align: left;
    margin: 3rem 0;
  }
`;
