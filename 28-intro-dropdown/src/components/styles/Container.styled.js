import styled from "styled-components";

export const Container = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "auto")};

  & > h1 {
    text-align: center;
    margin: 0;
    margin-top: 2rem;
  }
`;

export const ContainerFlex = styled(Container)`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
`;

export const ContainerGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
`;
