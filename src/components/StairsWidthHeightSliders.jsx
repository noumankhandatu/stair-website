/* eslint-disable react/prop-types */
import { myColorsAry } from "../style/global";
import Div from "./Div";
import { Appheading } from "../theme";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import MenuItem from "@mui/material/MenuItem";

const StairsWidthHeightSliders = ({ setAppState, appState }) => {
  const handleWidthChange = (event, newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        width: newValue,
      },
    }));
  };

  const handleHeightChange = (event, newValue) => {
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        height: newValue,
      },
    }));
  };

  const handleHeingColor = (event, property) => {
    const selectedColor = event.target.value;
    setAppState((prevState) => ({
      ...prevState,
      [property]: {
        ...prevState[property],
        color: selectedColor,
      },
    }));
  };
  const positionOptions = [];
  for (let i = 0; i <= 2000; i += 220) {
    positionOptions.push(i);
  }

  const handlePositionChange = (event) => {
    const selectedPosition = parseInt(event.target.value);
    let updatedPositions = [];

    if (appState.svgPlates.positions.includes(selectedPosition)) {
      updatedPositions = appState.svgPlates.positions.filter((pos) => pos <= selectedPosition);
    } else {
      updatedPositions = [];
      appState.svgPlates.positions.forEach((pos) => {
        if (pos <= selectedPosition) {
          updatedPositions.push(pos);
        }
      });
    }

    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: updatedPositions,
      },
    }));
  };

  const addRiser = () => {
    const lastPosition = appState.svgPlates.positions[appState.svgPlates.positions.length - 1];
    const newPositions = [...appState.svgPlates.positions, lastPosition + 220];
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: newPositions,
        height: prevState.svgPlates.height - 0.02,
      },
      leftRightPencilBorder: {
        ...prevState.leftRightPencilBorder,
        height: prevState.leftRightPencilBorder.height + 230,
      },
    }));
  };

  const removePlate = () => {
    const newPositions = [...appState.svgPlates.positions];
    newPositions.pop();
    setAppState((prevState) => ({
      ...prevState,
      svgPlates: {
        ...prevState.svgPlates,
        positions: newPositions,
        height: prevState.svgPlates.height + 0.02,
      },
      leftRightPencilBorder: {
        ...prevState.leftRightPencilBorder,
        height: prevState.leftRightPencilBorder.height - 230,
      },
    }));
  };

  return (
    <div>
      <Appheading variant="h3">Stairs</Appheading>
      <p>Increase Width</p>
      <Slider
        value={appState.svgPlates.width}
        min={-1}
        max={1}
        step={0.000000000000000000000000000000000000000000000001}
        onChange={handleWidthChange}
        aria-labelledby="width-slider"
      />
      <p>Increase Height</p>
      <Slider
        value={appState.svgPlates.height}
        min={-1}
        max={1}
        step={0.000000000000000000000000000000000000000000000001}
        onChange={handleHeightChange}
        aria-labelledby="height-slider"
      />
      <p>Variants Background</p>
      <Select
        fullWidth
        value={appState.svgPlates.color}
        onChange={(e) => handleHeingColor(e, "svgPlates")}
      >
        {myColorsAry.map((color) => (
          <MenuItem key={color} value={color}>
            {color}
          </MenuItem>
        ))}
      </Select>
      <p>Heing Variants </p>
      <Select
        fullWidth
        value={appState.leftRightPencilBorder.color}
        onChange={(e) => handleHeingColor(e, "leftRightPencilBorder")}
      >
        {myColorsAry.map((color) => (
          <MenuItem key={color} value={color}>
            {color}
          </MenuItem>
        ))}
      </Select>
      <p> Plate Increment </p>
      <select value="" onChange={handlePositionChange}>
        <option value="" disabled>
          Select a position
        </option>
        {positionOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Div height={30} />
      {/* increment plates */}
      <Button color="primary" variant="contained" onClick={addRiser}>
        Add Riser
      </Button>
      <Button color="primary" variant="contained" onClick={removePlate}>
        Remove Plate
      </Button>
    </div>
  );
};

export default StairsWidthHeightSliders;
