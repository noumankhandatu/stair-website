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
    if (selectedPosition !== "") {
      updatedPositions = heightLoopArray.filter((pos) => pos <= selectedPosition);
    }
    if (selectedPosition >= 1 && selectedPosition < 1400) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          rightRisers: updatedPositions,

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
          rightRisers: updatedPositions,

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
          rightRisers: updatedPositions,

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
        rightRisers: updatedPositions,
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

  const handleTurns = (event) => {
    const selectedValue = parseInt(event.target.value);
    const rightArray = [];
    const bottomArray = [];

    for (let i = 220; i <= (appState.svgRiser.positions.length - selectedValue) * 220; i += 220) {
      rightArray.push(i);
    }

    for (let i = 220; i <= selectedValue * 220; i += 220) {
      bottomArray.push(i);
    }

    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        bottomRisers: bottomArray,
        rightRisers: rightArray,
      },
    }));
  };

  console.log(appState, "appState");
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
      <Select
        disabled={appState.svgRiser.positions.length <= 0}
        onChange={handlePositionChange}
        sx={{ height: 40, mt: 1 }}
        fullWidth
      >
        <MenuItem disabled>1 @1.mm</MenuItem>
        <MenuItem disabled>2 @2.mm</MenuItem>
        <MenuItem disabled>3 @3.mm</MenuItem>

        {appState.svgRiser.positions.map((items, index) => {
          return (
            <MenuItem key={items} value={items}>
              {index + 4} @ {items}.mm
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
          {appState.svgRiser.positions?.length + 4} @
          {appState.svgRiser.positions[appState.svgRiser.positions?.length - 1] + 220} mm
        </MenuItem>
        <MenuItem
          value={appState?.svgRiser.positions[appState?.svgRiser?.positions?.length - 1] + 440}
        >
          {appState.svgRiser.positions?.length + 5} @
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
          <Select
            disabled={appState.svgRiser.positions.length <= 0}
            sx={{ height: 30, borderRadius: 10, width: 70 }}
            onChange={handleTurns}
          >
            {[...Array(appState.svgRiser.positions.length).keys()].map((item, index) => (
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
