/* eslint-disable react/prop-types */
import Navbar from "../atom/Navbar";
import Div from "./../atom/Div";

const AppContainer = ({ children }) => {
  return (
    <Div>
      <Navbar />
      <Div sx={{ p: 2 }}>{children}</Div>
    </Div>
  );
};

export default AppContainer;
