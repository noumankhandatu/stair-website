/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme";
import { MenuItem, Paper, Select } from "@mui/material";
import { setRightArrow, setHeight, setWidth } from "../../../toolkit/slices/stairHeightWidth";
import { useDispatch, useSelector } from "react-redux";
import Div from "../../../components/atom/Div";
import { setShape } from "../../../toolkit/slices/shapes";
import AppDeleteIcon from "./../../../components/atom/DeleteIcon";
import ShapesSelect from "../../../components/atom/ShapesSelect";
import { T_SHAPE } from "../../../utils/enum";
import { TShapeWidths, ceilingArray } from "../../../utils/data";
import { TurnFlex } from "../../../style/global";
import FeatureSteps from "../../../components/atom/FeatureSteps";

const positionOptions = [];
let updatedPositions = [];

for (let i = 220; i <= 1500; i += 220) {
  positionOptions.push(i);
}

const StairsLayout = ({ setAppState, appState }) => {
  const reduxShapeName = useSelector((state) => state?.ShapeSlice?.shape);

  // hooks
  const dispatch = useDispatch();

  //  fns
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
          allRisers: updatedPositions,
          positionsLeft: updatedPositions,
          positionsRight: updatedPositions,

          height: 0.15497349154253975,
          width: -0.15497349154253975,
          translateY: 400,
        },
        handRails: {
          ...prevState.handRails,
          // borderBottom: 210 * updatedPositions.length,
          borderLeft: 250 * updatedPositions.length,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          allRisers: updatedPositions,
          positionsLeft: updatedPositions,
          positionsRight: updatedPositions,
          // positionsBottom: updatedPositions,
          height: 0.10497349154253975,
          width: -0.10497349154253975,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition >= 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          allRisers: updatedPositions,
          positionsLeft: updatedPositions,
          positionsRight: updatedPositions,
          height: 0.10497349154253975,
          width: -0.10497349154253975,
        },
      }));
    }
    // update states here
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        allRisers: updatedPositions,
        positionsLeft: updatedPositions,
        positionsRight: updatedPositions,
      },
      handRails: {
        ...prevState.handRails,
        borderLeft: updatedPositions.length * 250,
      },
    }));
  };
  // width-run 1
  const handleWidthChange = (newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        width: newValue,
      },
    }));
  };
  // width-run 1

  const handleWidthChange2 = (newValue) => {
    const positiveValue = Math.abs(newValue);
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        height: positiveValue,
        translateY: positiveValue * 2500,
      },
    }));
  };

  const handleCelingsHeight = (newHeight) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        ceilingHeight: newHeight,
      },
    }));
  };
  // redux shape
  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    dispatch(setShape(selectedValue));
  };

  //thread before turn
  const handleTurns = (event) => {
    const selectedValue = parseInt(event.target.value);
    const rightArray = [];
    const bottomArray = [];

    for (let i = 220; i <= (appState.svgRiser.allRisers.length - selectedValue) * 220; i += 220) {
      rightArray.push(i);
    }

    for (let i = 220; i <= selectedValue * 220; i += 220) {
      bottomArray.push(i);
    }

    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        positionsBottom: bottomArray,
        // positionsLeft: rightArray,
        // positionsRight: rightArray,
      },
      handRails: {
        ...prevState.handRails,
        borderBottom: bottomArray.length * 220,
        // borderLeft: rightArray.length * 250,
      },
    }));
  };
  return (
    <div>
      {/* floor height  */}

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
        disabled={appState.svgRiser.allRisers.length <= 0}
        onChange={handlePositionChange}
        sx={{ height: 40, mt: 1 }}
        fullWidth
      >
        <MenuItem disabled>1 @1.mm</MenuItem>

        {appState.svgRiser.allRisers.map((items, index) => {
          return (
            <MenuItem key={items} value={items}>
              {index + 1} @ {items}.mm
            </MenuItem>
          );
        })}
        <MenuItem
          value={
            appState.svgRiser.allRisers &&
            appState.svgRiser.allRisers[appState.svgRiser.allRisers?.length - 1] + 220
          }
        >
          {" "}
          {appState.svgRiser.allRisers?.length + 1} @
          {appState.svgRiser.allRisers[appState.svgRiser.allRisers?.length - 1] + 220} mm
        </MenuItem>
        <MenuItem
          value={appState?.svgRiser.allRisers[appState?.svgRiser?.allRisers?.length - 1] + 440}
        >
          {appState.svgRiser.allRisers?.length + 2} @
          {appState.svgRiser.allRisers[appState.svgRiser.allRisers?.length - 1] + 400} mm
        </MenuItem>
      </Select>
      {/* Width (Run 1)*/}

      <Appheading sx={{ mt: 1 }}>Width (Run 1)</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        // value={appState.svgRiser.width}
        onChange={(e) => handleWidthChange(parseFloat(e.target.value))}
      >
        {TShapeWidths.map((value, index) => (
          <MenuItem
            onClick={() => dispatch(setWidth(index * 50 + 300))}
            key={index}
            value={value.toString()}
          >
            {index === 0 ? null : <> {index * 50 + 300} mm</>}
          </MenuItem>
        ))}
      </Select>

      {/* Turns -> Left & Right  */}

      <Appheading sx={{ mt: 2 }}>Straight EasyStairs - Add a turn</Appheading>

      <Paper elevation={3} sx={{ p: 2, mt: 3, background: "#F6F6F6" }}>
        <Div sx={TurnFlex}>
          <Appheading>Turn ({reduxShapeName && reduxShapeName}) </Appheading>
          <AppDeleteIcon />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Type </Appheading>
          {/* Create a select here */}
          <ShapesSelect defaultShape={T_SHAPE} handleSelectShape={handleSelectShape} />
        </Div>
        <Div sx={TurnFlex}>
          <Appheading>Treads before turn:</Appheading>
          <Select
            disabled={appState.svgRiser.allRisers.length <= 0}
            sx={{ height: 30, borderRadius: 10, width: 70 }}
            onChange={handleTurns}
          >
            {[...Array(appState.svgRiser.allRisers.length).keys()].map((item, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </Div>
      </Paper>

      {/* Width (Run 2)*/}

      <Appheading sx={{ mt: 1 }}>Width (Run 2)</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        // value={appState.svgRiser.width}
        onChange={(e) => handleWidthChange2(parseFloat(e.target.value))}
      >
        {TShapeWidths.map((value, index) => (
          <MenuItem
            onClick={() => dispatch(setRightArrow(index * 50 + 300))}
            key={index}
            value={value.toString()}
          >
            {index === 0 ? null : <> {index * 50 + 300} mm</>}
          </MenuItem>
        ))}
      </Select>
      <FeatureSteps />
    </div>
  );
};

export default StairsLayout;
