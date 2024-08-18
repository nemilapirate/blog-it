import styled from "styled-components";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Container from "../ui/Container";
import RecentBlogs from "../components/RecentBlogs";
import TechBlogs from "../components/TechBlogs";
import FashionBlogs from "../components/FashionBlogs";
import TripBlogs from "../components/TripBlogs";
import Footer from "../components/Footer";

const StyledHome = styled.main`
  overflow: hidden;
`;

const BlogsByCategory = styled.main`
  background-color: var(--color-white);
  padding: 8rem 0 6.4rem;
`;

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Welcome />
      <Container>
        <RecentBlogs />
      </Container>
      <BlogsByCategory>
        <Container>
          <TechBlogs />
          <FashionBlogs />
          <TripBlogs />
        </Container>
      </BlogsByCategory>
      <Footer>
        <p>
          <a href="https://www.amplify-web.fr/">Amplify Web - 2024 ©</a>
        </p>
      </Footer>
    </StyledHome>
  );
}
