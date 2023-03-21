import { FlexContainer } from "./styles/Container.styled";
import { BrandLogo } from "./styles/Image.styled";
import {
  BurgerButton,
  Dropdown,
  Link,
  LinkBorder,
  NavbarList,
  NavbarStyled,
} from "./styles/Navbar.styled";

import iconArrowDown from "../assets/icon-arrow-down.svg";

type Navbar = {
  brandLogo: string;
  burgerIcon: string;
};

function Navbar(props: Navbar) {
  return (
    <NavbarStyled>
      <FlexContainer>
        <BrandLogo src={props.brandLogo} />
        <NavbarList>
          <Dropdown>
            <Link>Features </Link>
            <img
              src={iconArrowDown}
              alt=""
            />{" "}
          </Dropdown>
          <Dropdown>
            <Link>Company</Link>
            <img
              src={iconArrowDown}
              alt=""
            />{" "}
          </Dropdown>
          <li>
            <Link>Career</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </NavbarList>
      </FlexContainer>
      <FlexContainer>
        <NavbarList>
          <ul>
            <Link>Login</Link>
          </ul>
          <ul>
            <LinkBorder>Register</LinkBorder>
          </ul>
        </NavbarList>
        <BurgerButton>
          <img
            src={props.burgerIcon}
            alt=""
          />
        </BurgerButton>
      </FlexContainer>
    </NavbarStyled>
  );
}

export default Navbar;
