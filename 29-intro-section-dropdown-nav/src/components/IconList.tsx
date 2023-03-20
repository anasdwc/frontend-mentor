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
          <li>
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
