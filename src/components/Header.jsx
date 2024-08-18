import styled from "styled-components";
import Menus from "./Menus";
import Icons from "./Icons";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  color: white;
  padding: 1.8rem 6.4rem;
  background-color: var(--color-bg-header);
  border-bottom: 1px solid var(--color-bg-header);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index : 1;
`;

const Logo = styled.span`

`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo></Logo>
      <Menus />
      <Icons />
    </StyledHeader>
  );
}
