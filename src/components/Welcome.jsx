import styled, { css } from "styled-components";
import BannerImg from "../assets/home-img.jpg";
import Titles from "../ui/Titles";
import { useRevealContents } from "../hooks/useRevealContents";

const StyledWelcome = styled.div`
  width: 100%;
  height: 64rem;
  position: relative;
  margin-top: 8rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: scale(0.64);
  transition: all 0.6s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  color: var(--color-white-0);
`;

export default function Welcome() {
  const { targetRef, isVisible } = useRevealContents(0.5, true);

  return (
    <StyledWelcome>
      <img src={BannerImg} alt="banner" />
      <Overlay ref={targetRef} visible={isVisible}>
        <Text>
        <Titles size="bigest">Découvrez le Meilleur de l'IT aujourd'hui</Titles>
        <p>Plongez dans les dernières tendances et innovations technologiques</p>
        </Text>
      </Overlay>
    </StyledWelcome>
  );
}
