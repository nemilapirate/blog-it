import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-weight: 700;
  padding: 2.4rem 6.4rem;
  font-size: 1.2rem;
  cursor: pointer;

  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: var(--color-bg-header);
      color: var(--color-white);
      padding: 2.4rem 12.8rem;
    `}
`;

export default Button;
