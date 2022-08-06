import LayOutHeader from "./header";
import LayOutFooter from "./footer";
const MyblogLayout = ({ children }) => {
  return (
    <>
      <LayOutHeader />
      {children}

      <LayOutFooter />
    </>
  );
};
export default MyblogLayout;
