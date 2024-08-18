import styled from "styled-components";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const StyledIcons = styled.span`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;
`;

export default function Icons() {
  return (
    <StyledIcons>
      <HiMiniMagnifyingGlass />
    </StyledIcons>
  );
}
