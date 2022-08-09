import {
  PostHeader,
  PostAvatar,
  PostInfo,
  PostEditForm,
  PostBtnBox,
  Postcontent,
  PostImgBox,
  PostMore,
  PostCommentHeader,
} from "./style";
const Post = () => {
  return (
    <>
      <PostHeader>
        <PostAvatar>
          <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
        </PostAvatar>
        <PostInfo>
          <a href="./myblog.html">
            <div class="post_email">korpg95274</div>
            <div class="post_date">
              2022.07.21 <span>하루 전</span>
            </div>
          </a>
        </PostInfo>
      </PostHeader>
      <PostBtnBox>
        <button>수정</button>
        <button class="post_del_btn">삭제</button>
      </PostBtnBox>
      <PostEditForm></PostEditForm>
      <Postcontent>안녕하세요, 반가운 하루입니다.</Postcontent>
      <PostImgBox>
        <div>
          <img src="./img//김성용1.jpeg" />
        </div>
        <div class="post_images">
          +<span>1개의 사진 더보기</span>
        </div>
      </PostImgBox>
      <PostMore>더 보기</PostMore>
      <PostCommentHeader>
        <div class="post_comment_total">댓글 2개</div>
        <div class="post_comment_Btn">댓글 달기</div>
      </PostCommentHeader>
    </>
  );
};
export default Post;
