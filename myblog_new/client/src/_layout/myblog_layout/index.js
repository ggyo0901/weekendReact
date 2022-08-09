import LayOutHeader from "./header";
import LayOutFooter from "./footer";
import PostBox from "../../components/_common/postBox";
import Post from "../../components/_common/post";
const MyblogLayout = ({ children }) => {
  return (
    <>
      <LayOutHeader />
      {children}
      <Post />
      <LayOutFooter />
    </>
  );
};
export default MyblogLayout;
