/* eslint-disable react/prop-types */
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { Paper } from "@mui/material";
import { Appheading } from "../../../../../theme";
import { setHeight, setWidth } from "../../../../../toolkit/slices/stairHeightWidth";
import { setShape } from "../../../../../toolkit/slices/shapes";
import { ThrreWidnerFirstRight, ceilingArray } from "../../../../../utils/data";
import AppDeleteIcon from "../../../../../components/atom/DeleteIcon";
import Div from "../../../../../components/atom/Div";
import ShapesSelect from "../../../../../components/atom/ShapesSelect";
import {
  THREE_WINDER,
  ThreeWinderRightLeftTurn,
  ThreeWinderRightRightTurn,
} from "../../../../../utils/enum";
import { setShapeTurn } from "../../../../../toolkit/slices/shapeTurns";
import TurningArrowCard from "./../../../../../components/atom/TurningArrowCard";
import { TurnFlex, TurnPaperStyle } from "../../../../../style/global";

const heightLoopArray = [];
let updatedPositions = [];

for (let i = 220; i <= 3000; i += 220) {
  heightLoopArray.push(i);
}

const StairLayout = ({ setAppState, appState }) => {
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
    alert(selectedPosition);
    if (selectedPosition !== "") {
      updatedPositions = heightLoopArray.filter((pos) => pos <= selectedPosition);
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

  // Turning Function Started

  const handleRight = () => {
    dispatch(setShapeTurn(ThreeWinderRightRightTurn));
  };
  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    // Dispatch the setShape action with the selected value
    dispatch(setShape(selectedValue));
  };

  const handleLeft = () => {
    dispatch(setShapeTurn(ThreeWinderRightLeftTurn));
  };
  const mergedArray = [...appState.svgRiser.positions, ...appState.svgRiser.positionBottom];

  const handleTurns = (event) => {
    const selectedValue = parseInt(event.target.value);
    const incrementValue = 220;

    const newArray = Array.from(
      { length: selectedValue },
      (_, index) => (index + 1) * incrementValue
    );

    // Update positionBottom array in the svgRiser object
    setAppState((prevState) => {
      const newPositions = [...prevState.svgRiser.positions];
      const newPositionBottom = newArray;

      // If a new element is added to positionBottom, remove one element from positions
      if (newPositionBottom.length > prevState.svgRiser.positionBottom.length) {
        newPositions.pop(); // Remove the last element from positions
      }

      return {
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positionBottom: newPositionBottom,
          positions: newPositions,
        },
      };
    });
  };
  return (
    <div>
      {/* Floor Height */}

      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select fullWidth sx={{ height: 40, mt: 1 }} onChange={handlePositionChange}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {heightLoopArray.map((option, index) => (
          <MenuItem onClick={() => dispatch(setHeight(option + 79))} key={index} value={option}>
            {option} mm
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
      <Select onChange={handlePositionChange} sx={{ height: 40, mt: 1 }} fullWidth>
        {appState?.svgRiser?.positions.map((items, index) => {
          return (
            <MenuItem key={items} value={items}>
              {index + 1} @ {items}.mm
            </MenuItem>
          );
        })}
        <MenuItem
          value={
            appState.svgRiser.positions &&
            appState.svgRiser.positions[appState.svgRiser.positions?.length - 1] + 220
          }
        >
          {" "}
          {appState.svgRiser.positions?.length + 1} @
          {appState.svgRiser.positions[appState.svgRiser.positions?.length - 1] + 220} mm
        </MenuItem>
        <MenuItem
          value={appState?.svgRiser.positions[appState?.svgRiser?.positions?.length - 1] + 440}
        >
          {appState.svgRiser.positions?.length + 2} @
          {appState.svgRiser.positions[appState.svgRiser.positions?.length - 1] + 400} mm
        </MenuItem>
      </Select>

      <Paper elevation={3} sx={TurnPaperStyle}>
        <Div sx={TurnFlex}>
          <Appheading>Turn 1 (Right)</Appheading>
          <AppDeleteIcon />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Type </Appheading>
          <ShapesSelect defaultShape={THREE_WINDER} handleSelectShape={handleSelectShape} />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Treads before turn:</Appheading>
          <Select onChange={handleTurns}>
            {mergedArray.map((item, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </Div>
      </Paper>
      {/* Turns -> Second Left & Right  */}
      <TurningArrowCard handleLeft={handleLeft} handletRight={handleRight} />
    </div>
  );
};

export default StairLayout;
