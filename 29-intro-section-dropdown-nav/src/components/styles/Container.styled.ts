import styled from "styled-components";

export const Container = styled.div`
  padding: 2.5rem 1rem;
`;

export const FlexContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const CenterFlex = styled(FlexContainer)`
  justify-content: space-between;
  max-width: 1100px;
  margin: 1rem auto 0;
`;
