import Post from "../../components/_common/post";
import PostBox from "../../components/_common/postBox";
import styled from "styled-components";
import Comment from "../../components/_common/comment";
import MainBanner from "../../components/main_cp/banner";
const Main = () => {
  return (
    <>
      <MainBanner />
      <PostBox />
      <PostDesc>
        <Post />
        <Comment />
      </PostDesc>
    </>
  );
};
export default Main;

const PostDesc = styled.article`
  width: 100%;
  border: 1px solid var(--myblog--main--color);
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1rem;
`;
