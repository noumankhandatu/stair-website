/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme/index";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "../../../toolkit/slices/stairHeightWidth";
import Div from "../../../components/atom/Div";
import { Paper } from "@mui/material";
import { ceilingArray, stairWidth } from "../../../utils/data/index";
import { useState } from "react";
import { setShape } from "../../../toolkit/slices/shapes";
import AppDeleteIcon from "../../../components/atom/DeleteIcon";
import ShapesSelect from "./../../../components/atom/ShapesSelect";
import { THREE_WINDER, ThreeWinderLeftTurn } from "../../../utils/enum";
import { setShapeTurn } from "../../../toolkit/slices/shapeTurns";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const positionOptions = [];
let updatedPositions = [];

for (let i = 1; i <= 3000; i += 220) {
  positionOptions.push(i);
}

const StairLayout = ({ setAppState, appState }) => {
  // states
  const [turnFirstRight, setturnFirstRight] = useState(false);
  // hooks
  const dispatch = useDispatch();
  // width changer
  const handleWidthChange = (newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        width: newValue,
      },
    }));
  };
  // ceiling height changer
  const handleCelingsHeight = (newHeight) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        ceilingHeight: newHeight,
      },
    }));
  };

  //height and risers changer
  const handlePositionChange = (event) => {
    const selectedPosition = parseInt(event.target.value);
    if (selectedPosition !== "") {
      updatedPositions = positionOptions.filter((pos) => pos <= selectedPosition);
    }
    if (selectedPosition >= 1 && selectedPosition < 1400) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.3540416047548291,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: 255 * updatedPositions.length,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.1840416047548291,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: 240 * updatedPositions.length,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition >= 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.1140416047548291,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: 230 * updatedPositions.length,
        },
      }));
    }
    // update states here
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        positions: updatedPositions,
      },
    }));
  };

  console.log(appState, "appState");

  // Turning Function Started
  const handleTurnFirstRight = () => {
    setturnFirstRight(true);
    dispatch(setShape(THREE_WINDER));
  };
  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    // Dispatch the setShape action with the selected value
    dispatch(setShape(selectedValue));
  };
  const handleTurnFirstLeft = () => {
    dispatch(setShape(THREE_WINDER));
    dispatch(setShapeTurn(ThreeWinderLeftTurn));
  };
  return (
    <div>
      {/* Floor Height */}

      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }} onChange={handlePositionChange}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {positionOptions.map((option, index) => (
          <MenuItem onClick={() => dispatch(setHeight(option + 79))} key={index} value={option}>
            {option + 79} mm
          </MenuItem>
        ))}
      </Select>

      {/* Floor Width */}

      <Appheading sx={{ mt: 1 }}>Floor Width</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        // value={appState.svgRiser.width}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {stairWidth.map((value, index) => (
          <MenuItem
            onClick={() => dispatch(setWidth(index * 50 + 300))}
            key={index}
            value={value.toString()}
          >
            {index === 0 ? null : <> {index * 50 + 300} mm</>}
          </MenuItem>
        ))}
      </Select>

      {/* Individual Going */}

      <Appheading sx={{ mt: 1 }}>Individual Going</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {ceilingArray.map((option, index) => (
          <MenuItem
            onClick={() => handleCelingsHeight(parseFloat(option))}
            key={index}
            value={option}
          >
            {option} mm
          </MenuItem>
        ))}
      </Select>

      {/* Number of Rises */}

      <Appheading sx={{ mt: 2 }}>Number of Risers</Appheading>
      <Select
        disabled={updatedPositions.length === 0}
        fullWidth
        sx={{ height: 40, mt: 1 }}
        onChange={handlePositionChange}
      >
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {updatedPositions.slice(-3).map((option, index) => {
          return (
            <MenuItem key={index} value={option}>
              {index + updatedPositions.length - 1} @ {option + 79}
            </MenuItem>
          );
        })}
        <MenuItem value={updatedPositions && updatedPositions[updatedPositions?.length - 1] + 220}>
          {updatedPositions?.length + 2} @ {updatedPositions[updatedPositions?.length - 1] + 220}
        </MenuItem>
      </Select>

      {/* Turns -> Left & Right  */}

      <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>
      <Div sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Paper onClick={handleTurnFirstLeft} className="turnLeft">
          add a left <br />
          turn
          <br />
          <ArrowBackIcon sx={{ mt: 1 }} />
        </Paper>
        <Paper onClick={handleTurnFirstRight} className="turnRight">
          add a Right <br />
          turn <br />
          <ArrowForwardIcon sx={{ mt: 1 }} />
        </Paper>
      </Div>
      {turnFirstRight && (
        <Paper elevation={3} sx={{ p: 2, mt: 3, background: "#F6F6F6" }}>
          <Div sx={{ display: "flex", justifyContent: "space-between" }}>
            <Appheading>Turn Shape</Appheading>
            <AppDeleteIcon />
          </Div>
          <Div
            sx={{ display: "flex", justifyContent: "space-between", mt: 3, alignItems: "center" }}
          >
            <Appheading>Turn Shape</Appheading>
            <ShapesSelect handleSelectShape={handleSelectShape} />
          </Div>
        </Paper>
      )}
    </div>
  );
};

export default StairLayout;
