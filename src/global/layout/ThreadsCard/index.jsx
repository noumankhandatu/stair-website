/* eslint-disable react/prop-types */
import { Paper, Select, MenuItem } from "@mui/material";
import Div from "../../../components/atom/Div";
import { TurnFlex, TurnPaperStyle } from "../../../style/global";
import { Appheading } from "../../../theme";
import AppDeleteIcon from "../../../components/atom/DeleteIcon";
import ShapesSelect from "../../../components/atom/ShapesSelect";
import { floorHeightStyle } from "../../styles";

const ThreadsCard = ({ defaultShape, fnHandler, numberOfOptions }) => {
  return (
    <div>
      <Paper elevation={3} sx={TurnPaperStyle}>
        <Div sx={TurnFlex}>
          <Appheading>Turn 2 (Left)</Appheading>
          <AppDeleteIcon />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Turn </Appheading>
          <ShapesSelect defaultShape={defaultShape} handleSelectShape={fnHandler} />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Treads before turn:</Appheading>
          <Select
            sx={floorHeightStyle}
            defaultValue={1}
            onChange={(e) => console.log(e.target.value)}
          >
            {[...Array(numberOfOptions.length)].map((_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </Div>
      </Paper>
    </div>
  );
};

export default ThreadsCard;
