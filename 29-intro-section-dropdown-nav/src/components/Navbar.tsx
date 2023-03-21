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

import iconTodoList from "../assets/icon-todo.svg";
import iconCalendar from "../assets/icon-calendar.svg";
import iconReminders from "../assets/icon-reminders.svg";
import iconPlanning from "../assets/icon-planning.svg";
import DropdownNav from "./DropdownNav";

type Navbar = {
  brandLogo: string;
  burgerIcon: string;
};

const featuresDropdown = [
  {
    id: 1,
    title: "Todo List",
    icon: iconTodoList,
  },
  {
    id: 2,
    title: "Calendar",
    icon: iconCalendar,
  },
  {
    id: 3,
    title: "Reminders",
    icon: iconReminders,
  },
  {
    id: 4,
    title: "Planning",
    icon: iconPlanning,
  },
];

const companyDropdown = [
  {
    id: 1,
    title: "History",
  },
  {
    id: 2,
    title: "Our Team",
  },
  {
    id: 3,
    title: "Blog",
  },
];

function Navbar(props: Navbar) {
  return (
    <NavbarStyled>
      <FlexContainer>
        <BrandLogo src={props.brandLogo} />
        <NavbarList>
          <DropdownNav
            title="Features"
            childs={featuresDropdown}
          />
          <DropdownNav
            title="Company"
            childs={companyDropdown}
          />
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
