/* eslint-disable react/prop-types */
import { MenuItem, Select } from "@mui/material";
import { Appheading } from "../../../theme";
import { myColorsAry } from "../../../style/global";

const MaterialConstruction = ({ appState, setAppState }) => {
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
  return (
    <div>
      <Appheading sx={{ mt: 2 }}>Tread & Riser material</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        value={appState.svgRiser.color}
        onChange={(e) => handleHeingColor(e, "svgRiser")}
      >
        {myColorsAry.map((color) => (
          <MenuItem key={color} value={color}>
            {color}
          </MenuItem>
        ))}
      </Select>
      <Appheading sx={{ mt: 2 }}>String material</Appheading>
      <Select
        fullWidth
        sx={{ height: 40, mt: 1 }}
        value={appState.handRails.color}
        onChange={(e) => handleHeingColor(e, "handRails")}
      >
        {myColorsAry.map((color) => (
          <MenuItem key={color} value={color}>
            {color}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default MaterialConstruction;
