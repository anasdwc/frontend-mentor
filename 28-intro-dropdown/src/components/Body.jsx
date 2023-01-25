import { Paragraph } from "./styles/Body.styled";
import { Button } from "./styles/Button.styled";
import { ContainerFlex } from "./styles/Container.styled";

export default function Body() {
  return (
    <ContainerFlex>
      <h1>Make remote work</h1>
      <Paragraph>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </Paragraph>
      <Button>Learn more</Button>
    </ContainerFlex>
  );
}
