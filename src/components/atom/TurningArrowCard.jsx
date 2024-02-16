/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import { TurnFlex } from "../../style/global";
import { Appheading } from "../../theme";
import Div from "./Div";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TurningArrowCard = ({ handleLeft, handletRight }) => {
  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>
      <Div sx={TurnFlex}>
        <Paper onClick={handleLeft} className="turnLeft">
          add a left <br />
          turn
          <br />
          <ArrowBackIcon sx={{ mt: 1 }} />
        </Paper>
        <Paper onClick={handletRight} className="turnRight">
          add a Right <br />
          turn <br />
          <ArrowForwardIcon sx={{ mt: 1 }} />
        </Paper>
      </Div>
    </div>
  );
};

export default TurningArrowCard;
