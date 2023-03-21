import Icon from "./Icon";
import { Container } from "./styles/Container.styled";
import { ListWrapper } from "./styles/List.styled";

type iconList = {
  dataClient: Array<object>;
};

function IconList({ dataClient }: iconList) {
  return (
    <div>
      <ListWrapper>
        {dataClient.map((item) => (
          <li style={{ margin: "0 auto" }}>
            <Icon
              iconSrc={item.logoSrc}
              alt={item.name}
            />{" "}
          </li>
        ))}
      </ListWrapper>
    </div>
  );
}

export default IconList;
