/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme/index";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "../../../toolkit/slices/stairHeightWidth";
import { ceilingArray, stairWidth } from "../../../utils/data/index";
import { setShape } from "../../../toolkit/slices/shapes";
import { THREE_WINDER, ThreeWinderLeftTurn } from "../../../utils/enum";
import { setShapeTurn } from "../../../toolkit/slices/shapeTurns";
import TurningArrowCard from "./../../../components/atom/TurningArrowCard";
import FeatureSteps from "../../../components/atom/FeatureSteps";

const heightLoopArray = [];
let updatedPositions = [];

for (let i = 1; i <= 3000; i += 220) {
  heightLoopArray.push(i);
}

// eslint-disable-next-line react/prop-types
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
    console.log(selectedPosition, "selectedPosition");
    if (selectedPosition !== "") {
      updatedPositions = heightLoopArray.filter((pos) => pos <= selectedPosition);
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

  // Turning Function Started
  const handleLeft = () => {
    dispatch(setShape(THREE_WINDER));
    dispatch(setShapeTurn(ThreeWinderLeftTurn));
  };
  const handletRight = () => {
    dispatch(setShape(THREE_WINDER));
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

      {/* Turns -> Left & Right  */}
      <TurningArrowCard handleLeft={handleLeft} handletRight={handletRight} />
      <FeatureSteps />
    </div>
  );
};

export default StairLayout;
