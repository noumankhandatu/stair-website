/* eslint-disable react/prop-types */
import Div from "../Div";
import ResponsiveAppBar from "./../atom/navbar";

const AppContainer = ({ children }) => {
  return (
    <Div>
      <ResponsiveAppBar />
      <Div sx={{ p: 2 }}>{children}</Div>
    </Div>
  );
};

export default AppContainer;
