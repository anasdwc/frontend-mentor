import {
  Container,
  ContainerFlex,
  ContainerGrid,
} from "./styles/Container.styled";

export default function Client() {
  return (
    <ContainerGrid margin="2rem 1rem">
      <img
        src="./images/client-databiz.svg"
        alt=""
      />
      <img
        src="./images/client-audiophile.svg"
        alt=""
      />
      <img
        src="./images/client-meet.svg"
        alt=""
      />
      <img
        src="./images/client-maker.svg"
        alt=""
      />
    </ContainerGrid>
  );
}
