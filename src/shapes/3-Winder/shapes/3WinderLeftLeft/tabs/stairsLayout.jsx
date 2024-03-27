import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { Appheading } from "../../../../../theme";
import { setHeight, setWidth } from "../../../../../toolkit/slices/stairHeightWidth";
import { setShape } from "../../../../../toolkit/slices/shapes";
import { ThrreWidnerFirstRight, ceilingArray } from "../../../../../utils/data";
import AppDeleteIcon from "../../../../../components/atom/DeleteIcon";
import Div from "../../../../../components/atom/Div";
import ShapesSelect from "../../../../../components/atom/ShapesSelect";
import {
  HALF_LANDING,
  HalfLandingLeftLeftTurn,
  HalfLandingLeftTurn,
  QUARTER_LANDING,
  THREE_WINDER,
} from "../../../../../utils/enum";
import {
  selectDefaultValueTwo,
  selectedDefaultValue,
  setSelectDefaultValue,
  setSelectDefaultValue2,
} from "../../../../../toolkit/slices/singleFeatures";
import {
  selectHalfLandingTurn,
  setHalfLandingTurn,
} from "../../../../../toolkit/slices/shapeTurns";
import AppFloorHeight from "../../../../../global/components/FloorHeight";
import ThreadsCard from "../../../../../global/layout/ThreadsCard";
import { GlobalSliceData, setThreadOne, setThreadTwo } from "../../../../../toolkit/globalSlice";

const positionOptions = [];
let updatedPositions = [];

for (let i = 1; i <= 5000; i += 220) {
  positionOptions.push(i);
}

// eslint-disable-next-line react/prop-types
const StairLayout = ({ setAppState }) => {
  const firstSelectDefaultValueRedux = useSelector(selectedDefaultValue);
  const secondSelectDefaultValueRedux = useSelector(selectDefaultValueTwo);
  const { defaultThread, threadTurnThree, threadTurnTwo } = useSelector(GlobalSliceData);
  console.log(threadTurnThree, "threadTurnThreeasd");
  console.log(threadTurnTwo, "threadTurnThreeasd");

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
          positionsBottom: updatedPositions,
          positionsLeft: updatedPositions,
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
          positionsBottom: updatedPositions,
          positionsLeft: updatedPositions,
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
          positionsBottom: updatedPositions,
          positionsLeft: updatedPositions,
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
        positionsBottom: updatedPositions,
        positionsLeft: updatedPositions,
      },
    }));
  };

  // select shape from selectbox
  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    dispatch(setShape(selectedValue));
    if (selectedValue === QUARTER_LANDING || selectedValue === THREE_WINDER) {
      dispatch(setSelectDefaultValue(selectedValue));
    }
    if (selectedValue === HALF_LANDING) {
      dispatch(setHalfLandingTurn(HalfLandingLeftLeftTurn));
    }
  };
  // select shape from selectbox
  const handleSelectShapeTwo = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === HALF_LANDING) {
      dispatch(setShape(HALF_LANDING));
      dispatch(setHalfLandingTurn("3winderhalflandingleftleft"));
    }
    if (selectedValue === QUARTER_LANDING || selectedValue === THREE_WINDER) {
      dispatch(setSelectDefaultValue2(selectedValue));
    }
    dispatch(setShape(selectedValue));
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setThreadOne(selectedValue));
  };
  const handleSelectChangeTwo = (event) => {
    const selectedValue = event.target.value;
    dispatch(setThreadTwo(selectedValue));
  };
  return (
    <div>
      {/* Floor Height */}

      <AppFloorHeight />
      {/* <Select fullWidth sx={{ height: 40, mt: 1 }} onChange={handlePositionChange}>
        <MenuItem value="" disabled>
          Select a position
        </MenuItem>
        {positionOptions.map((option, index) => (
          <MenuItem onClick={() => dispatch(setHeight(option + 79))} key={index} value={option}>
            {option + 79} mm
          </MenuItem>
        ))}
      </Select> */}
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
      <ThreadsCard
        defaultShape={firstSelectDefaultValueRedux}
        fnHandler={handleSelectShape}
        numberOfOptions={defaultThread}
        handleTurn={handleSelectChange}
        defaultThreadValue={4}
      />

      {/* Turns -> Second Left & Right  */}
      <ThreadsCard
        defaultShape={secondSelectDefaultValueRedux}
        fnHandler={handleSelectShapeTwo}
        numberOfOptions={threadTurnThree.length > 1 ? threadTurnThree : threadTurnTwo}
        handleTurn={handleSelectChangeTwo}
        defaultThreadValue={1}
      />
    </div>
  );
};

export default StairLayout;
