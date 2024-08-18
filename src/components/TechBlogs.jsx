import styled from "styled-components";
import { useState } from "react";
import { blogs } from "../data/blogs";
import Blog from "../ui/Blog";
import AsideBlogs from "../ui/AsideBlogs";
import HeaderSections from "../ui/HeaderSections";

const StyledTechBlogs = styled.section``;

const TechBlogsBody = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 4.8rem 0;
`;

const TechBlogsBodyBig = styled.div`
  flex: 2;
`;

const TechBlogsBodyRest = styled.aside`
  flex: 1;
`;

export default function TechBlogs() {
  // Utilisation du hook useState pour gérer l'état de l'article principal sélectionné
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  // Cette fonction met à jour l'article principal lorsqu'un article latéral est cliqué
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <StyledTechBlogs>
      <HeaderSections
        titles={{
          main: "Tech",
          sub: "Toutes les nouveautés dont vous avez besoin",
          link: "/",
        }}
        size="big"
        color="dark"
      />
      <TechBlogsBody>
        <TechBlogsBodyBig>
          {/* L'article principal est affiché ici */}
          <Blog blog={selectedBlog} fixedSizeImg={true} />
        </TechBlogsBodyBig>
        <TechBlogsBodyRest>
          {/* Les articles latéraux sont affichés ici */}
          {blogs.map((blog) => (
            <AsideBlogs 
              blog={blog} 
              key={blog.id} 
              onClick={() => handleBlogClick(blog)} // Gère le clic sur un article
            />
          ))}
        </TechBlogsBodyRest>
      </TechBlogsBody>
    </StyledTechBlogs>
  );
}
