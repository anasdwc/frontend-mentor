import { FlexContainer } from "./styles/Container.styled";
import { BrandLogo } from "./styles/Image.styled";
import {
  BurgerButton,
  Dropdown,
  DropdownChild,
  Link,
  LinkBorder,
  NavbarList,
  NavbarStyled,
} from "./styles/Navbar.styled";

import iconArrowDown from "../assets/icon-arrow-down.svg";
import iconTodoList from "../assets/icon-todo.svg";
import iconCalendar from "../assets/icon-calendar.svg";
import iconReminders from "../assets/icon-reminders.svg";
import iconPlanning from "../assets/icon-planning.svg";

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
            <DropdownChild>
              <li>
                <img
                  src={iconTodoList}
                  alt=""
                />
                <Link>Todo List</Link>
              </li>
              <li>
                <img
                  src={iconCalendar}
                  alt=""
                />
                <Link>Calendar</Link>
              </li>
              <li>
                <img
                  src={iconReminders}
                  alt=""
                />
                <Link>Reminders</Link>
              </li>
              <li>
                <img
                  src={iconPlanning}
                  alt=""
                />
                <Link>Planning</Link>
              </li>
            </DropdownChild>
          </Dropdown>
          <Dropdown>
            <Link>Company</Link>
            <img
              src={iconArrowDown}
              alt=""
            />{" "}
            <DropdownChild>
              <li>
                <Link>History</Link>
              </li>
              <li>
                <Link>Our Team</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </DropdownChild>
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
