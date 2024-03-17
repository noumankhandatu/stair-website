/* eslint-disable react/prop-types */
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { Appheading } from "../../../../../theme";
import { setHeight } from "../../../../../toolkit/slices/stairHeightWidth";
import { setShape } from "../../../../../toolkit/slices/shapes";
import AppDeleteIcon from "../../../../../components/atom/DeleteIcon";
import Div from "../../../../../components/atom/Div";
import ShapesSelect from "../../../../../components/atom/ShapesSelect";
import {
  HALF_LANDING,
  HalfLandingRightRightTurn,
  QUARTER_LANDING,
  THREE_WINDER,
} from "../../../../../utils/enum";
import { TurnFlex, TurnPaperStyle } from "../../../../../style/global";
import {
  selectDefaultValueTwo,
  selectedDefaultValue,
  setIsDivisible,
  setSelectDefaultValue,
  setSelectDefaultValue2,
} from "../../../../../toolkit/slices/singleFeatures";
import CeilingHeight from "../../../../../components/molecules/CeliningHeight";
import { setHalfLandingTurn } from "../../../../../toolkit/slices/shapeTurns";

const heightLoopArray = [];
let updatedPositions = [];

for (let i = 200; i <= 4000; i += 5) {
  heightLoopArray.push(i);
}

const widthLoopArray = [];

