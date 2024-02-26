/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme/index";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { setHeight, setWidth } from "../../../toolkit/slices/stairHeightWidth";
import { ceilingArray } from "../../../utils/data/index";
import { setShape } from "../../../toolkit/slices/shapes";
import {
  NONE_STEP_LEFT,
  NONE_STEP_RIGHT,
  THREE_WINDER,
  ThreeWinderLeftTurn,
} from "../../../utils/enum";
import { setShapeTurn } from "../../../toolkit/slices/shapeTurns";
import TurningArrowCard from "./../../../components/atom/TurningArrowCard";
import FeatureSteps from "../../../components/atom/FeatureSteps";
import CeilingHeight from "./../../../components/molecules/CeliningHeight";
import { setLeftFeatureStep, setRightFeatureStep } from "../../../toolkit/slices/featureSteps";
import { setIsDivisible } from "../../../toolkit/slices/singleFeatures";

const heightLoopArray = [];
let updatedPositions = [];

for (let i = 220; i <= 4000; i += 5) {
  heightLoopArray.push(i);
}

const widthLoopArray = [];

for (let i = 600; i <= 1000; i += 5) {
  widthLoopArray.push(i);
}

// eslint-disable-next-line react/prop-types
const StairLayout = ({ setAppState, appState }) => {
  // hooks
  const dispatch = useDispatch();
  // width changer
  const handleWidthChange = (newValue) => {
    let x = newValue;
    x = x / 2941.45870644;
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        width: -x,
      },
    }));

    dispatch(setWidth(newValue));
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
    // it will pop up half riser
    if (selectedPosition % 220 !== 0) {
      dispatch(setIsDivisible(true));
    } else {
      dispatch(setIsDivisible(false));
    }

    const roundedPosition = Math.round(selectedPosition / 220) * 220;

    updatedPositions = [roundedPosition];

    if (selectedPosition !== "") {
      updatedPositions = heightLoopArray.filter((pos) => pos % 220 === 0 && pos <= roundedPosition);
    }

    if (selectedPosition >= 1 && selectedPosition <= 600) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.25,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: selectedPosition * 1.9,
        },
      }));
    }

    if (selectedPosition > 600 && selectedPosition <= 1400) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.25,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: selectedPosition * 1.4,
        },
      }));
    }
    if (selectedPosition > 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.25,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: selectedPosition * 1.1,
        },
      }));
    }
    if (selectedPosition > 2940 && selectedPosition <= 4000) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positions: updatedPositions,
          height: 0.19,
        },
        leftRightPencilBorder: {
          ...prevState.leftRightPencilBorder,
          height: selectedPosition * 1.1,
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
    // close feature steps
    dispatch(setLeftFeatureStep(NONE_STEP_LEFT));
    dispatch(setRightFeatureStep(NONE_STEP_RIGHT));
  };
  const handletRight = () => {
    dispatch(setShape(THREE_WINDER));
    // close feature steps
    dispatch(setLeftFeatureStep(NONE_STEP_LEFT));
    dispatch(setRightFeatureStep(NONE_STEP_RIGHT));
  };
  return (
    <div>
      {/* Floor Height */}
      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select
        defaultValue={heightLoopArray[476]}
        fullWidth
        sx={{ height: 40, mt: 1 }}
        onChange={handlePositionChange}
      >
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
        defaultValue={widthLoopArray[53]}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {widthLoopArray.map((value, index) => (
          <MenuItem key={index} value={value.toString()}>
            {value}
          </MenuItem>
        ))}
      </Select>

      {/* Individual Going */}

      <Appheading sx={{ mt: 1 }}>Individual Going</Appheading>
      <Select defaultValue={ceilingArray[15]} fullWidth sx={{ height: 40, mt: 1 }}>
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
      <CeilingHeight />

      {/* Number of Rises */}
      <Appheading sx={{ mt: 2 }}>Number of Risers</Appheading>
      <Select
        defaultValue={appState?.svgRiser?.positions[appState?.svgRiser?.positions.length - 1]}
        onChange={handlePositionChange}
        sx={{ height: 40, mt: 1 }}
        fullWidth
      >
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
