import styled from "styled-components";

const StyledMenus = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  font-weight: 700;

  li {
    a {
      padding-bottom: 0.72rem;
      position: relative;

      &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: var(--color-primary);
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width 0.4s;
      }

      &:hover::after {
        width: 1.6rem;
      }
    }
  }
`;

export default function Menus() {
  return (
    <StyledMenus>
      <li>
        <a href="/" className="active">
          Home
        </a>
      </li>
      <li>
        <a href="/">Pages</a>
      </li>
      <li>
        <a href="/">Categorie</a>
      </li>
      <li>
        <a href="/">Nouveauté</a>
      </li>
      <li>
        <a href="/">A propos</a>
      </li>
      <li>
        <a href="/">Partenaires</a>
      </li>
    </StyledMenus>
  );
}
