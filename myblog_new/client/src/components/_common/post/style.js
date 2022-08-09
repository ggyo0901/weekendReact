import styled from "styled-components";

export const PostHeader = styled.header`
  display: flex;
  align-content: auto;
  flex-direction: auto;
  flex-wrap: auto;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.6rem;
`;
export const PostAvatar = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  text-align: center;
  margin: 0 1rem;
`;
export const PostInfo = styled.div`
  margin-right: 1rem;
  font-size: 0.825rem;
  color: #888;
  width: 92%;

  & a > div {
    display: inline-block;
  }
`;
export const PostDate = styled.div`
  float: right;
  & > span {
    font-size: 0.675rem;
  }
`;
export const PostEditForm = styled.textarea`
  display: none;
`;
export const PostBtnBox = styled.div`
  float: right;
  & > button {
    margin-right: 1rem;
    font-size: 0.5rem;
    color: #888;
  }
  & > button:nth-child(2) {
    color: #ff0000;
    font-weight: bold;
  }
`;
export const Postcontent = styled.div`
  word-break: break-all;
  padding: 1.5rem;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  font-size: 0.875rem;
`;
export const PostImgBox = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 24rem;
  position: relative;
  display: flex;
  margin-bottom: 2rem;
  & > div > img {
    width: 100%;
    height: 100%;
  }
  & > div:nth-child(2) {
    width: 49%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--myblog--main--color);
    font-size: 3rem;
    font-weight: bold;
    line-height: 70%;
    cursor: pointer;
  }
  & > div:nth-child(2) > span {
    color: #999;
    font-size: 0.825rem;
  }
`;
export const PostMore = styled.p`
  padding-left: 1.5rem;
  color: #999;
  font-size: 0.5rem;
  cursor: pointer;
`;
export const PostCommentHeader = styled.div`
  display: flex;
  align-content: auto;
  flex-direction: auto;
  flex-wrap: auto;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 0.75rem;
  margin: 1.5rem 0.3rem 0.3rem 0.3rem;
  color: #999;
`;
