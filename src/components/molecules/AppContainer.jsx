/* eslint-disable react/prop-types */
import ResponsiveAppBar from "./../atom/navbar";
import Div from './../atom/Div';

const AppContainer = ({ children }) => {
  return (
    <Div>
      <ResponsiveAppBar />
      <Div sx={{ p: 2 }}>{children}</Div>
    </Div>
  );
};

export default AppContainer;
