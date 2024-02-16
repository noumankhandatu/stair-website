/* eslint-disable react/prop-types */
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

const ThreadTurn = ({ defaultTurn, appState, setAppState }) => {
  const [selectedValue, setSelectedValue] = useState(defaultTurn);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue); // Update selected value state
  };
  console.log(appState.svgRiser.positionsBottom, "appState3");
  console.log(appState.svgRiser.positionsLeft, "appState3");
  console.log(appState.svgRiser.positionsRight, "appState3");

  return (
    <div>
      <Select value={selectedValue - 2} onChange={handleChange} sx={{ height: 40 }} size="small">
        {Array.from({ length: defaultTurn }, (_, index) => (
          <MenuItem key={index + 1} value={index + 1}>
            {index + 1}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default ThreadTurn;