for (let i = 600; i <= 1000; i += 5) {
  widthLoopArray.push(i);
}
const indiviualGoingArray = [];
for (let i = 222; i <= 280; i++) {
  indiviualGoingArray.push(i);
}
const StairLayout = ({ setAppState, appState }) => {
  const firstSelectDefaultValueRedux = useSelector(selectedDefaultValue);
  const secondSelectDefaultValueRedux = useSelector(selectDefaultValueTwo);

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
    if (selectedPosition % 220 !== 0) {
      dispatch(setIsDivisible(true));
    } else {
      dispatch(setIsDivisible(false));
    }
    const roundedPosition = Math.round(selectedPosition / 220) * 220;

    if (selectedPosition !== "") {
      updatedPositions = heightLoopArray.filter((pos) => pos % 220 === 0 && pos <= roundedPosition);
    }
    if (selectedPosition >= 1 && selectedPosition <= 4000) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          rightBottomRisers: updatedPositions,
          // leftBottomRisers: updatedPositions,

          // height: 0.15,
          // width: -0.15,
          // translateY: 289,
        },
        // handRails: {
        //   ...prevState.handRails,
        //   borderLeft: updatedPositions.length * 250,
        // },
      }));
    }
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        rightBottomRisers: updatedPositions,
        // leftBottomRisers: updatedPositions,
      },
    }));
  };

  console.log(appState, "appState");

  // Turning Function Started

  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    dispatch(setShape(selectedValue));
    if (selectedValue === QUARTER_LANDING || selectedValue === THREE_WINDER) {
      dispatch(setSelectDefaultValue(selectedValue));
    }
    if (selectedValue === HALF_LANDING) {
      dispatch(setHalfLandingTurn(HalfLandingRightRightTurn));
      dispatch(setSelectDefaultValue(HALF_LANDING));
    }
  };
  // select shape from selectbox
  const handleSelectShapeTwo = (event) => {
    const selectedValue = event.target.value;
    dispatch(setShape(selectedValue));
    if (selectedValue === QUARTER_LANDING || selectedValue === THREE_WINDER) {
      dispatch(setSelectDefaultValue2(selectedValue));
    }
    if (selectedValue === HALF_LANDING) {
      dispatch(setSelectDefaultValue2(selectedValue));
    }
  };
  // ceiling height changer
  const handleCeilingsHeight = (newHeight) => {
    const bottomCeling = Array.from(
      { length: appState.svgRiser.leftBottomRisers.length },
      (_, index) => newHeight + index * newHeight
    );
    const centerCeiling = Array.from(
      { length: appState.svgRiser.centerRightRisers.length },
      (_, index) => newHeight + index * newHeight
    );
    const rightCeling = Array.from(
      { length: appState.svgRiser.rightBottomRisers.length },
      (_, index) => newHeight + index * newHeight
    );
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        rightBottomRisers: rightCeling,
        centerRightRisers: centerCeiling,
        leftBottomRisers: bottomCeling,
      },
      handRails: {
        ...prevState.handRails,
        height: newHeight * 24.5,
      },
    }));
  };
  return (
    <div>
      {/* Floor Height */}

      <Appheading sx={{ mt: 2 }}>Floor Height</Appheading>
      <Select
        defaultValue={heightLoopArray[216]}
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

      {/* Number of Rises */}
      <Appheading sx={{ mt: 2 }}>Number of Risers</Appheading>
      <Select
        defaultValue={
          appState?.svgRiser?.rightBottomRisers[appState?.svgRiser?.rightBottomRisers.length - 1]
        }
        disabled={appState.svgRiser.rightBottomRisers.length <= 0}
        onChange={handlePositionChange}
        sx={{ height: 40, mt: 1 }}
        fullWidth
      >
        {appState.svgRiser.rightBottomRisers.map((items, index) => {
          return (
            <MenuItem key={items} value={items}>
              {index + 4} @ {items}.mm
            </MenuItem>
          );
        })}
        <MenuItem
          value={
            appState.svgRiser.rightBottomRisers &&
            appState.svgRiser.rightBottomRisers[appState.svgRiser.rightBottomRisers?.length - 1] +
              220
          }
        >
          {" "}
          {appState.svgRiser.rightBottomRisers?.length + 4} @
          {appState.svgRiser.rightBottomRisers[appState.svgRiser.rightBottomRisers?.length - 1] +
            220}{" "}
          mm
        </MenuItem>
        <MenuItem
          value={
            appState?.svgRiser.rightBottomRisers[
              appState?.svgRiser?.rightBottomRisers?.length - 1
            ] + 440
          }
        >
          {appState.svgRiser.rightBottomRisers?.length + 5} @
          {appState.svgRiser.rightBottomRisers[appState.svgRiser.rightBottomRisers?.length - 1] +
            400}{" "}
          mm
        </MenuItem>
      </Select>
      {/* Floor Width */}

      {/* <Appheading sx={{ mt: 1 }}>Floor Width</Appheading>
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
      </Select> */}

      {/* Individual Going */}

      <Appheading sx={{ mt: 1 }}>Individual Going</Appheading>
      <Select defaultValue={indiviualGoingArray[0]} fullWidth sx={{ height: 40, mt: 1 }}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {indiviualGoingArray.map((option, index) => (
          <MenuItem
            onClick={() => handleCeilingsHeight(parseFloat(option))}
            key={index}
            value={option}
          >
            {option} mm
          </MenuItem>
        ))}
      </Select>
      {/* celing height */}
      <CeilingHeight />
      {/* Turns -> First Left & Right  */}
      {/* Wind Run 1 */}
      <Appheading sx={{ mt: 1 }}>Width (Run 1)</Appheading>
      <Select
        fullWidth
        defaultValue={widthLoopArray[53]}
        sx={{ height: 40, mt: 1 }}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {/* {widthLoopArray.map((value, index) => (
          <MenuItem
            onClick={() => {
              setSelectedValue(value);
            }}
            key={index}
            value={value.toString()}
          >
            {value}
          </MenuItem>
        ))} */}
      </Select>
      <Paper elevation={3} sx={TurnPaperStyle}>
        <Div sx={TurnFlex}>
          <Appheading>Turn 1 (Right)</Appheading>
          <AppDeleteIcon />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Turn Shape</Appheading>
          <ShapesSelect
            defaultShape={firstSelectDefaultValueRedux}
            handleSelectShape={handleSelectShape}
          />
        </Div>
      </Paper>
      {/* Turns -> Second Left & Right  */}

      <Paper elevation={3} sx={TurnPaperStyle}>
        <Div sx={TurnFlex}>
          <Appheading>Turn 2 (Right)</Appheading>
          <AppDeleteIcon />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Turn Shape</Appheading>
          <ShapesSelect
            defaultShape={secondSelectDefaultValueRedux}
            handleSelectShape={handleSelectShapeTwo}
          />
        </Div>
      </Paper>
    </div>
  );
};

export default StairLayout;
