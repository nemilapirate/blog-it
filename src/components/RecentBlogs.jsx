import styled, { css } from "styled-components";
import Titles from "../ui/Titles";
import Blog from "../ui/Blog";
import { blogs } from "../data/blogs";
import Button from "../ui/Button";
import { useRevealContents } from "../hooks/useRevealContents";

const StyledRecentBlog = styled.section`
  padding-top: 9.6rem;
  transition: 0.4s ease-in-out;
`;

const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  h2 {
    color: var(--color-text);
  }

  /* Reveal on scroll */
  transform: translateY(2rem);
  opacity: 0;
  transition: all 0.6s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const Blogs = styled.div`
  margin-top: 6.4rem;
  columns: 3;
  column-gap: 2.4rem;
`;

const RecentBlogButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.8rem 0;
`;

export default function RecentBlogs() {
  const { targetRef, isVisible } = useRevealContents(0.1, true);

  return (
    <StyledRecentBlog>
      <TitlesWrapper visible={isVisible} ref={targetRef}>
        <Titles size="big" as="h2">
          Nouveautés
        </Titles>
        <h6>Nos derniers articles</h6>
      </TitlesWrapper>
      <Blogs>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} />
        ))}
      </Blogs>
      <RecentBlogButtonWrapper>
        {isVisible && <Button type="primary">En voir plus</Button>}
      </RecentBlogButtonWrapper>
    </StyledRecentBlog>
  );
}
