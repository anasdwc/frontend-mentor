import { Dropdown, DropdownChild, Link } from "./styles/Navbar.styled";
import iconArrowDown from "../assets/icon-arrow-down.svg";
import { JSXElementConstructor, ReactElement } from "react";

type Dropdown = {
  childs: Object[];
  title: string;
};

function DropdownNav(props: Dropdown): ReactElement {
  return (
    <Dropdown>
      <Link>{props.title}</Link>
      <img
        src={iconArrowDown}
        alt=""
      />{" "}
      <DropdownChild>
        {props.childs.map(
          (child: any): ReactElement => (
            <li key={child.id}>
              {child.icon && <img src={child.icon} />}
              <Link>{child.title}</Link>
            </li>
          )
        )}
      </DropdownChild>
    </Dropdown>
  );
}

export default DropdownNav;
