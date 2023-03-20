import IconList from "./IconList";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Paragraph, Title } from "./styles/Text.styled";

type Body = {
  dataClient: Array<object>;
};

function Body({ dataClient }: Body) {
  return (
    <Container>
      <Title>Make remote work</Title>
      <Paragraph>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </Paragraph>
      <Button>Learn more</Button>
      <IconList dataClient={dataClient} />
    </Container>
  );
}

export default Body;
