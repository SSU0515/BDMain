import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import TopBanner from "./main/TopBanner";
import Top from "./main/Top";
import Middle from "./main/Middle";
import MiddleSecond from "./main/MiddleSecond";
import Bottom from "./main/Bottom";
import Video from "./main/Video";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    ::-webkit-scrollbar {
      display: none;
    }
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: "Noto Sans", sans-serif;
  }
`;

const Container = styled.div`
  width: 100vw;
  background-color: #000;
  overflow-x: hidden;
`;
const PostsContainer = styled.div`
  padding: 20px;
  color: white;
`;

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://braindeck.net/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <Container>
      <GlobalStyle />

      <TopBanner />
      <Top />
      <Middle />
      <MiddleSecond />
      <Video />
      <Bottom />
      <PostsContainer>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </li>
          ))}
        </ul>
      </PostsContainer>
    </Container>
  );
};

export default Main;
