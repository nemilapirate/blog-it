/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegHeart,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";
import { subString } from "../utils/utils";
import { useRevealContents } from "../hooks/useRevealContents";

const StyledBlog = styled.article`
  background-color: var(--color-white);
  border-radius: 0.24rem;
  line-height: 1.8;
  letter-spacing: 0.96px;

  margin-bottom: 2.4rem;
  break-inside: avoid;

  transform: translateY(8rem);
  opacity: 0;
  transition: all 0.96s ease-out;

  ${(props) =>
    props.visible &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`;

const BlogImage = styled.div`
  transition: all 0.3s;
  overflow: hidden;
  position: relative;

  ${(props) =>
    props.fullimage === true &&
    css`
      height: 50rem;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.4s;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.5);
  }

  img {
    border-top-right-radius: 0.24rem;
    border-top-left-radius: 0.24rem;
    transition: all 0.4s;
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

const BlogTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--color-text);
  letter-spacing: 1.1px;
  line-height: 1.6;
  text-transform: capitalize;
  transition: all 0.3s;

  /* &:hover {
    color: var(--color-primary-0);
    cursor: pointer;
  } */
`;

const BlogBody = styled.div`
  padding: 4rem 3.2rem;
  position: relative;
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

const BlogText = styled.p`
  margin: 2.4rem 0;
`;

const BlogPublish = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-transform: uppercase;
  font-size: 1.2rem;
`;

const BlogIcons = styled.span`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  color: var(--color-text);
  margin-top: 2.4rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const BlogLikes = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  color: var(--color-text);
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
  position: absolute;
  top: -5.6rem;
  left: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function Blog({ blog, fixedSizeImg = false, height }) {
  const { targetRef, isVisible } = useRevealContents(0.1, true);

  return (
    <StyledBlog ref={targetRef} visible={isVisible}>
      <BlogImage fullimage={fixedSizeImg} height={height}>
        <img src={blog.img} alt={blog.title} />
      </BlogImage>
      <BlogBody>
        <BlogCategories>
          {blog.categories.map((cat) => (
            <li key={cat}>
              <span>#</span>
              <a href="/">{cat}</a>
            </li>
          ))}
        </BlogCategories>
        <BlogTitle>
          <a href="/">{blog.title}</a>
        </BlogTitle>
        <BlogText>{subString(blog.desc)}</BlogText>
        <BlogPublish>
          <p>{blog.publish.author}</p>
          &ndash;
          <p>{blog.publish.date}</p>
        </BlogPublish>
        <BlogIcons>
          <a href="/">
            <FaLinkedinIn />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <FaTiktok />
          </a>
          <a href="/">
            <FaFacebookF />
          </a>
        </BlogIcons>
        <BlogLikes>
          <FaRegHeart />
          <span>{blog.likes}</span>
        </BlogLikes>
      </BlogBody>
    </StyledBlog>
  );
}
