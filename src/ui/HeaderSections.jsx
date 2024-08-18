/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import Titles from "./Titles";
import { useRevealContents } from "../hooks/useRevealContents";

const SyledHeaderSections = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--color-primary-0);
  }

  transform: translateX(-8rem);
  opacity: 0;
  transition: all 0.6s ease-out;

  ${(props) =>
    props.visible &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`;

const TitlesWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export default function HeaderSections({ titles, color, size }) {
  const { targetRef, isVisible } = useRevealContents(0.1, true);

  return (
    <SyledHeaderSections ref={targetRef} visible={isVisible}>
      <TitlesWraper>
        <Titles color={color} size={size}>
          {titles.main}
        </Titles>
        <h6>{titles.sub}</h6>
      </TitlesWraper>
      <a href={titles.link}>Plus sur {titles.main} &rarr;</a>
    </SyledHeaderSections>
  );
}
