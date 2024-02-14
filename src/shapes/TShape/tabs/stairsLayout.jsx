/* eslint-disable react/prop-types */
import { Appheading } from "../../../theme";
import { MenuItem, Select } from "@mui/material";
import { setHeight } from "../../../toolkit/slices/stairHeightWidth";
import { useDispatch } from "react-redux";

const positionOptions = [];
let updatedPositions = [];

for (let i = 1; i <= 3000; i += 220) {
  positionOptions.push(i);
}

const StairsLayout = ({ setAppState }) => {
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
          positionsBottom: updatedPositions,

          height: 0.15497349154253975,
          width: -0.15497349154253975,
          translateY: 400,
        },
      }));
    }
    if (selectedPosition >= 1400 && selectedPosition < 2940) {
      setAppState((prevState) => ({
        ...prevState,
        svgRiser: {
          ...prevState.svgRiser,
          positionsLeft: updatedPositions,
          positionsRight: updatedPositions,
          positionsBottom: updatedPositions,
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
          positionsLeft: updatedPositions,
          positionsRight: updatedPositions,
          positionsBottom: updatedPositions,
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
        positionsLeft: updatedPositions,
        positionsRight: updatedPositions,
        positionsBottom: updatedPositions,
      },
    }));
  };

  return (
    <div>
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
    </div>
  );
};

export default StairsLayout;
