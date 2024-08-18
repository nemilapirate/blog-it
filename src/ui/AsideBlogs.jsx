/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useRevealContents } from "../hooks/useRevealContents";

const StyledAsideBlogs = styled.div`
  display: flex;
  gap: 1.6rem;
  cursor: pointer; /* Ajout d'un pointeur pour indiquer que c'est cliquable */

  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  transform: translateX(5rem);
  opacity: 0;
  transition: all 0.6s;

  ${(props) =>
    props.visible &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`;

const ImageWrapper = styled.div`
  width: 12rem;
  height: 10rem;
  flex-shrink: 0;
`;

const BlogTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: 1.1px;
  line-height: 1.6;
  text-transform: capitalize;
  transition: all 0.3s;
`;

const BlogCategories = styled.ul`
  color: var(--color-primary-0);
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    color: var(--color-text);
  }
`;

const BlogPublish = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin-top: 0.8rem;
`;

const Details = styled.div``;

export default function AsideBlogs({ blog, onClick }) {
  const { targetRef, isVisible } = useRevealContents(0.5, true);

  // Fonction pour empêcher la navigation tout en permettant l'action de clic
  const handleLinkClick = (event) => {
    event.preventDefault(); // Empêche la redirection de la page
    onClick(); // Appelle la fonction de clic pour changer l'article principal
  };

  return (
    <StyledAsideBlogs ref={targetRef} visible={isVisible} onClick={onClick}>
      <ImageWrapper>
        <img src={blog.img} alt="" />
      </ImageWrapper>
      <Details>
        <BlogCategories>
          {blog.categories.map((cat) => (
            <li key={cat}>
              <span>#</span>
              <a href="/" onClick={handleLinkClick}>{cat}</a>
            </li>
          ))}
        </BlogCategories>
        <BlogTitle>
          <a href="/" onClick={handleLinkClick}>{blog.title}</a>
        </BlogTitle>
        <BlogPublish>
          <p>{blog.publish.author}</p>
          &ndash;
          <p>{blog.publish.date}</p>
        </BlogPublish>
      </Details>
    </StyledAsideBlogs>
  );
}

