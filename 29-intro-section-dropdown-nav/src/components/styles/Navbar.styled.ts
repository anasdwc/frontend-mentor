import styled from "styled-components";

export const NavbarStyled = styled.nav`
  background-color: white;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }
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
  }
`;

export const Dropdown = styled.li`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  position: relative;

  & a {
    padding-right: 0.5rem;
  }
`;

type PropsDropdownChild = {
  isExpanded: boolean;
};

export const DropdownChild = styled.ul<PropsDropdownChild>`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  width: max-content;
  display: ${(props) => (props.isExpanded ? "block" : "none")};

  & li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & a {
    padding: 0.5rem 0;
    display: inline-block;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const LinkBorder = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
`;
