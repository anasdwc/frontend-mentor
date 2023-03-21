import styled from "styled-components";

export const NavbarStyled = styled.nav`
  background-color: white;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const BurgerButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;

    & a {
    }
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export const LinkBorder = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
`;
