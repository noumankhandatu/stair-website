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
import AppCeilingHeight from "../../../../../global/components/CeilingHeight";
import AppIndividualGoing from "../../../../../global/components/IndividualGoing";
import AppNumberOfRisers from "../../../../../global/components/NumberOfRisers";
import AppWidthRun1 from "../../../../../global/components/WidthRun1";
import AppWidthRun2 from "../../../../../global/components/WidthRun2";
import AppRegulation from "../../../../../global/components/Regulation";
import AppStaircaseRef from "../../../../../global/components/StaircaseRef";

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
      <AppStaircaseRef />
      <AppRegulation />
      <AppFloorHeight />
      <AppNumberOfRisers />
      <AppCeilingHeight />
      <AppIndividualGoing />
      <AppWidthRun1 />
      <ThreadsCard
        defaultShape={firstSelectDefaultValueRedux}
        fnHandler={handleSelectShape}
        numberOfOptions={defaultThread}
        handleTurn={handleSelectChange}
        defaultThreadValue={4}
      />
      <AppWidthRun2 />
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
