/* eslint-disable react/prop-types */
import { IconButton, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Div from "../Div";
import { AppLabel } from "../../theme";
import { primary } from "../../theme/colors";

const FeatureCard = ({ showStairsLayout, handleshowStairLayout, title }) => {
  return (
    <Paper elevation={3} sx={{ p: 1, backgroundColor: primary }}>
      <Div sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <AppLabel>{title}</AppLabel>
        {showStairsLayout ? (
          <IconButton onClick={handleshowStairLayout}>
            <ExpandMoreIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        ) : (
          <IconButton onClick={handleshowStairLayout}>
            <KeyboardArrowRightIcon sx={{ cursor: "pointer" }} />
          </IconButton>
        )}
      </Div>
    </Paper>
  );
};

export default FeatureCard;
