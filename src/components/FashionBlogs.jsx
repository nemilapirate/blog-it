import styled from "styled-components";
import HeaderSections from "../ui/HeaderSections";
import BlogHorizontal from "../ui/BlogHorizontal";
import { blogs } from "../data/blogs";

const StyledFashionBlogs = styled.section``;

const FashionBlogsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 4.8rem;
`;

export default function FashionBlogs() {
  return (
    <StyledFashionBlogs>
      <HeaderSections
        titles={{
          main: "Nouveaux",
          sub: "Les nouveautés de la tech",
          link: "/",
        }}
        size="big"
        color="dark"
      />
      <FashionBlogsBody>
        {blogs.map((blog) => (
          <BlogHorizontal blog={blog} key={blog.id} />
        ))}
      </FashionBlogsBody>
    </StyledFashionBlogs>
  );
}
