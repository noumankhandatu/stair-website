/* eslint-disable react/prop-types */
import Div from "./../atom/Div";
import Navbar from "../atom/Navbar";

const AppContainer = ({ children }) => {
  return (
    <Div>
      <Navbar />
      <Div sx={{ p: 2 }}>{children}</Div>
    </Div>
  );
};

export default AppContainer;
