import { useState } from "react";
import { BurgerButton } from "./styles/Button.styled";
import { Logo, StyledHeader } from "./styles/StyledHeader.styled";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <StyledHeader>
      <Logo src="./images/logo.svg" />
      <BurgerButton onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? (
          <img
            src="./images/icon-menu.svg"
            alt=""
          />
        ) : (
          <img
            src="./images/icon-close-menu.svg"
            alt=""
          />
        )}
      </BurgerButton>
    </StyledHeader>
  );
}
