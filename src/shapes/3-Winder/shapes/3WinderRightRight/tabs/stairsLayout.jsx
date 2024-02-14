/* eslint-disable react/prop-types */
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Appheading } from "../../../../../theme";
import { setHeight, setWidth } from "../../../../../toolkit/slices/stairHeightWidth";
import { setShape } from "../../../../../toolkit/slices/shapes";
import { ThrreWidnerFirstRight, ceilingArray } from "../../../../../utils/data";
import AppDeleteIcon from "../../../../../components/atom/DeleteIcon";
import Div from "../../../../../components/atom/Div";
import ShapesSelect from "../../../../../components/atom/ShapesSelect";
import { THREE_WINDER } from "../../../../../utils/enum";

const positionOptions = [];
let updatedPositions = [];

for (let i = 1; i <= 5000; i += 220) {
  positionOptions.push(i);
}

const StairLayout = ({ setAppState, appState }) => {
  // states
  const [turnFirstRight, setturnFirstRight] = useState(true);
  const [turnSecondRight, setturnSecondRight] = useState(true);

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
          height: 0.2540416047548291,
          translateY: 489,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.1440416047548291,
          width: -0.140416047548291,
          translateY: 289,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition >= 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.1440416047548291,
          width: -0.140416047548291,
          translateY: 289,
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
  };
  const handleTurnSecondRight = () => {
    setturnSecondRight(true);
  };
  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    // Dispatch the setShape action with the selected value
    dispatch(setShape(selectedValue));
  };
  useEffect(() => {
    handleTurnFirstRight();
  }, []);
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
        {ThrreWidnerFirstRight.map((value, index) => (
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

      {/* Turns -> First Left & Right  */}

      <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>
      <Div sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Paper
          onClick={handleTurnFirstRight}
          className="turnLeft"
          sx={{ p: 3, textAlign: "center" }}
        >
          <p style={textT}>
            add a left <br />
            turn
          </p>
        </Paper>
        <Paper
          onClick={handleTurnFirstRight}
          className="turnRight"
          sx={{ p: 3, textAlign: "center" }}
        >
          <p style={textT}>
            add a Right <br />
            turn
          </p>
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
            <ShapesSelect defaultShape={THREE_WINDER} handleSelectShape={handleSelectShape} />
          </Div>
        </Paper>
      )}
      {/* Turns -> Second Left & Right  */}
      <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>
      <Div sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Paper
          onClick={handleTurnSecondRight}
          className="turnLeft"
          sx={{ p: 3, textAlign: "center" }}
        >
          <p style={textT}>
            add a left <br />
            turn
          </p>
        </Paper>
        <Paper
          onClick={handleTurnSecondRight}
          className="turnRight"
          sx={{ p: 3, textAlign: "center" }}
        >
          <p style={textT}>
            add a Right <br />
            turn
          </p>
        </Paper>
      </Div>
      {turnSecondRight && (
        <Paper elevation={3} sx={{ p: 2, mt: 3, background: "#F6F6F6" }}>
          <Div sx={{ display: "flex", justifyContent: "space-between" }}>
            <Appheading>Turn Shape</Appheading>
            <AppDeleteIcon />
          </Div>
          <Div
            sx={{ display: "flex", justifyContent: "space-between", mt: 3, alignItems: "center" }}
          >
            <Appheading>Turn Shape</Appheading>
            <ShapesSelect defaultShape={THREE_WINDER} handleSelectShape={handleSelectShape} />
          </Div>
        </Paper>
      )}
    </div>
  );
};

export default StairLayout;

export const textT = { fontSize: 15, fontWeight: "bolder", cursor: "pointer" };
