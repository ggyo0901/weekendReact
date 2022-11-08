import { useEffect } from "react";
import styled from "styled-components";
import Post from "./post/post";
import PostForm from "./post/postForm";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALLPOSTS_REQUEST } from "../../reducer/post";

const HomeMain = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.user);
  //info user정보
  const { allPosts, allpostsDone, allpostLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (!allpostsDone) {
      dispatch({
        type: LOAD_ALLPOSTS_REQUEST,
      });
    }
  }, [allpostsDone]);

  return (
    <StyledWrap>
      {info && <PostForm />}
      {/* 로그인시이 되면 info가 생김으로 true값이되어 PostForm이 보이는것 */}
      {allPosts && allPosts.map((post) => <Post key={post.id} post={post} />)}
    </StyledWrap>
  );
};
export default HomeMain;

const StyledWrap = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
