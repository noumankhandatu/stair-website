/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme";
import { MenuItem, Paper, Select } from "@mui/material";
import { setHeight, setWidth } from "../../../toolkit/slices/stairHeightWidth";
import { useDispatch, useSelector } from "react-redux";
import Div from "../../../components/atom/Div";
import { setShape } from "../../../toolkit/slices/shapes";
import AppDeleteIcon from "./../../../components/atom/DeleteIcon";
import ShapesSelect from "../../../components/atom/ShapesSelect";
import { T_SHAPE } from "../../../utils/enum";
import { TShapeWidths, ceilingArray } from "../../../utils/data";
import ThreadTurn from "../../../components/atom/ThreadTurn";

const positionOptions = [];
let updatedPositions = [];

for (let i = 1; i <= 1500; i += 220) {
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
          positionsLeft: updatedPositions,
          positionsRight: updatedPositions,
          lengthOfRises: updatedPositions,

          // positionsBottom: updatedPositions,

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
    // if (selectedPosition >= 1400 && selectedPosition < 2940) {
    //   setAppState((prevState) => ({
    //     ...prevState,
    //     svgRiser: {
    //       ...prevState.svgRiser,
    //       positionsLeft: updatedPositions,
    //       positionsRight: updatedPositions,
    //       // positionsBottom: updatedPositions,
    //       height: 0.10497349154253975,
    //       width: -0.10497349154253975,
    //     },
    //   }));
    // }
    // if (selectedPosition >= 1400 && selectedPosition >= 2940) {
    //   setAppState((prevState) => ({
    //     ...prevState,
    //     svgRiser: {
    //       ...prevState.svgRiser,
    //       positionsLeft: updatedPositions,
    //       positionsRight: updatedPositions,
    //       // positionsBottom: updatedPositions,
    //       height: 0.10497349154253975,
    //       width: -0.10497349154253975,
    //     },
    //   }));
    // }
    // update states here
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        positionsLeft: updatedPositions,
        positionsRight: updatedPositions,
        // positionsBottom: updatedPositions,
      },
    }));
  };

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

  const handleCelingsHeight = (newHeight) => {
    setAppState((prevState) => ({
      ...prevState,
      svgRiser: {
        ...prevState.svgRiser,
        ceilingHeight: newHeight,
      },
    }));
  };

  const handleSelectShape = (event) => {
    const selectedValue = event.target.value;
    dispatch(setShape(selectedValue));
  };
  console.log(appState.svgRiser.positionsBottom.length, "appStateasd");
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

      {/* Floor Width */}

      <Appheading sx={{ mt: 1 }}>Floor Width</Appheading>
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

      <Paper elevation={3} sx={{ p: 2, mt: 3, background: "#F6F6F6" }}>
        <Div sx={{ display: "flex", justifyContent: "space-between" }}>
          <Appheading>Turn ({reduxShapeName && reduxShapeName}) </Appheading>
          <AppDeleteIcon />
        </Div>
        <Div sx={{ display: "flex", justifyContent: "space-between", mt: 3, alignItems: "center" }}>
          <Appheading>Type </Appheading>
          {/* Create a select here */}
          <ShapesSelect defaultShape={T_SHAPE} handleSelectShape={handleSelectShape} />
        </Div>
        <Div sx={{ display: "flex", justifyContent: "space-between", mt: 3, alignItems: "center" }}>
          <Appheading>Treads before turn:</Appheading>
          {/* Create a select here */}
          <ThreadTurn
            defaultTurn={appState.svgRiser.lengthOfRises.length}
            appState={appState}
            setAppState={setAppState}
          />
        </Div>
      </Paper>
    </div>
  );
};

export default StairsLayout;
