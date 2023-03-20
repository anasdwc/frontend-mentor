import { BurgerButton, NavbarStyled } from "./styles/Navbar.styled";

type Navbar = {
  brandLogo: string;
  burgerIcon: string;
};

function Navbar(props: Navbar) {
  return (
    <NavbarStyled>
      <img src={props.brandLogo} />
      <div className="nav-list"></div>
      <BurgerButton>
        <img
          src={props.burgerIcon}
          alt=""
        />
      </BurgerButton>
    </NavbarStyled>
  );
}

export default Navbar;
